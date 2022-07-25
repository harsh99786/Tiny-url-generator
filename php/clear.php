<?php 
include "config.php";
if(isset($_GET['delete'])){
    $sql = mysqli_query($conn,"DELETE FROM url");
    if($sql)
    {
        header("Location: ../");    
    }
    else{
        header("Location: ../");
    }
}
else{
    header("Location: ../");
}
?> 