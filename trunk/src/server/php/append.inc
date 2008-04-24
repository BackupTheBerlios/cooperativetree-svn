<?php

function append($newNodeId,$parentNodeId){
	global $db;	
	if(mysql_db_query($db,"insert into `node_link`(`parent`,`child`,`order`) select ".$parentNodeId.",".$newNodeId.",ifnull(max(`order`)+1,0) from `node_link` where parent = ".$parentNodeId)){
		return true;
	}else{
		return false;
	}
	
}

?>