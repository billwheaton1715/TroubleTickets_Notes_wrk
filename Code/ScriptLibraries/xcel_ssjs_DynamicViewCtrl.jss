function getViewNameScope(){
	
 	var url : XSPUrl;
	try {
		
		url = context.getUrl();
		
		if (url.getParameter("vw") != null && url.getParameter("vw") != ""){
			sessionScope.selectedView = unescape(url.getParameter("vw"));
		}else{	
			var views = database.getViews().iterator();
		 	var allArray = new Array();
			while (views.hasNext()) {
				var viewsArray = new Array();
				var view:NotesView = views.next();
				if (view.getName() != ""){
					viewsArray.push(view.getName());
					//viewsArray.push(view.getName());
					if (sessionScope.selectedView == null || sessionScope.selectedView == ""){
						sessionScope.selectedView = view.getName();
					}
					allArray.push(viewsArray);
				}
			}
		}
		
	}catch(e){
		print ("Error in getViewNameScope()= " + e);	
	}
	
}


function getFormNameScope(){
	
 	var url : XSPUrl;
	try {
		
		url = context.getUrl();
		
		if (url.getParameter("fm") != null && url.getParameter("fm") != ""){
			sessionScope.selectedForm = unescape(url.getParameter("fm"));
		}else{	
			var forms = database.getForms().iterator();
		 	var allArray = new Array();
			while (forms.hasNext()) {
				var formsArray = new Array();
				var form:NotesForm = form.next();
				if (form.getName() != ""){
					viewsArray.push(form.getName());
					//viewsArray.push(view.getName());
					if (sessionScope.selectedForm == null || sessionScope.selectedForm == ""){	
						//sessionScope.selectedView = view.getAliases().elementAt(0);
						sessionScope.selectedForm = view.getName();
					}
					allArray.push(formsArray);
				}
			}
		}
		
	}catch(e){
		print ("Error in getFormNameScope()= " + e);	
	}
	
}