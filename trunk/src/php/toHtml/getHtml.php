<?php

$xslt = new XSLTProcessor();

// Chargement du fichier XML
$xml = new domDocument();
$xml -> load('../get.php?nodeId=2');

// Chargement du fichier XSL
$xsl = new domDocument();
$xsl -> load('xmlNodeToHtml.xslt');

// Import de la feuille XSL
$xslt -> importStylesheet($xsl);

// Transformation et affichage du résultat
echo $xslt -> transformToXml($xml);

?>