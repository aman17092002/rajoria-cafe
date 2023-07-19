// Script to automatically set the date on the customer details page
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("date");
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    dateInput.value = formattedDate;
  
    // Script to automatically generate a file number (this is a simplified example)
    const fileNumberInput = document.getElementById("fileNumber");
    fileNumberInput.value = generateFileNumber();
  });
  
  function generateFileNumber() {
    // This is a simplified example of generating a file number
    // In a real-world scenario, you might want to fetch the latest file number from the database and increment it
    // For now, we'll just use a random number as an example
    return Math.floor(Math.random() * 100000);
  }
  
  // Script to handle form submission on the customer details page
  document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Perform form validation here, e.g., check if all required fields are filled correctly
  
    // If form validation passes, you can send the data to the server using AJAX or form submission
    // For this example, we'll just show an alert to indicate successful form submission
    alert("Customer details saved successfully!");
  });
// Existing JavaScript code...

// Script to handle the Print button click event
document.getElementById("printDetails").addEventListener("click", function() {
    window.print();
  });
// Script to automatically set the date on the customer details page
document.addEventListener("DOMContentLoaded", function() {
    // ... Existing code ...
  
    // Script to automatically generate a file number (this is a simplified example)
    document.getElementById("fileNumber").value = generateFileNumber();
  });
  
  function generateFileNumber() {
    // ... Existing code ...
  }
  
  // Script to handle form submission on the customer details page
  document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Perform form validation here, e.g., check if all required fields are filled correctly
  
    // If form validation passes, you can send the data to the server using AJAX or form submission
    // For this example, we'll just show an alert to indicate successful form submission
    alert("Customer details saved successfully!");
  
    // Reset the form after successful submission
    document.getElementById("customerForm").reset();
  
    // Generate the next file number
    document.getElementById("fileNumber").value = generateFileNumber();
  });
// Script to automatically set the date on the customer details page
document.addEventListener("DOMContentLoaded", function() {
    // ... Existing code ...
  
    // Retrieve the last file number from local storage or initialize it to 1
    let lastFileNumber = parseInt(localStorage.getItem("lastFileNumber")) || 1;
  
    // Set the file number input value to the last file number
    document.getElementById("fileNumber").value = lastFileNumber;
  });
  
  function generateFileNumber() {
    // Retrieve the last file number from local storage or initialize it to 1
    let lastFileNumber = parseInt(localStorage.getItem("lastFileNumber")) || 1;
  
    // Calculate the next file number
    let nextFileNumber = lastFileNumber + 1;
  
    // Update the last file number in local storage
    localStorage.setItem("lastFileNumber", nextFileNumber);
  
    return nextFileNumber;
  }
  
  // Script to handle form submission on the customer details page
  document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Perform form validation here, e.g., check if all required fields are filled correctly
  
    // If form validation passes, you can send the data to the server using AJAX or form submission
    // For this example, we'll just show an alert to indicate successful form submission
    alert("Customer details saved successfully!");
  
    // Reset the form after successful submission
    document.getElementById("customerForm").reset();
  
    // Generate the next file number and update the input field
    document.getElementById("fileNumber").value = generateFileNumber();
  });
// Script to automatically set the date on the customer details page
document.addEventListener("DOMContentLoaded", function() {
    // ... Existing code ...
  
    // Retrieve the last file number from local storage or initialize it to 1
    let lastFileNumber = parseInt(localStorage.getItem("lastFileNumber")) || 1;
  
    // Set the file number input value to the last file number
    document.getElementById("fileNumber").value = lastFileNumber;
  });
  
  function generateFileNumber() {
    // Retrieve the last file number from local storage or initialize it to 1
    let lastFileNumber = parseInt(localStorage.getItem("lastFileNumber")) || 1;
  
    // Calculate the next file number
    let nextFileNumber = lastFileNumber + 1;
  
    // Update the last file number in local storage
    localStorage.setItem("lastFileNumber", nextFileNumber);
  
    return nextFileNumber;
  }
  
  // Script to handle form submission on the customer details page
  document.getElementById("customerForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Perform form validation here, e.g., check if all required fields are filled correctly
  
    // If form validation passes, you can send the data to the server using AJAX or form submission
    // For this example, we'll just show an alert to indicate successful form submission
    alert("Customer details saved successfully!");
  
    // Reset the form after successful submission
    document.getElementById("customerForm").reset();
  
    // Generate the next file number and update the input field
    document.getElementById("fileNumber").value = generateFileNumber();
  });
          