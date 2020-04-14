<?php

   $to_email = "info@bighonchomedia.com";
   $subject = "A message from your contact form on bighonchomedia.com";
   $body = ("This is a message from your contact form on bighonchomedia.com. \n\nFrom: ".$_POST['name']."\nEmail: ".$_POST['email']."\nMessage: ".$_POST['text'] );
   $headers = "From: info@bighonchomedia.com";
 
   if ( mail($to_email, $subject, $body, $headers)) {
      echo("Email successfully sent to $to_email...");
   } else {
      echo("Email sending failed...");
   }

?>