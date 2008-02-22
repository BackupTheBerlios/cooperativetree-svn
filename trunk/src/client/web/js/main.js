window.onload = function(){
	var container = document.getElementById("resultContainer");

	var node = new IdeaNode();
	node.nodeId = 1;
	node.setBackendUrls({
		get:"../../server/php/getJson.php"
	});
	var h = node.getHtml();	
	container.appendChild(h);
	node.load();
	//alert("finish");
}