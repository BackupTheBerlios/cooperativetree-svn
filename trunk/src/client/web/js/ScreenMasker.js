function ScreenMasker() { 
    this.init();
}; 

ScreenMasker.prototype = {
	init:function(){
		this.div = document.createElement("div");
		this.div.style.top = "0"
		this.div.style.left = "0"
		this.div.style.width = "100%"
		this.div.style.height = "100%"
		this.div.style.position = "absolute" 
		this.div.style.backgroundColor = "black" 
		//this.div.style.opacity = "0.2" //for Gecko
		//this.div.style.filter="alpha(opacity = 20)" //for IE
		this.div.style.opacity = "0.1" //for Gecko
		this.div.style.filter="alpha(opacity = 0)" //for IE
		this.div.style.display = "none"
		this.div.style.zIndex = "500" 
		//if(div&&div.style&&window&&window.scrollY){
		this.div.obj = this;
		var me = this;		
		this.div.onclick = function(){me.removeMask();};
		//var menu = document.getElementById('userTabView');

		//menu.insertBefore(this.div,menu.firstChild);

		document.body.insertBefore(this.div,document.body.firstChild);

	},

	removeMask:function(){
		this.div.style.display="none"
	},


	mask:function(){
		/*if(window.scrollY){

			this.div.style.top = window.scrollY+"px"

		}*/
		if(window.outerHeight){
			this.div.style.height = window.outerHeight+"px"
		}

		this.div.style.display="block";
		this.div.style.opacity="0.5";
		//var anim = new YAHOO.util.Anim(this.div, { opacity: { to: 0.1 } }, 0.3, YAHOO.util.Easing.easeOut)

		//anim.onComplete.subscribe(function(){me.cal.hide();})

		//anim.animate();


	},

	setOnClick:function(func){

		this.div.onclick = func

	},
	
	setOnMouseOver:function(func){

		this.div.onmouseover = func

	}

}