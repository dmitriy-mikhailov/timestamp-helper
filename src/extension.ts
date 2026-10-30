import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('timestamp-helper.insertTimestamp', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const now = new Date().toLocaleString();
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, now);
            });
            vscode.window.showInformationMessage('Метка времени успешно вставлена!');
        } else {
            vscode.window.showWarningMessage('Откройте текстовый файл для вставки.');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}