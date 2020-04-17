<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">

  <title>#H2021</title>

  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <meta content="h2021 hora2021" name="keywords">

  <meta content="iniciativa global para afrontar el Covid-19" name="description">



  <!-- Favicons -->

  <link href="img/favicon.png" rel="icon">

  <link href="img/apple-touch-icon.png" rel="apple-touch-icon">



  <!-- Google Fonts -->

  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Raleway:300,400,500,700,800" rel="stylesheet">



  <!-- Bootstrap CSS File -->

  <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">



  <!-- Libraries CSS Files -->

  <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">

  <link href="lib/animate/animate.min.css" rel="stylesheet">

  <link href="lib/venobox/venobox.css" rel="stylesheet">

  <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">



  <!-- Main Stylesheet File -->

  <link href="css/style.css" rel="stylesheet">
  <link href="css/custom.css" rel="stylesheet">


  <!-- =======================================================

    

  ======================================================= -->

  <script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>

  <script src="js/custom.js"></script>



    

</head>
<body>
    <?php

        $name = $_POST["name"];
        $email = $_POST["email"];
        $subject = $_POST["subject"];
        $content = $_POST["content"];
        $for = "contacto@h2021.org";
        $subjet = $name . "Te ha escrito a través de h2021.org por" . $subject;
        $message = $name . "," . $email . "Se ha contacatado:" .
            $content
            ;
        mail($for, $asunto, utf8_decode($message));
        mail(to, subject, message);
        echo "<p>mensaje enviado</p>";
    ?>
</body>
</html>