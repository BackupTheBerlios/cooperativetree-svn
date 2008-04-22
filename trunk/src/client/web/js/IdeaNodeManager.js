function IdeaNodeManager(container){
	this.init(container);
}

IdeaNodeManager.prototype = {

	
	/*addPreviousButtonTemplate:e("span","previousButton").att("class","menuButton").add(t("addPrevious")),
	addNextButtonTemplate:e("span","nextButton").att("class","menuButton").add(t("addNext")),
	appendButtonTemplate:e("span","appendButton").att("class","menuButton").add(t("append")),
	deleteButtonTemplate:e("span","deleteButton").att("class","menuButton").add(t("del")),
	helpButtonTemplate:e("span","helpButton").att("class","menuButton").add(t("click to edit")),
	*/
	
	
	init:function(container){
		this.menuContainer = container;
		this.screenMasker = new ScreenMasker();
		var me = this;
		//this.screenMasker.setOnClick(function(){});
		this.screenMasker.setOnMouseOver(function(){
			me.hide();
			me.status = "default";
			me.currentNode = null;
		});

	
		this.zIndexButton = "520";
		this.status = "default";
		this.htmlInstances = {};
		
		this.editButton = e("span","editButton").att("class","menuButton").add(t("edit")).generateElements(document).elements;
		this.editButton.onmouseover = function(){
			//me.status="edit";
			//me.clear();
			me.currentNode.hideDesc();
			me.detectPosition(me.currentNode.ids.titleField);
			me.display("addPreviousBrotherNode");
			me.display("addNextBrotherNode");
			me.display("appendChildNode");
			me.display("removeNode");
		}
		
		this.descContainer=e("div","descContainer").att("class","descContainer").add(t("no Description")).generateElements(document).elements;
		this.descContainer.onclick = function(){
			alert('ok');
		}
		
		this.addPreviousBrotherNode=e("span").att("class","menuButton").add(t("addPrevious")).generateElements(document).elements;
		this.addPreviousBrotherNode.onclick = function(){
			me.currentNode.addPreviousBrotherNode();
		}
		
		this.addNextBrotherNode=e("span").att("class","menuButton").add(t("addNext")).generateElements(document).elements;
		this.addNextBrotherNode.onclick = function(){
			alert('addNextBrotherNode');
		}
		
		this.appendChildNode=e("span").att("class","menuButton").add(t("appendChild")).generateElements(document).elements;
		this.appendChildNode.onclick = function(){
			me.currentNode.appendChildNode();
		}
		
		this.removeNode=e("span").att("class","menuButton").add(t("removeNode")).generateElements(document).elements;
		this.removeNode.onclick = function(){
			me.currentNode.deleteNode();
		}
		
		
	},
	
	
	action:function(event,target){

   		if(this.status=="default"){
   			if(event.type=="mouseover"){
   				this.status = "in";
   				this.currentNode = target;
   				//this.currentNode.ids.titleField.style.background = "000";
   				//this.showHelp(target.ids.titleField);
				this.detectPosition(this.currentNode.ids.titleField);
				this.display("desc");
				this.display("edit");
				var me = this;
				
				this.screenMasker.mask(0.1,"white");
				
				//this.showEditButton();
   			}
   		}else if(this.status=="in"){   			
   			if(event.type=="click"){
   				this.clear();
   				this.currentNode.switchToTitleEdit();
   			}/*else if(event.type=="mouseout"){
   				this.clear();
   				this.status="default";
   				this.currentNode = target;
   			}*/
   			
   		}else if(this.status=="edit"){
   		
   		}
	
	},
	
	detectPosition:function(element){
		element.style.position="relative";
		element.style.zIndex = "510";
		this.pos = YAHOO.util.Dom.getXY(element); 

	},
	
	display:function(id){
		
		if(id=="desc"){
			/*
			this.menuContainer.appendChild(this.descContainer);
			this.descContainer.firstChild.data= this.currentNode.desc+" "+this.pos[0]+" "+this.pos[1];			
			YAHOO.util.Dom.setXY(this.descContainer,[
				this.pos[0]+this.currentNode.ids.titleField.clientWidth,
				this.pos[1]+(this.currentNode.ids.titleField.clientHeight/2)-(this.descContainer.clientHeight/2)
			]);*/
			//this.currentNode.showDescEdit();
			this.currentNode.showDescField();
		}else if(id=="edit"){
			this.menuContainer.appendChild(this.editButton);
			YAHOO.util.Dom.setXY(this.editButton,[
				this.pos[0]-this.editButton.clientWidth+2,
				this.pos[1]+(this.currentNode.ids.titleField.clientHeight/2)-(this.editButton.clientHeight/2)
			]);
		}else if(id=="addPreviousBrotherNode"){
			this.menuContainer.appendChild(this.addPreviousBrotherNode);
			YAHOO.util.Dom.setXY(this.addPreviousBrotherNode,[
				this.pos[0]+(this.currentNode.ids.titleField.clientWidth/2)-(this.addPreviousBrotherNode.clientWidth/2),
				this.pos[1]-16
			]);
		}else if(id=="addNextBrotherNode"){
			this.menuContainer.appendChild(this.addNextBrotherNode);
			YAHOO.util.Dom.setXY(this.addNextBrotherNode,[
				this.pos[0]+(this.currentNode.ids.titleField.clientWidth/2)-(this.addNextBrotherNode.clientWidth/2),
				this.pos[1]+26
			]);
		}else if(id=="appendChildNode"){
			this.menuContainer.appendChild(this.appendChildNode);
			YAHOO.util.Dom.setXY(this.appendChildNode,[
				this.pos[0]+(this.currentNode.ids.titleField.clientWidth+2),
				this.pos[1]+6
			]);
		}else if(id=="removeNode"){
			this.menuContainer.appendChild(this.removeNode);
			this.removeNode.style.zIndex="520";
			YAHOO.util.Dom.setXY(this.removeNode,[
				this.pos[0]-this.removeNode.clientWidth+2,
				this.pos[1]-this.removeNode.clientHeight//(this.currentNode.ids.titleField.clientHeight/2)//
			]);
		}
	
	},
		/*
	showEditButton:function(){
		if(!this.delButton){
			this.delButton = this.deleteButtonTemplate.generateElements(document).elements;
			this.delButton.style.zIndex = this.zIndexButton;
			//this.delButton.style.display="inline";
		}
		if(!this.addPreviousButton){
			this.addPreviousButton = this.addPreviousButtonTemplate.generateElements(document).elements;
			this.addPreviousButton.style.zIndex = this.zIndexButton;			
		}
		if(!this.addNextButton){
			this.addNextButton = this.addNextButtonTemplate.generateElements(document).elements;
			this.addNextButton.style.zIndex = this.zIndexButton;			
		}
		if(!this.appendButton){
			this.appendButton = this.appendButtonTemplate.generateElements(document).elements;
			this.appendButton.style.zIndex = this.zIndexButton;			
		}
		
		
		this.menuContainer.appendChild(this.delButton);
		this.menuContainer.appendChild(this.addPreviousButton);
		this.menuContainer.appendChild(this.addNextButton);
		this.menuContainer.appendChild(this.appendButton);
		
		
		YAHOO.util.Dom.setXY(this.delButton,[this.pos[0]-(this.delButton.clientWidth+2),this.pos[1]+6]); 
		YAHOO.util.Dom.setXY(this.addPreviousButton,[this.pos[0]+(this.element.clientWidth/2)-(this.addPreviousButton.clientWidth/2),this.pos[1]-16]);
		YAHOO.util.Dom.setXY(this.addNextButton,[this.pos[0]+(this.element.clientWidth/2)-(this.addNextButton.clientWidth/2),this.pos[1]+26]);
		YAHOO.util.Dom.setXY(this.appendButton,[this.pos[0]+(this.element.clientWidth+2),this.pos[1]+6]); 
	},*/
	
	hide:function(){
		
		this.screenMasker.removeMask();
		this.currentNode.ids.titleField.style.zIndex = "490";
		
		
		this.clear();

	},
	
	clear:function(){
		if(this.currentNode){
			this.currentNode.hideDesc();
			this.currentNode.switchToTitleField();
			
			
		}
		while(this.menuContainer.firstChild){
			this.menuContainer.removeChild(this.menuContainer.firstChild);
		}
	}
}