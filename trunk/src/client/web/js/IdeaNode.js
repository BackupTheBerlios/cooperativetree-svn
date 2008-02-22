function IdeaNode(){
	this.init();
}

IdeaNode.prototype = {

	init:function(){
		var elemResult = this.htmlTemplate.generateElements(document);
		this.html = elemResult.elements;
		this.ids = elemResult.ids;
		this.nodeId = null;
	},
	
	getHtml:function(){
		return this.html;
	},
	
	setTitle:function(title){
		this.ids.titleField.firstChild.data = title;
	},
	
	getTitle:function(){
		return this.ids.titleField.firstChild.data;
	},
	
	load:function(){
		if(this.nodeId){
			var me = this;
			ajaxLoad(this.backendUrls.get+"?nodeId="+this.nodeId,null,function(text){
				alert(text);
				me.loadFromJson(eval('('+text+')'));
			});
		}
	},
	
	loadFromJson:function(json){
		this.setTitle(json.title);
		this.nodeId = json.nodeId;
		for(var i=0,n=json.childs.length;i<n;i++){
			var node = new IdeaNode();
			node.loadFromJson(json.childs[i]);
			this.ids.childContainer.appendChild(node.html);
		}
		
	},
	
	setBackendUrls:function(urls){
		this.backendUrls = urls;
	},
	
	backendUrls:null,
	
	htmlTemplate:e("table").add(
		e("tbody").add(
    		e("tr").add(
      			e("td").add(
      				e("span","titleField").att("class","ideaNodeTitle").add(t("empty"))
      			)	      			
    		).add(
      			e("td","childContainer")
    		)
    	)
  	)
  	
  	
}


