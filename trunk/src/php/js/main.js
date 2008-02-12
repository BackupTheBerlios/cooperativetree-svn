window.onload = function(){
	
	var cont = document.getElementById("resultContainer");
	//transform(cont,"data2.xml","transf.xslt");
	//transform(cont,"get.php?nodeId=2","toHtml/xmlNodeToHtml.xslt");
	cont.innerHTML = ajaxLoad("toHtml/getHtml.php?nodeId=2");
}


function transform(containerElement,xmlFileName,xsltFileName){
		
		/*var xsltDoc= document.implementation.createDocument("", "", null);
		xsltDoc.async=false;
		xsltDoc.load(xsltFileName);*/
		//var xsltDoc = ajaxLoad(xsltFileName);
		var xsltDoc = urlToDom(xsltFileName);
		var processor =new XSLTProcessor();
		processor.importStylesheet(xsltDoc.firstChild);

		/*var xmlDoc= document.implementation.createDocument("", "", null);
		xmlDoc.async=false;
		xmlDoc.load(xmlFileName);*/
		var xmlDoc = ajaxLoad(xmlFileName);
		//var xmlDoc = urlToDom(xmlFileName);
		var result = processor.transformToFragment(xmlDoc.documentElement,document);

		var string = (new XMLSerializer()).serializeToString(result);
		alert("response : "+string);
		//containerElement.innerHTML = ""
		containerElement.appendChild(result);
}

function urlToDom(url){
	var dom = (new DOMParser()).parseFromString(ajaxLoad(url), "text/xml");
	alert(dom);
	return dom;
}

function ajaxLoad(url){
	var result;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange  = function(){ 
         if(xhr.readyState  == 4){
              if(xhr.status  == 200){
              	//alert(xhr.responseText); 
                 result=xhr.responseText; 
                 //result=xhr.responseXml;
                 
              }else{
                 alert("error");
              }
         }
    }
   xhr.open("GET", url,  false); 
   xhr.send(null);
   return result;
}
