<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Ejemplo 2.3</title>
</head>
<body>
<h1>Ejemplo 2.3</h1>
<canvas id="miCanvas" width="100" height="100">
&iexcl;No funciona!
</canvas>
<script>
var miCanvas = document.getElementById("miCanvas")
var contexto = miCanvas.getContext("2d");
contexto.fillStyle = "red";
contexto.fillRect(30, 30, 50, 50);
</script>
</body>
</html>
