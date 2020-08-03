const interval = setInterval(() => {
    const header = document.querySelector('header');
    if (header)  {
        clearInterval();
        const button = document.createElement("button");
        button.innerHTML = "2x";
        button.classList.add("timesButton");
        header.appendChild(button);
        
        button.addEventListener("click", () => {
            const audios = document.querySelectorAll("audio");
            audios.forEach(audio => {
                audio.playbackRate = 2;
            })
        })
    };
}, 1000);