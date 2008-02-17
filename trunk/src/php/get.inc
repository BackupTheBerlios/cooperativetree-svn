<?php

include 'dbConnect.inc';

function retrieveChilds($nodeId){
	global $db;	
	$result = mysql_db_query($db,"select child from  node_link where parent = $nodeId");
	$i = 0;
	$childs[] = array();
	while($row=mysql_fetch_row($result)){
		$childs[$i]=$row[0];
		$i = $i+1;	
	}
	mysql_free_result($result);
	return $childs;	
}

function getNodeAsXml($nodeId){	
	global $db;
	$result = mysql_db_query($db,"select * from  node where id = $nodeId");
	if($result){
		
		$id = mysql_result($result,0,"id");
		$title = mysql_result($result,0,"title");
		$desc = mysql_result($result,0,"description");
		mysql_free_result($result);
		$xml .="<IdeaNode id=\"$id\" title=\"$title\" description=\"$desc\" >";
			
		$childs = retrieveChilds($id);
		foreach($childs as $value){
			$xml.=getNodeAsXml($value);
		}
	
		$xml .="</IdeaNode>";
	}
    return $xml;
}


?>