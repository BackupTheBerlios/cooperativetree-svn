<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:template match ="/">
	<div>Hello</div>
		<xsl:apply-templates />
    </xsl:template>
    
	<xsl:template match ="ideanode" >
    Node : <xsl:value-of select="@id"/>   	
    
	    <table class="element" cellspacing="0" cellpadding="0">
			<tbody>
				<tr>
					<td>
	
						<table class="elementDetails" cellspacing="0" cellpadding="0">
							<tbody>
	  								<tr>
	                                      <td class="expandCollapseButton">
	                                          <xsl:if test="count(child::*)=0">-</xsl:if><xsl:if test="count(child::*)!=0">+</xsl:if> TestPAth
	                                      </td>
	                                      <td class="elementName">
	                                          <div><xsl:value-of select="name()"/></div>
	                                      </td>
	                                      <td class="attributesButton">
	                                          <div>[]</div>
	                                      </td>
	                                      <xsl:for-each select="attribute::*">
									<td class="attribute">
									    <span>
	                                              <span class="attributeName" ><xsl:value-of select="name()"/></span>
	                                              <span class="attributeValue"><xsl:value-of select="."/></span>
	                                          </span>
									</td>
								    </xsl:for-each>
	                                  </tr>
							</tbody>								
						</table>
					</td>
	             </tr>
	             <tr>
					<td>
						<table cellspacing="0" cellpadding="0" style="padding-left:10px">
							<tbody  class="elementChild">
							<xsl:apply-templates select="*"></xsl:apply-templates>
							</tbody>
						</table>		
					</td>
				</tr>
			</tbody>
		</table>
    </xsl:template>
	
</xsl:stylesheet>
