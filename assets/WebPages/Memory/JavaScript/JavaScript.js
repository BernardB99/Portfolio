var array = ["Slike/tile0.jpg", "Slike/tile0.jpg", "Slike/tile1.jpg", "Slike/tile1.jpg", "Slike/tile2.jpg", "Slike/tile2.jpg", "Slike/tile3.jpg", "Slike/tile3.jpg", "Slike/tile4.jpg", "Slike/tile4.jpg", "Slike/tile5.jpg", "Slike/tile5.jpg", "Slike/tile6.jpg", "Slike/tile6.jpg", "Slike/tile7.jpg", "Slike/tile7.jpg", "Slike/tile8.jpg", "Slike/tile8.jpg", "Slike/tile9.jpg", "Slike/tile9.jpg", "Slike/tile10.jpg", "Slike/tile10.jpg", "Slike/tile11.jpg", "Slike/tile11.jpg", "Slike/tile12.jpg", "Slike/tile12.jpg", "Slike/tile13.jpg", "Slike/tile13.jpg", "Slike/tile14.jpg", "Slike/tile14.jpg", "Slike/tile15.jpg", "Slike/tile15.jpg"];
var x = document.getElementsByTagName('p');
var btn = document.getElementsByTagName('button');
var h1 = document.getElementById('desc');
var seconds = 1;
var minute = 0;
var primerjaj = [];
var index = [];
var pairs = 16;

function main() {
  if (pairs != 0) {
    h1.style.display = "none";
    btn[0].style.display = "none";
    x[0].innerHTML = "Pairs remaining: " + pairs;
    x[0].style.display = "block";
    x[1].style.display = "block";
    if (seconds <= 59 && minute == 0) {
      seconds <= 1 ? x[1].innerHTML = "Time spent: " + seconds + " second" : x[1].innerHTML = "Time spent: " + seconds + " seconds";
    } else {
      minute > 1 ? x[1].innerHTML = "Time spent: " + minute + " minutes " + seconds + " seconds" : x[1].innerHTML = "Time spent: " + minute + " minute " + seconds + " seconds";
    }
    if (seconds < 59) seconds++;else {
      seconds = 0;
      minute++;
    }
  } else {
    h1.innerHTML = "Congratulations! You have finished the game! This is your time";
    h1.style.display = "block";
    clearInterval(main);
  }
}

function start() {
  zmesaj(array);
  setInterval(main, 1000);
  main();
}

//po pritisku gumba prikaže slike z fadein effectom
$(document).ready(function () {
  $("button").click(function () {
    $("img").fadeIn("slow");
  });
});

function uncover(imgindex) {
  var tile = document.getElementsByTagName('img');
  if (primerjaj.length < 1) {
    tile[imgindex].src = array[imgindex];
    primerjaj[0] = array[imgindex];
    index[0] = imgindex;
  } else if (primerjaj.length == 1) {
    if (index[0] != imgindex) {
      tile[imgindex].src = array[imgindex];
      setTimeout(function () {
        primerjaj[1] = array[imgindex];
        index[1] = imgindex;
        if (primerjaj[0] == primerjaj[1]) {
          tile[index[0]].style.display = "none";
          tile[index[1]].style.display = "none";
          pairs--;
          x[0].innerHTML = "Pairs remaining: " + pairs;
          primerjaj = [];
          index = [];
        } else {
          tile[index[0]].src = "Slike/coaster.png";
          tile[index[1]].src = "Slike/coaster.png";
          primerjaj = [];
          index = [];
        }
      }, 700);
    }
  }
}

//premeša array
function zmesaj(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
