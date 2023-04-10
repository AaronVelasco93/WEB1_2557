<?php
include "conexion.php";
//consulta
$consulta_sql="SELECT * FROM persona";

$resultado=$conexion->query($consulta_sql);

$count=mysqli_num_rows($resultado);
?>
<table border="2px"> 
    <tr>
        <th>ID</th>
        <th>Nombre Usuario</th>
        <th>Carrera</th>
    </tr>
 <?php
    if ($count>0){

     while($row=mysqli_fetch_assoc($resultado) ){

        echo "<tr>";
        echo "<td>".$row['nombre_usuario']."</td>";
        echo "<td>".$row['carrera']."</td>";
        echo "</tr>";
    } 
    


    }else{

        echo "<h1>Sin registro</h1>";
    }

?>

<a href="eliminar.html"><h2 >Eliminar Usuario</h2></a>    

</table>