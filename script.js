const players = document.querySelectorAll('.player');
for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const pulseAnimation = `pulse-${i + 1} var(--pulse-animation-duration) infinite ease-in-out`;
    player.style.animation = pulseAnimation;
}

document.addEventListener('DOMContentLoaded', function() {
    // Get all player elements
    var players = document.querySelectorAll('.player');
  
    // Attach click event listeners to players
    players.forEach(function(player) {
      player.addEventListener('click', function(event) {
        // Get the player ID from the data attribute
        var playerId = event.currentTarget.getAttribute('id');
  
        // Redirect to the corresponding page based on the player ID
        window.location.href = playerId + '.html';
      });
    });
  });