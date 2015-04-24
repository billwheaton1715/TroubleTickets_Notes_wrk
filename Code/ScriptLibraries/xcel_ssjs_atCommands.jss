// -----------------------------------------------------------------
// Xcelerator implementations of @Commands not covered by IBM
// implementations. 
// -----------------------------------------------------------------

import xcel_ssjs_common ;

function @Command(args) {
	try {
		var newargs = new Array() ;
		for (var x = 0 ; x < arguments.length; x++) {
			newargs.push(arguments[x]);
		}
						
		var commandname = newargs[0].toLowerCase();
		//print("Running @Command: " + commandname) ;
		
		if (commandname == "[filesave]") {
			return @CommandFileSave.apply(this, newargs);			
		}	
		else if (commandname == "[compose]") {
			return @CommandCompose.apply(this, newargs);	
		}
		else if (commandname == "[emptytrash]") {
			return @CommandEmptyTrash.apply(this, newargs);	
		}
		else if (commandname == "[movetotrash]") {
			return @CommandMoveToTrash.apply(this, newargs);	
		}		
		else if (commandname == "[reloadwindow]") {
			return @CommandReloadWindow.apply(this, newargs);	
		}		
		else if (commandname == "[runagent]") {
			return @CommandRunAgent.apply(this, newargs);	
		}		
		else if (commandname == "[viewshowsearchbar]") {
			return @CommandViewShowSearchBar.apply(this, newargs);	
		}		
		else {
			return unimplementedFunction("@Command " + commandname + " )") ;
		}	
	}
	catch(e) {
		print("Error executing @Command: " + e.toString());
	}
}

/*
 * Forward any @PostedCommands to the corresponding @Command
 */
function @PostedCommand(args) {
	try {
		var newargs = new Array() ;
		for (var x = 0 ; x < arguments.length; x++) {
			newargs.push(arguments[x]);
		}
						
		var commandname = newargs[0].toLowerCase();
		//print("Forwarding @PostedCommand: " + commandname) ;
		
		return @Command.apply(this, newargs);	
	}
	catch(e) {
		print("Error executing @PostedCommand: " + e.toString());
	}
}

/*
 * Implementation copied from @Functions library.
 * TODO. Implementation not tested or verified.
 * Looks dodgy because of the dxlexport...
 */
function @CommandCompose(command) {
	try {
		//print("Running @CommandCompose") ;
		
		var dbspec ;
		var formname = "" ;
		
		// Check number of args
		if (arguments.length == 2) {
			formname = arguments[1];
		}
		else if (arguments.length > 2) {
			formname = arguments[2];
		}
		
		//print("Formname: " + formname);

		var form:NotesForm = database.getForm(formname);
		var nc:NotesNoteCollection = database.createNoteCollection(false);
		nc.add(form);
		var dxlstr:String = session.createDxlExporter().exportDxl(database.getDocumentByID(nc.getFirstNoteID()));
		var factory = javax.xml.parsers.DocumentBuilderFactory.newInstance();
        var parser = factory.newDocumentBuilder();
        var domDocument = parser.parse(new java.io.ByteArrayInputStream(dxlstr.getBytes()));
        var rootElement = domDocument.getDocumentElement();
        var type = rootElement.getAttribute("type");
        
		if(type != null) {
			if(type.startsWith("response")) {
				//print("ITs response form");
				
				//getComponent("gridDetails").value;
				var docIds = getSelectedDocuments();
				if(!(docIds && docIds.length > 0)) {
					view.postScript("alert('No document is selected; please select a document to respond to.')");
					return;
				}
				
				var formXPage = getConvertedElement("form",formname);
				context.redirectToPage(formXPage+"?docId="+docIds.split(",")[0]);
			}
		}
	
		var formXPage = getConvertedElement("form",formname);
		context.redirectToPage(formXPage);
	}
	catch(e) {
		errHandle(e, "@Command " + command, SEVERITY_HIGH, "error") ;
	}
}

/*
 * Implementation copied from @Functions library.
 * TODO. Implementation not tested or verified.
 */
function @CommandEmptyTrash(command) {
	try {
		//print("Running @CommandEmptyTrash") ;
		//view.postScript("GRID_CONFIG_OBJ.showFilterBar=!GRID_CONFIG_OBJ.showFilterBar;");
		var mtf = database.getView("($myTrash)");
		var msg = "Empty the trash folder?";
		if(null != mtf){
		  var es = mtf.getAllEntries();
		  var count = es.getCount();
		  if(count > 0){
		    msg = "Proceed to permanently delete " + es.getCount() +
		      " entries from the trash folder?";
		  }
		}
		view.postScript("if(confirm('"+msg+"')){actionBarRPC.emptyTrash()}");		
	}
	catch(e) {
		errHandle(e, "@Command " + command, SEVERITY_HIGH, "error") ;
	}
}

/*
 * Implementation copied from @Functions library.
 * TODO. Implementation not tested or verified.
 */
function @CommandMoveToTrash(command) {
	try {
		//print("Running @CommandMoveToTrash") ;
		//view.postScript("viewEntryMove2Trash('"+getComponent("gridDetails").value+"')");
		
		var docIds = getComponent("gridDetails").value;
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
		//view.postScript("viewEntryMove2Trash('"+getComponent("gridDetails").value+"')");
		//return true;
		
		//sessionScope.preScript = "viewEntryMove2Trash("+sessionScope.viewGridId+")";
		//sessionScope.postScript = "viewEntryMove2Trash("+sessionScope.viewGridId+")";
		//viewEntryMove2Trash("#{javascript:sessionScope.viewGridId}")		
	}
	catch(e) {
		errHandle(e, "@Command " + command, SEVERITY_HIGH, "error") ;
	}
}

function @CommandFileSave(command) {
	try {
		if (currentDocument.isEditable()) {
			currentDocument.save();
		}
	}
	catch(e) {
		errHandle(e, "@Command " + command, SEVERITY_HIGH, "error") ;
	}
}

function @CommandReloadWindow(command) {
	try {
		//print("Running @CommandReloadWindow") ;
		context.reloadPage();		
	}
	catch(e) {
		errHandle(e, "@Command " + command, SEVERITY_HIGH, "error") ;
	}
}

function @CommandRunAgent(command, agent) {
	try {
		//print("Running @CommandRunAgent") ;
		if (agent) {
			//print("Agent Name: " + agent);
			var agent:NotesAgent = session.getCurrentDatabase().getAgent(agent);
			return agent.run();			
		}
		else {
			return unimplementedFunction("@Command RunAgent without agent name.") ;
		}
	}
	catch(e) {
		errHandle(e, "@Command " + command, SEVERITY_HIGH, "error") ;
	}
}


/*
 * Implementation copied from @Functions library.
 * TODO. Implementation not tested or verified.
 */
function @CommandViewShowSearchBar(command) {
	try {
		print("Running @CommandViewShowSearchBar") ;
		view.postScript(getShowSearchBarScript());		
	}
	catch(e) {
		errHandle(e, "@Command " + command, SEVERITY_HIGH, "error") ;
	}
}
