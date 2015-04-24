import xcel_ssjs_OpenLog;
import xcel_ssjs_utilities;

//this session scope var is used to control visibility of the unsupported custom control component
sessionScope.warningUsupportedComponentVisibility=false;
sessionScope.infoUsupportedComponentVisibility=false;
sessionScope.errorUsupportedComponentVisibility=true;

var invalidValueMsg='Invalid value: ' ;

var thisLib='ssjs_Common';


var debug=true;
var debugFunction='';

var doc={
};

var actions={
};

actions.doAction=function(context,whichAction) {
	//This contains the shared actions for forms
	switch (whichAction)
	{
		
	case 'save': 
		save();
		
		if (arguments[2] != undefined) {
			context.redirectToPage(arguments[2]);
		}
		
		break
		
	case 'save.close' :
		
		// The onComplete handler for the toolbar passes this to csjs_FormCommon to decide what to do
		//pass close to close the window when opening docs in new windows
		requestScope.eventStatus = "save.close";
		save();
		break
		
	case 'edit':
	
		context.setDocumentMode('edit');
		break
	
	case 'close': 
		/*@Command([FileCloseWindow])*/
		
		//When opening docs in new Windows, see csjs_FormCommon for case
		
		//Use the line below when not opening docs in new windows
		//context.redirectToPrevious();
		
		if (arguments[2] != undefined) {
			context.redirectToPage(arguments[2]);
		}
		
		return false;
		break
	}
	return true;
}



/*
 * Moved to atFunctions script lib
 */					
/*
var @UserRoles = function(){
	try{
		return context.getUser().getRoles().toArray();
	} catch(e) {
		throw new Error(e.message + " in " + thisLib + "::@UserRoles\r");
	}
}
*/


doc.getVal=function(itemName,whichVal){
	try{
		var values;
		if (whichVal){
			//Explicit for getSubmittedValue()
			if(whichVal==='submit'){
				if (getComponent(itemName))
		 	   		values=getComponent(itemName).getSubmittedValue();
 	   		
			//Explicit for getCompoonent() 	   		
			} else if (whichVal==='uidoc') {
				if (getComponent(itemName))
					values=getComponent(itemName).getValue();
			
			//Explicit for backend()
			} else if (whichVal==='doc') {
				 if (document.hasItem(itemName))
					values=document.getItemValueArray(itemName);
			}			
		} else {
			//Try to resolve the value

		//Doc object
			if (doc[itemName]) {		
				values = (doc[itemName]);
		
		//In the ui, submitted or otherwise		
			} else if (getComponent(itemName)){
						//if (getComponent(itemName).getSubmittedValue())
							//values=getComponent(itemName).getSubmittedValue();
							//else				
							values=getComponent(itemName).getValue();
			
		//Get the backend			
			} else if (document.hasItem(itemName)) {
				values=document.getItemValueArray(itemName);
			}
		}
		
		//If there no object we will return an array with ''
		if (!values) values='';
	
 		if( values.constructor !== Array ){ values = [ values ]; }
	
		return values
	} catch(e) {
		throw new Error(e.message + " in " + thisLib + "::getVal\titemName = [" + itemName + "]\twhichVal=[" + whichVal + "]\r");
	}
}

doc.setVal=function(itemName,itemValue,itemType){
	try{
	if (debug && debugFunction=='setVal') Debug.message('Trying '+ itemName , 'setVal');
		switch (itemType)
		{				
		//Explicit for backend
		case 'doc':  
		 document.setValue(itemName,itemValue);
		 break
		//Explicit for component
		case 'uidoc':  
		 if (getComponent(itemName))
			getComponent(itemName).setValue(itemValue);
		break
		 case 'editable' :
		if (@IsNewDoc()){
				//only compute when is a new doc
				if (document.isEditable())
				 document.setValue(itemName,itemValue);
				 
				 doc[itemName]=itemValue;
			} else {
			 	doc[itemName]=document.getItemValueArray(itemName);
			}
			break
			
		case 'computedwhencomposed' :
			if (@IsNewDoc()){
				//only compute when is a new doc
				doc[itemName]=itemValue;
				if (document.isEditable())
				document.setValue(itemName,itemValue);
			} else {
				doc[itemName]=document.getItemValueArray(itemName);
			}
			break
			
			case 'computed' : 
			doc[itemName]=itemValue;
			
			if (document.isEditable())
			document.setValue(itemName,itemValue);
			break
			
		case 'computedtext', 'computedfordisplay' :
			doc[itemName]=val;
			if (getComponent(itemName))
			getComponent(itemName).value=val;
		break
		
		}
		if (debug && debugFunction=='setVal') Debug.message('Finished '+ itemName , 'setVal');
	} catch(e) {
		eItemVal = itemValue.constructor==Array?itemValue.join(','):itemValue;
		throw new Error(e.message + " in " + thisLib + "::setVal\titemName = [" + itemName + "]\titemVal=[" + eItemVal + "]\titemType=[" + itemType + "]\r");
	}
};

function errHandle(e, functionName, severity, messageType) {
	//var errmsg = e.message.split('\n')[0];
	//print("SSJS Error: " + functionName + ": " + errmsg );
	
	if (sessionScope.debug){
		log.logError(e.message, severity, '', '', '', functionName);
	} else {
		log.logError(e.message, severity, '', '', '', functionName);
		//context.redirectToPage("ErrorPage");
	}
	
}

//
// Proxy function that is called by all the default/unimplemented @Functions/Commands, which logs the error
//
function unimplementedFunction(functionName) {	
	var fName = String(functionName);
	var type = "atFunctions";
	if(fName.startsWithIgnoreCase("@Command")){
		if(!fName.equals("@Command")) type = "atCommands";		
	}
	var errorMessage= "SSJS Error: " + functionName+" is not implemented. "+"Please check ssjs_"+type+" server side javascript library for details";
	print(errorMessage);
	log.logError(errorMessage, SEVERITY_HIGH, '', '', 'ssjs_' + type, functionName);
}

function resolve(fieldName) {
	value = data.getValue(fieldName) ;
	if (value == null) {
		value = "" ;
	}
	return value ;
}

Debug = {
    _log : function (msgType, msgSource, msg) {
        var tmp = msgType;
        if (msgSource) {
            tmp += ' from ' + msgSource;
        }
        var newEntry = 'Date: ' + @Now() + ' ' + tmp + ': ' + msg + '\r';
        if ( requestScope.debugOutput ) {
            requestScope.debugOutput += newEntry;
        } else {
            requestScope.debugOutput = newEntry;
        }
    },
    
    exception : function (exception, source) {
        var stringWriter = new java.io.StringWriter();
        exception.printStackTrace( new java.io.PrintWriter( stringWriter ) );
        this._log('Error', source, stringWriter.toString());
    },
    
    message : function (msg, source) {
        this._log('Print ', source, msg);
    }
};

function postValidationError(control, msg) { 
      // msg is the error message string; control is the component being validated 
      // ('this' from the caller). 
      if ((typeof msg) != "string") 
              return; 
      var msgObj = new javax.faces.application.FacesMessage( 
              javax.faces.application.FacesMessage.SEVERITY_ERROR, msg, msg 
      );
       
      facesContext.addMessage(control.getClientId(facesContext), msgObj); 
      control.setValid(false); 
}

function addFacesMessage(message, component){
	try {
		if(typeof component === 'string' ){
			component = getComponent(component);
		}
		var clientId = null;
		if (component) {
			clientId = component.getClientId(facesContext);
		}
		facesContext.addMessage(clientId,
		new javax.faces.application.FacesMessage(message+@NewLine()));
	} catch(e){
		throw new Error(e.message + " in " + thisLib + "::addFacesMessage\tmessage = [" + message + "]\tcomponent.id=[" + component.id + "]\r");
	}
}

// Used to check which if a component triggered an update
function submittedBy( componentId ){
 try {
  var eventHandlerClientId = param.get( '$$xspsubmitid' );
  var eventHandlerId = @RightBack( eventHandlerClientId, ':' );
  var eventHandler = getComponent( eventHandlerId );  
  if( !eventHandler ){ return false; }
  
  var parentComponent = eventHandler.getParent();
  if( !parentComponent ){ return false; }
  
  return ( parentComponent.getId() === componentId );  
 } catch( e ){
 	throw new Error(e.message + " in " + thisLib + "::submittedBy\tcomponentId = [" + componentId + "]\r");
 }
}

doc.sessionVars=function(){
	//Show debug,hiddenFields or event model
          key='debug';
          value = param.get(key);
          if (value=='false'){
              sessionScope.debug=false;
              debug=false;
          } else if (value!='' && value=='true') {
              sessionScope.debug=true;
              debug=true;
          }
		
 			key='events';
          value = param.get(key);
          if (value=='false'){
              sessionScope.events=false;
          } else if (value=='true') {
              sessionScope.events=true;
          }
          key='showHidden';
          value = param.get(key);
          if (value=='false'){
              sessionScope.showHidden=false;
          } else if (value!='' && value=='true') {
              sessionScope.showHidden=true;
          }
          
};

/*
	@Author: Maarga
	@Created: May-10-2011
	@Comment : @MailSend Equivalent-SSJS.  
function mailSend(sendTo,copyTo,blindCopyTo,subject,bodyText)
{
	try{
		
		var mailDoc=database.createDocument();
		mailDoc.replaceItemValue("Form","Memo");
		mailDoc.replaceItemValue("Subject",subject);
		
		var rtItem=mailDoc.createRichTextItem("Body");
		rtItem.appendText(bodyText);
		rtItem.update();
		
		var SendToArray = @Explode(sendTo,",")
		mailDoc.appendItemValue("SendTo",SendToArray);
		
		var CopyToArray = @Explode(copyTo,",")
		mailDoc.appendItemValue("CopyTo",CopyToArray);
		
		var BlindCopyToArray = @Explode(blindCopyTo,",")
		mailDoc.appendItemValue("BlindCopyTo",BlindCopyToArray);
		
		mailDoc.send(false);
	}
	catch(err){
		//Nothing.....
		throw new Error(err.message + " in " + thisLib+"::mailSend" + 
			 "\tsendTo = [" + (sendTo.Constructor == Array?sendTo.join(','):sendTo) +
			"]\tcopyTo = [" + (copyTo.Constructor == Array?copyTo.join(','):copyTo) +
			"]\tblindCopyTo = [" + (blindCopyTo.Constructor == Array?blindCopyTo.join(','):blindCopyTo) +
			"]\tsubject = [" + subject +
			"]\tbodyText = [" + bodyText) + "]\r";
	}
}
*/

function mailSend(sendTo,copyTo,blindCopyTo,subject,bodyText,docLink)
{
	try{
		var mailDoc=database.createDocument();
		var body:NotesMIMEEntity = mailDoc.createMIMEEntity();
		var contentStream = session.createStream();
		var webDBName = context.getUrl().getAddress();
		if (@Right(webDBName, ".nsf") != "") {
			webDBName = @Left(webDBName, @Right(webDBName, ".nsf"));
		}
		if(docLink) {
			bodyText = bodyText + '<br><br><a href="' + webDBName + '/0/' + docLink.getDocument().getUniversalID() + '?OpenDocument">Link to Document</a>';
		}
		contentStream.writeText(bodyText.replace('\n', '<br />'));
		body.setContentFromText(contentStream, 'text/html;charset=ISO-8859-1', NotesMIMEEntity.ENC_NONE);
		
		mailDoc.replaceItemValue("Form","Memo");
		mailDoc.replaceItemValue("Subject",subject);
		
		var rtItem=mailDoc.createRichTextItem("Body");
		rtItem.appendText(bodyText);
		rtItem.update();
		
		var SendToArray = @Explode(sendTo,",")
		mailDoc.appendItemValue("SendTo",SendToArray);
		
		var CopyToArray = @Explode(copyTo,",")
		mailDoc.appendItemValue("CopyTo",CopyToArray);
		
		var BlindCopyToArray = @Explode(blindCopyTo,",")
		mailDoc.appendItemValue("BlindCopyTo",BlindCopyToArray);
		
		mailDoc.send(false);
	}
	catch(err){
		throw new Error(err.message + " in " + thisLib+"::mailSend" +
			"\tsendTo = [" + (sendTo.constructor==Array?sendTo.join(','):sendTo) + "]\t" +
			"copyTo = [" + (copyTo.constructor==Array?copyTo.join(','):copyTo)+ "]\t" +
			"blindCopyTo = [" + (blindCopyTo.constructor==Array?blindCopyTo.join(','):blindCopyTo) + "]\t" +
			"subject = [" + subject + "]\t" +
			"bodyText = [" + bodyText + "]\r");
	}
}

var @MailSend=function(sendTo,copyTo,blindCopyTo,subject,bodyText,bodyFields,flags) {
/*
	Author: Gary Forbis
	Date: 6/1/2011
	Notes:
	- bodyFields is not yet supported.
	- flags is a String or an array of Strings, so "IncludeDocLink" or
	  ["PRIORITYHIGH","INCLUDEDOCLINK"] case will be normalized to all
	  uppercase regardless of what is passed in.
	- flags other than INCLUDEDOCLINK are not yet supported.
*/
	try{
		// If flags is not already an array, make it one
		if (debug) log.logEvent('Starting @MailSend()::' + flags, SEVERITY_LOW, 'ssjs_Common');
		if (flags.constructor != Array) flags = [flags];
		// Convert all elements of flags to upper case
		if (debug) log.logEvent('0 - flags: ' + flags, SEVERITY_LOW, 'ssjs_Common');
		for (x=0;x<=flags.length;x++) {
//			if (debug) log.logEvent('0,'+x, SEVERITY_LOW, 'ssjs_Common');
			flags[x] = new String(flags[x]).toUpperCase();
		}
		if (debug) log.logEvent('1', SEVERITY_LOW, 'ssjs_Common');
		var mailDoc=database.createDocument();
		var body:NotesMIMEEntity = mailDoc.createMIMEEntity();
		var contentStream = session.createStream();
		var webDBName = context.getUrl().getAddress();
		if (@Right(webDBName, ".nsf") != "") {
			webDBName = @Left(webDBName, @Right(webDBName, ".nsf"));
		}
		if (debug) log.logEvent('2', SEVERITY_LOW, 'ssjs_Common');
		if(flags.find('INCLUDEDOCLINK')) {
			bodyText = bodyText + '<br><br><a href="' + webDBName + '/0/' + document.getDocument().getUniversalID() + '?OpenDocument">Link to Document</a>';
		}
		contentStream.writeText(bodyText.replace('\n', '<br />'));
		body.setContentFromText(contentStream, 'text/html;charset=ISO-8859-1', NotesMIMEEntity.ENC_NONE);
		
		mailDoc.replaceItemValue("Form","Memo");
		mailDoc.replaceItemValue("Subject",subject);
		
		if (debug) log.logEvent('3', SEVERITY_LOW, 'ssjs_Common');
		var rtItem=mailDoc.createRichTextItem("Body");
		rtItem.appendText(bodyText);
		rtItem.update();
		
		var SendToArray = @Explode(sendTo,",")
		mailDoc.appendItemValue("SendTo",SendToArray);
		
		if (debug) log.logEvent('4', SEVERITY_LOW, 'ssjs_Common');
		var CopyToArray = @Explode(copyTo,",")
		mailDoc.appendItemValue("CopyTo",CopyToArray);
		
		var BlindCopyToArray = @Explode(blindCopyTo,",")
		mailDoc.appendItemValue("BlindCopyTo",BlindCopyToArray);
		
		mailDoc.send(false);
		if (debug) log.logEvent('Finished @MailSend()', SEVERITY_LOW, 'ssjs_Common');
	}
	catch(err){
		throw new Error(err.message + " in " + thisLib+"::mailSend" +
			"\tsendTo = [" + (sendTo.constructor==Array?sendTo.join(','):sendTo) + "]\t" +
			"copyTo = [" + (copyTo.constructor==Array?copyTo.join(','):copyTo)+ "]\t" +
			"blindCopyTo = [" + (blindCopyTo.constructor==Array?blindCopyTo.join(','):blindCopyTo) + "]\t" +
			"subject = [" + subject + "]\t" +
			"bodyText = [" + bodyText + "]\r");
	}
}

function addToList(thisdoc:NotesXspDocument, fieldname:string, newVal:string, atype:string) {
	try {
		var newArr = new Array(thisdoc.getItemValue(fieldname));
		switch (atype) {
			
		case 'append': 
			newArr.push(newVal);
			break
		case 'prepend':
			newArr.unshift(newVal);
			break	
		}
		thisdoc.replaceItemValue(fieldname, newArr);
		return true;
	}
		catch(err) {
			throw new Error(err.message + " in " + thisLib + "::addToList\tfieldname = " + fieldname + "\tnewVal = " + newVal + "\tatype = " + atype);
	}
}

function loadForm(eventName){
	try{
		var hidden,val,id;
		var required=false;
		var field,cmp;
			
		
		var loadDefaults=false;
		var key='$$ajaxmode';
        var ajaxMode = param.get(key);

		if (ajaxMode===null){	
			if (@IsNewDoc()) {
					loadDefaults=true;
				}
		};
							
			//Save this for some fun UI stuff later
			/*		
			if ((!hidden) && field.type=='editable' && document.isEditable()) { 
				cmp=getComponent(id);
				logEvent('UI Field: ' +  id);
							
				if ( cmp ) {
					//We can not set these values for radio buttons or checkboxes
					if (field.fieldType != 'radiobutton' && field.fieldType != 'checkbox'){

					logEvent('fieldHelp: ' +  id);
					field.fieldHelp ? cmp.promptMessage=field.fieldHelp : true ;
					
					logEvent('invalidMsg: ' +  id);
					field.invalidMsg ? cmp.invalidMessage=field.invalidMsg : true;
					
					}
					if (field.required){
					logEvent('required: ' +  id);
						required=field.required;
						cmp.required=required;
					}
				
				}
			}
			*/
			
	if (loadDefaults) {
		logEvent('Firing edtiable and computedwhencomposed.. ');
		for (var i = 0; i < fields.length ; i++){
			field=fields[i];
			id = field.name;
			
			
			//This is to avoid an error when values reference themselves the first time
			viewScope.put(id,'');
			
			if (field.type=='editable' || field.type=='computedwhencomposed' ) {
		
				
				//Process default values & ComputedWhenComposed Fields once
				if (field.defaultValue){				
					if (typeof field.defaultValue != 'function')
						val=field.defaultValue;
					else 
						val=field.defaultValue();
						
				} else {
				val='';
				}		
						viewScope.put(id,val);
						doc.setVal(id,val,field.type);
						logEvent('Default value: ' +  id + " val: " + val + " type: " + field.type);	 	
			} 	
		}
		
		logEvent('Finished edtiable and computedwhencomposed.. ');	

	}	
	logEvent('Loading fields');
		for (var i = 0; i < fields.length ; i++){
			var val;
				field=fields[i];
				id = field.name;
				
				viewScope['Current_Field']=id;
		
			if (field.type=='editable' || field.type=='computedwhencomposed' ) {
				if (!loadDefaults){
			
						if (getComponent(id))
						val=getComponent(id).getValue();
						else
						val=@GetField(id);
						
						viewScope.put(id,val);
						logEvent('Setting value: ' +  id + " val: " + val + " type: " + field.type);	 	
					}	
				
					
			}
			
			//Process computed fields only if editable, otherwise will be displayed by binding
			if (document.isEditable() && field.type==='computed') {
				
	
				if (field.value){
					try{
						
					if (typeof field.value != 'function') {
						val=field.value;
					} else {
						val=field.value();
					}
					
					}
				catch (e){
					//Do Nothing
				}
					
					viewScope.put(id,val);
					doc.setVal(id,val,field.type);
					logEvent('computed value: ' +  id)
				}
			}			
			
			//Process computed for display fields always
			if (field.type==='computedfordisplay') {
				
				if (field.value){
				try{
					
					if (typeof field.value != 'function') {
						val=field.value;
					} else {
						val=field.value();
					}
				}
				catch (e){
					//Do Nothing
				}
					
					viewScope.put(id,val);
					doc.setVal(id,val,field.type);
					logEvent('computed for display: ' +  id);
				}
			}
		}
		logEvent('Done firing fields' );
		
		return true;
		
		} catch (exception) {
			
				var fName="loadForm";
				var parm1=id ? id : 'not set';
				var parm2=val ? val : 'not set';
				
				
				//var errMsg=e.message + " in " + thisLib + "::" + fName + "\t.id = [" + parm1 + "]\tval=[" + parm2 + "]\r";
				var errMsg="Error" + " in " + thisLib + "::" + fName + "\t.id = [" + parm1 + "]\tval=[" + parm2 + "]\r";
				logEvent('error: ' +  errMsg);
				viewScope.errorStatus=errMsg;
				
			// Utility Function
			
				throw new Error(errMsg,"utility");
				
			// Event Handler - Uncomment this to throw a stacktrace
				//errHandle(new Error(errMsg), SEVERITY_LOW, thisLib+"::"+fName,"error");
		}		
}

var eventLog;
function logEvent(msg){
	
	if (!eventLog){
		eventLog=getComponent('eventLog');
	};
	
	eventLog.setValue(eventLog.getValue()+"<br/>"+msg)
}

function makeAuthors(fieldName) {
	try {
		var docAuth:NotesDocument = document.getDocument();
		var authField:NotesItem;
		authField=docAuth.replaceItemValue(fieldName,doc.getVal(fieldName));
		if (!authField.isAuthors()) {authField.setAuthors(true);}
		return true;
	} catch (e) {
		var fName="makeAuthors";			
		var errMsg="Error" + " in " + thisLib + "::" + fName + "\r";
				
		// Utility Function
		throw new Error(errMsg,"utility");
				
		// Event Handler - Uncomment this to throw a stacktrace
		//errHandle(new Error(errMsg), SEVERITY_LOW, thisLib+"::"+fName,"error");
		
	}
}

function makeReaders(fieldName) {
	try {
		var docAuth:NotesDocument = document.getDocument();
		var authField:NotesItem = docAuth.getFirstItem('fieldName');
		authField=docAuth.replaceItemValue(fieldName,doc.getVal(fieldName));
		authField.setReaders(true);
		return true;
	} catch (e) {
		var fName="makeReaders";			
		var errMsg = "Error" + " in " + thisLib + "::" + fName + "\r";
				
		// Utility Function
		throw new Error(errMsg,"utility");
				
		// Event Handler - Uncomment this to throw a stacktrace
		//errHandle(new Error(errMsg), SEVERITY_LOW, thisLib+"::"+fName,"error");
		
	}
}

function computedValues(obj) {
	return '';
}

function defaultValues(obj) {
	return '';
}

// Functions to support externalized strings in ssjs script libraries

function getCommonStrings(nlsBundle, locale, key){

	var strings = null ;
	
	// See if the locale has changed
	if (applicationScope.ssjsStringsLocale) {
		if ( !applicationScope.ssjsStringsLocale.equals(context.getLocale().toString())) {
			//print("Locale has changed from: " + applicationScope.ssjsStringsLocale + " to " + context.getLocale().toString());
			// Save the new locale and clear the bundle map
			applicationScope.ssjsStringsLocale = locale.toString() ;
			applicationScope.ssjsStrings = null ;
		}
	}
	else {
		applicationScope.ssjsStringsLocale = locale.toString() ;
	}
	
	// See if the bundle is already loaded in the bundle map
	if( applicationScope.ssjsStrings ){
		var existingStrings = applicationScope.ssjsStrings[nlsBundle];
		if( existingStrings ){
			//print("Bundle already loaded: " + nlsBundle + ": " + locale);
			strings = existingStrings;
		}
	}
	    
	// Bundle not loaded, so try and load one based on a best fit of the users locale

	if (strings == null) {
		// Try loading the bundle specified by the full locale
		// eg locale is es_MX, try loading es_MX
		strings = getBundleContents(nlsBundle + "_" + context.getLocale()) ;
		if (strings != null) {
			registerBundle(nlsBundle, strings);		
		}
	}
	
	if (strings == null) {
		// If the locale has a country component, try loading the bundle for the language only
		// eg locale is es_MX, try loading es.
		if (!locale.getCountry().equals("")) {
			strings = getBundleContents(nlsBundle + "_" + locale.getLanguage()) ;
			if (strings != null) {
				registerBundle(nlsBundle, strings);		
			}
		}
	}
	
	if (strings == null){
		// Try loading the default bundle
		strings = getBundleContents(nlsBundle) ;
		if (strings != null) {
			registerBundle(nlsBundle, strings);		
		}
	}

	// Get the value from the strings
	var value = null ;
	
	if (strings != null) {
		try {
			value = strings[key];	
		}
		catch (e) {
			// No value so return default 'missing' value
			//print("Bundle does not contain key: " + key);
			value = "[No string for " + nlsBundle + ":" + locale + ":" + key + "]" ;
		}
	}
	else {
	value = "[No bundle" + nlsBundle + "]" ;
	}
		    
	return value;
}

/*
 * Register the bundle/contents in the shared ssjsStrings map. 
 */
function registerBundle(bundle, strings) {
	// Add the new bundle to the bundle map
	synchronized(applicationScope){
		if( ! applicationScope.ssjsStrings ) {
	    	applicationScope.ssjsStrings = new java.util.HashMap();
		}
		applicationScope.ssjsStrings[bundle] = strings;
	}
}

/*
 * Try and load a bundle resource and return the contents.
 */
function getBundleContents(bundle) {
	var strings = null ;
	try {
		// try loading the base bundle
		var resource = new com.ibm.xsp.resource.BundleResource();
		resource.component = null;			
		//print("Loading bundle: " + bundle);
		resource.src = bundle;
		strings = resource.contents;
		//print("Bundle loaded: " + bundle);
	}
	catch(e) {
		print("Error loading bundle: " + bundle);
		//print(e);
	}
	
	return strings ;
}

function getViewCategoryFilter() {
	var viewComponent = getComponent("dataViewContainer_view");
	if(viewComponent == null) {
		viewComponent = getComponent("viewContainer");
	}
	if(viewComponent == null) {
		viewComponent = getComponent("view");
	}
	
	if(viewComponent != null && viewComponent.getParent() != null){
		var key = viewComponent.getParent().getId();
		if(key && key.startsWith("embeddedview") && viewScope.containsKey(key)) {
			return viewScope.get(key);
		}
	}
	return "";
}

/*
 * Convert a value of unknown type into an array.
 */
function toArray(value) {
		
	if (value instanceof Array) {
		//print("An Array") ;
		return value ;
	}
	else if (typeof value == "Vector") {
		//print("A Vector") ;
		var vector = value ;
	}
	else {
		//print("A Scalar") ;
		var array = new Array();
		array[0] = value;
		return array ;
	}
}

/*
 * Convert an array of values into a string list suitable for evaluating by a notes esssion.
 * eg array contains three string values, red, green and blue.
 * output = "red" : "green" : "blue"
 */
/*
function toStringList(value) {
	var array = toArray(value) ;
	var outString = "" ;
	for (var x = 0 ; x < array.length; x++) {
		var value = array[x];
		outString += "\"" + value + "\"" ;
		
		if (x < array.length - 1) {
			outString += ":" ;
		}
	}
	
	return outString ;
}
*/

function toNotesList(value) {
	var array = toArray(value) ;
	var type = typeof array[0];
	//print("Type: " + type);
	//print("Class: " + array[0]);
	var outString = "" ;
	for (var x = 0 ; x < array.length; x++) {
		var value = array[x];
		
		if (type == "string") {
			outString += "\"" + escapeQuotes(value) + "\"" ;	
		}
		else if (type == "number") {
			outString += value ;
		}
		else {
			outString += "[" + value + "]" ;
		}
		
		if (x < array.length - 1) {
			outString += ":" ;
		}
	}
	
	return outString ;
}

/*
 * Collapse an array to a single value or return the array.
 */
function collapseArray(array) {
	if (array.length > 1) {
		return array ;
	}
	else {
		return array[0];
	}
}

function toKeywordList(value) {
	var array = toArray(value) ;
	var outString = "" ;
	for (var x = 0 ; x < array.length; x++) {
		var value = array[x];
		outString += value ;
		
		if (x < array.length - 1) {
			outString += ":" ;
		}
	}
	
	return outString ;
}

function escapeQuotes(instr) {
	outstr = "" ;
	for (var x = 0 ; x < instr.length; x++) {
		var chr = instr.charAt(x);
		if (chr == "\"") {
			outstr += "\\";
		}
		outstr += chr ;
	}
	
	return outstr ;
}

function evaluateFormula(formula) {
	var result = session.evaluate(formula, currentDocument.getDocument());
	return collapseArray(result);
}

/*
 * Execute the callback function on all permutations of list1 and list2
 */
function permuteOperation(callBack, list1, list2) {
	var result = [];
	list1 = toArray(list1);
	list2 = toArray(list2);
	for (var i = 0; i < list1.length; i++) {
		for(var j = 0; j < list2.length; j++) {
			result.push(callBack(list1[i], list2[j]));
		}
	}
	return result;
};

/*
 * Execute the callback function on all pairwise combinations of list1 and list2
 */
function pairwiseOperation(callback, list1, list2) {
	var result = [];
	list1 = toArray(list1);
	list2 = toArray(list2);
	var maxIndex1 = list1.length - 1;
	var maxIndex2 = list2.length - 1;
	for (var i = 0; i < Math.max(list1.length, list2.length); i++) {
		var Index1 = Math.min(i, maxIndex1);
		var Index2 = Math.min(i, maxIndex2);
		result.push(callback(list1[Index1], list2[Index2]));
	}
	return result;
};

/*
 * Execute the callback function against all the members of the list
 */
function listOperation(callback, list) {
	var result;
	try {
		list = toArray(list);
		result = [];
		for (var i = 0; i < list.length; i++) {
			var value = list[i] ;
			var eachResult;
			if(typeof value == "undefined" || value == Infinity){
				eachResult = @Error();
			}
			else{
				eachResult = callback(value);
			}
				
			if (@IsError(eachResult)) {
				eachResult = @Error();
				result.push(eachResult);
			} 
			else {
				result.push(eachResult);
			}
		}
	} 
	catch (e) {
		print("Error: " + e);
		result = @Error();
	}
	return result;
};

/*
 * Return true if the potential array is actually an array
 */
function isArray(potentialArray) {
	var type = (typeof(potentialArray));
	try {
		var hasProperty = potentialArray.hasOwnProperty("length");
		return (type == "java.util.Vector" || (type == "object" && hasProperty));
	} 
	catch (e) {
		return false;
	}
};

/*
 * Return 1 if any of the values are true, otherwise false.
 */
function anyTrue(values) {
	// Look for any true result
	for (var x = 0 ; x < values.length; x++) {
		if (values[x] ) {
			return 1 ;
		}
	}
	
	// return a default false 
	return 0 ;
}

function getUserAccountInfo(itemName, userName) {
	var result = null;
	if (@UserName().toLowerCase() != "anonymous") {
		try {
			var nab = session.getDirectory(session.getServerName());
			var requestedItems = new java.util.Vector();
			var users = new java.util.Vector();
			users.add(userName || context.getUser().getDistinguishedName());
			requestedItems.add(itemName);
			var dirNav = nab.lookupNames(new java.lang.String("($Users)"), users, requestedItems, false);
			result = dirNav.getFirstItemValue().get(0);
		} 
		catch (e) {
			result = "";
		}
		return result;
	}
	else {
		return "";
	}
};