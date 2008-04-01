<?php
//$nodeId = $_POST['nodeId'];
//$title = $_POST['title'];

$nodeId = $_POST['nodeId'];
$title = $_POST['title'];

include 'dbConnect.inc';

if(mysql_db_query($db,"update node set title = \"$title\"  where id = $nodeId")){
	echo 'ok';
}else{
	echo 'error';
}
?>