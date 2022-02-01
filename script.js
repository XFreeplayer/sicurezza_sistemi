function oro() {
                
    var a=new Date();
    var b=a.getHours();
    var c=a.getMinutes();
    var d=a.getSeconds();
    document.getElementById("scr").innerHTML=( b + ":"+ c + ":" + d);  
    
    if (d<10 && d>0) {
        secondi=("0" + a);
        document.getElementById("scr").innerHTML=( b + ":"+ c + ":" + secondi);  


    }
}
setInterval(oro, 1000);