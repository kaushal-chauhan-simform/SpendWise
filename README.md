# Bucks2Bar

Bucks2Bar is a simple web application for visualizing monthly incomes and expenses using a bar chart. It provides a user-friendly interface to input data for each month and view/download a chart representation.

## Features
- Input monthly incomes and expenses (January to December)
- View data in a tabular form
- Visualize data as a bar chart (Income vs Expense)
- Download the chart as a PNG image
- Responsive design using Bootstrap 5

## Technologies Used
- HTML5, CSS3, JavaScript (ES6)
- [Bootstrap 5](https://getbootstrap.com/)
- [Chart.js](https://www.chartjs.org/)

## Getting Started

### 1. Clone or Download
Clone this repository or download the source code to your local machine.

### 2. Open the App
Open `src/index.html` in your web browser. No build step is required.

### 3. Usage
- Enter your income and expense values for each month in the Data tab.
- Switch to the Chart tab to view the bar chart.
- Click the **Download** button to save the chart as a PNG image.

## File Structure
```
├── src/
│   ├── index.html        # Main HTML file
│   ├── css/
│   │   └── styles.css    # (Optional) Custom styles
│   └── js/
│       └── main.js       # Main JavaScript logic
├── package.json          # (Optional) Project metadata
└── README.md             # Project documentation
```

## Code Overview

### index.html
- Contains the UI layout with Bootstrap 5 tabs for Data and Chart views.
- Includes input fields for each month's income and expense.
- Loads Bootstrap, Chart.js, and the main JavaScript file.

### main.js
- Handles tab switching and chart rendering using Chart.js.
- Reads input values, generates the bar chart, and enables chart download as PNG.

## License
This project is open source and free to use.