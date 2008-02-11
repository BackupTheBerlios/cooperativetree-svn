<?php
echo '<?xml version="1.0" encoding="UTF-8" ?>';
echo "\n";
 ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="/root">
			<xsl:apply-templates select="node"/>
    </xsl:template>
    
	
	<xsl:template match="node">
    <div><xsl:value-of select="name()"/></div>
	</xsl:template>
</xsl:stylesheet>
