<?php

echo "<pre>";
    print_r($_POST);

    &userName = $_POST['name'];
    &userEmail = $_POST['email'];
    &messageSubject = $_POST['subject'];
    &message = $_POST['message'];
    

    $to = kochajtocorobisz@gmail.com
    $body ="";

    $body .= "From: ".$username. "\r\n";
    $body .= "Email: ".$userEmail. "\r\n";
    $body .= "Message: ".$message "\r\n";

    echo '</pre>';
?>