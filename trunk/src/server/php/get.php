<?php

header("Content-Type: text/xml");
include 'dbConnect.inc';
include 'get.inc';

echo '<?xml version="1.0" encoding="UTF-8" ?>'.getNodeAsXml($_GET['nodeId']);
?>