
<?php
$newNodeId = $_POST['newNodeId'];
$brotherNodeId = $_POST['brotherNodeId'];
include 'dbConnect.inc';
include 'insertBefore.inc';
echo insertBefore($newNodeId,$brotherNodeId);
?>