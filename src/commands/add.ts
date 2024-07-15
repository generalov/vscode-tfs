import * as vscode from "vscode"
import { tf } from "../tfs/tfExe"
import * as os from "os"

export async function add(uri: vscode.Uri): Promise<void> {
  const prefix = os.platform() === "linux" ? "-" : "/" // ’darwin’, ‘freebsd’, ‘linux’, ‘sunos’ , ‘win32’
  const task = tf(["add", uri.fsPath, `${prefix}recursive`])

  vscode.window.setStatusBarMessage("TFS: Adding...", task)
  await task
  await vscode.window.showInformationMessage(`TFS: ${uri.fsPath} successfully added to version control.`)
}
