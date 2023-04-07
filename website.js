document.addEventListener("DOMContentLoaded", function() {
    const protagonistButton = document.querySelector("#toggle-protagonist");
    const protagonistImage = document.querySelector("#protagonist-image");
    
    protagonistButton.addEventListener("click", function() {
      if (protagonistImage.style.display === "none") {
        protagonistImage.style.display = "block";
    } else {
        protagonistImage.style.display = "none";
    }
});
});

document.addEventListener("DOMContentLoaded", function() {
    const visitCountButton = document.querySelector("#visit-count");
    visitCountButton.addEventListener("click", function() {
      let count = localStorage.getItem('visitCount') || 0;
      count++;
      localStorage.setItem('visitCount', count);
      alert(`You have visited this website ${count} times.`);
    });
});

window.addEventListener('load', function() {
    const colorBtn1 = document.getElementById("color-1");
    const colorBtn2 = document.getElementById("color-2");
    const colorBtn3 = document.getElementById("color-3");

colorBtn1.addEventListener("click", function () {
    document.body.classList.remove("color-2", "color-3");
    document.body.classList.add("color-1");
  });
  
  colorBtn2.addEventListener("click", function () {
    document.body.classList.remove("color-1", "color-3");
    document.body.classList.add("color-2");
  });
  
  colorBtn3.addEventListener("click", function () {
    document.body.classList.remove("color-1", "color-2");
    document.body.classList.add("color-3");
  });
});


const notificationButton = document.getElementById('show-notification');
notificationButton.addEventListener('click', showNotification);

function getRandomQuote() {
    const quotes = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "The way to get started is to quit talking and begin doing. -Walt Disney",
        "Your time is limited, don't waste it living someone else's life. -Steve Jobs",
        "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey"
    ];
    
    // Get a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    return quote;
}
      
// Create a function to show the notification
function showNotification() {
// Check if the browser supports notifications
if (!('Notification' in window)) {
    alert('This browser does not support desktop notification');
    return;
}
      
// Request permission to show notifications
Notification.requestPermission().then(function (permission) {
// If the user grants permission, show the notification
if (permission === 'granted') {
    const quote = getRandomQuote();
    const notification = new Notification('Quote of the Day', {
        body: quote
    });
}
});
}