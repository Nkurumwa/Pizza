function Pizza(crust, size) {
    this.crust = crust;
    this.size = size;
    this.toppings = [];
    this.price = 0;
  }
  Pizza.prototype.cost = function() {
    var price = 0;
    if (this.size === "Small") {
      price += 7;
    } else if (this.size === "Medium") {
      price += 9;
    } else if (this.size === "Large") {
      price += 11;
    } else {
      price+= 16;
    }
  
    for (var i = 0; i < this.toppings.length; i++) {
      price += 1;
    }
  
    this.price = price;
  }