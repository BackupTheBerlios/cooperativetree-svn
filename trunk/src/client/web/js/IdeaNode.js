function IdeaNode(){
	this.init();
}

IdeaNode.prototype = {

	init:function(){
		var elemResult = this.htmlTemplate.generateElements(document);
		this.html = elemResult.elements;
		this.ids = elemResult.ids;
		this.nodeId = null;
		this.editMode = false;
		var me = this;
		this.ids.titleField.onclick=function(){
			if(!me.editMode){
				me.switchToEditable();
			}
		}
		this.ids.titleField.onmouseover=function(){
			me.displayMenu();
		}
	},
	
	displayMenu:function(){
		this.menuManager.show(this.ids.titleField);
	},
	
	setMenuManager:function(menuManager){
		this.menuManager = menuManager;
	},
	
	getHtml:function(){
		return this.html;
	},
	
	setTitle:function(title){
		this.ids.titleField.firstChild.data = title;
	},
	
	setId:function(id){
		this.ids.idField.firstChild.data = id;
	},
	
	getTitle:function(){
		return this.ids.titleField.firstChild.data;
	},
	
	switchToEditable:function(){
		this.text = this.ids.titleField.removeChild(this.ids.titleField.firstChild);
		this.editField = this.editFieldTemplate.generateElements(document).elements;
		this.editField.setAttribute("value",this.text.data);
		this.ids.titleField.appendChild(this.editField);
		this.editMode = true;
		this.editField.focus();
		
		var me = this;
		this.editField.onkeyup=function(e){
			if(e.keyCode==13){
				me.setTitle(this.value);
				me.setTitleBackend(this.value);
				me.switchToText(this.value);
			}else if(e.keyCode==27){
				me.switchToText(this.text);
			}
		}
	},
	
	setTitleBackend:function(title){
	var me = this;
		ajaxPut(me.backendUrls.setTitle+"?nodeId="+this.nodeId+"&title="+title,null,function(text){				
						
		});
	},
	
	switchToText:function(text){
		this.ids.titleField.removeChild(this.ids.titleField.firstChild);
		this.text.data = text;
		this.ids.titleField.appendChild(this.text);
	},
	
	load:function(){
		if(this.nodeId){
			var me = this;
			ajaxLoad(this.backendUrls.get+"?nodeId="+this.nodeId,null,function(text){				
				me.loadFromJson(eval('('+text+')'));
			});
		}
	},
	
	loadFromJson:function(json){
		this.setTitle(json.title);
		this.setId("id:"+json.nodeId);
		this.nodeId = json.nodeId;
		for(var i=0,n=json.childs.length;i<n;i++){
			var node = new IdeaNode();
			node.setBackendUrls(this.backendUrls);
			node.setMenuManager(this.menuManager);
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
      				e("span","idField").att("class","ideaNodeId").add(t("empty"))
      			).add(
      				e("div","titleField").att("class","ideaNodeTitle").add(t("empty"))
      			)
      			/*.add(
      				e("span","menuContainer")
      			)*/	      			
    		).add(
      			e("td","childContainer")
    		)
    	)
  	),
  	
  	editFieldTemplate:e("input").att("type","text").att("class","ideaNodeTitleEdit").att("value","empty")
  	
  	
}


