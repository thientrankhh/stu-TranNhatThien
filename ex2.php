<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>JAVASCRIPT EXERCISE</title>
	<script type="text/javascript" src="js.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="calculate">
		<h3>Calculate math operations</h3>
		<div class="">
			<table>
				<tr>
					<td><label>First Number:</label></td>
				</tr>
				<tr>
					<td><input type="number"  value="" id="firstnumber" ></td>
				</tr>
				<tr>
					<td><label>First Number:</label></td>
				</tr>
				<tr>
					<td><input type="number"  value="" id="secondnumber"></td>
				</tr>
				<tr>
					<td>
						<div>
							<button type="button" onclick="total()">(+)</button>
							<button type="button" onclick="subtraction()">(-)</button>
							<button type="button" onclick="multiplication()">(x)</button>
							<button type="button" onclick="division()">(/)</button>
							<button type="button" onclick="power()">(a^b)</button>
						</div>
					</td>
				</tr>
				<tr>
					<td><p style="color: red; font-weight: bold;">Result:</p></td>
				</tr>
				<tr>
					<td>
						<div id="result" ></div>
					</td>
				</tr>
			</table>	
		</div>
	</div>
	
</body>
</html>