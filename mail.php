<!DOCTYPE html>
<<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="gsap/minified/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js"></script>
    <link rel="icon" type="image/x-icon" href="img/picto.png">

    <!-- STYLE ----- -->
    <link rel="stylesheet" href="style.css">
    <title>Message</title>
</head>

<body>
    <?php
    $to = 'shams.benhamou@etudiant.univ-reims.fr';
    $subject = $_POST['sujet'];
    $message = $_POST['message'];
    $headers = "From: portfolio@mmi-troyes.fr" . "\r\n" .
    "CC:".$_POST['mail'] . "\r\n" . $_POST['firstname'] ;

    $retour = mail($to, $subject, $message, $headers);
    if ($retour){
        echo '<div id="z1">
        <div class="confirm-container">
            <div class="title-container resetmarginpadding"><h4 class="title resetmarginpadding">Message envoyé avec succès.</h4></div>
            <p class="text-smaller text-red" style="font-size: 12px;">Merci pour votre message, '.$_POST['firstname'].'. J\'y répondrai vite, promis !</p>
    
            <p class="redirect-message" style="font-size: 12px;">Redirection en cours...</p>
        </div>
    </div>
    
    <script>
        setTimeout(() => {
            window.location.replace("index.html");
        }, "5000")
    </script>';
    }else{
        echo '<div id="z1">
        <div class="confirm-container">
            <div class="title-container resetmarginpadding"><h4 class="title resetmarginpadding">Aïe ! Votre message n\'a pas été envoyé.</h4></div>
            <p class="text-smaller text-red" style="font-size: 12px;">N\'hésitez pas à me contacter sur mon mail personnel : <span class="text-blue">shamsbenhamou@gmail.com</span></p>
    
            <p class="redirect-message" style="font-size: 12px;"><a href="index.html" class="text-red" style="text-decoration: underline;">Cliquez ici pour revenir sur mon portfolio !</a></p>
        </div>
    </div>';
    }

    echo $_POST['sujet'], $_POST['message'], 'From:portfolio@mmi-troyes.fr', $_POST['firstname'], $_POST['mail'];
    ?>

<script type="text/javascript" src="confirm.js"></script>
</body>
</html>