<?php

if(isset($_POST['email']) && $_POST['email'] != '') {


    
    &userName = $_POST['name'];
    &userEmail = $_POST['email'];
    &messageSubject = $_POST['subject'];
    &message = $_POST['message'];
    

    $to = kochajtocorobisz@gmail.com
    $body ="";

    $body .= "From: ".$username. "\r\n";
    $body .= "Email: ".$userEmail. "\r\n";
    $body .= "Message: ".$message "\r\n";

    

    mail($to,$messageSubject,$body);
}



?>