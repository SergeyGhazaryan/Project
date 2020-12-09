var size = Number(prompt("Size of array:", ""));
var array = [];
for (var i = 0; i < size; i++) {
  array[i] = Number(prompt("Add element:", ""));
}
var type = Number(prompt("Select type of sort (1 or 2) ` 1-Bubble sort, 2-Insertion sort", ""));
if (type == 1) {
  bubbleSort(array, size);
}
else if (type == 2) {
  insertionSort(array, size);
}
else {
  alert("There is no such type");
}

function bubbleSort(array, size) {
  for (var i = 0; i < size - 1; i++) {
    for (var j = 0; j < size - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        var number = array[j];
        array[j] = array[j + 1];
        array[j + 1] = number;
      }
    }
  }
  alert(array);
} 

function insertionSort(array, size) {
  for (var i = 1; i < size; i++) {
    var number = array[i];
    var back = i - 1;
    while (back >= 0 && array[back] > number) {
      array[back + 1] = array[back];
      back -= 1;
    }
    array[back + 1] = number;
  }
  alert(array);
} 