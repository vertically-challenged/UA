let audio = {
  1: $("#sound01")[0],
  2: $("#sound02")[0],
  3: $("#sound03")[0],
  4: $("#sound04")[0],
  5: $("#sound05")[0],
  6: $("#sound06")[0],
  7: $("#sound07")[0],
  8: $("#sound08")[0],
  9: $("#sound09")[0],
}

for (let k = 1; k < 9; k++) {
  $("#sound" + k).mouseenter(function() {
    audio[k].play();
   }).mouseleave(function() {
    audio[k].pause();
  }); 
}

let i = 1; 
for (let key in audio) {
  audio[key] = document.querySelector("#sound0" + i);
  audio[key].volume = 0.15; 
  i++; 
}