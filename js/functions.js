
export function keydownSound(){
    let button = document.getElementsByClassName('btn-container');

    document.addEventListener("keydown", (e)=>{
        let key = e.keyCode;// lorsque je tappe sur la lettre a, le keyCode est égal à 65
        const audio = document.querySelector("audio[data-key='"+key+"']");//  `audio[data-key="${key}"]`
        if(audio){
                const touch = audio.nextElementSibling;
                audio.currentTime = 0;
                audio.play();
                touch.classList.add("sound-active");
                audio.addEventListener('ended', ()=>{
                        touch.classList.remove("sound-active");
                }) 
        } 
         
     })
}

export function clickSound(){
    let button = document.getElementsByClassName('btn-container');

    for (let i = 0; i < button.length; i++ ){
        button[i].addEventListener("click", (e)=>{
                console.log(e.target.previousElementSibling);
                let audioClick = e.target.previousElementSibling;
                let touchClick = e.target;
                audioClick.currentTime = 0;
                audioClick.play();
                touchClick.classList.add("sound-active");
                audioClick.addEventListener('ended', ()=>{
                        touchClick.classList.remove("sound-active");
                }) 
        })
}
}
