<?php

include 'dbConnect.inc';

function retrieveChilds($nodeId){
	global $db;	
	$result = mysql_db_query($db,"select child from  node_link where parent = $nodeId order by `order`");
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
		$xml .="<IdeaNode nodeId=\"$id\" title=\"$title\" description=\"$desc\" >";
			
		$childs = retrieveChilds($id);
		foreach($childs as $value){
			$xml.=getNodeAsXml($value);
		}
	
		$xml .="</IdeaNode>";
	}
    return $xml;
}

function getNodeAsHtml($nodeId){
	return getNodeAs($nodeId,'toHtml/xmlNodeToHtml.xslt');
}

function getNodeAs($nodeId,$xsltFileName){
	
	$xslt = new XSLTProcessor();

	// Chargement du fichier XML
	$xmlDoc = new domDocument();	
	$xmlDoc -> loadXML('<?xml version="1.0" encoding="UTF-8" ?>'.getNodeAsXml($nodeId));

	// Chargement du fichier XSL
	$xsl = new domDocument();
	$xsl -> load($xsltFileName);

	// Import de la feuille XSL
	$xslt -> importStylesheet($xsl);

	// Transformation et affichage du résultat
	return $xslt -> transformToXml($xmlDoc);
}
?>