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
  Pizza.prototype.toppingsList = function() {
    if (this.toppings.length > 0) {
        return this.toppings.join(", ");
    } else {
      return "None";
    }
  }
  
  $(document).ready(function() {
    var total = 0;
    $(".cartTotal").text(total);
    $("#pizzaForm").submit(function(event) {
        event.preventDefault();
        var crust = $("#crust").val();
        var size = $("#size").val();
        var newPizza = new Pizza(crust, size);
    
        $("input:checkbox[name=topping]:checked").each(function() {
          var toppingChoice = $(this).val();
          newPizza.toppings.push(toppingChoice);
        });
    
        newPizza.cost();
        total += newPizza.price;
    
        $(".cartTotal").text(total);
        $(".cartWell").show();;
        $("#cartHeader").show();
        $("ol#cart").append("<li><span class='cartItem'>" + newPizza.size + " " + newPizza.crust + " Pizza" + "</span></li>");
    
        $(".cartItem").last().click(function() {
          $("#show-pizza").show();
          $("#pizzaListName").text(newPizza.size + " " + newPizza.crust + " Pizza");
          $(".size").text(newPizza.size);
          $(".crust").text(newPizza.crust);
          $(".toppings").text(newPizza.toppingsList());
          $(".cost").text(newPizza.price);
        });
        $("#pizzaForm")[0].reset();
      });
      