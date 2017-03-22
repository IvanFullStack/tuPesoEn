    var usuario = prompt("Cual es tu peso?");
    var peso = parseInt(usuario);
    var g_mercurio = 3.7;
    var g_venus = 8.87;
    var g_tierra = 9.8;
    var g_marte = 3.7;
    var g_jupiter = 24.8;
    var g_luna = 1.6;
    var g_saturno = 10.4;
    var g_urano = 8.69;
    var g_neptuno = 11.15;
    var peso_final;
    //var nombre;

    function pesoMercurio()
    {
      peso_final = peso * g_mercurio / g_tierra;
      peso_final = parseInt(peso_final);
      var myWindow = window.open("", "MsgWindow", "width=250,height=100", "color=red");
    myWindow.document.write("Tu peso en mercurio es: " + peso_final + " Kilos");
    }

    function pesoVenus()
    {
      peso_final = peso * g_venus / g_tierra;
      peso_final = parseInt(peso_final);
      var myWindow = window.open("", "MsgWindow", "width=250,height=100", "color=red");
    myWindow.document.write("Tu peso en venus es: " + peso_final + " Kilos");
    }

    function pesoTierra()
    {
      peso_final = usuario;
      peso_final = parseInt(peso_final);
      var myWindow = window.open("", "MsgWindow", "width=250,height=100", "color=red");
    myWindow.document.write("Tu peso en la tierra es: " + peso_final + " Kilos");
    }

    function pesoMarte()
    {
      peso_final = peso * g_marte / g_tierra;
      peso_final = parseInt(peso_final);
      var myWindow = window.open("", "MsgWindow", "width=250,height=100", "color=red");
    myWindow.document.write("Tu peso en marte es: " + peso_final + " Kilos");
    }

    function pesoJupiter()
    {

      peso_final = peso * g_jupiter / g_tierra;
      peso_final = parseInt(peso_final);
      var myWindow = window.open("", "MsgWindow", "width=250,height=100", "color=red");
    myWindow.document.write("Tu peso en jupiter es: " + peso_final + " Kilos");
    }

    function pesoSaturno()
    {

      peso_final = peso * g_saturno / g_tierra;
      peso_final = parseInt(peso_final);
      var myWindow = window.open("", "MsgWindow", "width=250,height=100", "color=red");
    myWindow.document.write("Tu peso en saturno es: " + peso_final + " Kilos");
    }

    function pesoUrano()
    {

      peso_final = peso * g_urano / g_tierra;
      peso_final = parseInt(peso_final);
      var myWindow = window.open("", "MsgWindow", "width=250,height=100", "color=red");
    myWindow.document.write("Tu peso en urano es: " + peso_final + " Kilos");
    }

    function pesoNeptuno()
    {

      peso_final = peso * g_neptuno / g_tierra;
      peso_final = parseInt(peso_final);
      var myWindow = window.open("", "MsgWindow", "width=250,height=100", "color=red");
    myWindow.document.write("Tu peso en neptuno es: " + peso_final + " Kilos");
    }


  
