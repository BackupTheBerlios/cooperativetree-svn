// JavaScript Document
function ElementBuilder(type,elemName,elemId){
  this.init(type,elemName,elemId);
}

ElementBuilder.prototype = {
  
  init:function(type,elemName,elemId){
  	this.type = type;
    this.elemName = elemName;    
    this.elemId =elemId;
    this.attributes = {};
    this.childs = [];  
  },
  
  add:function(elementBuilder){
    this.childs.push(elementBuilder);
    return this;
  },
  
  att:function(key,value){
    this.attributes[key]=value;
    return this;
  },
  
  generateElements:function(doc){
  	//alert(this.elemName+" begin "+this.elemId);
  	var elems = null;
    var ids = {};
  	if(this.type=="element"){
	    elems = doc.createElement(this.elemName);
	    if(this.elemId){
	      ids[this.elemId]=elems;
	    }
	    
	    for(var attr in this.attributes){
	      elems.setAttribute(attr,this.attributes[attr]);
	    }
	    //alert(this.childs.length);
	    for(var i=0,n=this.childs.length;i<n;i++){
	      var subResult = this.childs[i].generateElements(doc);
	      elems.appendChild(subResult.elements);
	      
	      for(var id in subResult.ids){
	        ids[id]=subResult.ids[id];
	      }
	    }
    }else if(this.type=="text"){
    	 var elems = doc.createTextNode(this.elemName);
    }
    //alert(this.elemName+" end "+this.elemId);
    return {elements:elems,ids:ids};
  }
}

function e(elemName,elemId){
  return new ElementBuilder("element",elemName,elemId);
}

function t(text){
  return new ElementBuilder("text",text);
}


/*

var html = c("table").att("id","15").add(
  c("tr").add(
    c("td").add(
      
    )
  )
)

var result=hmtl.generateElements();

this.html = result.html;
this.access = result.ids;



["table",{id:12,collspan:23},
  ["tr",
    ["td"],
  ] 
]

[
"table id='23' class='not' ",
"tr"
]

*/
