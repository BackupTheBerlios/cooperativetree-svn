<?php

function detach($nodeId){
	global $db;	
	
	$sql ="update node_link nl1, node_link nl2 ";
	$sql .="set nl2.order = nl2.order-1";
	$sql .=" where nl1.child = $nodeId and nl1.parent = nl2.parent and nl2.order > nl1.order";
	
	if(mysql_db_query($db,$sql)){
		
		if(mysql_db_query($db,"delete from `node_link`where child = ".$nodeId)){
			return true;
		}else{
			return mysql_error();
		}
		
	}else{
		return mysql_error();
	}
	
	
}

?>