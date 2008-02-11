window.onload = function(){
	
	var cont = document.getElementById("resultContainer");
	transform(cont,"data2.php","transf.php");
	//transform(cont,"get.php?nodeId=2","toHtml/xmlNodeToHtml.xslt");
}


function transform(containerElement,xmlFileName,xsltFileName){
		var xsltDoc= document.implementation.createDocument("", "", null);
		xsltDoc.async=false;
		xsltDoc.load(xsltFileName);
		var processor =new XSLTProcessor();
		processor.importStylesheet(xsltDoc);

		var xmlDoc= document.implementation.createDocument("", "", null);
		xmlDoc.async=false;
		xmlDoc.load(xmlFileName);
		var result = processor.transformToFragment(xmlDoc,document);

		var string = (new XMLSerializer()).serializeToString(result);
		alert("response : "+string);
		//containerElement.innerHTML = ""
		containerElement.appendChild(result);
}
