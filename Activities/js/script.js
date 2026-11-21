document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value;

    document.getElementById("message").textContent =
        "Thank you, " + name + "! We appreciate your feedback.";

    this.reset();
});