function insertionSort() {
  var array = [];
  var size = 10;
  for (var i = 0; i < size; i++) {
    array.push(Math.random() * 10);
  }
  for (var i = 1; i < size; i++) {
    var number = array[i];
    var back = i - 1;
    while (back >= 0 && array[back] > number) {
      array[back + 1] = array[back];
      back -= 1;
    }
    array[back + 1] = number;
  }
  document.getElementById("insertion").innerHTML = array;
} 