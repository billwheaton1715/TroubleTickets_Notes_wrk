/** Contains OpenLog application code developed by Julian Robichaux.

/**
	 * =======================================================
	 * <HEADER>
	 * NAME:	OpenLogXPages server side javascript library
	 * VERSION:	20080903
	 * AUTHOR(S):	Matt White
	 * ORIGINAL SOURCE:	The OpenLog database, available as an
	 * open-source project at http://www.OpenNTF.org
	 * HISTORY:
	 * 20080903:	initial version
	 * 
	 * DISCLAIMER:
	 * This code is provided "as-is", and should be used at your own risk. 
	 * The authors make no express or implied warranty about anything, 
	 * and they will not be responsible or liable for any damage caused by 
	 * the use or misuse of this code or its byproducts. No guarantees are 
	 * made about anything.
	 *
	 * That being said, you can use, modify, and distribute this code in any
	 * way you want, as long as you keep this header section intact and in
	 * a prominent place in the code.
	 * </HEADER>
	 * =======================================================

This library contains generic functions that can be used to log events and errors
to the OpenLog database. All you have to do it copy this script library to any
database that should be sending errors to the OpenLog database, and add then add
it as a resource to the XPage where you want to log from.

When you want to log an event use this line:

log.logEvent("Hello World");

To log an error use this line:

log.logError("Oops, we've had an error!");

For additional functionality, you can add extra parameters to each call, see the 
code below for the parameters.

So a full example error log might look like:

		var msg = "getVotesDb Error: " + e.getMessage() + " while trying to get the VotesDB Path";
		log.logError(msg, SEVERITY_HIGH, e.getMessage, null, "serverSide", "getVotesDb", null, null);

The master copy of this script library resides in the OpenLog database. 
All copies of this library in other databases should be set to inherit changes from 
that database.
*/

SEVERITY_HIGH = "2";
SEVERITY_MEDIUM = "1";
SEVERITY_LOW = "0";
TYPE_ERROR = "Error";
TYPE_EVENT = "Event";

OpenLog = function(){
	var logDb = null;
	

	this.prototype.getLogDbPath = function (){
		logDbPath = "OpenLog.nsf";
	}
	
	/**
	A generic logging function
	@Param		msg				The message you want to log
	@Param		severity		(Optional)	The severity associated with the message (see constants)
	@Param		location		(Optional)	The XPage where the event was logged
	@Param		method			(Optional)	The method or control where the event was logged
	@Param		document		(Optional)	The document associated with the event
	*/
	this.prototype.logEvent = function(msg, severity, location, method, document){
		try {
			var logDoc = this.createBasicLog();
			logDoc.appendItemValue("LogEventType", TYPE_EVENT);
			if (!msg)
				msg = "" + msg;
			logDoc.appendItemValue("LogErrorMessage", msg);
			logDoc.appendItemValue("LogMessage", msg);
			if (severity)
				logDoc.appendItemValue("LogSeverity", severity);
			if (!location)
				location = session.getURL();
			logDoc.appendItemValue("LogFromAgent", location);
			if (method)
				logDoc.appendItemValue("LogFromMethod", method);
			if (document){
				var rtitem = logDoc.createRichTextItem("LogDocInfo");
				rtitem.appendDocLink(document);
			}
			logDoc.save();
		}catch (e){
			this.logError("Error in OpenLog logEvent: " + e.getMessage, SEVERITY_HIGH, e, null, "xcel_ssjs_OpenLog", "logEvent", null, document);
		}
	}
	
	/**
	A generic logging function
	@Param		msg				The message you want to log
	@Param		severity		(Optional)	The severity associated with the message (see constants)
	@Param		error			(Optional)	The Error object
	@Param		errornumber		(Optional)	The errornumber associated with the error
	@Param		location		(Optional)	The XPage where the event was logged
	@Param		method			(Optional)	The method or control where the event was logged
	@Param		errorline		(Optional)	The line where the error occurred
	@Param		document		(Optional)	The document associated with the event
	*/
	this.prototype.logError = function(msg, severity, error, errornumber, location, method, errorline, document){
		try {
			var logDoc = this.createBasicLog();
			logDoc.appendItemValue("LogEventType", TYPE_ERROR);
			if (!msg)
				msg = "" + msg;
			logDoc.appendItemValue("LogErrorMessage", msg);
			logDoc.appendItemValue("LogMessage", msg);
			if (severity)
				logDoc.appendItemValue("LogSeverity", severity);
			if (error){
				msg += error;
			}
			if (errornumber)
				logDoc.appendItemValue("LogErrorNumber", errornumber);
			if (!location)
				location = session.getURL();
			logDoc.appendItemValue("LogFromAgent", location);
			if (method)
				logDoc.appendItemValue("LogFromMethod", method);
			if (errorline)
				logDoc.appendItemValue("LogErrorLine", errorline);
			if (document){
				var rtitem = logDoc.createRichTextItem("LogDocInfo");
				rtitem.appendDocLink(document);
			}
			logDoc.save();
		}catch (e){
			print("Error in OpenLog logError: " + e.getMessage + " while trying to log error: " + msg + " , " + location + ", " + method);
		}
	}
	
	this.prototype.createBasicLog = function(){
		this.getLogDbPath();
		var doc;
		try {
			doc = this.getLogDb().createDocument();
		}catch (e){
			this.logDb = session.getDatabase(database.getServer(), logDbPath);
			doc = this.getLogDb().createDocument();
		}
		doc.appendItemValue("Form", "LogEvent");
		doc.appendItemValue("LogUserName", @UserName());
		doc.appendItemValue("LogEffectiveName", session.getEffectiveUserName());
		doc.appendItemValue("LogClientVersion", session.getNotesVersion());
		doc.appendItemValue("LogFromServer", database.getServer());
		doc.appendItemValue("LogFromDatabase", database.getFilePath());
		doc.appendItemValue("LogEventTime", session.createDateTime(new Date()));
		doc.appendItemValue("LogAgentStartTime", session.createDateTime(new Date()));
		return doc;
	}
	
	this.prototype.getLogDb = function(){
		if (this.logDb == null){
			this.logDb = session.getDatabase(database.getServer(), logDbPath);
		}
		return this.logDb;
	}
}

var log = new OpenLog();