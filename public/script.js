
const myVideo=document.createElement('video');
myVideo.muted=true;


let myVideoStream
navigator.mediaDevices.getUserMedia({
    video:true,
    audio:true
}).then(stream => {
myVideoStream=stream
addVideoStream(myVideo, video)
})


const addVideoStream = (video, stream)=>{
    video.srcObject=stream;
    video.addEventListener('loadmmetadata',()=>{
        video.play();
    })
}