function MenuManager(container){
	this.init(container);
}

MenuManager.prototype = {
	
	addPreviousButtonTemplate:e("span","previousButton").att("class","menuButton").add(t("addPrevious")),
	addNextButtonTemplate:e("span","nextButton").att("class","menuButton").add(t("addNext")),
	appendButtonTemplate:e("span","appendButton").att("class","menuButton").add(t("append")),
	deleteButtonTemplate:e("span","deleteButton").att("class","menuButton").add(t("del")),

	init:function(container){
		this.menuContainer = container;
		this.screenMasker = new ScreenMasker();
		var me = this;
		this.screenMasker.setOnClick(function(){
			me.hide();
		});
		this.screenMasker.setOnMouseOver(function(){
			me.hide();
		});
		
		
		
	},
	
	show:function(element){
		//YAHOO.util.Dom.setXY('foo', xy); 
		this.element = element;
		this.element.style.position="relative";
		this.element.style.zIndex = "510";
		 var pos = YAHOO.util.Dom.getXY(this.element); 
		
		var zIndexButton = "520";
		
		if(!this.delButton){
			this.delButton = this.deleteButtonTemplate.generateElements(document).elements;
			this.delButton.style.zIndex = zIndexButton;
			//this.delButton.style.display="inline";
		}
		if(!this.addPreviousButton){
			this.addPreviousButton = this.addPreviousButtonTemplate.generateElements(document).elements;
			this.addPreviousButton.style.zIndex = zIndexButton;			
		}
		if(!this.addNextButton){
			this.addNextButton = this.addNextButtonTemplate.generateElements(document).elements;
			this.addNextButton.style.zIndex = zIndexButton;			
		}
		if(!this.appendButton){
			this.appendButton = this.appendButtonTemplate.generateElements(document).elements;
			this.appendButton.style.zIndex = zIndexButton;			
		}
		
		this.menuContainer.appendChild(this.delButton);
		this.menuContainer.appendChild(this.addPreviousButton);
		this.menuContainer.appendChild(this.addNextButton);
		this.menuContainer.appendChild(this.appendButton);
		YAHOO.util.Dom.setXY(this.delButton,[pos[0]-(this.delButton.clientWidth+2),pos[1]+6]); 
		YAHOO.util.Dom.setXY(this.addPreviousButton,[pos[0]+(this.element.clientWidth/2)-(this.addPreviousButton.clientWidth/2),pos[1]-16]);
		YAHOO.util.Dom.setXY(this.addNextButton,[pos[0]+(this.element.clientWidth/2)-(this.addNextButton.clientWidth/2),pos[1]+26]);
		YAHOO.util.Dom.setXY(this.appendButton,[pos[0]+(this.element.clientWidth+2),pos[1]+6]); 
		//this.delButton.firstChild.data = this.element.clientWidth;
		
		this.screenMasker.mask(0.5,"white");
		/*
		this.currentContainer = container;
		
		
		if(!this.delButton){
			this.delButton = this.deleteButtonTemplate.generateElements(document).elements;
			this.delButton.style.zIndex = "520";
			this.delButton.style.top = "-14";
			this.delButton.style.display="inline";
		}
		if(!this.addPreviousButton){
			this.addPreviousButton = this.addPreviousButtonTemplate.generateElements(document).elements;
			this.addPreviousButton.style.zIndex = "520";
			this.addPreviousButton.style.top = "-24";
			//this.addPreviousButton.style.left = "-80";
			this.addPreviousButton.style.display="inline";
		}
		
		
		//del.style.top=container.clientTop;
		this.currentContainer.appendChild(this.delButton);
		this.currentContainer.appendChild(this.addPreviousButton);
		this.screenMasker.mask();
		*/
		
	},
	
	hide:function(){
		
		this.screenMasker.removeMask();
		this.element.style.zIndex = "490";
		this.menuContainer.removeChild(this.delButton);
		this.menuContainer.removeChild(this.addPreviousButton);
		this.menuContainer.removeChild(this.addNextButton);
		this.menuContainer.removeChild(this.appendButton);
		/*
		this.element.style.zIndex = "499";
		
		
		this.currentContainer.removeChild(this.addPreviousButton);
		*/
		
	}
}