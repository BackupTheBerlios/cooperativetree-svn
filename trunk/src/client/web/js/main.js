window.onload = function(){
	var container = document.getElementById("resultContainer");

	var ideaNodeManager = new IdeaNodeManager(document.getElementById("rootContainer"));


	var node = new IdeaNode();
	node.nodeId = 1;
	node.backendUrls = {
		get:"../../server/php/getJson.php",
		setTitle:"../../server/php/setTitle.php",
		setDesc:"../../server/php/setDesc.php"
	};
	node.ideaNodeManager=ideaNodeManager;
	var h = node.html;	
	container.appendChild(h);
	node.load();
	//alert("finish");
}