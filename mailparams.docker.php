<?php


// These parameters are exactly corresponding to the PHPMailer API

  function getMailParams() {
    $mail_host = $_ENV["MAIL_HOST"];

    $mail_user = $_ENV["MAIL_USER"];
    $mail_pass = $_ENV["MAIL_PASSWORD"];
    $mail_port = $_ENV["MAIL_PORT"];
    $mail_from = $_ENV["MAIL_FROM"];

    $mail_smpt_secu = $_ENV["MAIL_SMTP_SECURE"];
    $mail_smtp_auth = $_ENV["MAIL_SMTP_AUTH"];

    return array(
      "Host" => $mail_host,   // SMTP host
      "SMTPAuth" => $mail_smtp_auth,             // true or false
      "Username" => $mail_user,            // user
      "Password" => $mail_pass,            // password
      "SMTPSecure" => $mail_smpt_secu,          // Enable TLS encryption, `ssl` also accepted
      "Port" => $mail_port,                // port
      "setFrom" => $mail_from
    );

  }

?>
