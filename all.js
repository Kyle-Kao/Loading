window.onload = function(){
        var canvas = document.querySelector("#test");
        if(canvas.getContext){
            // var canvas = document.getElementById('test'),
            var context = canvas.getContext('2d'),
            // centerX = canvas.width/2,
            // centerY = canvas.height/2,
            rad = Math.PI*2/100,
            speed = 0.1;
            
         function text(n){
            context.save();
            context.translate(200,200);
            context.fillStyle = "#F47C7C";
            context.font = "40px Arial";
            context.textAlign = "center";
            context.textBaseline = "middle";
            context.fillText(n.toFixed(0)+"%", 0, 0);
            // context.fillText("123"+"%", 0, 0);
            context.restore();
         }
         function blueCircle(n){
            context.save();
            context.translate(200,200);
            context.beginPath();
            context.strokeStyle = "#49f";
            context.lineWidth = 12;
            context.arc(0, 0, 100 , -90*Math.PI/180, -90*Math.PI/180 + n*rad , false);
            context.stroke();
            context.restore();
         }
         
         function whiteCircle(){
             context.save();
             context.translate(200,200);
             context.beginPath();
             context.strokeStyle = "#A5DEF1";
             context.lineWidth = 12;
             context.arc(0, 0, 100 , 0*Math.PI/180, 360*Math.PI/180, false);
             context.stroke();
             // context.closePath();
             context.restore();
         }
            
         (function drawFrame(){
                window.requestAnimationFrame(drawFrame);
                context.clearRect(0, 0, canvas.width, canvas.height);
           
                whiteCircle();
                text(speed);
                blueCircle(speed);
             
                if(speed > 100) speed = 0;
                speed += 0.1;
            }()); 
        }
    }
