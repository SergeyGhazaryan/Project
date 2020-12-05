function bubbleSort() {
  var array = [];
  var size = 10;
  for (var i = 0; i < size; i++) {
    array.push(Math.random() * 10);
  }
  for (var i = 0; i < size - 1; i++) {
    for (var j = 0; j < size - 1; j++) {
      if (array[j] > array[j + 1]) {
        var number = array[j];
        array[j] = array[j + 1];
        array[j + 1] = number;
      }
    }
  }
  document.getElementById("bubble").innerHTML = array ;
} 