// Get the modal, button, and form elements
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementsByClassName("close")[0];
const form = document.getElementById("myForm");
const submitBtn = document.getElementById("submitBtn");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // You can perform form validation here

    // Redirect to the thank you page
    window.location.href = "thank-you.html";
}

// Event listeners for opening and closing the modal
openModalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

// Event listener for form submission
form.addEventListener("submit", handleSubmit);

// Close the modal if the user clicks anywhere outside of it
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
