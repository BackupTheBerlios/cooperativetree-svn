<?php 

header("Content-Type: text/xml");
$xml = '<?xml version="1.0" encoding="UTF-8" ?>';
include 'dbConnect.inc';
if(mysql_db_query($db,"insert into node value (default,\"\",\"\",default)")){
	$lastId = mysql_insert_id();
	$xml .= "<node id=\"$lastId\" />";
	echo $xml;
}else{
	echo "error";
}
?>