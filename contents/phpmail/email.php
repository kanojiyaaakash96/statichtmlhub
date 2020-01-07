<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';
header("Access-Control-Allow-Origin: *");

$mail = new PHPMailer(true);

$mail->SMTPDebug = 0;              
$mail->isSMTP();                                     

$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls';
$mail->Username = 'it1@oceantransworld.com';
$mail->Password = '\YG1$3O#';                      
$mail->Port = 587;

// $mail->Host = 'smtpout.asia.secureserver.net';
// $mail->SMTPAuth = true;                              
// $mail->SMTPSecure = 'ssl';
// $mail->Username = 'info@sakuraindia.com';
// $mail->Password = 'poiuy,123';                      
// $mail->Port = 465;


$mail->setFrom($mail->Username, $_POST['name']);
$mail->addAddress('it7@oceantransworld.com', 'Sushant');   
$mail->isHTML(true);

$mail->Subject = 'OIS Form Submission ' .$_POST['message']  ;
$mail->Body = 'Name: '.$_POST['name']. '<br/>Email: '.$_POST['email'].'<br/>Message: '.$_POST['message'];

if(!$mail->send()){
    $result="Something went wrong Please Try again.";
}
else{
    $result=" Thanks ".$_POST['name']." for contacting us. We'll get back to you soon!";
}

  
echo $result;
// sleep(5) ;
?>