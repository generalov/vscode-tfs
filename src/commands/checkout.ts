import * as vscode from "vscode"
import { tf } from "../tfs/tfExe"
import * as os from "os"

export async function checkout(uri: vscode.Uri): Promise<void> {
  const prefix = os.platform() === "linux" ? "-" : "/" // ’darwin’, ‘freebsd’, ‘linux’, ‘sunos’ , ‘win32’
  const task = tf(["checkout", uri.fsPath, `${prefix}recursive`])

  vscode.window.setStatusBarMessage("TFS: Checking...", task)
  await task
  await vscode.window.showInformationMessage(`TFS: ${uri.fsPath} successfully checked out for editing.`)
}
