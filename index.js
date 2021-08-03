var e=document.getElementsByClassName("drum");
for(var i=0;i<e.length;i++)
{
    const st=e[i].textContent;
    const s="sounds/"+st+".mp3";
    e[i].addEventListener("click",function (event)
    {
        console.log(event);
        var audio=new Audio(s);
        audio.play();
        buttonanimation(st);
    });
}
document.addEventListener("keydown",function(event){
    // console.log(event);
    if(event.key=='a'||event.key=='w'||event.key=='s'||event.key=='l'||event.key=='k'||event.key=='j'||event.key=='d')
    {
        const s="sounds/"+event.key+".mp3";
        var audio=new Audio(s);
        audio.play();
        buttonanimation(event.key);
    }
    else
    console.log("Wrong key pressed");
});
function buttonanimation(currentkey)
{
    var activebutton=document.querySelector("."+currentkey);
    setTimeout(function(){
        activebutton.classList.toggle("pressed");
    },300);
    activebutton.classList.toggle("pressed");
}

