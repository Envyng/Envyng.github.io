<?php
if(isset($_POST['phone'])) {

    $phone = trim($_POST['phone']);
    $email = trim($_POST['email']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $error = 'Invalid Email!';
    }

    if (!$error) {

        $subject = 'JKSL | Landing Page From Submission';
        $message = '
  <html>
  <head>
  <title>' . $subject . '</title>
  </head>
  <body>
  <p>First Name: ' . $_POST['first_name'] .'<br> Last Name: ' . $_POST['last_name'] .'<br> Phone: ' . $_POST['phone'] . '<br> Email: ' . $_POST['email'].' </p>
  </body>
  </html>';

        $to = 'mike.clough@sltd.co.uk, uzanne.hardy@sltd.co.uk, jk@sltd.co.uk';
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=\"utf-8\" \r\n";
        $headers .= "From: ".$_POST['first_name']." <".$email.">\r\n";
        $headers .= "Reply-to: ".$_POST['first_name']." <".$email."> \r\n";
        $headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";

        if (mail($to, $subject, $message, $headers)) {
            die('ok');
        } else {
            die('error');
        }
    } else {
        echo $error;
    }
}

