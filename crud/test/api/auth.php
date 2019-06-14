<?php
    // "start": "ng serve --proxy-config proxyconfig.json",

//   header('Access-Control-Allow-Origin: *');
//   header('Access-Control-Allow-Headers');
   header('Content-Type: application/json');

header("Access-Control-Allow-Origin", "*");
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
?>
{
"success":true,
"message":"done"
}
<?php
$_POST = json_decode(file_get_contents('php://input',true));

if(isset($_POST) && !empty($_POST))
{
    echo "hi";
    $user = $_POST['username'];
    $pass = $_POST['password'];

    if($user == 'admin' && $pass == 'admin')
    {
?>
{
    "success":true,
    "message":"done"
}
    <?php } else { ?>
 {       "success":false
        "message":"Invalid"    
    }
        <?php } ?>
<?php }?>