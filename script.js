document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('image');
    const zoomButton = document.getElementById('zoomButton');
    const audio = document.getElementById('audio');
    let blinkInterval;

    const moonImages = ['moon-small.jpg', 'moon-medium.jpg', 'moon-big.jpg'];
    let currentSizeIndex = 0;

    function updateImage() {
        clearInterval(blinkInterval); // Stop any existing blinking
        document.body.style.backgroundColor = '#000'; // Reset background color

        if (currentSizeIndex < moonImages.length) {
            image.src = moonImages[currentSizeIndex];
            switch (currentSizeIndex) {
                case 0:
                    image.style.width = '200px';
                    break;
                case 1:
                    image.style.width = '400px';
                    break;
                case 2:
                    image.style.width = '600px';
                    break;
            }
            audio.pause();
            audio.currentTime = 0;
        } else {
            image.src = 'person.jpg';
            image.style.width = '150px'; // Adjust size as needed
            audio.play();
            startBlinking();
        }
    }

    function startBlinking() {
        blinkInterval = setInterval(() => {
            document.body.style.backgroundColor = 
                document.body.style.backgroundColor === 'black' ? 'white' : 'black';
        }, 100); // Adjust the interval as needed
    }

    zoomButton.addEventListener('click', function() {
        currentSizeIndex = (currentSizeIndex + 1) % (moonImages.length + 1);
        updateImage();
    });

    // Initialize with the default size
    updateImage();
});
