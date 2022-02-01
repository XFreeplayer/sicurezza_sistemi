function oro() {
                
    var a=new Date();
    var b=a.getHours();
    var c=a.getMinutes();
    var d=a.getSeconds();
    
    
    if (d<10 && d>0) {
        secondi=("0" + a);
        document.getElementById("scr").innerHTML=( b + ":"+ c + ":" + secondi);  


    }

    else {
        document.getElementById("scr").innerHTML=( b + ":"+ c + ":" + d);  
    }
}
setInterval(oro, 1000);