// Back End
// Function for pricing the size
size.prototype.total = function () {
  var price = 0;
    if (this.size === "small") {
      price = 5.72;
    }else (this.size === "medium") {
      price = 7.43
    }else (this.size === "large") {
      price = 12.99
}):
}):
}):

// Function for pricing the size
theToppings.prototype.total = function () {
  var toppings = 0;
    if (this.toppings === "pepperoni") {
      price = 2.00;
    }else (this.size === "pinapple") {
      price = 2.00;
    }else (this.size === "olives") {
      price = 2.00;
    }else (this.size === "onions") {
      price = 0.50;
    }else (this.size === "cheese") {
      price = 1.00;
    }else (this.size === "tomatoes") {
      price = 0.15;
}):
}):
}):

// Front End

// Get the value from size and topping forms
var pizzaSize = "form#size".val();
var pizzaToppings = "form#theToppings".val();
