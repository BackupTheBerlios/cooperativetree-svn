<?php

$xslt = new XSLTProcessor();

// Chargement du fichier XML
$xmlDoc = new domDocument();
include 'get.inc';
$xmlDoc -> loadXML('<?xml version="1.0" encoding="UTF-8" ?>'.getNodeAsXml($_GET['nodeId']));

// Chargement du fichier XSL
$xsl = new domDocument();
$xsl -> load('xmlNodeToJson.xslt');

// Import de la feuille XSL
$xslt -> importStylesheet($xsl);

// Transformation et affichage du résultat
echo $xslt -> transformToXml($xmlDoc);

?>