$(document).ready(function() {
	stylizerjs.init();
});

$( window ).resize(function() {
	stylizerjs.resize();
});

var stylizerjs = new function() {
	this.theme = [];

	this.init = function() {
		this.code.create();
		this._theme.create();
		this.tab.create();
		this.grid.create();
		this.fixed.create();
	}

	this.resize = function() {
		this.grid.create();
		this.fixed.resize();
	}

	this.hiddenAllChild = function(_target, _exceptions) {
		var keys = [];
		for(var i=0;i<_target.attributes.length;i++) {
			keys.push(_target.attributes[i].nodeName);
		}

		for(var i=0;i<keys.length;i++) {
			var _ext = false;
			for(var j=0; j < _exceptions.length ; j++ )
				if(keys[i] == _exceptions[j])
					_ext = true;
			if(_ext == false)
				$(_target).removeAttr(keys[i]);
		}
		
		$(_target).css('visibility','hidden');

		$(_target).children().each(function(){
			stylizerjs.hiddenAllChild(this, _exceptions);
		});
	}

	this.hasAttr = function(_target, _attrName) {
		for(var i = 0; i < _target.attributes.length ; i++)
			if(_target.attributes[i].nodeName == _attrName)
				return true;
		return false;
	}
}