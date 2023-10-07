const countdownDate = new Date("2023-10-31 23:59:59").getTime();

// Update the countdown every second
const timerInterval = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft < 0) {
        clearInterval(timerInterval);
        document.getElementById("timer").innerHTML = "EXPIRED";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days + "d ";
        document.getElementById("hours").innerHTML = hours + "h ";
        document.getElementById("minutes").innerHTML = minutes + "m ";
        document.getElementById("seconds").innerHTML = seconds + "s ";
    }
}, 1000);

// Function to open the modal
    function openModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
    }

    // Function to close the modal
    function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }

    // Call the openModal function when the page loads
    window.onload = openModal;

    // Add an event listener to the entire document to close the modal when clicked outside
  var modal = document.getElementById("myModal");
  var closeButton = document.getElementById("closeBtn");

  // When the user clicks outside the modal, close it
  window.onclick = function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  };

  // Add an event listener to the close button
  closeButton.addEventListener("click", function () {
      modal.style.display = "none";
  });
