
let flag=0;

function slider(num){
    var slides=document.getElementsByClassName("slide");
    console.log(slides)

    if(num==slides.length){
        flag=0;
        num=0;
    }

    for(let i of slides){
        i.style.display="none"
        
    if(num<0){
        flag=slides.length-1
        num=slides.length-1
    }
    }

    slides[num].style.display="block";
}
slider(flag)


function controller(value){
flag= flag+ value;
slider(flag)

}
