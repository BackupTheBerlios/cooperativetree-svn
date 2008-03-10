function MenuManager(container){
	this.init(container);
}

MenuManager.prototype = {
	
	deleteButtonTemplate:e("span","deleteButton").att("class","menuButton").add(t("del")),
	addPreviousButtonTemplate:e("span","previousButton").att("class","menuButton").add(t("addPrevious")),

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
		
		this.element = element;
		this.element.style.position="relative";
		this.element.style.zIndex = "510";
		
		if(!this.delButton){
			this.delButton = this.deleteButtonTemplate.generateElements(document).elements;
			this.delButton.style.display="inline";
		}
		
		this.delButton.style.zIndex = "520";
		this.delButton.style.top = "20"
		this.delButton.firstChild.data = this.element.clientTop;
		
		this.menuContainer.appendChild(this.delButton);
		this.screenMasker.mask();
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
		/*
		this.element.style.zIndex = "499";
		
		this.currentContainer.removeChild(this.delButton);
		this.currentContainer.removeChild(this.addPreviousButton);
		*/
		
	}
}