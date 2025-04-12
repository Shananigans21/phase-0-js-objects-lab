//Write your code here
// 1. Create the attendee object
let attendee = {
  attendeeId: "T001",
  name: "Alice Smith",
  event: "JavaScript Conference",
  ticketType: "VIP",
  ticketPrice: 150.00
};

// 2. Function to log attendee name
function logAttendeeName(attendee) {
  console.log(attendee.name);
}

// 3. Function to log ticket price
function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice);
}

// 4. Function to update ticket type
function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType;
}

// 5. Function to remove the event property
function removeEventProperty(attendee) {
  delete attendee.event;
}

// 6. Function to add checkedIn property
function addCheckedInProperty(attendee) {
  attendee.checkedIn = true;
}

// === Testing Functions ===
console.log("1. Log Attendee Name:");
logAttendeeName(attendee); // Expected: Alice Smith

console.log("2. Log Ticket Price:");
logTicketPrice(attendee); // Expected: 150.00

console.log("3. Update Ticket Type:");
updateTicketType(attendee, "Regular");
console.log(attendee.ticketType); // Expected: Regular

console.log("4. Remove Event Property:");
removeEventProperty(attendee);
console.log(attendee.event); // Expected: undefined

console.log("5. Add Checked In Property:");
addCheckedInProperty(attendee);
console.log(attendee.checkedIn); // Expected: true

console.log("Final attendee object:");
console.log(attendee);



//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};