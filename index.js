var alldrum=document.querySelectorAll(".drum");

for(var i=0;i<alldrum.length;++i){

    alldrum[i].addEventListener("click",function(event){
        // on click this object is created
         console.log(event);
         var link="Audio/Audio_" + this.alt;
         if(this.alt=="1")  link = link + ".mp3";
         else               link = link + ".wav";
         var audio = new Audio(link);
         audio.play();

    });
}

document.addEventListener("keypress",function(event)
{
    console.log(event);
});