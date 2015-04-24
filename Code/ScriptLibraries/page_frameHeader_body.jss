// @generated gbsid='page_frameHeader'
// -----------------------------------------------------------------
// Generated by Xcelerator 
// -----------------------------------------------------------------

import xcel_ssjs_atFunctions;
import xcel_ssjs_atCommands;
import xcel_ssjs_common;


// @generated gbsid='formula_2'
function button_Create_New_Ticket_click() {
  // @Command([Compose]; "ticket")
  try {
    return @Command( 
    	"[Compose]",
    	"ticket" 
    ) ;  
  } catch (e) {
    errHandle(e, button_Create_New_Ticket_click, SEVERITY_LOW, "error") ;
  }
}


// @generated gbsid='formula_1'
function computedtext_1_value() {
  // @DbTitle
  try {
    return @DbTitle() ;  
  } catch (e) {
    errHandle(e, computedtext_1_value, SEVERITY_LOW, "error") ;
  }
}


// @generated gbsid='formula_3'
function computedtext_2_value() {
  // @Text(@Now; "D0S0")
  try {
    return @Text( 
    	@Now(),
    	"D0S0" 
    ) ;  
  } catch (e) {
    errHandle(e, computedtext_2_value, SEVERITY_LOW, "error") ;
  }
}


// @generated gbsid='formula_4'
function computedtext_3_value() {
  // roles := @UserRoles;
  // @Name([CN]; @UserName) +
  // @If(@IsMember("[manager]"; roles); " (manager)"; "") +
  // @If(@IsMember("[staff]"; roles); " (staff)"; "")
  try {
    var roles = resolve( "roles", this ) ;
    roles = @UserRoles() ;
    return @Name( 
    	"[CN]",
    	@UserName() 
    ) + @If( 
    	@IsMember( 
    		"[manager]",
    		roles 
    	),
    	" (manager)",
    	"" 
    ) + @If( 
    	@IsMember( 
    		"[staff]",
    		roles 
    	),
    	" (staff)",
    	"" 
    ) ;  
  } catch (e) {
    errHandle(e, computedtext_3_value, SEVERITY_LOW, "error") ;
  }
}
