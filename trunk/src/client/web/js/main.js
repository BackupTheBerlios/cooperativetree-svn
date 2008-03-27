window.onload = function(){
	var container = document.getElementById("resultContainer");

	var ideaNodeManager = new IdeaNodeManager(document.getElementById("rootContainer"));


	var node = new IdeaNode();
	node.nodeId = 1;
	node.setBackendUrls({
		get:"../../server/php/getJson.php",
		setTitle:"../../server/php/setTitle.php"
	});
	node.setIdeaNodeManager(ideaNodeManager);
	var h = node.getHtml();	
	container.appendChild(h);
	node.load();
	//alert("finish");
}