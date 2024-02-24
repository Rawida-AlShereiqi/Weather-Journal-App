# Weather Journal App

This project is a simple weather journal application that allows users to input a zip code and their feelings to get real-time weather data for that location. The application fetches weather data from the OpenWeatherMap API and updates the UI dynamically with the retrieved information.

## Technologies Used
- **Node.js**: The backend server is built using Node.js to handle HTTP requests and responses.
- **Express.js**: Express.js is used as the web application framework to handle routing and middleware.
- **Fetch API**: The Fetch API is used to make asynchronous requests to the OpenWeatherMap API from the client-side JavaScript.
- **HTML/CSS**: The user interface is built using HTML for structure and CSS for styling.
- **JavaScript (Client-side and Server-side)**: JavaScript is used both on the client-side and server-side to handle user interactions, fetch data from APIs, and update the UI dynamically.

## Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies using the command `npm install`.
4. Start the server by running the command `node server.js`.
5. Open your web browser and go to `http://localhost:8000` to access the application.
6. Enter a valid zip code and your feelings, then click on the "Generate" button to fetch and display the weather information.

## File Structure
- **server.js**: This file contains the backend server code written in Node.js using Express.js. It sets up the server, handles GET and POST routes, and serves the static files.
- **index.html**: The main HTML file that defines the structure of the web page and includes the input fields for zip code and feelings, as well as the weather information display area.
- **style.css**: The CSS file that defines the styles and layout of the HTML elements.
- **app.js**: The client-side JavaScript file that contains the logic for fetching weather data from the OpenWeatherMap API, updating the UI with the retrieved data, and handling user interactions.
- **README.md**: The readme file that provides information about the project, its technologies, instructions for setup, and file structure.

## Credits
This project was created by Rawida Alshereiqi as part of Front End Web Developer Fundamentals course in Udacity.
