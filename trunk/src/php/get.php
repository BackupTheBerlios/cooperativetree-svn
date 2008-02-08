<?php

header("Content-Type: text/xml");
$xml = '<?xml version="1.0" encoding="UTF-8" ?>';

include 'dbConnect.inc';
$nodeId=$_GET['nodeId'];

function retrieveChilds($nodeId){
	global $db;
	$result = mysql_db_query($db,"select child from  node_link where parent = $nodeId");
	if($result){
		
	}
}

function displayNode($nodeId,&$xml){
	global $db;
	$result = mysql_db_query($db,"select * from  node where id = $nodeId");
	if($result){
		
		$id = mysql_result($result,0,"id");
		$title = mysql_result($result,0,"title");
		$desc = mysql_result($result,0,"description");
		
		$xml .="<IdeaNode id=\"$id\" title=\"$title\" description=\"$desc\">";
		
		$xml .="</IdeaNode>";
	}else{
		$xml .='<error/>';
	}
}






displayNode($nodeId,$xml);

echo $xml;


?>