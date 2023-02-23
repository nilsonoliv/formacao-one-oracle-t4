var canva = document.querySelector('canvas');
var brush = canva.getContext('2d');

brush.fillStyle = 'white'
brush.fillRect(0,0,600,500);

function CreatCircle(radius)
{
    brush.fillStyle = 'red';
    brush.beginPath()
    brush.arc(300,250,radius,0,2*3.14);
    brush.fill();

}

var x = 30;
var fatorCrescimento = 1;
function RefreshScreen()
{
    brush.clearRect(0,0,600,500);
    brush.fillStyle = 'white'
    brush.fillRect(0,0,600,500);
    
    if(x > 50)
    {
         fatorCrescimento = - 1;
     }else if ( x < 29 )
     {
        fatorCrescimento = 1;
     }
     CreatCircle(x);
     x = x + fatorCrescimento; 
}

setInterval(RefreshScreen,20)