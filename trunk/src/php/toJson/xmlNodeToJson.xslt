<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:output method="text"/>
	<xsl:template match ="/">
		<xsl:apply-templates />
    </xsl:template>
    <xsl:template match ="IdeaNode" >
	{title:"<xsl:value-of select="@title"/>",
	 desc:"<xsl:value-of select="@title"/>",
		child:[<xsl:apply-templates />]
	}
	<xsl:if test="following-sibling::node()">,</xsl:if>
    </xsl:template>
	
	
</xsl:stylesheet>
