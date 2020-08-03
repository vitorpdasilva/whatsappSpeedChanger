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
            playbackRate = playbackRateOption.target.value;
            setPlaybackRate();
            savePlaybackRateOnLocalStorage();
            
        });
    };
}, 1000);

const setPlaybackRate = () => {
    const audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        audio.playbackRate = playbackRate;
    })
}

const savePlaybackRateOnLocalStorage = () => {
    window.localStorage.setItem('playbackRate', playbackRate);
}

const interval = setInterval(() => {
    setPlaybackRate();
    savePlaybackRateOnLocalStorage();
}, 5000);