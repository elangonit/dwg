document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("questionnaire-form");

    form.addEventListener("submit", function (e) {
        const selectedCheckboxes = document.querySelectorAll(".appliance-checkbox:checked");
        if (selectedCheckboxes.length <20) {
            e.preventDefault(); // Prevent form submission
            alert("Please select at least 20 appliance.");
        } else if (selectedCheckboxes.length > 20) {
            e.preventDefault(); // Prevent form submission
            alert("Choose 20 appliances only.");
        } else {
            // If the selection is valid, proceed with saving responses
            let responses = "Selected Appliances:\n";
            selectedCheckboxes.forEach((checkbox) => {
                responses += `${checkbox.value}\n`;
            });

            // Create a Blob containing the responses
            const blob = new Blob([responses], { type: "text/plain" });

            // Create a download link for the Blob
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "responses.txt";
            a.style.display = "none";

            // Append the link to the body and trigger a click event
            document.body.appendChild(a);
            a.click();

            // Clean up
            document.body.removeChild(a);
        }
    });
});
