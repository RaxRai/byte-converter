let head = document.getElementById("head");

console.log(head);
let rightBox = document.getElementById("rightBox");
let leftBox = document.getElementById("leftBox");

// let rightSelect = document.getElementById("rightSelect").value;
// let leftSelect = document.getElementById("leftSelect").value;
// console.log(rightSelect + " " + leftSelect);

leftBox.onkeyup = function () {
  let myVal = parseFloat(leftBox.value);
  let rightSelect = document.getElementById("rightSelect").value;
  let leftSelect = document.getElementById("leftSelect").value;
  if (leftSelect === rightSelect) {
    rightBox.value = myVal;
  } else if (leftSelect === "byte" && rightSelect === "kb") {
    rightBox.value = myVal / 1024 + " KB";
  } else if (leftSelect === "byte" && rightSelect === "mb") {
    rightBox.value = myVal / 1024 / 1024 + " MB";
  } else if (leftSelect === "byte" && rightSelect === "gb") {
    rightBox.value = (myVal / (1024 * 1024 * 1024)).toFixed(12) + " GB";
  } else if (leftSelect === "kb" && rightSelect === "byte") {
    rightBox.value = myVal * 1024 + " bytes";
  } else if (leftSelect === "kb" && rightSelect === "mb") {
    rightBox.value = myVal / 1024 + " MB";
  } else if (leftSelect === "kb" && rightSelect === "gb") {
    rightBox.value = myVal / 1024 / 1024 + " GB";
  } else if (leftSelect === "gb" && rightSelect === "byte") {
    rightBox.value = myVal * 1024 * 1024 * 1024 + " bytes";
  } else if (leftSelect === "gb" && rightSelect === "kb") {
    rightBox.value = myVal * 1024 * 1024 + " KB";
  } else if (leftSelect === "gb" && rightSelect === "mb") {
    rightBox.value = myVal * 1024 + " MB";
  } else if (leftSelect === "mb" && rightSelect === "byte") {
    rightBox.value = myVal * 1024 * 1024 + " bytes";
  } else if (leftSelect === "mb" && rightSelect === "kb") {
    rightBox.value = myVal * 1024 + " KB";
  } else if (leftSelect === "mb" && rightSelect === "gb") {
    rightBox.value = myVal / 1024 + " GB";
  } else {
    rightBox.value = 0;
  }
};

// rightBox.onkeyup = function () {
//   let myVal = parseFloat(rightBox.value);
//   let rightSelect = document.getElementById("rightSelect").value;
//   let leftSelect = document.getElementById("leftSelect").value;
//   if (leftSelect === rightSelect) {
//     rightBox.value = myVal;
//   } else if (leftSelect === "byte" && rightSelect === "kb") {
//     rightBox.value = myVal / 1024;
//   } else if (leftSelect === "byte" && rightSelect === "gb") {
//     rightBox.value = (myVal / (1024 * 1024 * 1024)).toFixed(8);
//   } else if (leftSelect === "kb" && rightSelect === "byte") {
//     rightBox.value = myVal * 1024;
//   } else if (leftSelect === "kb" && rightSelect === "gb") {
//     rightBox.value = myVal / 1024 / 1024;
//   } else if (leftSelect === "gb" && rightSelect === "byte") {
//     rightBox.value = myVal * 1024 * 1024 * 1024;
//   } else if (leftSelect === "gb" && rightSelect === "kb") {
//     rightBox.value = myVal * 1024 * 1024;
//   } else {
//     rightBox.value = NaN;
//   }
// };
