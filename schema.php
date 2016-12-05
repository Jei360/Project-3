<?php
session_start();
$query = $_GET['username'];
$host = getenv('IP');
$username = getenv('C9_USER');
$password = '';
$dbname = 'dtabase';
$rid='';

if (isset($_POST["submit"]))
{
    $connect=mysql_connect($host,$username,$password);
    if(!$connect)
    {
        die('Not connected :'.mysql_error());
    }
    else{
        mysql_select_db('dtabase',$connect);
        $passwordssss=$_POST['password'];
        $hpassword=password_hash($_POST['password'],PASSWORD_DEFAULT);
        $_POST['password']=$hpassword;
        $sql="INSERT INTO User (id, firstname, lastname, username,password)
        VALUES ('$_POST[id]','$_POST[firstname]', '$_POST[lastname]', '$_POST[username]','$_POST[password]')";
        mysql_query($sql,$connect);
        mysql_close($connect);
    } 
}
if (isset($_GET["username"]))
{
    $_SESSION["username"]=$query;
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $stmt = $conn->query("SELECT * FROM User WHERE username LIKE '%$query%'");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach($results as $bow)
    {
        $rid=$bow['id'];
    }
    echo($rid);
    $stmt2 = $conn->query("SELECT * FROM Message WHERE recipient_ids LIKE '%$rid%'");
    $results2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);
    $results3=array_merge($results,$results2);
    foreach ($results3 as $row)
    {

        echo ($row['id']  . "<br/>" .$row['firstname'] ."<br/>". $row['lastname'] ."<br/>". $row['username'] ."<br/>". $row['password']."<br/>".$row['id1']."<br/>".$row['recipient_ids']."<br/>".$row['user_id']."<br/>".$row['subject']."<br/>".$row['body']."<br/>".$row['data_sent']);
    }

}
if(isset($_POST["subs"]))
{
    $connect=mysql_connect($host,$username,$password);
    if(!$connect){
        die('Not connected :'.mysql_error());
    }
    else{
        mysql_select_db('dtabase',$connect);
        $_POST['id1']=rand(2000,3000);
        $_POST['user_id']=$rid;
        $_POST['date_sent']=date("Y-m-d");
        $sql2="INSERT INTO Message (id1, recipient_ids, user_id, subject,body,date_sent)
        VALUES ('$_POST[id1]','$_POST[recipient_ids]', '$_POST[user_id]', '$_POST[subject]','$_POST[body]','$_POST[date_sent]')";
        mysql_query($sql2,$connect);
        mysql_close($connect);
        echo("MESSAGE SENT".$rid);
        echo($_POST['username']);
    }
}

?>