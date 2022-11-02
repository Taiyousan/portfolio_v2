<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
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
        echo '<p>Votre message a bien été envoyé.</p>';
    }else{
        echo '<p>erreur</p>';
    }

    echo $_POST['sujet'], $_POST['message'], 'From:portfolio@mmi-troyes.fr', $_POST['firstname'], $_POST['mail'];
    ?>

    <script>

   /* setTimeout(() => {
        window.location.replace("index.html");
    }, "3000") */
    </script>
</body>
</html>