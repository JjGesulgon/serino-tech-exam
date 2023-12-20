// Initial data
const initialData = [
  {
    "id": 1,
    "name": "John Doe",
    "status": 1
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "status": 2
  },
  {
    "id": 3,
    "name": "Adam Rocket",
    "status": 2
  },
  {
    "id": 4,
    "name": "Luis Rocket",
    "status": 1
  }
];

// Function to group data by status
function groupByStatus(data) {
// Result object to store grouped data
const result = {};

// Iterate over each item in the initial data
data.forEach(item => {
  // Create a key based on the status of the item
  const statusKey = `status-${item.status}`;

  // If the key doesn't exist in the result object, create an empty array for it
  if (!result[statusKey]) {
    result[statusKey] = [];
  }

  // Push the item to the array corresponding to its status key
  result[statusKey].push(item);
});

// Return the final grouped result
return result;
}

// Call the groupByStatus function with the initial data
const expectedResult = groupByStatus(initialData);

// Log the expected result to the console
console.log(expectedResult);

// Export the groupByStatus function
module.exports = groupByStatus;