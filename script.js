const form = document.getElementById("inquiryForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const inquiry = {
        id: "INQ-" + Date.now(),

        name: document.getElementById("name").value,
        buyerType: document.getElementById("buyerType").value,
        quantity: document.getElementById("quantity").value,
        destination: document.getElementById("destination").value,
        date: document.getElementById("date").value,
        budget: document.getElementById("budget").value,
        message: document.getElementById("message").value,

        createdAt: new Date().toLocaleString()
    };

    // Get existing inquiries
    const inquiries =
        JSON.parse(localStorage.getItem("inquiries")) || [];

    // Add the new inquiry
    inquiries.push(inquiry);

    // Save ALL inquiries
    localStorage.setItem(
        "inquiries",
        JSON.stringify(inquiries)
    );

    document.getElementById("formMessage").textContent =
        `Thanks, ${inquiry.name}. Your inquiry has been captured.`;

    form.reset();
});