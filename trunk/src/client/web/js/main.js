window.onload = function(){
	var container = document.getElementById("resultContainer");

	var menuManager = new MenuManager(document.getElementById("menuContainer"));


	var node = new IdeaNode();
	node.nodeId = 1;
	node.setBackendUrls({
		get:"../../server/php/getJson.php",
		setTitle:"../../server/php/setTitle.php"
	});
	node.setMenuManager(menuManager);
	var h = node.getHtml();	
	container.appendChild(h);
	node.load();
	//alert("finish");
}