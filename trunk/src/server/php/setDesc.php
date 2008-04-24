<?php
$nodeId = $_POST['nodeId'];
$desc = $_POST['desc'];

//$nodeId = $_GET['nodeId'];
//$desc = $_GET['desc'];

include 'dbConnect.inc';

if(mysql_db_query($db,"update node set description = \"$desc\"  where id = $nodeId")){
	echo 'ok';
}else{
	echo "error: nodeId=$nodeId desc=$desc";
}
?>