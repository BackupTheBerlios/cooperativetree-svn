<?php

$xslt = new XSLTProcessor();

// Chargement du fichier XML
$xmlDoc = new domDocument();
include '../get.inc';
$xmlDoc -> loadXML($xml);

// Chargement du fichier XSL
$xsl = new domDocument();
$xsl -> load('xmlNodeToHtml.xslt');

// Import de la feuille XSL
$xslt -> importStylesheet($xsl);

// Transformation et affichage du résultat
echo $xslt -> transformToXml($xmlDoc);

?>