function clock(){
        let monthNames=["Jun","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let dayNames = ["Sun","Mun","Tue","Wed","Thu","Fri","Sat"];

        let today = new Date();

        document.getElementById('date').innerHTML = (dayNames[today.getDate()]+' ' + today.getDate()+ ' ' + monthNames[today.getMonth()]+ ' ' +today.getFullYear());


        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        let day = h<11? 'AM':'PM';

        h= h<10?'0'+ h :h ;
        m= h<10?'0'+ m :m ;
        s= h<10?'0'+ s :s ;

        document.getElementById('Hour').innerHTML= h;
        document.getElementById('Minite').innerHTML= m;
        document.getElementById('Secound').innerHTML= s;
}
let inter=setInterval(clock,400);