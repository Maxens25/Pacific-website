const whale = document.getElementById('whale');

// Coordinates of the islands (you can adjust the timing to smooth out the animation)
const islands = [
  { x: '5%', delay: 1000 },    // Island 1
  { x: '25%', delay: 2000 },   // Island 2
  { x: '45%', delay: 3000 },   // Island 3
  { x: '65%', delay: 4000 },   // Island 4
  { x: '85%', delay: 5000 }    // Island 5
];

function moveWhale() {
  let i = 0;
  function travelToIsland() {
    if (i < islands.length) {
      whale.style.left = islands[i].x;
      whale.style.transition = 'left 2s';
      
      // Move to the next island after the delay
      setTimeout(travelToIsland, islands[i].delay);
      i++;
    }
  }
  
  // Start the animation
  travelToIsland();
}

// Start the whale's journey after a short delay
setTimeout(moveWhale, 1000);
