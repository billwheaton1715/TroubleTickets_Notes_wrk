function getSelectedDocuments(viewPanel) {
	var viewPanel=getComponent(viewPanel);
	var docIDArray = viewPanel.getSelectedIds();
	var unidArray = new Array();
	for(i=0; i < docIDArray.length; i++) {
	   var unid=database.getDocumentByID(docIDArray[i]).getUniversalID();
	   unidArray.push(unid);
	}
	return @Implode(unidArray, ",");
}


function createNewDocument(formName) {
	@Command("[Compose]",formName)
}

function createNewResponseDocument(formName,docId) {
	var formXPage = getConvertedElement("form",formName);
	context.redirectToPage(formXPage+"?docId="+docId);
}

function moveToTrash(viewPanelId){
	var docIds = getSelectedDocuments(viewPanelId);
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