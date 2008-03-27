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
		/*this.ids.titleField.onclick=function(){
			if(!me.editMode){
				me.switchToEditable();
			}
		}
		this.ids.titleField.onclick=function(){
			me.displayMenu();
			me.ids.titleField.onclick=function(){
				if(!me.editMode){
					me.switchToEditable();
				}
			}
		}
		this.ids.titleField.onmouseover=function(){
			me.displayHelp();
		}*/
		
		this.descField = this.descFieldTemplate.generateElements(document).elements;
		this.descField.onclick=function(event){
			me.hideDesc();
			me.showDescEdit();
		}
		this.descEdit = this.descEditTemplate.generateElements(document).elements;
		
		this.ids.titleField.onmouseover=function(event){		
			me.callManager(event);
		}
		this.ids.titleField.onclick=function(event){
			me.callManager(event);
		}
		this.ids.titleField.onmouseout=function(event){
			me.callManager(event);
		}
		
	},
	
	callManager:function(event){
		
		this.ideaNodeManager.action(event,this);
	},
		
	setIdeaNodeManager:function(ideaNodeManager){
		this.ideaNodeManager = ideaNodeManager;
	},
	
	getHtml:function(){
		return this.html;
	},
	
	setTitle:function(title){
		this.ids.titleField.firstChild.data = title;
	},
	
	setId:function(id){
		//this.ids.idField.firstChild.data = id;
	},
	
	getTitle:function(){
		return this.ids.titleField.firstChild.data;
	},
	
	switchToEditable:function(){
		this.text = this.ids.titleField.removeChild(this.ids.titleField.firstChild);
		this.titleEdit = this.titleEditTemplate.generateElements(document).elements;
		this.titleEdit.setAttribute("value",this.text.data);
		this.ids.titleField.appendChild(this.titleEdit);
		this.editMode = true;
		this.titleEdit.focus();
		
		var me = this;
		this.titleEdit.onkeyup=function(e){
			if(e.keyCode==13){
				me.setTitle(this.value);
				me.setTitleBackend(this.value);
				me.switchToText(this.value);
			}else if(e.keyCode==27){
				me.switchToText(this.text);
			}
		}
	},
	
	switchToText:function(text){
		this.ids.titleField.removeChild(this.ids.titleField.firstChild);
		this.text.data = text;
		this.ids.titleField.appendChild(this.text);
	},
	
	showDescEdit:function(){
		this.descEdit.style.zIndex = "510";
		this.pos = YAHOO.util.Dom.getXY(this.ids.titleField);
		this.ids.descContainer.appendChild(this.descEdit);
		YAHOO.util.Dom.setXY(this.descEdit,[
			this.pos[0]+this.ids.titleField.clientWidth,
			this.pos[1]+(this.ids.titleField.clientHeight/2)-(this.descEdit.clientHeight/2)
		]);
		this.descEdit.focus();
		
	},
	showDescField:function(){
		this.descField.style.zIndex = "510";
		this.pos = YAHOO.util.Dom.getXY(this.ids.titleField);
		this.ids.descContainer.appendChild(this.descField);
		YAHOO.util.Dom.setXY(this.descField,[
			this.pos[0]+this.ids.titleField.clientWidth,
			this.pos[1]+(this.ids.titleField.clientHeight/2)-(this.descField.clientHeight/2)
		]);
		
	},
	hideDesc:function(){
		while(this.ids.descContainer.firstChild){
			this.ids.descContainer.removeChild(this.ids.descContainer.firstChild);
		}
	},
	
	
	setTitleBackend:function(title){
	var me = this;
		ajaxPut(me.backendUrls.setTitle+"?nodeId="+this.nodeId+"&title="+title,null,function(text){				
						
		});
	},
	
	setDescBackend:function(desc){
	var me = this;
		ajaxPut(me.backendUrls.setDesc+"?nodeId="+this.nodeId+"&desc="+desc,null,function(text){				
						
		});
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
		this.desc = json.desc;
		this.setId("id:"+json.nodeId);
		this.nodeId = json.nodeId;
		for(var i=0,n=json.childs.length;i<n;i++){
			var node = new IdeaNode();
			node.setBackendUrls(this.backendUrls);
			node.setIdeaNodeManager(this.ideaNodeManager);
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
      			e("td")
      			/*.add(
      				e("span","idField").att("class","ideaNodeId").add(t("empty"))
      			)*/
      			.add(
      				e("div","titleField").att("class","ideaNodeTitle").add(t("empty"))
      			)
      			.add(
      				e("span","descContainer")
      			)      			
    		).add(
      			e("td","childContainer")
    		)
    	)
  	),
  	
  	titleEditTemplate:e("input","titleEdit").att("type","text").att("class","ideaNodeTitleEdit").att("value","empty"),
  	
  	descFieldTemplate:e("div","descField").att("class","descContainer").add(t("no Description")),
  	
  	descEditTemplate:e("textarea","descEdit").att("class","descContainer").add(t("no Description"))
  	
  	
}


