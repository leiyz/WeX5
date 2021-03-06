/*! 
* WeX5 v3 (htttp://www.justep.com) 
* Copyright 2015 Justep, Inc.
* Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
*/ 
define(function(require) {
	var Object = require("./object");
	
	var Context = Object.extend({
		constructor : function(data, model) {
			this.data = data;
			this.model = model;
			this.callParent(data);
		},
		getRequestParamers : function() {
			var result = {};
			if (this.data && this.data.params) {
				result = this.data.params;
			}
			return result;
		},
		
		isDebug: function(){
			if (this.getRequestParameter("debug") === "true"){
				return true;
			}
			
			return this.data && this.data.isDebug;
		},

		getRequestParameter : function(name) {
			var result = null;
			if (this.data && this.data.params) {
				result = this.data.params[name];
			}
			return result || "";
		},
		_setRequestParameter : function(name, value) {
			if (this.data && this.data.params) {
				this.data.params[name] = value;
			}
		},
		_getProperty : function(name) {
			var result = null;
			if (this.data) {
				result = this.data[name];
			}
			return result || "";
		},
		getID : function() {
			return this.model.getContextID();
		},
		
		getSkin : function() {
			return this.getRequestParameter("$skin");
		}

	});
	
	return Context;
});