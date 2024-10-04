const hamburer = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

if (hamburer) {
  hamburer.addEventListener("click", () => {
    navList.classList.toggle("open");
  });
}

// Popup
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

if (popup) {
  closePopup.addEventListener("click", () => {
    popup.classList.add("hide-popup");
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      popup.classList.remove("hide-popup");
    }, 1000);
  });
}


//addtocart
    document.querySelectorAll('.product-item').forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        const name = this.dataset.name;
        const image = this.dataset.image;
        const price = this.dataset.price;
  
        // Store product details in local storage
        localStorage.setItem('cartItem', JSON.stringify({ name, image, price, quantity: 1, portionSize: 1 }));
  
        // Redirect to cart page
        window.location.href = 'cart.html';
      });
    });
