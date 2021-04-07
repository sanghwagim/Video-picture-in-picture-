const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream, pass to video stream them play. 

async function selectMediaStream () {

    try { 

        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => { 
            videoElement.play();
        }
    }
    catch (error) { 
         console.log('Whoops, error here');
gi
    }

} 

button.addEventListener('click', async () => { 
    // Disable button 
    button.disabled = true;
    // Start Picture in Picture 

    await videoElement.requestPictureInPicture();
    //reset button 
    button.disabled= false;
}); 


//On Load 
selectMediaStream();