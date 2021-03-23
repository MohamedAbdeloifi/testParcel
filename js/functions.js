
export function playSound(className, touch, audio ) {
        audio.currentTime = 0;
        audio.play();
        touch.classList.add(className);
}

export function removeSoundClass(className, touch, audio) {
        audio.addEventListener('ended', () => {
                touch.classList.remove(className);
        })
}

export function keydownSound() {
        let button = document.getElementsByClassName('btn-container');

        document.addEventListener("keydown", (e) => {
                let key = e.keyCode;// lorsque je tappe sur la lettre a, le keyCode est égal à 65
                const audio = document.querySelector("audio[data-key='" + key + "']");//  `audio[data-key="${key}"]`
                if (audio) {
                        const touch = audio.nextElementSibling;
                        playSound("sound-active", touch, audio);
                        removeSoundClass("sound-active", touch, audio);
                }

        })
}

export function clickSound() {
        let button = document.getElementsByClassName('btn-container');

        for (let i = 0; i < button.length; i++) {
                button[i].addEventListener("click", (e) => {
                        let audio = e.target.previousElementSibling;
                        let touch = e.target;
                        playSound("sound-active", touch, audio);
                        removeSoundClass("sound-active", touch, audio);
                })
        }
}
