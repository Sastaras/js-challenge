<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check Password</title>
  </head>
  <body>

    <form>
        <fieldset>
            <legend>Register:</legend>
            <label for="login">Login: </label>
            <input type="text" name="login"><br>
            <label for="password">Password: </label>
            <input type="password" name="password" id="password">
            <span id="msg-length"></span>
            <span id= "msg-case"></span>
            <span id= "msg-num"></span></br>
            <label for="check-password">Re-enter your password: </label>
            <input type="password" name="check-password" id="check-password">
            <span id="msg"></span><br/>
            <input type="button" value="Send">
        </fieldset>
    </form>

    <script type="text/javascript" src="main.js"></script>
  </body>
</html>