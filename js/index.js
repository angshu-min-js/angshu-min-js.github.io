document.addEventListener('DOMContentLoaded', function() {
        const playButton = document.getElementById('playButton');
        const audio = document.getElementById('careerPodcast');

        playButton.addEventListener('click', function() {
          if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause';
          } else {
            audio.pause();
            playButton.textContent = 'Play';
          }
        });

        audio.addEventListener('ended', function() {
          playButton.textContent = 'Play';
        });
      });
