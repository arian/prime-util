"use strict";

var prime = require("prime")
var slice = require("mout/array/slice")

function attempt( fn, args, scope ){
	try{
		return [ null, fn.apply( scope, args ) ]
	} catch( err ){
		return [ err, null ]
	}
}

module.exports = prime({
    parent: function(method){
		var parent, result;

		parent       = this._parent || this.constructor.parent;
		this._parent = parent.constructor.parent;
		result       = attempt(parent[method], slice(arguments, 1) , this );
		this._parent = parent;
		
		if( result[0] ){
			throw result[0];
		}

		return result[1]
    }
})




