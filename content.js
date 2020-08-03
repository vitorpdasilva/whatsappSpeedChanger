const playBackRates = [1, 1.25, 1.5, 1.75, 2, 3]
let playbackRate = 1;
const getHeader = setInterval(() => {
    const header = document.querySelector('header');
    
    if (header)  {
        clearInterval(getHeader);
        const select = document.createElement("select");
        select.id = 'rates'
        playBackRates.forEach(rate => {
            const option = document.createElement("option");
            option.text = `${rate}x`;
            option.setAttribute('value', rate); 
            select.add(option);
        })
        header.appendChild(select);
        
        select.addEventListener("change", playbackRateOption => {
            const audios = document.querySelectorAll("audio");
            playbackRate = playbackRateOption.target.value;
            savePlaybackRateOnLocalStorage();
            audios.forEach(audio => {
                audio.playbackRate = playbackRate;
            })
        });
    };
}, 1000);

const savePlaybackRateOnLocalStorage = () => {
    console.log('playbackRate', playbackRate);
    window.localStorage.setItem('playbackRate', playbackRate);
}

const checkLocalStorage = setInterval(() => {
    savePlaybackRateOnLocalStorage();
}, 5000);