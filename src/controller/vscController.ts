import * as vscode from 'vscode';

class VscController{


getCurrentEditor(){
	let currentEditor = vscode.window.activeTextEditor;

	if(currentEditor){
		return currentEditor;
	}
		console.log("There is no available editor in vs code window");

}

getCurrentDocumentUri(currentEditor:vscode.TextEditor){
    let currentDocumentUri  = currentEditor.document.uri;

    if(currentDocumentUri){
        return currentDocumentUri;
    }
        console.log("There is no available document uri");
}


getConsoleProblems(currentDocumentUri:vscode.Uri){
    let consoleProblems = vscode.languages.getDiagnostics(currentDocumentUri);

    if(consoleProblems){
        return consoleProblems;
    }
        console.log("There are no console problems detected in current document");

}

}

export {VscController};
