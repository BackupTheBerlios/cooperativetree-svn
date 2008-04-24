<?php
$newNodeId = $_POST['newNodeId'];
$parentNodeId = $_POST['parentNodeId'];
include 'dbConnect.inc';
include 'append.inc';
if(append($newNodeId,$parentNodeId)){
	echo 'true';
}else{
	echo 'false';
}
?>