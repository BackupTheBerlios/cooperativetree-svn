<?php

function delete($nodeId){
	global $db;	
	if(mysql_db_query($db,"delete from `node`where id = ".$nodeId)){
		return true;
	}else{
		return mysql_error();
	}
}

?>