<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Envoi d'un message par formulaire</title>
</head>

<body>
    <?php
    $retour = mail('shams.benhamou@etudiant.univ-reims.fr', 'Envoi depuis la page Contact', $_POST['message'], 'From:portfolio@mmi-troyes.fr');
    if ($retour)
        echo '<p>Votre message a bien été envoyé.</p>';
    ?>

    <script>

    setTimeout(() => {
        window.location.replace("index.html");
    }, "3000")
    </script>
</body>
</html>