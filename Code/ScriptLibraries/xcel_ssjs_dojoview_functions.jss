function getShowSearchBarScript() {
	return "GRID_CONFIG_OBJ.showFilterBar=!GRID_CONFIG_OBJ.showFilterBar;";
}

function getSelectedDocuments(dataViewer) {
	var docIds = getComponent(dataViewer).getSelectedIds();
}


function createNewDocument() {
	@Command("[Compose]",formName)
}

function createNewResponseDocument() {
	var formXPage = getConvertedElement("form",formName);
	context.redirectToPage(formXPage+"?docId="+docId);
}

function moveToTrash(dataViewer){
	var docIds = getSelectedDocuments(dataViewer);
	if(docIds && docIds.length > 0) {
		var docIDArray= docIds.split(",");
		for(i=0;i < docIDArray.length; i++){
			var docId=docIDArray[i];
			var doc=session.getCurrentDatabase().getDocumentByID(docId); 
			var ret = doc.remove(false);
		}
	}else {
		view.postScript("alert('Please select documents.')");
	}
}

