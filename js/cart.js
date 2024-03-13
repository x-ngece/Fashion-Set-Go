// Define products
var products = [
    { name: "Cargo Jacket", price: 999 },
    { name: "Denim Jacket", price: 799 },
    { name: "Sweater", price: 399 },
    { name: "Black'n'White Leather Sneaker", price: 799 },
    { name: "White Leather Sneaker with Black Heel", price: 799 },
    { name: "Olive Green Women's Blazer", price: 1499 },
    { name: "Ciara soft dress - red print", price: 699 },
    { name: "Drop Shoulder Knitted Vest", price: 599 },
    { name: "Naartjie Women's Coat", price: 799 },
    { name: "Red Velvet Women's Coat", price: 1099 },
    { name: "Dusty Rose Casual Zipper Jacket", price: 599 },
    { name: "Kid's Jacket + Scarf", price: 380 },
    { name: "Floral Short-Sleeve long-Shirt", price: 159 },
    { name: "Chequered-shirt + Corduroy-pants", price: 320 },
    { name: "Bruling Black Set", price: 799 },
    { name: "Retro Corduroy Hand Bag", price: 549 },
    { name: "Brown Clutch Bag Set", price: 379 },
    { name: "Cosmetic Pouch Set", price: 430 },
    { name: "Elegant Metal Edge Bag", price: 499 }
  ];
  
  // Initialize shopping cart
  var cart = [];
  
  // Function to add item to cart
  function addToCart(productIndex) {
    cart.push(products[productIndex]);
    alert(products[productIndex].name + " added to cart.");
  }
  
  // Function to remove item from cart
  function removeFromCart(productIndex) {
    var removedItem = cart.splice(productIndex, 1);
    alert(removedItem[0].name + " removed from cart.");
  }
  
  // Function to calculate total price
  function calculateTotalPrice() {
    var totalPrice = 0;
    for (var i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price;
    }
    return totalPrice;
  }
  
  // Function to display cart contents
  function displayCart() {
    var cartContents = "Your cart:\n";
    if (cart.length === 0) {
      cartContents += "Your cart is empty.";
    } else {
      for (var i = 0; i < cart.length; i++) {
        cartContents += cart[i].name + " - $" + cart[i].price + "\n";
      }
      cartContents += "Total: $" + calculateTotalPrice();
    }
    alert(cartContents);
  }
  
  // Function to open the cart modal
  function openCartModal() {
    document.getElementById("cartModal").style.display = "block";
    displayCart(); // Display cart contents when modal is opened
}

// Function to remove item from cart
function removeFromCart(index) {
    var removedItem = cart.splice(index, 1);
    displayCart(); // Update cart contents after removal
}

// Function to clear all items from cart
function clearCart() {
    cart = []; // Empty the cart array
    displayCart(); // Update cart contents after clearing
}

// Function to close the cart modal
function closeCartModal() {
    document.getElementById("cartModal").style.display = "none";
}

// Modified displayCart function to include remove buttons
function displayCart() {
    var cartContentsHTML = "<ul>";
    if (cart.length === 0) {
        cartContentsHTML += "<li>Your cart is empty.</li>";
    } else {
        for (var i = 0; i < cart.length; i++) {
            cartContentsHTML += "<li>" + cart[i].name + " - R" + cart[i].price + " <button onclick='removeFromCart(" + i + ")'>Remove</button></li>";
        }
        cartContentsHTML += "</ul>";
        cartContentsHTML += "<p>Total: R" + calculateTotalPrice() + "</p>";
    }
    document.getElementById("cartContents").innerHTML = cartContentsHTML;
}