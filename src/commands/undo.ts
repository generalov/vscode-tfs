import * as vscode from "vscode"
import { tf } from "../tfs/tfExe"
import * as os from "os"

export async function undo(uri: vscode.Uri): Promise<void> {
  const prefix = os.platform() === "linux" ? "-" : "/" // ’darwin’, ‘freebsd’, ‘linux’, ‘sunos’ , ‘win32’
  const task = tf(["undo", uri.fsPath, `${prefix}recursive`])

  vscode.window.setStatusBarMessage("TFS: Undoing...", task)
  await task
  await vscode.commands.executeCommand("workbench.action.files.revert", uri)
  await vscode.window.showInformationMessage(`TFS: Pending changes undone in ${uri.fsPath}`)
}
