function logIn(){
    var pass = document.getElementById("password").value;
    b64 = window.btoa(unescape(encodeURIComponent( pass )));
    if(b64 == "amJ5amc0ZXZlcg=="){
        document.getElementById("inicio").style.display = "none";
        document.getElementById("contenido").style.display = "block";
        document.getElementById("password").value = "";
    }else{
        alert("contraseña incorrecta!!");
    
    }
    
}

function logOut(){
    document.getElementById("password").value = "";
    document.getElementById("inicio").style.display = "block";
    document.getElementById("contenido").style.display = "none";
}

function iloveU(){
    alert("Te amo! te amo demasiado, se que aun no estas lista para ser mi novia, pero muero por el día en que seas para mí.");
}
//jbyjg4ever