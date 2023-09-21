//JavaScript to handle form submission and show/hide options
const componentSelect = document.getElementById("component");
const extraOptions = document.getElementById("extra-options");

// Sample data for component options
const componentOptions = {
    cpu: ["Intel Core i7", "AMD Ryzen 9", "Intel Core i9"],
    gpu: ["NVIDIA GeForce RTX 3080", "AMD Radeon RX 6900 XT", "NVIDIA GeForce RTX 3060 Ti"],
    ram: ["16GB DDR4", "32GB DDR4", "64GB DDR4"],
    storage: ["500GB SSD", "1TB HDD", "2TB NVMe SSD"],
    motherboard: ["ASUS ROG Strix", "MSI MPG", "GIGABYTE Aorus"]
};

componentSelect.addEventListener("change", function() {
    const selectedComponent = componentSelect.value;
    // Clear any previously displayed options
    extraOptions.innerHTML = "";

    if (selectedComponent !== "") {
        // Display component-specific options
        const options = componentOptions[selectedComponent];
        if (options) {
            const optionsSelect = document.createElement("select");
            optionsSelect.className = "form-control";
            optionsSelect.id = `${selectedComponent}-options`;
            optionsSelect.required = true;
            optionsSelect.innerHTML = `<option value="">Select an option</option>`;

            options.forEach(option => {
                const optionElement = document.createElement("option");
                optionElement.value = option;
                optionElement.textContent = option;
                optionsSelect.appendChild(optionElement);
            });

            extraOptions.appendChild(optionsSelect);
        }
    }

    // Show or hide the extra options section
    if (selectedComponent === "") {
        extraOptions.style.display = "none";
    } else {
        extraOptions.style.display = "block";
    }
});

document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add JavaScript code here to process the form submission
    alert("Order submitted successfully!");
});