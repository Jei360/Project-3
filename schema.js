document.addEventListener("DOMContentLoaded",function()
{
    
    var y;
    var tadmin=document.getElementById("log");
    tadmin.addEventListener("click",function()
    {
       var user= document.getElementById("use");
       var passw=document.getElementById("passed");
       if (user.value=="Admin" && passw.value=="Admin") 
       {
         var xmlhhttp = new XMLHttpRequest();
         xmlhhttp.onreadystatechange = function()
         {
            if (xmlhhttp.readyState == 4 && xmlhhttp.status == 200) 
            {
                document.getElementsByClassName("login")[0].innerHTML=xmlhhttp.responseText;
                var t=document.getElementById("top");
                var o=document.createElement("BUTTON");
                var e=document.createTextNode("Logout");
                o.appendChild(e);
                o.setAttribute("id", "logging");
                t.appendChild(o);
                logouting();
             }
             
         };
         xmlhhttp.open("GET", "schema.html", true);
         xmlhhttp.send();
       }
    });
      
    });
    function adduser()
    {
        var a=document.getElementsByName("firstname")[0].value;
        var b=document.getElementsByName("lastname")[0].value;
        var c=document.getElementsByName("id")[0].value;
        var d=document.getElementsByName("username")[0].value;
        var e=document.getElementsByName("password")[0].value;
        var dataString = 'id=' + c + '&firstname=' + a + '&lastname=' + b + '&username=' + d +'&password=' + e;
      
        var xmlhtp=new XMLHttpRequest();
           xmlhtp.onreadystatechange = function()
           {
               
            if (xmlhtp.readyState == 4 && xmlhtp.status == 200) 
            {
                alert ("user added");
            }
           };
           xmlhtp.open ("POST", "schema.php", true);
           xmlhtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhtp.send (new FormData(dataString));

    }
    function addmessage()
    {
        var a=document.getElementsByName("subject")[0].value;
        var b=document.getElementsByName("recipient_ids")[0].value;
        var c=document.getElementsByName("body")[0].value;
        var dataString = 'subject=' + a + '&recipient_ids=' + b + '&body=' + c;
      
        var xmlhtp=new XMLHttpRequest();
           xmlhtp.onreadystatechange = function()
           {
               
            if (xmlhtp.readyState == 4 && xmlhtp.status == 200) 
            {
                alert ("Message sent");
            }
           };
           xmlhtp.open ("POST", "schema.php", true);
           xmlhtp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhtp.send (new FormData(dataString));

    }
    function logining(){
     
    
      
       var user= document.getElementById("use");
       var passw=document.getElementById("passed");
      
           var xmlhtp=new XMLHttpRequest();
           xmlhtp.onreadystatechange = function()
           {
               
            if (xmlhtp.readyState == 4 && xmlhtp.status == 200) 
            {
               
               var responses=xmlhtp.responseText.split("<br/>");
               if (passw.value==responses[4])
               {
                    var f=document.createElement("h3");
                    document.getElementById("mid").appendChild(f);
                    f.innerHTML="USER :"+responses[1] +" "+responses[2];
                    document.getElementsByClassName("login")[0].innerHTML="Recent Messages"+"<br/>";
                    var count=0;
                    for(var y=19;y<responses.length;y=y+10)
                    {
                        if (count>10){
                            y=responses.length;
                        }
                        else{
                    document.getElementsByClassName("login")[0].innerHTML+="<hr/>"+responses[y];
                    count=count+1;
                    alert(count);
                    document.getElementsByClassName("login")[0].innerHTML+="<br/>"+"New Messages"+"<br/>";
                    }
                    
                    }
                    
                    var t=document.getElementById("top");
                    var o=document.createElement("BUTTON");
                    var e=document.createTextNode("Logout"); 
                    o.appendChild(e);
                    o.setAttribute("id", "logging");
                    t.appendChild(o);
                    var q=document.getElementById("top");
                    var r=document.createElement("BUTTON");
                    var b=document.createTextNode("COMPOSE MESSAGE");
                    r.appendChild(b);
                    r.setAttribute("id", "comp");
                    q.appendChild(r);
                    composing();
                    logouting();
                
                } 
            }
              
          
           };
           xmlhtp.open("GET","schema.php?username="+user.value,true);
           xmlhtp.send();
      
    }
      
      function composing()
      {
          var m=document.getElementById("comp");
       m.addEventListener("click",function()
       {
           var xmlhhh=new XMLHttpRequest();
           xmlhhh.onreadystatechange= function()
           {
            if(xmlhhh.readyState==4 && xmlhhh.status ==200)
            {
                document.getElementsByClassName("login")[0].innerHTML=xmlhhh.responseText;
            }
           };
           xmlhhh.open("GET","message.html", true);
           xmlhhh.send();
       });
      }
      function logouting ()
       {
            var l=document.getElementById("logging");
            l.addEventListener("click",function()
            {
                var xmlh = new XMLHttpRequest();
                xmlh.onreadystatechange = function()
                {
                    if (xmlh.readyState == 4 && xmlh.status == 200) 
                    {
                        document.body.innerHTML=xmlh.responseText;
                    }
                };
                xmlh.open("GET", "index.html", true);
                xmlh.send();
            });
       }