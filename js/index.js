document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('playButton');
  const audio = document.getElementById('careerPodcast');

  playButton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play().catch(e => {
        console.error("Error playing audio:", e);
        alert("Sorry, there was an error playing the audio. Please check your audio file.");
      });
      playButton.textContent = 'Pause';
    } else {
      audio.pause();
      playButton.textContent = 'Play';
    }
  });

  audio.addEventListener('ended', function() {
    playButton.textContent = 'Play';
  });

  // Check if the audio can be played
  audio.addEventListener('loadedmetadata', function() {
    if (audio.networkState === audio.NETWORK_NO_SOURCE) {
      console.error("No supported audio source found.");
      playButton.disabled = true;
      playButton.textContent = 'Audio Unavailable';
    }
  });
});
