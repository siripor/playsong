const song = document.getElementById("song")
const Btnplay = document.getElementById("play")
const Btnpause = document.getElementById("pause")
const songProgressBar = document.getElementById("seek")
const Btnplayrewind = document.getElementById("playrewind")
const Btnplayfast = document.getElementById("playfast")

Btnpause.style.display="none"

Btnplay.onclick=()=>{
  song.play();
Btnpause.style.display=""
Btnplay.style.display="none"  
}

Btnpause.onclick=()=>{
  song.pause();
Btnpause.style.display="none"
Btnplay.style.display=""  
}

song.onloadedmetadata=()={
  songProgressBar.max = song.duration;
  songProgressBar.value = song.currentTime;

}

if(song.play()){
  setInterval(()=>{
    songProgressBar.value = song.currentTime;
  },500);
}

songProgressBar.onchange=()={
  song.currentTime = songProgressBar.value;
}

Btnplayrewind.onclick=()=>{
  song.currentTime -= 10;
}
Btnplayfast.onclick=()=>{
  song.currentTime += 10;
}
