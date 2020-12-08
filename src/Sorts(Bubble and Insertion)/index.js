var size = prompt("Size of array:", "");
var array = [];
for (var i = 0; i < size; i++) {
  array[i] = prompt("Add element:", "");
}
var type = prompt("Select type of sort (1 or 2) ` 1-Bubble sort, 2-Insertion sort", "");
if (type == 1) {
  alert(bubbleSort(array, size));
}
else if (type == 2) {
  alert(insertionSort(array, size));
}
else {
  alert("Goodbye");
}

function bubbleSort(array, size) {
  for (var i = 0; i < size - 1; i++) {
    for (var j = 0; j < size - 1; j++) {
      if (array[j] > array[j + 1]) {
        var number = array[j];
        array[j] = array[j + 1];
        array[j + 1] = number;
      }
    }
  }
  document.getElementById("bubble").innerHTML = "<strong>Bubble sort:</strong> " + alert(array);
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
  document.getElementById("insertion").innerHTML = "<strong>Insertion sort:</strong> " + alert(array);
} 