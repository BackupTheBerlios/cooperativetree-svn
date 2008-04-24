<?php 

header("Content-Type: text/xml");
include 'dbConnect.inc';
include 'create.inc';
echo '<?xml version="1.0" encoding="UTF-8" ?>'."<node id=\"".create()."\" />"
?>