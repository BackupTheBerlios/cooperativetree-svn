<?php
$nodeId = $_POST['nodeId'];
include 'dbConnect.inc';
include 'detach.inc';
if(detach($nodeId)){
	echo 'true';
}else{
	echo 'false';
}
?>