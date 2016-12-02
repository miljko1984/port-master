<?php

if ($_REQUEST['name'] == '' || $_REQUEST['email'] == '' || $_REQUEST['message'] == ''):
    return "error";
endif;

if (filter_var($_REQUEST['email'], FILTER_VALIDATE_EMAIL)):
    // receiver email address
    $to = 'miljkomiljkovic1984@gmail.com';

    // prepare header
    $header = 'From: ' . $_REQUEST['name'] . ' ' . ' <' . $_REQUEST['email'] . '>' . "\r\n";
    $header .= 'Reply-To:  ' . $_REQUEST['name'] . ' ' . ' <' . $_REQUEST['email'] . '>' . "\r\n";
    // $header .= 'Cc:  ' . 'example@domain.com' . "\r\n";
    // $header .= 'Bcc:  ' . 'example@domain.com' . "\r\n";
    $header .= 'X-Mailer: PHP/' . phpversion();

    // Contact Subject
//    $subject = $_REQUEST['subject'];

    // Contact Message
    $message = $_REQUEST['message'];

    $errors = array();
    // Send contact information
    if (!mail($to, $message, $header)) {  // $subject
        array_push($errors, "Mail failed to send.");
    }
    if (empty($errors)) {
        return $errors;
    }
    return "success";
else:
    return "error";
endif;
?>