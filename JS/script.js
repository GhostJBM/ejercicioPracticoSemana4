 
        // HTML Graphics - Dibujo en Canvas
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(50, 50, 99, 100);

        // HTML APIs - Geolocalización
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    document.getElementById("location").innerHTML = 
                        "Latitud: " + position.coords.latitude + "<br>Longitud: " + position.coords.longitude;
                });
            } else {
                document.getElementById("location").innerHTML = "La geolocalización no es soportada por este navegador.";
            }
        }

        //butonId Evento: Onclick
       
        function myFunction(){
         window.open("https://www.youtube.com/watch/ptc4Awb0UpU?si=VZqjQvZ5W_xccj5z")
        }

        


