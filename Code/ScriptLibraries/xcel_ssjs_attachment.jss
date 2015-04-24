var thisLib='xcel_ssjs_attachment';
var debug=false;
var debugFunction='none';
	
		//Globals	
	
		//options
		/*Option Public
                        
                        */
				
		function validateRichText(){
				/*Function validateRichText ( docUI As NotesUIDocument , strFldName As String  ) As Integer 
                  	On Error Goto Err_handle
                  	validateRichText == 0 
                  	If Fulltrim( docUI.FieldGetText( strFldName ) ) &lt;&gt; "" Then
                  		Msgbox "Text is not allowed in Attachment section", 16, "Validation"
                  		Exit Function
                  	End If
                  	Call docUI.GotoField ( strFldName )
                  	Call docUI.SelectAll ()
                  	Call docUI.Copy ()
                  	Call docUI.DeselectAll ()
                  	validateRichText == 1 
                  resume_exit:
                  	Exit Function
                  Err_Handle:
                  	validateRichText == 2 
                  	If Err == 4407 Then
                  		Msgbox "The attachment field does not contain any entries. Please attach a file before proceeding." , 16 , "Validation"
                  		Resume resume_Exit
                  	End If
                  	validateRichText == 2
                        	Resume resume_Exit
                        	
                        End Function
				*/
		}
		
		
		//End Globals
		
		function formEvents(context,event){
			try{
				switch (event)
					{
					case 'beforePageLoad':
						doc.sessionVars();
					break
					
					case 'beforeRenderResponse':
						
	
					break
					
					case 'querySaveDocument':
						var isTranslated = translateInput();
						if (isTranslated) {
							var isValid = validateInput();
							return isValid;
						} else {
							return isTranslated;
						}
	

					break
					
					case 'windowtitle':
					return @If(@IsNewDoc(),"New ", "" ) + "01 AFE \ attachment";
			
					break
					
					}
				return;
			
			} catch (e) {
				var fName="formEvents";
				var parm1=context.id;
				var parm2=event;
			
				var errMsg=e.message + " in " + thisLib + "::" + fName + "\tcontext.id = [" + parm1 + "]\tevent=[" + parm2 + "]\r";
			
			// Utility Function
			
				throw new Error(errMsg,"utility");
				
			// Event Handler - Uncomment this to throw a stacktrace
				//errHandle(new Error(errMsg), SEVERITY_LOW, thisLib+"::"+fName,"error");
	
			}
		}

		
		function computedSubForm(id){
			try {
				switch (id)
					{
					case 'computedSubFormAbT0':
						/*
						"header"
						*/
					break
					
					case 'computedSubFormAbT1':
						/*
						"bottom"
						*/
					break
					
					}
				return;
				
			} catch (e) {
				var fName="computedSubForm";
				var parm1=id;
			
				var errMsg=e.message + " in " + thisLib + "::" + fName + "\tid = [" + parm1 + "]\r";
			
			// Utility Function
			
				throw new Error(errMsg,"utility");
				
			// Event Handler - Uncomment this to throw a stacktrace
				//errHandle(new Error(errMsg), SEVERITY_LOW, thisLib+"::"+fName,"error");
	
			}
		}
				
		
		function doAction(context,submitValue){
			try{
				var id=submitValue;
				switch (id)
				{
	 			}
	 			return true;
	 			
	 		} catch (e) {
				var fName="doAction";
				var parm1=context.id;
				var parm2=submitValue;
			
				var errMsg=e.message + " in " + thisLib + "::" + fName + "\tcontext.id = [" + parm1 + "]\tsubmitValue=[" + parm2 + "]\r";
			
			// Utility Function
			
				throw new Error(errMsg,"utility");
				
			// Event Handler - Uncomment this to throw a stacktrace
				//errHandle(new Error(errMsg), SEVERITY_LOW, thisLib+"::"+fName,"error");
	
			}		
	 	}

		function keyWordChoices(whichField){
			try{
				var choices;
				switch (whichField)
				{
				}
				return choices;
				
			} catch (e) {
				var fName="keyWordChoices";
				var parm1=whichField;
				
				var errMsg=e.message + " in " + thisLib + "::" + fName + "\twhichField = [" + parm1 + "]\r";
			
			// Utility Function
			
				throw new Error(errMsg,"utility");
				
			// Event Handler - Uncomment this to throw a stacktrace
				//errHandle(new Error(errMsg), SEVERITY_LOW, thisLib+"::"+fName,"error");
	
			}
	 	}


var fieldsArray=[
{
		name: 'dType', fieldType: 'text', type: 'computedfordisplay',
		value: function(){
			/*val="Attachment";*/
			return val;
		}
	},{
		name: 'ITFinance', fieldType: 'names', type: 'computed' ,multiValueSep: ',',
		value: function(){
			/*val=m := @DbLookup("":"nocache", "", "luKeywords","IT Finance", "keywordValues"),
                  
                  @If(@IsError(m) , "" , m);*/
			return val;
		}
	},{
		name: 'requestedBy', fieldType: 'names', type: 'computedwhencomposed',
		defaultValue: function(){
			/*val=@UserName;*/
			return val;
		}
	},{
		name: 'othereditors', fieldType: 'authors', type: 'computed' ,multiValueSep: ',',
		value: function(){
			/*val=othereditors;*/
			return val;
		}
	},{
		name: 'docReaders', fieldType: 'readers', type: 'computed', hidden: true,
		value: function(){
			/*val=[enteredBy , othereditors , requestedBy , ITFinance , "[developer]", "[admin]" , "[readAllAFE]"];*/
			return val;
		}
	},{
		name: 'docEditors', fieldType: 'authors', type: 'computed', hidden: true ,multiValueSep: ',',
		value: function(){
			/*val=[ITFinance , requestedBy , "[admin]"];*/
			return val;
		}
	},{
		name: 'dPrefix', fieldType: 'text', type: 'computedwhencomposed', hidden: true,
		defaultValue: function(){
			/*val="PUK AFE-";*/
			return val;
		}
	},{
		name: 'dNumber', fieldType: 'text', type: 'computedwhencomposed', hidden: true,
		defaultValue: function(){
			/*val=dNumber;*/
			return val;
		}
	},{
		name: 'AttachmentIdentifier', fieldType: 'text', type: 'computedwhencomposed',
		defaultValue: function(){
			/*val=AttachmentIdentifier;*/
			return val;
		}
	},{
		name: '$keepprivate', fieldType: 'text', type: 'computedwhencomposed',
		defaultValue: function(){
			/*val="0";*/
			return val;
		}
	},{
		name: 'tracking_d', fieldType: 'text', type: 'computed', hidden: true,
		value: function(){
			/*val=dPrefix + dNumber;*/
			return val;
		}
	},{
		name: 'Title', fieldType: 'text', type: 'editable',
		inputTranslation: function(){
			/*val=@Trim(Title);*/
			return val;
		}
	},{
		name: 'attachment', fieldType: 'richtext', type: 'editable'
	},{
		name: 'adminEdit', fieldType: 'radiobutton', type: 'editable',
		defaultValue: function(){
			/*val="Yes";*/
			return val;
		}
	},{
		name: 'adminEdit_d', fieldType: 'text', type: 'computedfordisplay',
		value: function(){
			/*val=adminEdit;*/
			return val;
		}
	},{
		name: 'requiredFields', fieldType: 'text', type: 'computedfordisplay', hidden: true,
		value: function(){
			/*val="";*/
			return val;
		}
	},{
		name: 'deleted', fieldType: 'text', type: 'computedwhencomposed', hidden: true ,multiValueSep: ';',
		defaultValue: function(){
			/*val="n";*/
			return val;
		}
	},{
		name: 'deletereason', fieldType: 'text', type: 'computedwhencomposed', hidden: true,
		defaultValue: function(){
			/*val="";*/
			return val;
		}
	},{
		name: 'deletedby', fieldType: 'names', type: 'computedwhencomposed', hidden: true,
		defaultValue: function(){
			/*val="";*/
			return val;
		}
	},{
		name: 'deletedon', fieldType: 'text', type: 'computedwhencomposed', hidden: true,
		defaultValue: function(){
			/*val="";*/
			return val;
		}
	}
];
var fieldsByName = [];
  	for (i=0; i<fieldsArray.length; i++) {
    	fieldsByName[fieldsArray[i].name] = fieldsArray[i];
 	}	

		function isVisible(id){
			try{
				var val;
				var hide=false;
				switch (id)
				{
				case 'pardef22': case 'pardef13': case 'pardef14': case 'pardef26': case 'pardef29': case 'pardef30': case 'pardef21': case 'pardef25': case 'pardef2': case 'pardef2': case 'pardef2': case 'pardef2': case 'pardef2': case 'pardef2': case 'pardef2': case 'pardef2': case 'pardef2': 
			  					//Hide if - read preview
			  					hide=hide || (!document.isEditable());
					break
					
						case 'pardef29': 
						/*hide=(!@Contains(@UserRoles, "[developer]"));*/
					break
					
						case 'pardef35': 
						/*hide=(!@Contains(@UserRoles, "[viewHidden]"));*/
					break
					
						case 'pardef30': 
						/*hide=(@Contains(@UserRoles, "[developer]"));*/
					break
					
						case 'pardef1': case 'pardef2': case 'pardef4': case 'pardef5': case 'pardef6': case 'pardef7': case 'pardef15': case 'pardef16': 
						/*hide=(@IsNotMember("[ViewHidden]", @UserRoles));*/
					break
					
						
		}	
		//We return the opposite for rendered!
		return !(hide);
			
			} catch (e) {
				var fName="isVisible";
				var parm1=id ? id : 'not set';
				var parm2=hide;
					
				var errMsg=e.message + " in " + thisLib + "::" + fName + "\tid = [" + parm1 + "]\thide=[" + parm2 + "]\r"; 
			
			// Utility Function
			
				throw new Error(errMsg,"utility");
				
			// Event Handler - Uncomment this to throw a stacktrace
				//errHandle(new Error(errMsg), SEVERITY_LOW, thisLib+"::"+fName,"error");
	
			}		
	 	}
	 		function doButton(context,id){
			try{
				switch (id)
				{
	 				}
	 			return true;
	 			
	 		} catch (e) {
				var fName="doButton";
				var parm1=context.id;
				var parm2=id;
			
				var errMsg=e.message + " in " + thisLib + "::" + fName + "\tcontext.id = [" + parm1 + "]\tid=[" + parm2 + "]\r";
			
			// Utility Function
			
				throw new Error(errMsg,"utility");
				
			// Event Handler - Uncomment this to throw a stacktrace
				//errHandle(new Error(errMsg), SEVERITY_LOW, thisLib+"::"+fName,"error");
		
			}	
	 	}
				
	function doHotSpot(context,id){
			try{
				switch (id)
				{
	 			}
	 			return true;
	 			
	 		} catch (e) {
				var fName="doHotSpot";
				var parm1=context.id;
				var parm2=id;
			
				var errMsg=e.message + " in " + thisLib + "::" + fName + "\tcontext.id = [" + parm1 + "]\tid=[" + parm2 + "]\r";
			
			// Utility Function
			
				throw new Error(errMsg,"utility");
				
			// Event Handler - Uncomment this to throw a stacktrace
				//errHandle(new Error(errMsg), SEVERITY_LOW, thisLib+"::"+fName,"error");
	
			}
	 	}
	