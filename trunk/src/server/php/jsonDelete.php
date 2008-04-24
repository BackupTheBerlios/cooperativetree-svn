<?php
$nodeId = $_POST['nodeId'];
include 'dbConnect.inc';
include 'delete.inc';
echo delete($nodeId);
?>