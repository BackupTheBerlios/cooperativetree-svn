<?php

include 'dbConnect.inc';
$childNodeId = $_POST['childNodeId'];
$parentNodeId = $_POST['parentNodeId'];

if(mysql_db_query($db,"insert into node_link values ($parentNodeId,$childNodeId)")){
	echo "success";
}else{
	echo "error";
}
?>