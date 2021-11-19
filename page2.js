var dishes = [
  {
    id: 1,
    name: "Chicken Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 2,
    name: "Ham Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 3,
    name: "Cheese Burger",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 4,
    name: "Fries",
    restaurant: "Mc Donalds",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 5,
    name: "Egg Muffin",
    restaurant: "Mc Donalds",
    availableMeals: ["breakfast"],
  },
  {
    id: 6,
    name: "Burrito",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 7,
    name: "Tacos",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 8,
    name: "Quesadilla",
    restaurant: "Taco Bell",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 9,
    name: "Steak",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 10,
    name: "Yakitori",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 11,
    name: "Nankotsu",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 12,
    name: "Piman",
    restaurant: "BBQ Hut",
    availableMeals: ["dinner"],
  },
  {
    id: 13,
    name: "Vegan Bento",
    restaurant: "Vege Deli",
    availableMeals: ["lunch"],
  },
  {
    id: 14,
    name: "Coleslaw Sandwich",
    restaurant: "Vege Deli",
    availableMeals: ["breakfast"],
  },
  {
    id: 15,
    name: "Grilled Sandwich",
    restaurant: "Vege Deli",
    availableMeals: ["breakfast"],
  },
  {
    id: 16,
    name: "Veg. Salad",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 17,
    name: "Fruit Salad",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 18,
    name: "Corn Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 19,
    name: "Tomato Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 20,
    name: "Minestrone Soup",
    restaurant: "Vege Deli",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 21,
    name: "Pepperoni Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 22,
    name: "Pepperoni Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 23,
    name: "Hawaiian Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 24,
    name: "Seafood Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 25,
    name: "Deep Dish Pizza",
    restaurant: "Pizzeria",
    availableMeals: ["dinner"],
  },
  {
    id: 26,
    name: "Chow Mein",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 27,
    name: "Mapo Tofu",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 28,
    name: "Kung Pao",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 29,
    name: "Wontons",
    restaurant: "Panda Express",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 30,
    name: "Garlic Bread",
    restaurant: "Olive Garden",
    availableMeals: ["breakfast", "lunch", "dinner"],
  },
  {
    id: 31,
    name: "Ravioli",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 32,
    name: "Rigatoni Spaghetti",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
  {
    id: 33,
    name: "Fettucine Pasta",
    restaurant: "Olive Garden",
    availableMeals: ["lunch", "dinner"],
  },
];
//console.log(dishes);

var listTwo = [];
function storeListTwo() {
  var resList = document.getElementById("res_list").value;
  console.log(resList);
  localStorage.setItem("listTwo", JSON.stringify(listTwo));
  listTwo.push({
    resList: resList,
  });
  localStorage.setItem("listTwo", JSON.stringify(listTwo));
  console.log(localStorage);
  console.log(listTwo);
}

var van = dishes.map((x) => {
  return x.restaurant;
});

let firstMeal = JSON.parse(localStorage.getItem("listOne"));
var getMeal = firstMeal.map((h) => {
  return h.threeMeal;
});

const mealtype = getMeal[0];
const restaurant1 = dishes.map((data) => {
  return data.availableMeals.map((innerdata) => {
   // console.log(mealtype, "mealtype");
    if (innerdata == mealtype) {
      return data.restaurant;
    } 
  });
});
console.log(restaurant1);



var outputArray = [];
var count = 0;
var start = false;

for (j = 0; j < van.length; j++) {
  for (k = 0; k < outputArray.length; k++) {
    if (van[j] == outputArray[k]) {
      start = true;
    }
  }
  count++;
  if (count == 1 && start == false) {
    outputArray.push(van[j]);
  }
  start = false;
  count = 0;
}
//console.log(outputArray);
select = document.getElementById("res_list");
let str = "";
outputArray.forEach((key) => {
  str += `<option value='${key}'>${key}</option>`;
});
select.innerHTML = str;

var v = JSON.stringify(getMeal);
//console.log(v)
// let secondMeal = lunch;
// let thirdMeal = dinner;
var refine_dish = dishes
  .filter((x) => {
    //console.log(x.availableMeals)
    x.availableMeals.filter((t) => {
      // console.log(t)
      // console.log(getMeal)
    });
  })
  .map((x) => {
    return x;
  });
//console.log(refine_dish)


document.getElementById("btnTwo").addEventListener("click", function (event) {
  event.preventDefault();
});