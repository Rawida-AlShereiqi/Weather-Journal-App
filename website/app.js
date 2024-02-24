// Getting the current date
let dd = new Date();
let currentDate = dd.toDateString();

// Personal API Key for OpenWeatherMap API
const apiKey = 'a1928ac4194ac2ea01fc66c3102999e9';

// Event listener to add function to existing HTML DOM element
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generate').addEventListener('click', performAction);
});

// Function called by event listener
async function performAction(e) {
  const zipCode = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;

  try {
    // Fetch weather data from OpenWeatherMap API
    const data = await getWeatherData(zipCode);

    if (data) {
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
      const cityName = data.name;
      
      // Create an object with the extracted data along with date and feelings
      const information = {
        date: currentDate,
        city: cityName,
        temp: Math.round(temperature),
        description: weatherDescription,
        feelings: feelings,
      };
      
      // Add data to POST request
      await postData('/addData', information);
      console.log("Information sent in POST request:", information);
      // Update UI with latest data
      await updateUI();
    } else {
      throw new Error('No data received from the API');
    }
  } catch (error) {
    console.error('Error:', error);
    // Handle error - show error message to the user, for example
    document.getElementById('error').textContent = 'Error fetching weather data. Please try again later.';
  }
}

// Function to GET weather data from OpenWeatherMap API using zip code 
async function getWeatherData(zipCode) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${encodeURIComponent(zipCode)}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  
  return data;
}

// Function to POST data to server
async function postData(url = '', information = {}) {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(information),
  });
  return response.json();
}

// Function to update UI with latest data
async function updateUI() {
  const res = await fetch("/all");
  const projectData = await res.json();

  const dateElement = document.getElementById('date');
  const tempElement = document.getElementById('temp');
  const contentElement = document.getElementById('content');
  
  // Check if elements exist before updating their innerHTML
  if (dateElement) dateElement.innerHTML = `Date: ${projectData.date}`;
  if (tempElement) tempElement.innerHTML = `Temperature: ${projectData.temp}&deg;C`;
  
  // Construct content string with all data
  let content = `
    <p>City: ${projectData.city}</p>
    <p>Description: ${projectData.description}</p>
  `;
  
  // Add feelings if available
  if (projectData.feelings) {
    content += `<p>Feelings: ${projectData.feelings}</p>`;
  }
  
  // Update 'content' element
  if (contentElement) contentElement.innerHTML = content;
  
  // // Show the weather box after updating the UI
  document.getElementById('entryHolder').style.display = 'block';
} 
