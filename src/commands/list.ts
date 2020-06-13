import * as vscode from "vscode"

const items = {
  add: {
    label: "Add",
    detail: "Adds files and folders to version control.",
    command: "vscode-tfs.add",
  },
  checkout: {
    label: "Check Out for Edit",
    detail: "Checks out a file and changes its pending change status to Edit.",
    command: "vscode-tfs.checkout",
  },
  checkin: {
    label: "Check In",
    detail: "Checks in pending changes to TFS.",
    command: "vscode-tfs.checkin",
  },
  del: {
    label: "Delete",
    detail: "Removes files and folders from the TFS and deletes them from the disk.",
    command: "vscode-tfs.delete",
  },
  undo: {
    label: "Undo Pending Changes",
    detail: "Discards one or more pending changes to files or folders.",
    command: "vscode-tfs.undo",
  },
  openInBrowser: {
    label: "Open in Browser",
    detail: "Opens files and folders in browser.",
    command: "vscode-tfs.openInBrowser",
  },
}

export async function list(uri: vscode.Uri): Promise<void> {
  const selectedItem = await vscode.window.showQuickPick(Object.values(items))
  if (selectedItem) {
    return vscode.commands.executeCommand(selectedItem.command, uri)
  }
}
