var audio = $("#sound")[0];
$("#sound1").mouseenter(function() {
  audio.play();
}).mouseleave(function() {
  audio.pause();
});

// Хз почему не работает, я ни бум-бум в js