# NASA Image Search Web Application - React Technical Test

Welcome to the NASA Image Search React web application! This project allows users to search for captivating images related to space using keywords. E.g. International Space station. The application utilizes the NASA API to fetch and display stunning space images.

## NASA Space Images Viewer

- [Desktop Preview](https://github.com/dsbahia/tech-test/blob/main/screenshots/GoogleChrome_Desktop_Nasa_Screenshot.png)
- [Mobile Preview](https://github.com/dsbahia/tech-test/blob/main/screenshots/iPhone_Nasa_Search_Screenshot.jpeg)

## Description

This repository contains the implementation of a web application that connects to the NASA API and displays captivating space images. The primary goal of this technical test was to create an MVP (Minimum Viable Product) that showcases the potential of integrating with external APIs and rendering the fetched data in an engaging user interface.

## Features and Tech Stack

- Connects to the NASA API to fetch space images.
- Displays a collection of stunning space images.
- Built with React, a modern and popular JavaScript library for building user interfaces.
- Utilizes Axios for making HTTP requests to the NASA API.
- Tested using Jest and React Testing Library to ensure reliability and functionality.

## Installation

1. Clone the repository:

`git clone https://github.com/dsbahia/tech-test.git`
`cd tech-test`

## Usage

1. Start the development server and open your browser and navigate to http://localhost:3000 to access the app.

`npm start`

## Possible Improvements

Given more time, here are a few enhancements I would consider adding to the app in order of priority:

- Further CSS improvements, currenty there are small bugs on a handful of searches where the images returned are cut in half.
- Improved Responsiveness: Enhance the mobile experience to ensure a seamless and user-friendly interface on smaller screens. Currently it isn't optimised for mobile browsers.
- A Jest Test is required for the getImages function which connects to the NASA API. This is required so the GET request behaves as expected and meets the specified requirements.
- Error Handling: Implement more robust error handling and user-friendly error messages for better user feedback.
- Search and Filtering: Add search and filtering options to allow users to discover specific space images based on their interests.
- Image Detail View: Implement a detailed view for individual images, providing additional information and a larger view.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License.](https://opensource.org/license/mit/)

## Author

- Created by Dal B