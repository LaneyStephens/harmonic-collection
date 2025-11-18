<!DOCTYPE html>
<html>
<body>

<canvas id="myCanvas" width="200" height="200" style="border:1px solid #d3d3d3;"></canvas>

<script>
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100, 100, 50, 0, 2 * Math.PI); // x, y, radius, startAngle, endAngle
ctx.stroke(); // Draws the outline of the circle
</script>

</body>
</html>