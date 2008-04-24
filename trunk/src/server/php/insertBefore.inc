<?php
function insertBefore($newNodeId,$brotherNodeId){
	global $db;
	
	
	$sql ="update node_link nl1, node_link nl2 ";
	$sql .="set nl2.order = nl2.order+1";
	$sql .=" where nl1.child = $brotherNodeId and nl1.parent = nl2.parent and nl2.order >= nl1.order";
	
	if(mysql_db_query($db,$sql)){
		
		$sql ="insert into node_link(parent,child,`order`) select nl.parent,$newNodeId,nl.order-1 from node_link nl where nl.child = $brotherNodeId ";
		
		if(mysql_db_query($db,$sql)){
			return true;
		}else{
			return mysql_error();
		}
		
	}else{
		return mysql_error();
	}
}

/*
 
 	$sql .="select @O:=`order`,@P:=`parent` from node_link where child = $brotherNodeId";
	$sql .=";";
	
	$sql .=";";
	$sql .="insert into node_link(parent,child,order) value (@P,$newNodeId,@O);";
 */
?>