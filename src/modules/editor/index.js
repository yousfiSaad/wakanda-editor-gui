
var Module =  {
	activate(loaded) {
		//Core Plugin Editor
		
		switch(IDE.qParams.mode){
			case "html":
				require.ensure(["./EditorHTML.js"], function(require){
					var Editor  = require("./EditorHTML.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			case "javascript":
				require.ensure(["./EditorJS.js"], function(require){
					var Editor  = require("./EditorJS.js");
					IDE.editor = new Editor({id:"editor", lib: ace});
					loaded();
				});
				break;
			default:
				require.ensure(["./Editor.js"], function(require){
					var Editor  = require("./Editor.js");
					IDE.editor = new Editor({id:"editor", lib: ace, mode:IDE.qParams.mode});
					loaded();
				});
		}
	}
}

export default Module;