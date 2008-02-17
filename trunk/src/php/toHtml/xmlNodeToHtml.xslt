<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:output method="html"/>
	<xsl:template match ="/">
		<xsl:apply-templates />
    </xsl:template>
    
	<xsl:template match ="IdeaNode2" >
        <table class="element" cellspacing="0" cellpadding="0">
			<tbody>
				<tr>
					<td>
	
						<table class="elementDetails" cellspacing="0" cellpadding="0">
							<tbody>
	  								<tr>
	                                      <td class="expandCollapseButton">
	                                          <xsl:if test="count(child::*)=0">-</xsl:if><xsl:if test="count(child::*)!=0">+</xsl:if>
	                                      </td>
	                                      <td class="elementName">
	                                          <div><xsl:value-of select="@title"/></div>
	                                      </td>
	                                  </tr>
							</tbody>								
						</table>
					</td>
	             </tr>
	             <tr>
					<td>
						<table cellspacing="0" cellpadding="0" style="padding-left:20px;margin-left:20px">
							<tbody  class="elementChild">
							<xsl:apply-templates select="*"></xsl:apply-templates>
							</tbody>
						</table>		
					</td>
				</tr>
			</tbody>
		</table>
    </xsl:template>
    
    <xsl:template match ="IdeaNode" >
        <table class="element" cellspacing="0" cellpadding="0">
			<tbody>
				<tr>
					<td>
						<div class="ideaNodeTitle"><xsl:value-of select="@title"/></div>
					</td>
					<td>
						<xsl:apply-templates />	
					</td>
	             </tr>
			</tbody>
		</table>
    </xsl:template>
	
	
</xsl:stylesheet>
