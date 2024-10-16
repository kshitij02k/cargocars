const cars = [
  { name: "Ford Endeavour", price: 8000 },
  { name: "GMC Denali", price: 15000 },
  { name: "Lincoln Navigator", price: 20000 },
  { name: "Jeep Wrangler", price: 7000 },
  { name: "Land Rover Defender", price: 14000 },
  { name: "Tesla Model 3", price: 14000 },
  { name: "Porsche Taycan", price: 25000 },
  { name: "Nissan Leaf", price: 6000 },
  { name: "Hyundai Ioniq 5", price: 5500 },
  { name: "TATA NEXON", price: 3500 },
  { name: "Mercedes-AMGT GT", price: 25000 },
  { name: "Ford Mustang", price: 15500 },
  { name: "Audi R8", price: 30000 },
  { name: "Porsche 911", price: 35000 },
  { name: "Chevrolet Corvette", price: 26000 },
];

// Get all the rent buttons and add event listeners to them
document.querySelectorAll('.rent__button').forEach((button, index) => {
  button.addEventListener('click', () => {
    const carName = cars[index].name;
    const pricePerDay = cars[index].price;

    // First confirmation prompt
    const initialConfirmation = confirm(`Are you sure you want to book the ${carName}?`);

    if (initialConfirmation) {
      // Ask for the number of rental days if the user confirms
      const rentalDays = prompt(`How many days do you want to rent the ${carName}?`);

      // Check if the input is valid
      if (rentalDays && !isNaN(rentalDays) && rentalDays > 0) {
        // Calculate total cost
        const totalCost = rentalDays * pricePerDay;

        // Display the total bill in an alert
        const billConfirmation = confirm(`The total cost for renting the ${carName} for ${rentalDays} days is ₹${totalCost}. Do you want to proceed?`);

        if (billConfirmation) {
          // Retrieve user details from local storage
          const username = localStorage.getItem('username');
          const address = localStorage.getItem('addressLine');
          const pinCode = localStorage.getItem('pinCode');

          // Final confirmation prompt with a "Thank you" message
          alert(`Car has been booked: ${carName}\nTotal Amount: ₹${totalCost}\nHere are your details:\nName: ${username}\nAddress: ${address}\nPin Code: ${pinCode}\n\nThank you for choosing our service!`);
        } else {
          alert(`Booking for ${carName} has been canceled.`);
        }
      } else {
        alert('Please enter a valid number of days.');
      }
    } else {
      alert(`Booking for ${carName} has been canceled.`);
    }
  });
});
