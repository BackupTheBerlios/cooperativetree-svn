function IdeaNode(){
	this.init();
}

IdeaNode.prototype = {

	init:function(){
		var elemResult = this.htmlTemplate.generateElements(document);
		this.html = elemResult.elements;
		this.ids = elemResult.ids;
		this.nodeId = null;
		this.titleEditMode = false;
		var me = this;
		/*this.ids.titleField.onclick=function(){
			if(!me.editMode){
				me.switchToTitleEdit();
			}
		}
		this.ids.titleField.onclick=function(){
			me.displayMenu();
			me.ids.titleField.onclick=function(){
				if(!me.editMode){
					me.switchToTitleEdit();
				}
			}
		}
		this.ids.titleField.onmouseover=function(){
			me.displayHelp();
		}*/
		
		
		
		
		this.titleField = this.ids.titleField;
		this.titleField.onmouseover=function(event){		
			me.callManager(event);
		}
		this.titleField.onclick=function(event){
			me.callManager(event);
		}
		this.titleField.onmouseout=function(event){
			me.callManager(event);
		}
		this.titleEdit = this.titleEditTemplate.generateElements(document).elements;
		this.titleEdit.onkeyup=function(e){
			if(e.keyCode==13){
				me.setTitle(this.value);
				me.setTitleBackend(this.value);
				me.switchToTitleField();
			}else if(e.keyCode==27){
				me.rollBackTitle();
				me.switchToTitleField();
			}
		}
		this.titleTextNode = this.titleField.firstChild;
		
		this.descField = this.descFieldTemplate.generateElements(document).elements;
		this.descField.onclick=function(event){
			me.hideDesc();
			me.showDescEdit();
		}		
		this.descEdit = this.descEditTemplate.generateElements(document).elements;
		this.descEdit.onkeyup=function(e){
			if(e.keyCode==13&&e.ctrlKey){				
				me.setDescBackend(this.value);
				me.setDesc(this.value);
				me.hideDesc();
				me.showDescField();	
			}else if(e.keyCode==27){
				me.hideDesc();
				me.rollBackDesc();		
			}
		}
		
	},
	
	callManager:function(event){
		this.ideaNodeManager.action(event,this);
	},

	setId:function(id){
		//this.ids.idField.firstChild.data = id;
	},
	
	
	
	setTitle:function(title){
		if(!title){
			this.titleTextNode.data = "empty";
		}else{
			this.titleTextNode.data = title;
		}
		this.titleEdit.value=title;
	},
	getTitle:function(){
		return this.titleField.firstChild.data;
	},	
	switchToTitleEdit:function(){
		if(!this.titleEditMode){
			this.titleTextNode = this.titleField.removeChild(this.titleField.firstChild);
			//this.titleEdit.value = this.titleTextNode.data;
			this.titleField.appendChild(this.titleEdit);
			this.titleEditMode = true;
			this.titleEdit.focus();
		}
	},	
	switchToTitleField:function(){
		if(this.titleEditMode){
			this.titleField.removeChild(this.titleField.firstChild);
			//this.text.data = text;
			this.titleField.appendChild(this.titleTextNode);
			this.titleEditMode = false;
		}
	},	
	setTitleBackend:function(title){
		var me = this;
		ajaxPost(me.backendUrls.setTitle,"nodeId="+this.nodeId+"&title="+title,function(text){				
						
		});
	},
	rollBackTitle:function(){
		this.titleEdit.value = this.titleTextNode.data;
	},
	
	
	
	setDesc:function(desc){
		this.descField.firstChild.data = desc;
		this.descEdit.value=desc;
	},
	getDesc:function(){
		return this.descField.firstChild.data;
	},
	showDescEdit:function(){
		this.descEdit.style.zIndex = "510";
		this.pos = YAHOO.util.Dom.getXY(this.titleField);
		this.ids.descContainer.appendChild(this.descEdit);
		YAHOO.util.Dom.setXY(this.descEdit,[
			this.pos[0]+this.titleField.clientWidth,
			this.pos[1]+(this.titleField.clientHeight/2)-(this.descEdit.clientHeight/2)
		]);
		this.descEdit.focus();
	},
	showDescField:function(){
		this.descField.style.zIndex = "510";
		this.pos = YAHOO.util.Dom.getXY(this.titleField);
		this.ids.descContainer.appendChild(this.descField);
		YAHOO.util.Dom.setXY(this.descField,[
			this.pos[0]+this.titleField.clientWidth,
			this.pos[1]+(this.titleField.clientHeight/2)-(this.descField.clientHeight/2)
		]);
		
	},
	hideDesc:function(){
		while(this.ids.descContainer.firstChild){
			this.ids.descContainer.removeChild(this.ids.descContainer.firstChild);
		}
		this.rollBackDesc();	
	},
	setDescBackend:function(desc){
		var me = this;
		ajaxPost(me.backendUrls.setDesc,"nodeId="+this.nodeId+"&desc="+desc,function(text){				
						
		});
	},
	
	addNodeBackend:function(action){
		var me = this;
		ajaxPost(me.backendUrls.addNode,"action="+action+"&nodeId="+this.nodeId,function(text){				
						
		});
	},
	
	rollBackDesc:function(){
		this.descEdit.value = this.descField.firstChild.data;
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
		//this.desc = json.desc;
		this.descEdit.value = json.desc;
		this.descField.firstChild.data = json.desc;
		this.setId("id:"+json.nodeId);
		this.nodeId = json.nodeId;
		for(var i=0,n=json.childs.length;i<n;i++){
			var node = new IdeaNode();
			node.backendUrls=this.backendUrls;
			node.ideaNodeManager=this.ideaNodeManager;
			node.loadFromJson(json.childs[i]);
			this.ids.childContainer.appendChild(node.html);
		}
		
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


