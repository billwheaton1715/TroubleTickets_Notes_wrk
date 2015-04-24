var utilities = {
	
	// Type Check Functions
	isEmpty : function(sValue) {
		try {
			return ((s == null) || (s.length == 0) || s.value == "" || s.value == "undefined");
		} catch(e) {
		      print("SSJS utilities.isEmpty: " + e.toString());
	    }
	},
	isObject : function(sValue) {
		try {
			if (obj == null) return false; else return true;
		} catch(e) {
		      print("SSJS utilities.isObject: " + e.toString());
	    }
	},	
		
	// Array Functions
	appendToArray : function(sArray, sValue) {
		try {
			return sArray.push(sValue);
		} catch(e) {
		      print("SSJS utilities.appendToArray: " + e.toString());
	    }
	},
	prependToArray : function(sArray, sValue) {
		try {
			return sArray.unshift(sValue);
		} catch(e) {
		      print("SSJS utilities.prependToArray: " + e.toString());
	    }
	},
	makeArray : function(sValue) {
		try {
			if (typeof sValue === "undefined" || sValue === null) {
		    	return []; 
			};
			if (typeof sValue === "java.util.Vector") {
				var a = [];
				var it = sValue.iterator();
				while(it.hasNext()) {
					a.push(it.next());
				}
				return a;
			};
			if (typeof sValue.toArray !== "undefined") {
				return sValue.toArray();
			};
			if(sValue.constructor === Array) {
				return sValue;
			};
			return [sValue];
		} catch(e) {
		      print("SSJS utilities.makeArray: " + e.toString());
	    }
	},
	removeEntry : function(sArray, sValue) {
		try {
			if(@IsNotMember(sValue, sArray)) {
				return sArray;
			};
			var res = @Trim(@Replace(sArray, sValue, ""));
			return (typeof res == "string" ? (res.length==0 ? [] : [res]) : res);
		} catch(e) {
		      print("SSJS utilities.removeEntry: " + e.toString());
	    }
	},
	sortNumericAscending : function(sArray) {
		try {
			return sArray.sort(function(a,b) {return a - b});
		} catch(e) {
		      print("SSJS utilities.sortNumericAscending: " + e.toString());
	    }
	},
	sortNumericDescending : function(sArray) {
		try {
			return sArray.sort(function(a,b) {return b - a});
		} catch(e) {
		      print("SSJS utilities.sortNumericDescending: " + e.toString());
	    }
	},
	sortScramble : function(sArray) {
		try {
			return sArray.sort(function(a,b) {return 0.5 - Math.random()});
		} catch(e) {
		      print("SSJS utilities.sortScramble: " + e.toString());
	    }
	},
	sortAlphaAscending : function(sArray) {
		try {
			return sArray.sort();
		} catch(e) {
		      print("SSJS utilities.sortAlphaAscending: " + e.toString());
	    }
	},
	sortAlphaDescending : function(sArray) {
		try {
			return sArray.reverse();
		} catch(e) {
		      print("SSJS utilities.sortAlphaDescending: " + e.toString());
	    }
	},
	
	implode : function(valueList,separator) {
		try {
			if (typeof valueList == "array") {
				valueList = valueList.join(separator);
			}
			return valueList;
		} catch(e) {
		      print("SSJS utilities.implode: " + e.toString());
	    }
	},	
	
	trim : function(s) {
		try {
			if(s == null) return null;
			return s.trim();
		} catch(e) {
		      print("SSJS utilities.trim: " + e.toString());
	    }
	},
	
	// Data Source Functions
	wrapNotesDocument : function(doc) {
		try {
			 return com.ibm.xsp.model.domino.wrapped.DominoDocument.wrap(doc.getParentDatabase().getFilePath(), doc, null, null, false, null);
		} catch(e) {
		      print("SSJS utilities.wrapNotesDocument: " + e.toString());
	    }
	},
	createNotesXspDocumentDataSource : function(varName) {
		try {
			 return createNotesXspDocumentDataSource(varName, null);
		} catch(e) {
		      print("SSJS utilities.createNotesXspDocumentDataSource: " + e.toString());
	    }
	},
	createNotesXspDocumentDataSource : function(varName, options) {
		try {
			var data = new com.ibm.xsp.model.domino.DominoDocumentData();
			data.setVar(varName);
			view.addData(data);
			//TODO
			if(options) {
				
			}
		} catch(e) {
		      print("SSJS utilities.createNotesXspDocumentDataSource: " + e.toString());
	    }
	},
	createNotesXspViewDataSource : function(dbName:string, viewName:string, varName:string) {
		try {
			var data = new com.ibm.xsp.model.domino.DominoViewData();
			data.setDatabaseName(dbName);
			data.setViewName(viewName);
			data.setVar(varName);
			data.setComponent(getView());
		    getView().addData(data);
		    return data;
		} catch(e) {
		      print("SSJS utilities.createNotesXspViewDataSource: " + e.toString());
	    }
	},
		
	// Control Functions
	getSelectableValues : function(id) {
		try {
			var rValue = [];
			var ComboBox = getComponent( id );
			var ChildrenList:java.util.ListIterator;
			ChildrenList = ComboBox.getChildren().listIterator();
			while (ChildrenList.hasNext()) {
				var Child = ChildrenList.next();
				if( typeof( Child ) == 'com.ibm.xsp.component.UISelectItemsEx' ){
			         var hlp = Child.getValue();
			         for( var i=0; i< hlp.length; i++ ){
			        	 rValue.push({'label': hlp[i].getLabel(),'value': hlp[i].getValue()});
			         }
			      }
			 	if( typeof( Child ) == 'com.ibm.xsp.component.UISelectItemEx' ){
			 		rValue.push({'label': Child.getItemLabel(),'value': Child.getItemValue()});
			  	}
			};
			return rValue;
		} catch(e) {
		      print("SSJS utilities.getSelectableValues('" + id + "'): " + e.toString());
	    }
	},
	getComponentValue : function(id) {
		try {
			var sControl = getComponent(id);
			var rValue = sControl.getSubmittedValue();
			if(null == rValue) {
				rValue = sControl.getValue();
			};
			return rValue;
		} catch(e) {
		      print("SSJS utilities.getComponentValue('" + id + "'): " + e.toString());
	    }
	},
	showPager : function(pager:com.ibm.xsp.component.xp.XspPager) {
		try {
			var state:com.ibm.xsp.component.UIPager.PagerState = pager.createPagerState();
			return state.getRowCount() > state.getRows();
		} catch(e) {
		      print("SSJS utilities.showPager('" + id + "'): " + e.toString());
	    }
	},
	
	// Validation Functions
	addMessage : function(control, sMessage) {
		try {
			var msgType = typeof sMessage;
			if(msgtype != "string") {
				sMessage = sMessage.toString();
			};
			var clientID = null;
			if(control != null) {
				clientID = control.getClientId(facesContext);
				try {
					control.setValid(false);
				} catch(e) {
					print("SSJS utilities.addMessage: Unable to set control ["+clientID+"]'s setValid.  Type is "+control);
				}
			};
			var msgObj = new javax.faces.application.FacesMessage(javax.faces.application.FacesMessage.SEVERITY_ERROR, sMessage, sMessage );
			try {
				facesContext.addMessage(clientID, msgObj); 
			} catch(e) {
				print("SSJS utilities.addMessage: Unable to add error message, using global -- " + e);
				facesContext.addMessage(null, msgObj);
			}
			
		} catch(e) {
		      print("SSJS utilities.addMessage: " + e.toString());
	    }
	},
	hasClientSideValdiation : function() {
		try {
			var reqParam = new com.ibm.xsp.context.RequestParameters ( facesContext );
			return reqParam.isClientSideValidation();
		} catch(e) {
		      print("SSJS utilities.hasClientSideValdiation: " + e.toString());
	    }
	},
	hasValidatonErrors : function() {
		try {
			return facesContext.getMessages().hasNext();
		} catch(e) {
		      print("SSJS utilities.hasValidatonErrors: " + e.toString());
	    }
	},
	createDocUrl : function(viewColumnId, viewEntry, hiddenId){
		try {
			var col:com.ibm.xsp.component.xp.XspViewColumn = getComponent(viewColumnId);
			var url = col.getDocumentUrl();
			var row:NotesXspViewEntry = viewEntry; 
			if(row){
				var unid = row.getUniversalID(); 
				if(unid != ""){
					getComponent(hiddenId).setValue(url+"&_blank");
				}
			}
			var windowUrl = url+"&_blank";
		
			var windowScript = "var childWindow = window.open('" + windowUrl + "', '', 'width=1120,height=600,resizable=yes, scrollbars=yes, toolbar=yes, titlebar=yes, menubar=yes, location=yes'+ popup_params(1120, 600));";
			view.postScript(windowScript);
		} catch(e) {
		      print("SSJS utilities.createDocUrl: " + e.toString());
	    }	

	},
	
	// Access and ACL Functions
	hasUserRole : function(userRole) {
		try {
			if(userRole.indexOf("[") === -1 && userRole.indexOf("]") === -1) {
				userRole = "[" + userRole + "]";
			}
			var roles=context.getUser().getRoles();
			if(roles.contains(userRole)) {
				return true;
			};
			return false;
		} catch(e) {
		      print("SSJS utilities.hasUserRole: " + e.toString());
	    }
	},
	getUserRoles : function() {
		try {
			var name:NotesName = session.createName(@UserName());
			var acl:NotesACL = session.getCurrentDatabase().getACL();
			var aclEnt:NotesACLEntry = acl.getEntry(name.getAbbreviated());
			if (aclEnt) {
				var userRoles:java.util.Vector = aclEnt.getRoles();
				return userRoles;
			}else{
				aclEnt = acl.getFirstEntry();
				while (aclEnt != null) {
					var aclName:NotesName = aclEnt.getNameObject();
					if (aclEnt.getUserType() == 4 || aclEnt.getUserType() == 3) {
						var members:java.util.Vector = utilities.getGroupMembers(aclName.getAbbreviated());
						if (members && members.contains(name.getCanonical())) {
							return aclEnt.getRoles();
						}
					}
					aclEnt = acl.getNextEntry();
				}
				return null;
			}
		} catch(e) {
		      print("SSJS utilities.getUserRoles: " + e.toString());
	    }
	},
	getGroupMembers : function(groupName) {
		try {
			var nabDb:NotesDatabase = session.getDatabase("","names.nsf");
			var userView:NotesView = nabDb.getView("($Users)");
			var members:java.util.Vector = null;
			if (groupName) {
				var groupDoc:NotesDocument = userView.getDocumentByKey(groupName);
				if (groupDoc) {
					members = groupDoc.getItemValue("Members");
				}
			}
			return members;
		} catch(e) {
		      print("SSJS utilities.getGroupMembers: " + e.toString());
	    }
	},
	//Environment Functions
	getExtLibVersion : function() {
		try {
			return com.ibm.xsp.extlib.util.ExtLibUtil.getExtLibVersion();
		} catch(e) {
		      print("SSJS utilities.getExtLibVersion: " + e.toString());
	    }
	},
	getDojoVersion : function() {
		try {
			var reqParam = new com.ibm.xsp.context.RequestParameters ( facesContext );
			return reqParam.getLibraryVersion();
		} catch(e) {
		      print("SSJS utilities.getDojoVersion: " + e.toString());
	    }
	},
	getPageName : function() {
		try {
			var path:string = facesContext.getExternalContext().getRequest().getRequestURI()
			return session.evaluate("@RightBack(\"" + path + "\"; \"/\")").get(0);
		} catch(e) {
		      print("SSJS utilities.getPageName: " + e.toString());
	    }
	},
	setHttpResponseHeader : function(headerName, headerValue) {
		try {
			var ec = facesContext.getExternalContext();
		    var response = ec.getResponse();
		    response.setHeader(headerName, headerValue);
		} catch(e) {
		      print("SSJS utilities.setHttpResponseHeader('" + headerName + "', '" + headerValue + "'): " + e.toString());
	    }
	},
	
	//User Agent Functions
	isMobile : function() {
		try {
			 var uAgent = context.getUserAgent().getUserAgent();
			  if (((uAgent.match("Windows Phone") !== null || uAgent.match("BlackBerry") !== null || uAgent.match("iPhone") !== null || param.platform=="iphone") || (uAgent.match("Android") !== null || param.platform=="android") || uAgent.match("iPad") !== null)){
			    return true;
			  } else {
			    return false;
			  }
		} catch(e) {
		      print("SSJS utilities.isMobile: " + e.toString());
	    }
	},
	isAndroid : function() {
		try {
			 var uAgent = context.getUserAgent().getUserAgent();
			  if ((uAgent.match("Android") !== null || param.platform=="android") || isAndroid == true){
			    return true;
			  } else {
			    return false;
			  }
		} catch(e) {
		      print("SSJS utilities.isAndroid: " + e.toString());
	    }
	},
	isAndroidTablet : function() {
		try {
			 var uAgent = context.getUserAgent().getUserAgent();
			  if ((uAgent.match("Android") !== null && uAgent.match("mobile") == null) || param.tablet == 'true'){
			    return true;
			  } else {
			    return false;
			  }
		} catch(e) {
		      print("SSJS utilities.isAndroidTablet: " + e.toString());
	    }
	},
	isiPhone : function() {
		try {
			 var uAgent = context.getUserAgent().getUserAgent();
			  if (uAgent.match("iPhone") !== null || param.platform=="iphone"){
			    return true;
			  } else {
			    return false;
			  }
		} catch(e) {
		      print("SSJS utilities.isiPhone: " + e.toString());
	    }
	},
	isIpad : function() {
		try {
			 var uAgent = context.getUserAgent().getUserAgent();
			  if (uAgent.match("iPad") !== null || param.ipad=="true"){
			    return true;
			  } else {
			    return false;
			  }
		} catch(e) {
		      print("SSJS utilities.isIpad: " + e.toString());
	    }
	},
	isBlackBerry : function() {
		try {
			 var uAgent = context.getUserAgent().getUserAgent();
			  if (uAgent.match("BlackBerry") !== null){
			    return true;
			  } else {
			    return false;
			  }
		} catch(e) {
		      print("SSJS utilities.isBlackBerry: " + e.toString());
	    }
	},
	isWindowsPhone : function() {
		try {
			 var uAgent = context.getUserAgent().getUserAgent();
			  if (uAgent.match("Windows Phone") !== null){
			    return true;
			  } else {
			    return false;
			  }
		} catch(e) {
		      print("SSJS utilities.isWindowsPhone: " + e.toString());
	    }
	},
	
	displayViewIcon : function(urlStr, colNum, vEntry_view, imgTitle){
		var imgStr = "";
		if (vEntry_view.getColumnValue(colNum) != ""){
			imgStr = "<div class='imgHolder viewImg'><img src='" + urlStr + "/" + vEntry_view.getColumnValue(colNum) +"' title='" + imgTitle + "' class='viewImg' /></div>";      				
		}else{
			imgStr = "<div class='imgHolder viewImg'>&nbsp;</div>";
		}
		return imgStr;
	}	
	
}
var themeFunctions = {
	getCurrentTheme : function (){
		if (context.getSessionProperty('xsp.theme') == null){
			context.setSessionProperty('xsp.theme', 'xcel_bootstrap.theme')
			return "xcel_bootstrap.theme";
		}else{
			return context.getSessionProperty('xsp.theme');
		};	
	},	
	getLayoutConfiguration : function(key) {
		return null;
		/*if (key == "noHeader"){	
			var config ={
				centerContent:""
			};
			
			return config;
		}else{		
			return null;
		}*/
	},
	getThemeId : function(type, key) {
		try {
			var defId = "";
			switch (type){
				case "xcel_cc_layoutStructure":
					defId = "layout.controlDefault";
					switch(key) {
						case "layoutContainer": defId="layout.container"; break;
						case "layoutContent": defId="layout.content"; break;
						case "layoutRowTop": defId="layout.content.top.row"; break;
						case "topContainer": defId="layout.content.top.container"; break;
						case "topContent": defId="layout.content.top.content"; break;
						case "layoutRowMiddle": defId="layout.content.row"; break;
						case "leadingContainer": defId="layout.content.leading.container"; break;
						case "leadingContent": defId="layout.content.leading.content"; break;
						case "centerContainer": defId="layout.content.center.container"; break;
						case "centerContent": defId="layout.content.center.content"; break;
						case "trailingContainer": defId="layout.content.trailing.container"; break;
						case "trailingContent": defId="layout.content.trailing.content"; break;
						case "layoutRowBottom": defId="layout.content.row"; break;
						case "bottomContainer": defId="layout.content.bottom.container"; break;
						case "bottomContent": defId="layout.content.bottom.content"; break;
					};break;
				case "xcel_cc_form":	
					defId = "layout.form.controlDefault";
					switch(key) {
						case "layoutContainer": defId="layout.form.container"; break;
						case "layoutContent": defId="layout.form.content"; break;
						case "topContainer": defId="layout.form.content.top.container"; break;
						case "topContent": defId="layout.form.content.top.content"; break;
						case "leadingContainer": defId="layout.form.content.leading.container"; break;
						case "leadingContent": defId="layout.form.content.leading.content"; break;
						case "centerContainer": defId="layout.form.content.center.container"; break;
						case "centerContent": defId="layout.form.content.center.content"; break;
						case "trailingContainer": defId="layout.form.content.trailing.container"; break;
						case "trailingContent": defId="layout.form.content.trailing.content"; break;
						case "bottomContainer": defId="layout.form.content.bottom.container"; break;
						case "bottomContent": defId="layout.form.content.bottom.content"; break;
					};break;
				case "xcel_cc_formLayoutSection":	
					//defId = "layout.form.controlDefault";
					switch(key) {
						case "sectionContainer": defId="layout.form.section.container"; break;
						case "sectionContent": defId="layout.form.section.content"; break;
						case "sectionTopContainer": defId="layout.form.section.content.top.container"; break;
						case "sectionTopContent": defId="layout.form.section.content.top.content"; break;
						case "sectionCenterContainer": defId="layout.form.section.content.center.container"; break;
						case "sectionCenterContent": defId="layout.form.section.content.center.content"; break;
						case "sectionBottomContainer": defId="layout.form.section.content.bottom.container"; break;
						case "sectionBottomContent": defId="layout.form.section.content.bottom.content"; break;
						
					};break;
				case "xcel_cc_formLayoutGrid":	
					//defId = "layout.form.controlDefault";					
					switch(key) {
						case "gridContainer": defId="layout.form.grid.container"; break;
						case "gridContent": defId="layout.form.grid.content"; break;
						case "gridTopContainer": defId="layout.form.grid.content.top.container"; break;
						case "gridTopContent": defId="layout.form.grid.content.top.content"; break;
						case "gridCenterContainer": defId="layout.form.grid.content.center.container"; break;
						case "gridCenterContent": defId="layout.form.grid.content.center.content"; break;
						case "gridBottomContainer": defId="layout.form.grid.content.bottom.container"; break;
						case "gridBottomContent": defId="layout.form.grid.content.bottom.content"; break;
					};break;
				case "xcel_cc_formGridRow":	
					//defId = "layout.form.controlDefault";
					switch(key) {
						case "rowContainer": defId="layout.form.grid.row.container"; break;
						case "rowContent": defId="layout.form.grid.row.content"; break;
					};break;
				case "xcel_cc_formGridRowColumn":	
					//defId = "layout.form.controlDefault";
					switch(key) {
					case "rowColumnContainer": defId="layout.form.grid.row.column.container"; break;
					};break;	
			}
			if(compositeData && compositeData.configuration && compositeData.configuration[key]) {
				return compositeData.configuration[key];
			} else {
				return defId;
			}	
		} catch(e) {
		    print("SSJS themeFunctions.getThemeId: " + e.toString());
		}
	}	
}

var upperCaseArray = function (x, idx, arr) {
/*
	Author: Gary Forbis
	Date: 6/1/2011
	Description: Converts all elements of an array to upper case
	Usage: myArray.forEach(upperCaseArray)
	
	Note: Converts all elements of the array to strings if they are not
*/
	arr[idx] = new String(x).toUpperCase();
}

Array.prototype.find = function(searchStr) {
/*
	Author: http://www.hunlock.com/blogs/Mastering_Javascript_Arrays
	Date: 6/1/2011
	Description: Array.indexOf() is a nice method but this extension is a little
	  more powerful and flexible. First it will return an array of all the
	  indexes it found (it will return false if it doesn't find anything).
	  Second in addition to passing the usual string or number to look for you
	  can actually pass a regular expression, which makes this the ultimate
	  Array prototype in my book.
	
	Usage: Array.find(searchStr)
*/
	var returnArray = false;
	for (i=0; i<this.length; i++) {
		if (typeof(searchStr) == 'function') {
			if (searchStr.test(this[i])) {
					if (!returnArray) { returnArray = [] }
				returnArray.push(i);
				}
			} else {
				if (this[i]===searchStr) {
					if (!returnArray) { returnArray = [] }
				returnArray.push(i);
			}
		}
	}
	return returnArray;
}