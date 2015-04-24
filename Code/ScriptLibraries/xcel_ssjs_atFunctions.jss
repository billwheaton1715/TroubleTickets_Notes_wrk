// -----------------------------------------------------------------
// Xcelerator implementations of @Commands not covered by IBM
// implementations. 
// -----------------------------------------------------------------

import xcel_ssjs_common ;

function @AbstractSimple(bodyFields) {
	try {
		var bodyFieldsList = toNotesList(bodyFields) ;
		var formula = "@AbstractSimple(" + bodyFieldsList + ");"
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@AbstractSimple", SEVERITY_HIGH, "error") ;
	}
}

function @Accessed() {
	try {
		return currentDocument.getDocument().getLastAccessed();
	}
	catch(e) {
		errHandle(e, "@Accessed", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @AccountGetInfo() {
	try {
		return unimplementedFunction("@AccountGetInfo") ;
	}
	catch(e) {
		errHandle(e, "@AccountGetInfo", SEVERITY_HIGH, "error") ;
	}
}

function @ACos(param1) {
	try {
		return listOperation(Math.acos, param1);
	}
	catch(e) {
		errHandle(e, "@ACos", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented.
 */
function @AddBusyTime() {
	try {
		return unimplementedFunction("@AddBusyTime") ;
	}
	catch(e) {
		errHandle(e, "@AddBusyTime", SEVERITY_HIGH, "error") ;
	}
}

function @AddToFolder(folderNameAdd, folderNameRemove) {
	try {
		if(folderNameAdd && folderNameAdd != "") {
			currentDocument.getDocument().putInFolder(folderNameAdd);
		}
		if (folderNameRemove && folderNameRemove != "") {
			currentDocument.getDocument().removeFromFolder(folderNameRemove);
		}		
	}
	catch(e) {
		errHandle(e, "@AddToFolder", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @AdminCreateRequest() {
	try {
		return unimplementedFunction("@AdminCreateRequest") ;
	}
	catch(e) {
		errHandle(e, "@AdminCreateRequest", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @AdminDelegateMailFile() {
	try {
		return unimplementedFunction("@AdminDelegateMailFile") ;
	}
	catch(e) {
		errHandle(e, "@AdminDelegateMailFile", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @AdminECLIsLocked() {
	try {
		return unimplementedFunction("@AdminECLIsLocked") ;
	}
	catch(e) {
		errHandle(e, "@AdminECLIsLocked", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @AdminPerformAction() {
	try {
		return unimplementedFunction("@AdminPerformAction") ;
	}
	catch(e) {
		errHandle(e, "@AdminPerformAction", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @All() {
	try {
		return unimplementedFunction("@All") ;
	}
	catch(e) {
		errHandle(e, "@All", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @AllChildren() {
	try {
		return unimplementedFunction("@AllChildren") ;
	}
	catch(e) {
		errHandle(e, "@AllChildren", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @AllDescendants() {
	try {
		return unimplementedFunction("@AllDescendants") ;
	}
	catch(e) {
		errHandle(e, "@AllDescendants", SEVERITY_HIGH, "error") ;
	}
}

function @Ascii(strings, options) {
	try {
		var stringsList = toNotesList(strings) ;
		var formula = "@Ascii(" + stringsList ;
		
		if (options != null) {
			var optionsList = toKeywordList(options) ;
			formula += "; " + optionsList ;
		}
		
		formula += ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Ascii", SEVERITY_HIGH, "error") ;
	}
}

function @ASin(param1) {
	try {
		return listOperation(Math.asin, param1);
	}
	catch(e) {
		errHandle(e, "@ASin", SEVERITY_HIGH, "error") ;
	}
}

function @ATan(param1) {
	try {
		return listOperation(Math.atan, param1);
	}
	catch(e) {
		errHandle(e, "@ATan", SEVERITY_HIGH, "error") ;
	}
}

function @ATan2(x, y) {
	try {
		return pairwiseOperation(
				function(obj1, obj2){
					return Math.atan2(obj1, obj2);
				}, 
				x, 
				y)
	}
	catch(e) {
		errHandle(e, "@ATan2", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @BitAnd() {
	try {
		return unimplementedFunction("@BitAnd") ;
	}
	catch(e) {
		errHandle(e, "@BitAnd", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @BitNot() {
	try {
		return unimplementedFunction("@BitNot") ;
	}
	catch(e) {
		errHandle(e, "@BitNot", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @BitOr() {
	try {
		return unimplementedFunction("@BitOr") ;
	}
	catch(e) {
		errHandle(e, "@BitOr", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @BitShift() {
	try {
		return unimplementedFunction("@BitShift") ;
	}
	catch(e) {
		errHandle(e, "@BitShift", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @BitXor() {
	try {
		return unimplementedFunction("@BitXor") ;
	}
	catch(e) {
		errHandle(e, "@BitXor", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO Not implemented
 */
function @BrowserInfo(property) {
	try {
		return unimplementedFunction("@BrowserInfo") ;
		//var request:com.sun.faces.context.MyHttpServletRequestWrapper = facesContext.getExternalContext().getRequest();
		//return request.getHeader("BrowserType");
		
		/*
		var propertylist = toNotesList(property);
		formula = "@BrowserInfo(" + propertylist + ")" ;
		print(formula);
		return evaluateFormula(formula);
		*/
	}
	catch(e) {
		errHandle(e, "@BrowserInfo", SEVERITY_HIGH, "error") ;
	}
}

function @BusinessDays(startDates, endDates, daysToExclude, datesToExclude ) {
	try {
		var startdateslist = toNotesList(startDates);
		var enddateslist = toNotesList(endDates);
		var formula = "@BusinessDays(" + startdateslist + "; " + enddateslist ;
		
		if (daysToExclude != null) {
			var daysexcludelist = toNotesList(daysToExclude) ;
			formula += "; " + daysexcludelist
		}
		
		if (datesToExclude != null) {
			var datessexcludelist = toNotesList(datesToExclude) ;
			formula += "; " + datessexcludelist
		}
		
		formula += ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@BusinessDays", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @CertBlobPack() {
	try {
		return unimplementedFunction("@CertBlobPack") ;
	}
	catch(e) {
		errHandle(e, "@CertBlobPack", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @CertBlobUnpack() {
	try {
		return unimplementedFunction("@CertBlobUnpack") ;
	}
	catch(e) {
		errHandle(e, "@CertBlobUnpack", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented.
 * User has no ID/Certificate on web.
 */
function @Certificate() {
	try {
		return unimplementedFunction("@Certificate") ;
	}
	catch(e) {
		errHandle(e, "@Certificate", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @CharSetInfo(property) {
	try {
		return unimplementedFunction("@CharSetInfo") ;
	}
	catch(e) {
		errHandle(e, "@CharSetInfo", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @CheckAlarms() {
	try {
		return unimplementedFunction("@CheckAlarms") ;
	}
	catch(e) {
		errHandle(e, "@CheckAlarms", SEVERITY_HIGH, "error") ;
	}
}

function @CheckFormulaSyntax(formula) {
	try {
		var formula = "@CheckFormulaSyntax({" + formula + "})";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@CheckFormulaSyntax", SEVERITY_HIGH, "error") ;
	}
}

/*
 * This function has been moved to the atCommands script lib
 */
/*
function @Command(cmdname) {
	try {
	
		if(cmdname == "[MoveToTrash]") {
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
		else if(cmdname == "[ViewShowSearchBar]"){
			view.postScript(getShowSearchBarScript());
		}
		else if(cmdname == "[EmptyTrash]"){
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
		else {
			return unimplementedFunction("@Command - "+ cmdname) ;
		}
	}
	catch(e) {
		errHandle(e, "@Command", SEVERITY_HIGH, "error") ;
	}
}
*/
function @Compare(textlist1, textlist2, options) {
	try {
		var list1 = toNotesList(textlist1) ;
		var list2 = toNotesList(textlist2) ;
		var formula = "@Compare(" + list1 + "; " + list2 ;
		
		if (options != null) {
			var optionslist = toKeywordList(options) ;
			formula += "; " + optionslist ;
		}
		formula += ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Compare", SEVERITY_HIGH, "error") ;
	}
}

function @ConfigFile() {
	try {
		var formula = "@ConfigFile";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@ConfigFile", SEVERITY_HIGH, "error") ;
	}
}

function @Cos(param1) {
	try {
		return listOperation(Math.cos, param1);
	}
	catch(e) {
		errHandle(e, "@Cos", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @CRL() {
	try {
		return unimplementedFunction("@CRL") ;
	}
	catch(e) {
		errHandle(e, "@CRL", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @CRLList() {
	try {
		return unimplementedFunction("@CRLList") ;
	}
	catch(e) {
		errHandle(e, "@CRLList", SEVERITY_HIGH, "error") ;
	}
}

function @DB2Schema(dbspec, replicaid) {
	try {
		var db:lotus.domino.Database ;
		if (replicaid == null) {
			db = session.getDatabase(dbspec[0], dbspec[1]);
		}
		else {
			db = session.getDatabase(dbspec, replicaid);
		}
		
		if (db != null && db.isOpen()){
			return db.getDB2Schema() ;
		}
		else {
			return "" ;
		}
	}
	catch(e) {
		errHandle(e, "@DB2Schema", SEVERITY_HIGH, "error") ;
	}
}

function @DbAdminServer() {
	try {
		var formula = "@DbAdminServer";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@DbAdminServer", SEVERITY_HIGH, "error") ;
	}
}

function @DbBuildVersion() {
	try {
		var formula = "@DbBuildVersion";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@DbBuildVersion", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO Commands to manipulate views. Assign to someone who knows how the views work.
 */
function @DbCommand() {
	try {
		return unimplementedFunction("@DbCommand") ;
	}
	catch(e) {
		errHandle(e, "@DbCommand", SEVERITY_HIGH, "error") ;
	}
}

function @DbExists(dbspec) {
	try {
		var db = session.getDatabase(dbspec[0], dbspec[1]);
		if (db != null && db.isOpen()) {
			return 1 ;
		}
		else {
			return 0 ;
		}
	}
	catch(e) {
		errHandle(e, "@DbExists", SEVERITY_HIGH, "error") ;
	}
}

function @DbManager() {
	try {
		return session.getCurrentDatabase().getManagers();
	}
	catch(e) {
		errHandle(e, "@DbManager", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @DbUnreadCount() {
	try {
		return unimplementedFunction("@DbUnreadCount") ;
	}
	catch(e) {
		errHandle(e, "@DbUnreadCount", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @DDEExecute() {
	try {
		return unimplementedFunction("@DDEExecute") ;
	}
	catch(e) {
		errHandle(e, "@DDEExecute", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @DDEInitiate() {
	try {
		return unimplementedFunction("@DDEInitiate") ;
	}
	catch(e) {
		errHandle(e, "@DDEInitiate", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @DDEPoke() {
	try {
		return unimplementedFunction("@DDEPoke") ;
	}
	catch(e) {
		errHandle(e, "@DDEPoke", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @DDETerminate() {
	try {
		return unimplementedFunction("@DDETerminate") ;
	}
	catch(e) {
		errHandle(e, "@DDETerminate", SEVERITY_HIGH, "error") ;
	}
}

function @DeleteDocument() {
	try {
		return currentDocument.getDocument().remove(true);
	}
	catch(e) {
		errHandle(e, "@DeleteDocument", SEVERITY_HIGH, "error") ;
	}
}

function @DeleteField(fieldName) {
	try {
		if(fieldName) {
			currentDocument.getDocument().removeItem(fieldName);
		}
	}
	catch(e) {
		errHandle(e, "@DeleteField", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. UI function.
 */
function @DialogBox() {
	try {
		return unimplementedFunction("@DialogBox") ;
	}
	catch(e) {
		errHandle(e, "@DialogBox", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @DocChildren() {
	try {
		return unimplementedFunction("@DocChildren") ;
	}
	catch(e) {
		errHandle(e, "@DocChildren", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @DocDescendants() {
	try {
		return unimplementedFunction("@DocDescendants") ;
	}
	catch(e) {
		errHandle(e, "@DocDescendants", SEVERITY_HIGH, "error") ;
	}
}

function @DocFields() {
	try {
		return database.getForm(currentDocument.getForm()).getFields();
	}
	catch(e) {
		errHandle(e, "@DocFields", SEVERITY_HIGH, "error") ;
	}
}

function @DocLength() {
	try {
		return currentDocument.getDocument().getSize();
	}
	catch(e) {
		errHandle(e, "@DocLength", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @DocLevel() {
	try {
		return unimplementedFunction("@DocLevel") ;
	}
	catch(e) {
		errHandle(e, "@DocLevel", SEVERITY_HIGH, "error") ;
	}
}

function @DocLock(option) {
	try {
		var optionlist = toKeywordList(option);
		var formula = "@DocLock(" + optionlist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@DocLock", SEVERITY_HIGH, "error") ;
	}
}

/*
 * not implemented. Only used in agents.
 */
function @DocMark() {
	try {
		return unimplementedFunction("@DocMark") ;
	}
	catch(e) {
		errHandle(e, "@DocMark", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @DocNumber() {
	try {
		return unimplementedFunction("@DocNumber") ;
	}
	catch(e) {
		errHandle(e, "@DocNumber", SEVERITY_HIGH, "error") ;
	}
}

function @DocOmittedLength() {
	try {
		var formula = "@DocOmittedLength" ;
		return evaluateFormula(formula) ;
	}
	catch(e) {
		errHandle(e, "@DocOmittedLength", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @DocParentNumber() {
	try {
		return unimplementedFunction("@DocParentNumber") ;
	}
	catch(e) {
		errHandle(e, "@DocParentNumber", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @DocSiblings() {
	try {
		return unimplementedFunction("@DocSiblings") ;
	}
	catch(e) {
		errHandle(e, "@DocSiblings", SEVERITY_HIGH, "error") ;
	}
}

function @DocumentUniqueID() {
	try {
		return currentDocument.getDocument().getUniversalID();
	}
	catch(e) {
		errHandle(e, "@DocumentUniqueID", SEVERITY_HIGH, "error") ;
	}
}

function @Domain() {
	try {
		var formula = "@Domain";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Domain", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. should not appear but unimplemented if it does.
 */
function @DoWhile() {
	try {
		return unimplementedFunction("@DoWhile") ;
	}
	catch(e) {
		errHandle(e, "@DoWhile", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @EditECL() {
	try {
		return unimplementedFunction("@EditECL") ;
	}
	catch(e) {
		errHandle(e, "@EditECL", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @EditUserECL() {
	try {
		return unimplementedFunction("@EditUserECL") ;
	}
	catch(e) {
		errHandle(e, "@EditUserECL", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @EnableAlarms() {
	try {
		return unimplementedFunction("@EnableAlarms") ;
	}
	catch(e) {
		errHandle(e, "@EnableAlarms", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 * User has no notes.ini file.
 */
function @Environment() {
	try {
		return unimplementedFunction("@Environment") ;
	}
	catch(e) {
		errHandle(e, "@Environment", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @Eval(text) {
	try {
		return unimplementedFunction("@Eval") ;
	}
	catch(e) {
		errHandle(e, "@Eval", SEVERITY_HIGH, "error") ;
	}
}

function @Exp(param1) {
	try {
		return listOperation(Math.exp, param1);
	}
	catch(e) {
		errHandle(e, "@Exp", SEVERITY_HIGH, "error") ;
	}
}

function @ExpandNameList(dbspec, names) {
	try {
		var dbspeclist = toNotesList(dbspec);
		var nameslist = toNotesList(names);
		var formula = "@ExpandNameList(" + dbspeclist + "; " + nameslist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@ExpandNameList", SEVERITY_HIGH, "error") ;
	}
}

function @FileDir(file) {
	try {
		return listOperation( 
				function(eachPath) {
					return eachPath.substring(0, Math.max(eachPath.lastIndexOf("/"), eachPath.lastIndexOf("\\")) + 1);
				},
				file
			);		
	}
	catch(e) {
		errHandle(e, "@FileDir", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @FindFreeResource() {
	try {
		return unimplementedFunction("@FindFreeResource") ;
	}
	catch(e) {
		errHandle(e, "@FindFreeResource", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @FindFreeTime() {
	try {
		return unimplementedFunction("@FindFreeTime") ;
	}
	catch(e) {
		errHandle(e, "@FindFreeTime", SEVERITY_HIGH, "error") ;
	}
}

function @FloatEq(number1, number2, range) {
	try {
		var numberlist1 = toNotesList(number1) ;
		var numberlist2 = toNotesList(number2) ;
		var rangelist = toNotesList(range) ;
		var formula = "@FloatEq(" + numberlist1 + "; " + numberlist2 + "; " + rangelist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@FloatEq", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @FontList() {
	try {
		return unimplementedFunction("@FontList") ; 
	}
	catch(e) {
		errHandle(e, "@FontList", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Should not occur, if it does, not implemented.
 */
function @For() {
	try {
		return unimplementedFunction("@For") ;
	}
	catch(e) {
		errHandle(e, "@For", SEVERITY_HIGH, "error") ;
	}
}

function @FormLanguage() {
	try {
		var formula = "@FormLanguage";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@FormLanguage", SEVERITY_HIGH, "error") ;
	}
}

function @GetAddressBooks(options) {
	try {
		var optionslist = toKeywordList(options);
		var formula = "@GetAddressBooks(" + optionslist + ")" ;
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@GetAddressBooks", SEVERITY_HIGH, "error") ;
	}
}

function @GetCurrentTimeZone() {
	try {
		return context.getTimeZone().getID();
	}
	catch(e) {
		errHandle(e, "@GetCurrentTimeZone", SEVERITY_HIGH, "error") ;
	}
}

function @GetDocField(documentUNID,fieldName ) {
	try {
		var doc:NotesDocument = session.getCurrentDatabase().getDocumentByUNID(documentUNID);
		return doc.getItemValue(fieldName);
	}
	catch(e) {
		errHandle(e, "@GetDocField", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @GetFocusTable() {
	try {
		return unimplementedFunction("@GetFocusTable") ;
	}
	catch(e) {
		errHandle(e, "@GetFocusTable", SEVERITY_HIGH, "error") ;
	}
}

function @GetHTTPHeader(headerProperty) {
	try {
		var request:com.sun.faces.context.MyHttpServletRequestWrapper = facesContext.getExternalContext().getRequest();
		return request.getHeader(headerProperty);
	}
	catch(e) {
		errHandle(e, "@GetHTTPHeader", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @GetIMContactListGroupNames() {
	try {
		return unimplementedFunction("@GetIMContactListGroupNames") ;
	}
	catch(e) {
		errHandle(e, "@GetIMContactListGroupNames", SEVERITY_HIGH, "error") ;
	}
}

function @GetMembers(value, index, number) {
	try {
		var valuelist = toNotesList(value);
		var indexlist = toNotesList(index);
		var formula = "@GetMembers(" + valuelist + "; " + indexlist ;
		if (number != null) {
			var numberlist = toNotesList(number);
			formula += "; " + numberlist ;
		}
		formula += ")";
		return evaluateFormula(formula);
		//return unimplementedFunction("@GetMembers") ;
	}
	catch(e) {
		errHandle(e, "@GetMembers", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @GetPortsList() {
	try {
		return unimplementedFunction("@GetPortsList") ;
	}
	catch(e) {
		errHandle(e, "@GetPortsList", SEVERITY_HIGH, "error") ;
	}
}

function @GetProfileField(profilename, fieldname, uniquekey) {
	try {
		if (uniquekey == null) {
			uniquekey = "" ;
		}
		var doc:lotus.domino.Document = database.getProfileDocument(profilename, uniquekey);
		if (doc != null) {
			var value = doc.getItemValue(fieldname) ;
			return collapseArray(value);
		}
		else {
			return "" ;
		}
	}
	catch(e) {
		errHandle(e, "@GetProfileField", SEVERITY_HIGH, "error") ;
	}
}

function @GetSoftDeleteExpireTime() {
	try {
		var formula = "@GetSoftDeleteExpireTime" ;
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@GetSoftDeleteExpireTime", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO by someone who understands the view cc archictecture
 */
function @GetViewInfo() {
	try {
		return unimplementedFunction("@GetViewInfo") ;
	}
	catch(e) {
		errHandle(e, "@GetViewInfo", SEVERITY_HIGH, "error") ;
	}
}

function @HardDeleteDocument() {
	try {
		currentDocument.getDocument().removePermanently(true);
	}
	catch(e) {
		errHandle(e, "@HardDeleteDocument", SEVERITY_HIGH, "error") ;
	}
}

function @HashPassword(password) {
	try {
		return listOperation( 
			function(obj){
				return session.hashPassword(obj);
			},
			password
		);
	}
	catch(e) {
		errHandle(e, "@HashPassword", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Should not be emitted by formula converter.
 */
function @IfError() {
	try {
		return unimplementedFunction("@IfError") ;
	}
	catch(e) {
		errHandle(e, "@IfError", SEVERITY_HIGH, "error") ;
	}
}

function @InheritedDocumentUniqueID() {
	try {
		return currentDocument.getDocument().getParentDocumentUNID();
	}
	catch(e) {
		errHandle(e, "@InheritedDocumentUniqueID", SEVERITY_HIGH, "error") ;
	}
}

function @IsAgentEnabled(agentName) {
	try {
		var agent:NotesAgent = session.getCurrentDatabase().getAgent(agentName);
		if(agent) return agent.isEnabled();
	}
	catch(e) {
		errHandle(e, "@IsAgentEnabled", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @IsAppInstalled() {
	try {
		return unimplementedFunction("@IsAppInstalled") ;
	}
	catch(e) {
		errHandle(e, "@IsAppInstalled", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @IsCategory() {
	try {
		return unimplementedFunction("@IsCategory") ;
	}
	catch(e) {
		errHandle(e, "@IsCategory", SEVERITY_HIGH, "error") ;
	}
}


function @IsDB2(dbspec, replicaid) {
	try {
		var dbspeclist = toNotesList(dbspec);
		var formula = "@IsDB2(" + dbspeclist ;
		if (replicaid != null) {
			var replcaidlist = toNotesList(replicaid) ;
			formula += "; " + replicaidlist ;
		}
		formula += ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@IsDB2", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @IsDbPrimaryAB() {
	try {
		return unimplementedFunction("@IsDbPrimaryAB") ;
	}
	catch(e) {
		errHandle(e, "@IsDbPrimaryAB", SEVERITY_HIGH, "error") ;
	}
}

function @IsDocBeingEdited() {
	try {
		if (currentDocument.isEditable()) return 1;
		else return 0;
	}
	catch(e) {
		errHandle(e, "@IsDocBeingEdited", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented.
 */
function @IsDocBeingMailed() {
	try {
		return unimplementedFunction("@IsDocBeingMailed") ;
	}
	catch(e) {
		errHandle(e, "@IsDocBeingMailed", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented.
 */
function @IsDocBeingRecalculated() {
	try {
		return unimplementedFunction("@IsDocBeingRecalculated") ;
	}
	catch(e) {
		errHandle(e, "@IsDocBeingRecalculated", SEVERITY_HIGH, "error") ;
	}
}

function @IsDocTruncated() {
	try {
		return session.evaluate("@IsDocTruncated", currentDocument.getDocument()) ;
	}
	catch(e) {
		errHandle(e, "@IsDocTruncated", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @IsEmbeddedInsideWCT() {
	try {
		return unimplementedFunction("@IsEmbeddedInsideWCT") ;
	}
	catch(e) {
		errHandle(e, "@IsEmbeddedInsideWCT", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @IsExpandable() {
	try {
		return unimplementedFunction("@IsExpandable") ;
	}
	catch(e) {
		errHandle(e, "@IsExpandable", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @IsInCompositeApp() {
	try {
		return unimplementedFunction("@IsInCompositeApp") ;
	}
	catch(e) {
		errHandle(e, "@IsInCompositeApp", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @IsModalHelp() {
	try {
		return unimplementedFunction("@IsModalHelp") ;
	}
	catch(e) {
		errHandle(e, "@IsModalHelp", SEVERITY_HIGH, "error") ;
	}
}


function @IsSoftDeleteEnabled() {
	try {
		var formula = "@IsSoftDeleteEnabled" ;
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@IsSoftDeleteEnabled", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @IsUsingJavaElement() {
	try {
		return unimplementedFunction("@IsUsingJavaElement") ;
	}
	catch(e) {
		errHandle(e, "@IsUsingJavaElement", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @IsValid() {
	try {
		return unimplementedFunction("@IsValid") ;
	}
	catch(e) {
		errHandle(e, "@IsValid", SEVERITY_HIGH, "error") ;
	}
}

function @IsVirtualizedDirectory() {
	try {
		var formula = "@IsVirtualizedDirectory" ;
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@IsVirtualizedDirectory", SEVERITY_HIGH, "error") ;
	}
}

function @IsXACLEnabled() {
	try {
		var formula = "@IsXACLEnabled" ;
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@IsXACLEnabled", SEVERITY_HIGH, "error") ;
	}
}

function @Keywords(value1, value2, separator) {
	try {
		var valuelist1 = toNotesList(value1);
		var valuelist2 = toNotesList(value2);
		var formula = "@Keywords(" + valuelist1 + "; " + valuelist2 ;
		
		if (separator != null) {
			var separatorlist = toNotesList(separator);
			formula += "; " + separatorlist ;
		}
		
		formula += ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Keywords", SEVERITY_HIGH, "error") ;
	}
}

function @LanguagePreference(key) {
	try {
		var request:com.sun.faces.context.MyHttpServletRequestWrapper = facesContext.getExternalContext().getRequest();
		var accept = request.getHeader("Accept-Language");
		var languages = accept.split(",") ;
		return languages[0];
	}
	catch(e) {
		errHandle(e, "@LanguagePreference", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @LaunchApp() {
	try {
		return unimplementedFunction("@LaunchApp") ;
	}
	catch(e) {
		errHandle(e, "@LaunchApp", SEVERITY_HIGH, "error") ;
	}
}


function @LDAPServer() {
	try {
		var formula = "@LDAPServer" ;
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@LDAPServer", SEVERITY_HIGH, "error") ;
	}
}

function @Like(string, pattern, escape) {
	try {
		var stringlist = toNotesList(string);
		var patternlist = toNotesList(pattern);
		var formula = "@Like(" + stringlist + "; " + patternlist ;
		
		if (escape != null) {
			var escapelist = toNotesList(escape) ;
			formula += "; " + escapelist;
		}
		
		formula += ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Like", SEVERITY_HIGH, "error") ;
	}
}

function @Ln(param1) {
	try {
		return listOperation(Math.log, param1);
	}
	catch(e) {
		errHandle(e, "@Ln", SEVERITY_HIGH, "error") ;
	}
}

function @Locale(action, tag) {
	try {
		var actionlist = toKeywordList(action);
		var formula = "@Locale(" + actionlist ;
		if (tag != null) {
			var taglist = toNotesList(tag);
			formula += "; " + taglist ;
		}
		formula += ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Locale", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function. 
 * User has no location document on the web.
 */
function @LocationGetInfo() {
	try {
		return unimplementedFunction("@LocationGetInfo") ;
	}
	catch(e) {
		errHandle(e, "@LocationGetInfo", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function. 
 * User has no location document on the web.
 */
function @LocationGetOSTZ() {
	try {
		return unimplementedFunction("@LocationGetOSTZ") ;
	}
	catch(e) {
		errHandle(e, "@LocationGetOSTZ", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function. 
 * User has no location document on the web.
 */
function @LocationGetTZ() {
	try {
		return unimplementedFunction("@LocationGetTZ") ;
	}
	catch(e) {
		errHandle(e, "@LocationGetTZ", SEVERITY_HIGH, "error") ;
	}
}

function @Log(param1) {
	try {
		return listOperation(
				function(obj1) {
					return Math.log(obj1)/Math.log(10); 
				},
				param1
				);		
	}
	catch(e) {
		errHandle(e, "@Log", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @MailConfirmPreference() {
	try {
		return unimplementedFunction("@MailConfirmPreference") ;
	}
	catch(e) {
		errHandle(e, "@MailConfirmPreference", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO Not implemented
 */
function @MailDbName() {
	try {
		return unimplementedFunction("@MailDbName") ;
	}
	catch(e) {
		errHandle(e, "@MailDbName", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @MailEncryptSavedPreference() {
	try {
		return unimplementedFunction("@MailEncryptSavedPreference") ;
	}
	catch(e) {
		errHandle(e, "@MailEncryptSavedPreference", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @MailEncryptSentPreference() {
	try {
		return unimplementedFunction("@MailEncryptSentPreference") ;
	}
	catch(e) {
		errHandle(e, "@MailEncryptSentPreference", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @MailFilterAddToFolder() {
	try {
		return unimplementedFunction("@MailFilterAddToFolder") ;
	}
	catch(e) {
		errHandle(e, "@MailFilterAddToFolder", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @MailFoldersPreferece() {
	try {
		return unimplementedFunction("@MailFoldersPreferece") ;
	}
	catch(e) {
		errHandle(e, "@MailFoldersPreferece", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @MailSavePreference() {
	try {
		return unimplementedFunction("@MailSavePreference") ;
	}
	catch(e) {
		errHandle(e, "@MailSavePreference", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO
 */
function @MailSend() {
	try {
		return unimplementedFunction("@MailSend") ;
	}
	catch(e) {
		errHandle(e, "@MailSend", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @MailSignPreference() {
	try {
		return unimplementedFunction("@MailSignPreference") ;
	}
	catch(e) {
		errHandle(e, "@MailSignPreference", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @ManageECL() {
	try {
		return unimplementedFunction("@ManageECL") ;
	}
	catch(e) {
		errHandle(e, "@ManageECL", SEVERITY_HIGH, "error") ;
	}
}

function @Matches(string, pattern) {
	try {
		var stringlist = toNotesList(string) ;
		var patternlist = toNotesList(pattern) ;
		var formula = "@Matches(" + stringlist + "; " + patternlist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Matches", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in form selection and view column formula.
 */
function @NameLookup() {
	try {
		return unimplementedFunction("@NameLookup") ;
	}
	catch(e) {
		errHandle(e, "@NameLookup", SEVERITY_HIGH, "error") ;
	}
}

function @Narrow(string) {
	try {
		var stringlist = toNotesList(string);
		var formula = "@Narrow(" + stringlist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Narrow", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function.
 */
function @NetAccount() {
	try {
		return unimplementedFunction("@NetAccount") ;
	}
	catch(e) {
		errHandle(e, "@NetAccount", SEVERITY_HIGH, "error") ;
	}
}

function @NoteID() {
	try {
		return currentDocument.getDocument().getNoteID();
	}
	catch(e) {
		errHandle(e, "@NoteID", SEVERITY_HIGH, "error") ;
	}
}

function @Nothing() {
	try {
		return "" ;
	}
	catch(e) {
		errHandle(e, "@Nothing", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @OpenCalendar() {
	try {
		return unimplementedFunction("@OpenCalendar") ;
	}
	catch(e) {
		errHandle(e, "@OpenCalendar", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @OpenInNewWindow() {
	try {
		return unimplementedFunction("@OpenInNewWindow") ;
	}
	catch(e) {
		errHandle(e, "@OpenInNewWindow", SEVERITY_HIGH, "error") ;
	}
}

function @OptimizeMailAddress(address) {
	try {
		var addresslist = toNotesList(address);
		var formula = "@OptimizeMailAddress(" + addresslist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@OptimizeMailAddress", SEVERITY_HIGH, "error") ;
	}
}

function @OrgDir() {
	try {
		var formula = "@OrgDir";
		return evaluateFormula(formula) ;
	}
	catch(e) {
		errHandle(e, "@OrgDir", SEVERITY_HIGH, "error") ;
	}
}

function @Password(password) {
	try {
		var passwordlist = toNotesList(password);
		var formula = "@Password(" + passwordlist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Password", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Note: Gives different results on Client/Server
 */
function @PasswordQuality(fieldname) {
	try {
		var fieldnamelist = toNotesList(fieldname) ;
		var formula = "@PasswordQuality(" + fieldnamelist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@PasswordQuality", SEVERITY_HIGH, "error") ;
	}
}

function @Pi() {
	try {
		return Math.PI;
	}
	catch(e) {
		errHandle(e, "@Pi", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. UI function.
 */
function @PickList() {
	try {
		return unimplementedFunction("@PickList") ;
	}
	catch(e) {
		errHandle(e, "@PickList", SEVERITY_HIGH, "error") ;
	}
}

function @Platform(specific) {
	try {
		var formula = "@Platform" ;
		if (specific != null) {
			formula += "([Specific])";
		}
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Platform", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @PolicyIsFieldLocked() {
	try {
		return unimplementedFunction("@PolicyIsFieldLocked") ;
	}
	catch(e) {
		errHandle(e, "@PolicyIsFieldLocked", SEVERITY_HIGH, "error") ;
	}
}

/*
 * This function has been moved to the atCommands script lib 
 */
/*
function @PostedCommand(cmd,fmname) {
	try {
		if(cmd == "[Compose]"){
			var form:NotesForm = database.getForm(fmname);
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
					
					var formXPage = getConvertedElement("form",fmname);
					context.redirectToPage(formXPage+"?docId="+docIds.split(",")[0]);
				}
			}
		
			var formXPage = getConvertedElement("form",fmname);
			context.redirectToPage(formXPage);
		}
		else {
			return unimplementedFunction("@PostedCommand") ;
		}
	}
	catch(e) {
		errHandle(e, "@PostedCommand", SEVERITY_HIGH, "error") ;
	}
}
*/
function @Power(base,exp) {
	try {
		return pairwiseOperation(
				function(obj1, obj2){
					return Math.pow(obj1, obj2);
				}, 
				base, 
				exp) 
	}
	catch(e) {
		errHandle(e, "@Power", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. UI function.
 */
function @Prompt() {
	try {
		return unimplementedFunction("@Prompt") ;
	}
	catch(e) {
		errHandle(e, "@Prompt", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @RecoverIDFile() {
	try {
		return unimplementedFunction("@RecoverIDFile") ;
	}
	catch(e) {
		errHandle(e, "@RecoverIDFile", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @RefreshECL() {
	try {
		return unimplementedFunction("@RefreshECL") ;
	}
	catch(e) {
		errHandle(e, "@RefreshECL", SEVERITY_HIGH, "error") ;
	}
}
/*
 * Not implemented. Cannot access users registry. Bad for security.
 */
function @RegQueryValue() {
	try {
		return unimplementedFunction("@RegQueryValue") ;
	}
	catch(e) {
		errHandle(e, "@RegQueryValue", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @Responses() {
	try {
		return unimplementedFunction("@Responses") ;
	}
	catch(e) {
		errHandle(e, "@Responses", SEVERITY_HIGH, "error") ;
	}
}

function @ServerAccess(access, username, server) {
	try {
		var accesslist = toKeywordList(access);
		var usernamelist = toNotesList(username);
		var formula = "@ServerAccess(" + accesslist + "; " + usernamelist
		if (server != null) {
			var serverlist = toNotesList(server);
			formula += "; " + serverlist ;
		}
		formula += ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@ServerAccess", SEVERITY_HIGH, "error") ;
	}
}

function @ServerName() {
	try {
		return session.getServerName();
	}
	catch(e) {
		errHandle(e, "@ServerName", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO Formula converter should pass the value itself, rather than the name
 * then do  "variable = value ;"
 * Unsupported if variableName is not a literal
 */
function @Set(variableName, value) {
	try {
		//print("@Set");
		//print("Var: " + variableName);
		//print("Value: " + value);
		//var result = eval("variableName = value");
		//print("Result: " + result);
		this[variableName] = value ;
		//variableName = value ;
		
		return value ;
	}
	catch(e) {
		errHandle(e, "@Set", SEVERITY_HIGH, "error") ;
	}
}

function @SetDocField(documentUNID, fieldName, newValue ) {
	try {
		var doc:NotesDocument = session.getCurrentDatabase().getDocumentByUNID(documentUNID);
		if (doc) doc.replaceItemValue(fieldName, newValue);
	}
	catch(e) {
		errHandle(e, "@SetDocField", SEVERITY_HIGH, "error") ;
	}
}

function @SetEnvironment() {
	try {
		session.setEnvironmentVar(variableName, value);
	}
	catch(e) {
		errHandle(e, "@SetEnvironment", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @SetHTTPHeader() {
	try {
		return unimplementedFunction("@SetHTTPHeader") ;
	}
	catch(e) {
		errHandle(e, "@SetHTTPHeader", SEVERITY_HIGH, "error") ;
	}
}


function @SetProfileField(profilename, fieldname, value, key) {
	try {
		if (key == null) {
			key = "" ;
		}
		var doc:lotus.domino.Document = database.getProfileDocument(profilename, key);
		doc.replaceItemValue(fieldname, value);
		doc.save();
		return value ;
	}
	catch(e) {
		errHandle(e, "@SetProfileField", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented. Has no meaning on web.
 */
function @SetSoftDeleteExpireTime() {
	try {
		return unimplementedFunction("@SetSoftDeleteExpireTime") ;
	}
	catch(e) {
		errHandle(e, "@SetSoftDeleteExpireTime", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @SetTargetFrame() {
	try {
		return unimplementedFunction("@SetTargetFrame") ;
	}
	catch(e) {
		errHandle(e, "@SetTargetFrame", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @SetViewInfo() {
	try {
		return unimplementedFunction("@SetViewInfo") ;
	}
	catch(e) {
		errHandle(e, "@SetViewInfo", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Has no meaning on web.
 */
function @ShowParentPreview() {
	try {
		return unimplementedFunction("@ShowParentPreview") ;
	}
	catch(e) {
		errHandle(e, "@ShowParentPreview", SEVERITY_HIGH, "error") ;
	}
}

function @Sign(param1) {
	try {
		return listOperation(
				function(obj) {
					return obj > 0 ? 1 : obj < 0 ? -1 : 0; 
				},
				param1
			);
	}
	catch(e) {
		errHandle(e, "@Sign", SEVERITY_HIGH, "error") ;
	}
}

function @Sin(param1) {
	try {
		return listOperation(Math.sin, param1);
	}
	catch(e) {
		errHandle(e, "@Sin", SEVERITY_HIGH, "error") ;
	}
}

function @Sort(value, order, expression) {
	try {
		if (expression != null) {
			return unimplementedFunction("@Sort with custom sort expression") ;
		}
		
		var valuelist = toNotesList(value);
		var formula = "@Sort(" + valuelist ;
		
		if(order != null){
			var orderlist = toKeywordList(order);
			formula += "; " + orderlist ;
		}
	
		formula += ")";
		return evaluateFormula(formula);		
	}
	catch(e) {
		errHandle(e, "@Sort", SEVERITY_HIGH, "error") ;
	}
}

function @Soundex(string) {
	try {
		var stringlist = toNotesList(string);
		var formula = "@Soundex(" + stringlist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Soundex", SEVERITY_HIGH, "error") ;
	}
}

function @Sqrt(param1) {
	try {
		return listOperation(Math.sqrt, param1);
	}
	catch(e) {
		errHandle(e, "@Sqrt", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO should be able to add messages to the xpage somehow...
 */
function @StatusBar(message) {
	try {
		print("@StatusBar: " + message);
		return unimplementedFunction("@StatusBar") ;
	}
	catch(e) {
		errHandle(e, "@StatusBar", SEVERITY_HIGH, "error") ;
	}
}

function @Tan(param1) {
	try {
		return listOperation(Math.tan, param1);
	}
	catch(e) {
		errHandle(e, "@Tan", SEVERITY_HIGH, "error") ;
	}
}

function @TemplateVersion() {
	try {
		return session.evaluate("@TemplateVersion") ;
	}
	catch(e) {
		errHandle(e, "@TemplateVersion", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO Get formula converter to emit name directly
 */
function @ThisName() {
	try {
		//print("@ThisName");
		//print("This: " + this.toString()) ;
		//print("This: " + typeof this) ;
		return unimplementedFunction("@ThisName") ;
	}
	catch(e) {
		errHandle(e, "@ThisName", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO Get formula converter to emit value directly
 */
function @ThisValue() {
	try {
		return unimplementedFunction("@ThisValue") ;
	}
	catch(e) {
		errHandle(e, "@ThisValue", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO Not implemented
 */
function @TimeMerge() {
	try {
		return unimplementedFunction("@TimeMerge") ;
	}
	catch(e) {
		errHandle(e, "@TimeMerge", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO Not implemented
 */
function @TimeToTextInZone() {
	try {
		return unimplementedFunction("@TimeToTextInZone") ;
	}
	catch(e) {
		errHandle(e, "@TimeToTextInZone", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO Not implemented
 */
function @TimeZoneToText() {
	try {
		return unimplementedFunction("@TimeZoneToText") ;
	}
	catch(e) {
		errHandle(e, "@TimeZoneToText", SEVERITY_HIGH, "error") ;
	}
}

function @ToNumber(param1) {
	try {
		return listOperation(Number, param1);
	}
	catch(e) {
		errHandle(e, "@ToNumber", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO Not implemented
 */
function @ToTime() {
	try {
		return unimplementedFunction("@ToTime") ;
	}
	catch(e) {
		errHandle(e, "@ToTime", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @Transform() {
	try {
		return unimplementedFunction("@Transform") ;
	}
	catch(e) {
		errHandle(e, "@Transform", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO
 */
function @Unavailable() {
	try {
		return unimplementedFunction("@Unavailable") ;
	}
	catch(e) {
		errHandle(e, "@Unavailable", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO
 */
function @UndeleteDocument() {
	try {
		return unimplementedFunction("@UndeleteDocument") ;
	}
	catch(e) {
		errHandle(e, "@UndeleteDocument", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @UpdateFormulaContext() {
	try {
		return unimplementedFunction("@UpdateFormulaContext") ;
	}
	catch(e) {
		errHandle(e, "@UpdateFormulaContext", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views.
 */
function @UpdateViewDesign() {
	try {
		return unimplementedFunction("@UpdateViewDesign") ;
	}
	catch(e) {
		errHandle(e, "@UpdateViewDesign", SEVERITY_HIGH, "error") ;
	}
}

function @URLDecode(type, token) {
	try {
		var typelist = toNotesList(type);
		var tokenlist = toNotesList(token);
		var formula = "@URLDecode(" + typelist + "; " + tokenlist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@URLDecode", SEVERITY_HIGH, "error") ;
	}
}

function @URLEncode(type, token) {
	try {
		var typelist = toNotesList(type);
		var tokenlist = toNotesList(token);
		var formula = "@URLEncode(" + typelist + "; " + tokenlist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@URLEncode", SEVERITY_HIGH, "error") ;
	}
}

function @URLGetHeader(url, headerName, webUsername, webPassword, proxyWebUsername, proxyWebPassword) {
	try {
		if (webUsername || webPassword || proxyWebUsername || proxyWebPassword) {
			return unimplementedFunction("@URLGetHeader") ;
		}
		else {
			var URL:java.net.URL = new java.net.URL(url);
			var connection:java.net.URLConnection = URL.openConnection();
			return connection.getHeaderField(headerName);				
		}
	}
	catch(e) {
		errHandle(e, "@URLGetHeader", SEVERITY_HIGH, "error") ;
	}
}

function @URLHistory(command) {
	try {
		command = command.toUpperCase() ;
		if (command = "[NEXT]") {
			return facesContext.getExternalContext().redirect(context.getHistoryUrl(1));
		}
		else if (command = "[PREVIOUS]") {
			return facesContext.getExternalContext().redirect(context.getHistoryUrl(-1));
		} 
		else if (command = "[RELOAD]") {
			return context.reloadPage();
		}		
		else {
			return unimplementedFunction("@URLHistory command: " + command) ;			
		}
	}
	catch(e) {
		errHandle(e, "@URLHistory", SEVERITY_HIGH, "error") ;
	}
}

function @URLOpen(urlstring) {
	try {
		facesContext.getExternalContext().redirect(urlstring);
	}
	catch(e) {
		errHandle(e, "@URLOpen", SEVERITY_HIGH, "error") ;
	}
}

function @UrlQueryString(parameterName) {
	try {
		if (parameterName) {
			return listOperation( 
					function(eachParameter){
						return param.containsKey(eachParameter) ? param.get(eachParameter) : null;
					},
					parameterName
			)
		} 
		else {
			return context.getUrl().getQueryString();
		}		
	}
	catch(e) {
		errHandle(e, "@UrlQueryString", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented
 */
function @URLSubmit() {
	try {
		return unimplementedFunction("@URLSubmit") ;
	}
	catch(e) {
		errHandle(e, "@URLSubmit", SEVERITY_HIGH, "error") ;
	}
}

function @UserAccess(dbspec, access) {
	/*
	 * Note. This function runs on the web so returns the level of web access that
	 * the user has which is often different from their Notes Client access.
	 */
	try {
		var db:lotus.domino.Database = session.getDatabase(dbspec[0], dbspec[1]);
		if (db != null && db.isOpen()) {
			return db.getCurrentAccessLevel() ;
		}
		else {
			return "" ;	
		}
	}
	catch(e) {
		errHandle(e, "@UserAccess", SEVERITY_HIGH, "error") ;
	}
}

function @UserNameLanguage() {
	try {
		var formula = "@UserNameLanguage" ;
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@UserNameLanguage", SEVERITY_HIGH, "error") ;
	}
}

function @UserNamesList() {
	try {
		return session.evaluate("@UserNamesList") ;
	}
	catch(e) {
		errHandle(e, "@UserNamesList", SEVERITY_HIGH, "error") ;
	}
}

function @UserPrivileges() {
	try {
		return session.evaluate("@UserPrivileges") ;
	}
	catch(e) {
		errHandle(e, "@UserPrivileges", SEVERITY_HIGH, "error") ;
	}
}

function @UserRoles() {
	try {
		return context.getUser().getRoles();
	}
	catch(e) {
		errHandle(e, "@UserRoles", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. SHould not be emitted by formula converter
 */
function @V2If() {
	try {
		return unimplementedFunction("@V2If") ;
	}
	catch(e) {
		errHandle(e, "@V2If", SEVERITY_HIGH, "error") ;
	}
}

function @V3UserName() {
	try {
		return session.getUserName();
	}
	catch(e) {
		errHandle(e, "@V3UserName", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO
 */
function @V4UserAccess() {
	try {
		
		return unimplementedFunction("@V4UserAccess") ;
	}
	catch(e) {
		errHandle(e, "@V4UserAccess", SEVERITY_HIGH, "error") ;
	}
}

function @ValidateInternetAddress(format, address) {
	try {
		var formatlist = toKeywordList(format);
		var addresslist = toNotesList(address);
		var formula = "@ValidateInternetAddress(" + formatlist + "; " + addresslist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@ValidateInternetAddress", SEVERITY_HIGH, "error") ;
	}
}

function @VerifyPassword(password1, password2) {
	try {
		var passwordlist1 = toNotesList(password1);
		var passwordlist2 = toNotesList(password2);
		var formula = "@VerifyPassword(" + passwordlist1 + "; " + passwordlist2 + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@VerifyPassword", SEVERITY_HIGH, "error") ;
	}
}

function @Version() {
	try {
		return session.getNotesVersion();
	}
	catch(e) {
		errHandle(e, "@Version", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views. 
 */
function @ViewShowThisUnread() {
	try {
		return unimplementedFunction("@ViewShowThisUnread") ;
	}
	catch(e) {
		errHandle(e, "@ViewShowThisUnread", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views. 
 */
function @ViewTitle() {
	try {
		return unimplementedFunction("@ViewTitle") ;
	}
	catch(e) {
		errHandle(e, "@ViewTitle", SEVERITY_HIGH, "error") ;
	}
}

function @WebDbName() {
	try {
		var formula = "@WebDbName";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@WebDbName", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Only used in views. 
 */
function @WhichFolders() {
	try {
		return unimplementedFunction("@WhichFolders") ;
	}
	catch(e) {
		errHandle(e, "@WhichFolders", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. SHould not be emitted by formula converter.
 */
function @While() {
	try {
		return unimplementedFunction("@While") ;
	}
	catch(e) {
		errHandle(e, "@While", SEVERITY_HIGH, "error") ;
	}
}

function @Wide(string) {
	try {
		var stringlist = toNotesList(string);
		var formula = "@Wide(" + stringlist + ")";
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Wide", SEVERITY_HIGH, "error") ;
	}
}

/*
 * Not implemented. Undocumented function. Has no meaning on web. 
 */
function @X509Certificates() {
	try {
		return unimplementedFunction("@X509Certificates") ;
	}
	catch(e) {
		errHandle(e, "@X509Certificates", SEVERITY_HIGH, "error") ;
	}
}

/*
 * TODO
 */
function @Zone(times) {
	try {
		var formula = "@Zone";
		if (times != null) {
			var timeslist = toNotesList(times);
			formula += "(" + timeslist + ")";
		}
		return evaluateFormula(formula);
	}
	catch(e) {
		errHandle(e, "@Zone", SEVERITY_HIGH, "error") ;
	}
}


// ---------------------------------------------------------------------
// Implementations of the formula permuted operations eg *+, *-, *= etc
// ---------------------------------------------------------------------

function @AddPerm(list1, list2) {
	try {
		return permuteOperation(
			function(obj1, obj2){
				return obj1 + obj2;
			},
			list1,
			list2);
	}
	catch(e) {
		errHandle(e, "@AddPerm", SEVERITY_HIGH, "error") ;
	}
}

function @SubtractPerm(list1, list2) {
	try {
		return permuteOperation(
			function(obj1, obj2){
				return obj1 - obj2;
			},
			list1,
			list2);
	}
	catch(e) {
		errHandle(e, "@SubtractPerm", SEVERITY_HIGH, "error") ;
	}
}

function @MultiplyPerm(list1, list2) {
	try {
		return permuteOperation(
			function(obj1, obj2){
				return obj1 * obj2;
			},
			list1,
			list2);
	}
	catch(e) {
		errHandle(e, "@MultiplyPerm", SEVERITY_HIGH, "error") ;
	}
}

function @DividePerm(list1, list2) {
	try {
		return permuteOperation(
			function(obj1, obj2){
				return obj1 / obj2;
			},
			list1,
			list2);
	}
	catch(e) {
		errHandle(e, "@DividePerm", SEVERITY_HIGH, "error") ;
	}
}

function @EqualsPerm(list1, list2) {
	try {
		var result = permuteOperation(
				function(obj1, obj2){
					return obj1.toString().equals(obj2.toString()) ;
				},
				list1,
				list2);
		
		return anyTrue(result) ;		
	}
	catch(e) {
		errHandle(e, "@EqualsPerm", SEVERITY_HIGH, "error") ;
	}
}

function @NotEqualsPerm(list1, list2) {
	try {
		var result = permuteOperation(
			function(obj1, obj2){
				return !obj1.toString().equals(obj2.toString()) ;
			},
			list1,
			list2);
		
		return anyTrue(result) ;
	}
	catch(e) {
		errHandle(e, "@NotEqualsPerm", SEVERITY_HIGH, "error") ;
	}
}

function @LTPerm(list1, list2) {
	try {
		var result = permuteOperation(
				function(obj1, obj2){
					var class1 = obj1.getClass().getCanonicalName() ;
					if (class1 == "java.util.Date") {
						var date1:java.util.Date = obj1 ;
						var cal1:java.util.GregorianCalendar = new java.util.GregorianCalendar() ;
						cal1.setTime(date1);
						
						var date2:java.util.Date = obj2 ;
						var cal2:java.util.GregorianCalendar = new java.util.GregorianCalendar() ;
						cal2.setTime(date2);
						
						return cal1.compareTo(cal2) < 0 ;
					}
					else if (class1 == "java.lang.String"){
						var str1:java.lang.String = obj1 ;
						var str2:java.lang.String = obj2 ;
						return str1.compareTo(str2) < 0 ;
					}
					else {
						return obj1 < obj2;
					}
				},
			list1,
			list2);
		return anyTrue(result) ;
	}
	catch(e) {
		errHandle(e, "@LTPerm", SEVERITY_HIGH, "error") ;
	}
}

function @GTPerm(list1, list2) {
	try {
		var result = permuteOperation(
				function(obj1, obj2){
					var class1 = obj1.getClass().getCanonicalName() ;
					if (class1 == "java.util.Date") {
						var date1:java.util.Date = obj1 ;
						var cal1:java.util.GregorianCalendar = new java.util.GregorianCalendar() ;
						cal1.setTime(date1);
						
						var date2:java.util.Date = obj2 ;
						var cal2:java.util.GregorianCalendar = new java.util.GregorianCalendar() ;
						cal2.setTime(date2);
						
						return cal1.compareTo(cal2) > 0 ;
					}
					else if (class1 == "java.lang.String"){
						var str1:java.lang.String = obj1 ;
						var str2:java.lang.String = obj2 ;
						return str1.compareTo(str2) > 0 ;
					}					
					else {
						return obj1 > obj2;
					}
				},
				list1,
				list2);
			return anyTrue(result);
	}
	catch(e) {
		errHandle(e, "@GTPerm", SEVERITY_HIGH, "error") ;
	}
}

function @LTEPerm(list1, list2) {
	try {
		var result = permuteOperation(
				function(obj1, obj2){
					var class1 = obj1.getClass().getCanonicalName() ;
					if (class1 == "java.util.Date") {
						var date1:java.util.Date = obj1 ;
						var cal1:java.util.GregorianCalendar = new java.util.GregorianCalendar() ;
						cal1.setTime(date1);
						
						var date2:java.util.Date = obj2 ;
						var cal2:java.util.GregorianCalendar = new java.util.GregorianCalendar() ;
						cal2.setTime(date2);
						
						return cal1.compareTo(cal2) <= 0 ;
					}
					else if (class1 == "java.lang.String"){
						var str1:java.lang.String = obj1 ;
						var str2:java.lang.String = obj2 ;
						return str1.compareTo(str2) <= 0 ;
					}					
					else {
						return obj1 <= obj2;
					}
				},
				list1,
				list2);
			return anyTrue(result) ;
	}
	catch(e) {
		errHandle(e, "@LTEPerm", SEVERITY_HIGH, "error") ;
	}
}

function @GTEPerm(list1, list2) {
	try {
		var result = permuteOperation(
				function(obj1, obj2){
					var class1 = obj1.getClass().getCanonicalName() ;
					if (class1 == "java.util.Date") {
						var date1:java.util.Date = obj1 ;
						var cal1:java.util.GregorianCalendar = new java.util.GregorianCalendar() ;
						cal1.setTime(date1);
						
						var date2:java.util.Date = obj2 ;
						var cal2:java.util.GregorianCalendar = new java.util.GregorianCalendar() ;
						cal2.setTime(date2);
						
						return cal1.compareTo(cal2) >= 0 ;
					}
					else if (class1 == "java.lang.String"){
						var str1:java.lang.String = obj1 ;
						var str2:java.lang.String = obj2 ;
						return str1.compareTo(str2) >= 0 ;
					}					
					else {
						return obj1 >= obj2;
					}
				},
				list1,
				list2);
			return anyTrue(result) ;
	}
	catch(e) {
		errHandle(e, "@GTEPerm", SEVERITY_HIGH, "error") ;
	}
}