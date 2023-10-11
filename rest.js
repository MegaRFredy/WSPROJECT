document.addEventListener('DOMContentLoaded', function() {
    var audioElement = document.getElementById('bgMusic');
    var playPauseButton = document.getElementById('playPauseBtn');
    var nextButton = document.getElementById('nextBtn');
    var prevButton = document.getElementById('prevBtn');

    var tracks = ["asset/Aku sayang kamu juga sayang (Lyrics).mp3", "asset/Diamond Eyes - Everything [NCS Release].mp3", ];
    var currentTrackIndex = 0;

    loadTrack(currentTrackIndex);

    function loadTrack(index) {
        audioElement.src = tracks[index];
        audioElement.load();
        if(audioElement.paused) {
            audioElement.play();
        }
        playPauseButton.innerText = audioElement.paused ? "Play" : "Pause";
    }
    
    

    playPauseButton.addEventListener('click', function() {
        if (audioElement.paused) {
            audioElement.play();
            playPauseButton.innerText = "Pause";
        } else {
            audioElement.pause();
            playPauseButton.innerText = "Play";
        }
    });

    nextButton.addEventListener('click', function() {
        currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
        loadTrack(currentTrackIndex);
    });

    prevButton.addEventListener('click', function() {
        currentTrackIndex--;
        if (currentTrackIndex < 0) {
            currentTrackIndex = tracks.length - 1;
        }
        loadTrack(currentTrackIndex);
    });
});
