/**
 * NOTE: To run the test, enter "npx jest" in the terminal.
 */


// Import the function to be tested
const groupByStatus = require('./serinoTechExam.js');

// Test case 1
test('Groups data by status correctly', () => {
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

  const expectedResult = {
    "status-1": [
      {
        "id": 1,
        "name": "John Doe",
        "status": 1
      },
      {
        "id": 4,
        "name": "Luis Rocket",
        "status": 1
      }
    ],
    "status-2": [
      {
        "id": 2,
        "name": "Jane Doe",
        "status": 2
      },
      {
        "id": 3,
        "name": "Adam Rocket",
        "status": 2
      }
    ]
  };

  // Call the function with the initial data
  const result = groupByStatus(initialData);

  // Check if the result matches the expected result
  expect(result).toEqual(expectedResult);
});