window.onload = function(){
	var container = document.getElementById("resultContainer");

	var ideaNodeManager = new IdeaNodeManager(document.getElementById("rootContainer"));


	var node = new IdeaNode();
	node.nodeId = 1;
	node.backendUrls = {
		get:"../../server/php/jsonGet.php"
		,setTitle:"../../server/php/setTitle.php"
		,setDesc:"../../server/php/setDesc.php"
		//,addNode:"../../server/php/addNode.php"
		,createNode:"../../server/php/jsonCreate.php"
		,appendChildNode:"../../server/php/jsonAppend.php"
		,detachNode:"../../server/php/jsonDetach.php"
		,deleteNode:"../../server/php/jsonDelete.php"
	};
	node.ideaNodeManager=ideaNodeManager;
	var h = node.html;	
	container.appendChild(h);
	node.load();
	//alert("finish");
}