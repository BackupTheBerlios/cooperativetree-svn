<?php

function create(){
	global $db;
	if(mysql_db_query($db,"insert into node value (default,\"\",\"\",default)")){
		return $lastId = mysql_insert_id();
	}else{
		return mysql_error();
	}
}
?>