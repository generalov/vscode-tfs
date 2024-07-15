import * as vscode from "vscode"
import { tf } from "../tfs/tfExe"
import * as os from "os"

export async function get(uri: vscode.Uri): Promise<void> {
  const prefix = os.platform() === "linux" ? "-" : "/" // ’darwin’, ‘freebsd’, ‘linux’, ‘sunos’ , ‘win32’
  const task = tf(["get", uri.fsPath, `${prefix}recursive`])

  vscode.window.setStatusBarMessage("TFS: Getting latest version...", task)
  await task

  const messageTask = vscode.window.showInformationMessage(`TFS: ${uri.fsPath} files updated to the latest version.`)
  vscode.window.setStatusBarMessage("TFS: Get Latest Version successful.", messageTask)
  await messageTask
}
