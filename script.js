


function getThreeMeal() {
  var mealData = {};
  mealData["threeMeal"] = document.getElementById("three_meal").value;
  console.log(mealData);
}

function getGuestQuantity() {
  var guestQuantity = {};
  guestQuantity["guestQuantity"] = document.getElementById("guest_quantity").value;
  console.log(guestQuantity);
}
var listOne= [];
function storeData() {
  var threeMeal = document.getElementById("three_meal").value;
  var guestQuantity = document.getElementById("guest_quantity").value;
  //listOne = JSON.parse(localStorage.getItem("listOne"));
   localStorage.setItem("listOne", JSON.stringify(listOne));
   listOne.push({
    "threeMeal": threeMeal,
    "guestQuantity": guestQuantity
  });``
  localStorage.setItem("listOne", JSON.stringify(listOne));
  console.log(localStorage)
  console.log(listOne);
  
}

// document.getElementById("btnOne").addEventListener("click", function (event) {
//   event.preventDefault();
// });

