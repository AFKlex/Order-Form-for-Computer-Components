// Get a reference to the "component" select element in the HTML by its ID
const componentSelect = document.getElementById("component");

// Get a reference to the "extra-options" div element in the HTML by its ID
const extraOptions = document.getElementById("extra-options");

// Sample data for component options
// These options could also be provided in a seperate file or an Database but in this task i decided to just keep sample data in the JS File. 
// In an real application this would be most likely be rendered by server side components that get the information from a sql database.
const componentOptions = {
    cpu: ["Intel Core i7", "AMD Ryzen 9", "Intel Core i9"],
    gpu: ["NVIDIA GeForce RTX 3080", "AMD Radeon RX 6900 XT", "NVIDIA GeForce RTX 3060 Ti"],
    ram: ["16GB DDR4", "32GB DDR4", "64GB DDR4"],
    storage: ["500GB SSD", "1TB HDD", "2TB NVMe SSD"],
    motherboard: ["ASUS ROG Strix", "MSI MPG", "GIGABYTE Aorus"]
};

// Add an event listener to the "component" select element that listens for changes
componentSelect.addEventListener("change", function() {

    // Get the currently selected component from the select element's value
    const selectedComponent = componentSelect.value;

    // Clear any previously displayed options by emptying the "extra-options" div
    extraOptions.innerHTML = "";

    // Check if a component is selected (not an empty value)
    if (selectedComponent !== "") {

        // Create a new select element for the component-specific options
        const optionsSelect = document.createElement("select");

        // Set the class attribute for styling purposes
        optionsSelect.className = "form-control";

        // Set the ID of the select element based on the selected component
        optionsSelect.id = `${selectedComponent}-options`;

        // Mark the select element as required
        optionsSelect.required = true;

        // Add an initial placeholder option
        optionsSelect.innerHTML = `<option value="">Select an option</option>`;

        // Iterate through the options for the selected component and create option elements
        componentOptions[selectedComponent].forEach(option => {
            // Define the option Element
            const optionElement = document.createElement("option");
            // Assugn the attribute value with the option
            optionElement.value = option;
            // Assing the attribute textcontent with option
            optionElement.textContent = option;
            // Append each option element to the select element
            optionsSelect.appendChild(optionElement);
        });

        // Append the select element with options to the "extra-options" div
        extraOptions.appendChild(optionsSelect);
        
    }

    // Show or hide the "extra-options" section based on whether a component is selected
    if (selectedComponent === "") {

        // Hide extra options
        extraOptions.style.display = "none";

    } else {
        
        // Show extra options
        extraOptions.style.display = "block";

    }
});


// Get references to HTML elements
const orderForm = document.getElementById("order-form");

// Add an event listener to the form, which starts the users default e-mail programm an fills in the information so that the user just need to press send to order the product.
// However in a real world application this would be most likely not be implemented in this way but instead there would be a server side application running that progresses the user order request. 
orderForm.addEventListener("submit", function(event) {
    // Prevent the default selection
    event.preventDefault();

    // Get values from form fields
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const component = document.getElementById("component").value;
    const quantity = document.getElementById("quantity").value;
    const comments = document.getElementById("comments").value;

    // Construct the email body with order information
    const emailBody = `
        Name: ${name}
        Email: ${email}
        Phone Number: ${phone}
        Selected Component: ${component}
        Quantity: ${quantity}
        Additional Comments: ${comments}
    `;

    // Encode the email body for the mailto link
    const encodedEmailBody = encodeURIComponent(emailBody);

    // Construct the mailto link with the encoded email body and the recipient email address
    const mailtoLink = `mailto:buycomputerparts@nonexistingmail.com?subject=Computer Component Order&body=${encodedEmailBody}`

    // Open the user's default email application with the mailto link
    window.open(mailtoLink);
});