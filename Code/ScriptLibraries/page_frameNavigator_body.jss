// @generated gbsid='page_frameNavigator'
// -----------------------------------------------------------------
// Generated by Xcelerator 
// -----------------------------------------------------------------

import xcel_ssjs_atFunctions;
import xcel_ssjs_atCommands;
import xcel_ssjs_common;


// @generated gbsid='formula_1'
function button_New_Ticket_click() {
  // @Command([Compose]; "ticket")
  try {
    return @Command( 
    	"[Compose]",
    	"ticket" 
    ) ;  
  } catch (e) {
    errHandle(e, button_New_Ticket_click, SEVERITY_LOW, "error") ;
  }
}

