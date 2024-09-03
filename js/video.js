const video = document.querySelector("#bg-video");
const playlist = ['video1', 'video2','video3'];
const playlistName = ['Nike Jordan 11 mid', 'Nike air max 568', 'Nike Jordan 1 high']
const playlistText = ['текст1', 'текст2', 'текст3']
let title = 0
let index = 0
function play()
{
    if(video.paused==true)
    {
        video.play()
        document.querySelector("#play").innerText="pause"
    }
    else
    {
        video.pause()
        document.querySelector("#play").innerText="play"
    }
}
function mute(){
    if(video.muted==false)
    {
        video.muted = true;
        document.querySelector("#mute").innerText="On"
    }
    else{
        video.muted = false;
        document.querySelector("#mute").innerText="Off"

    }
}
function next (){
    
    index++
    if (index>playlist.length-1){
        index=0
    }
    video.src=`video/${playlist[index]}.mp4`

    document.querySelector('.video__title').innerText = playlistName[index]
    document.querySelector('.video__text').innerText = playlistText[index]
    
    
}
function prev(){

    index=index-1
    if(index<0){
        index=playlist.length-1
    }
    video.src=`video/${playlist[index]}.mp4`
    document.querySelector('.video__title').innerText = playlistName[index]
    document.querySelector('.video__text').innerText = playlistText[index]
}
