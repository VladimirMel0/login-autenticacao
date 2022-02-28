function logar(){
    var usuario = document.getElementById("username");
    var senha = document.getElementById("password");
    if(usuario.value == "adm" && senha.value == "adm"){
        localStorage.setItem("acesso", true);
        window.location.href = "home.html";
    }else{
        alert("usuario ou senha invalido!");
    }
}