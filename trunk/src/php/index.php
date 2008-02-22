<html>
<head>
<link rel="stylesheet" type="text/css" href="css/pretty.css"></link>
<style type="text/css">
</style>
<!-- script type="text/javascript" src="js/main.js"/-->
</head>
<body>
	<h1>Organize</h1>
	<table id="layout">
		<tbody>
			<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
			<tr>
				<td>&nbsp;</td>
				<td>
	<?php
		$nodeId = $_GET['nodeId'];
	if($nodeId){
		include 'get.inc';
		echo getNodeAsHtml($nodeId);
	}
	?>
				</td>
				<td>&nbsp;</td>
			</tr>
			<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
		</tbody>
	</table>
</body>
</html>