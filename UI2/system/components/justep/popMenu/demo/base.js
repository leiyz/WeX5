/*! 
* WeX5 v3 (htttp://www.justep.com) 
* Copyright 2015 Justep, Inc.
* Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
*/ 
define(function(require){
	var Model = function(){
		this.callParent();
	};
	Model.prototype.button1Click = function(event){
		this.comp("popMenu1").show();
	};

	Model.prototype.button2Click = function(event){
		alert('ok');
	};

	return Model;
});
