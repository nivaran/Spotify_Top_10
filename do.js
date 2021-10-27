let songplay = new Audio("songs/1.mp3");
let gif = document.getElementById("gif");
let playpause = document.getElementById("play")
let playnow = document.getElementById("playbutton")
let songlist = Array.from(document.getElementsByClassName("songslist"));
let proname = document.getElementById("proname")
let index = 0

// ITEMS POPULATING

let songs = [{ songnames: "A$AP Rocky - Praise The Lord (Da Shine)", filepath: "songs/1.mp3", coverpath: "cover/1.jpg" },
{ songnames: "Charlie Puth - We Don't Talk Anymore", filepath: "songs/2.mp3", coverpath: "cover/2.jpg" },
{ songnames: "The Weeknd - Blinding Lights", filepath: "songs/3.mp3", coverpath: "cover/3.jpg" },
{ songnames: "Travis Scott - HIGHEST IN THE ROOM", filepath: "songs/4.mp3", coverpath: "cover/4.jpg" },
{ songnames: "Lost Stories - Bombay Dreams ", filepath: "songs/5.mp3", coverpath: "cover/5.jpg" },
{ songnames: "KK - Beetein Lamhein", filepath: "songs/6.mp3", coverpath: "cover/6.jpg" },
{ songnames: "Manike Mage Hithe - Yohani Ft. Muzistar", filepath: "songs/7.mp3", coverpath: "cover/7.jpg" },
{ songnames: "Raataan Lambiyan", filepath: "songs/8.mp3", coverpath: "cover/8.jpg" },
{ songnames: "murder 2 - haal e dil", filepath: "songs/9.mp3", coverpath: "cover/9.jpg" },
{ songnames: "Bilanchi Nagin Nighali ", filepath: "songs/10.mp3", coverpath: "cover/10.jpg" },
]



//PAUSE $ PLAY IN BOTTOM MUSIC PLAYER

let i = 0;
songlist.forEach((Element, i) => {
    Element.getElementsByTagName("img")[0].src = songs[i].coverpath
    Element.getElementsByClassName("songNames")[0].innerText = songs[i].songnames
});

playnow.addEventListener("click", () => {
    if (songplay.paused || songplay.currentTime <= 0) {
        songplay.play();
        playnow.classList.remove("fa-play");
        playnow.classList.add("fa-pause");
        gif.style.opacity = 1
    }
    else {
        songplay.pause();
        playnow.classList.remove("fa-pause");
        playnow.classList.add("fa-play");
        gif.style.opacity = 0
    }
})

// RANGE EVENT

songplay.addEventListener("timeupdate", () => {
    progress = parseInt((songplay.currentTime / songplay.duration) * 100);
    play.value = progress;
})

playpause.addEventListener("change", () => {
    songplay.currentTime = (play.value * songplay.duration) / 100
})

// PLAY & PAUSE THROUGH SONG LIST 

const removepause = () => {
    Array.from(document.getElementsByClassName("playpause")).forEach((Element) => {
        Element.classList.remove("fa-pause")
        Element.classList.add("fa-play")
    })
}

Array.from(document.getElementsByClassName("playpause")).forEach((element) => {

    element.addEventListener("click", (e) => {

        index = parseInt(e.target.id)
        e.target.classList.contains
        if (e.target.classList.contains("fa-play")) {
            removepause()
            e.target.classList.remove("fa-play")
            e.target.classList.add("fa-pause")
            songplay.src = `songs/${index + 1}.mp3`
            proname.innerText = songs[index].songnames
            songplay.currentTime = 0
            songplay.play()
            gif.style.opacity = 1
            playnow.classList.remove("fa-play")
            playnow.classList.add("fa-pause")
        }
        else {
            removepause()
            songplay.pause();
            e.target.classList.remove("fa-pause")
            e.target.classList.add("fa-add")
            playnow.classList.remove("fa-pause");
            playnow.classList.add("fa-play");
            gif.style.opacity = 0
        }
    })
}
)

// PREVIOUS & NEXT SONG EVENT FOR BOTTOM MUSIC PLAYER

document.getElementById("presong").addEventListener("click", () => {
    if (index <= 0) {
        index = 0
    }
    else {
        index -= 1
    }
    songplay.src = `songs/${index + 1}.mp3`
    proname.innerText = songs[index].songnames
    songplay.currentTime = 0
    songplay.play()
    gif.style.opacity = 1
    playnow.classList.remove("fa-play")
    playnow.classList.add("fa-pause")
})

document.getElementById("nextsong").addEventListener("click", () => {
    if (index >= 9) {
        index = 0
    }
    else {
        index += 1
    }
    songplay.src = `songs/${index + 1}.mp3`
    proname.innerText = songs[index].songnames
    songplay.currentTime = 0
    songplay.play()
    gif.style.opacity = 1
    playnow.classList.remove("fa-play")
    playnow.classList.add("fa-pause")
})

/*while(songplay.currentTime=songplay.duration){
    index += 1
    songplay.src = `songs/${index + 1}.mp3`
    proname.innerText = songs[index].songnames
    songplay.currentTime = 0
    songplay.play()
    gif.style.opacity = 1
    playnow.classList.remove("fa-play")
    playnow.classList.add("fa-pause")
}*/