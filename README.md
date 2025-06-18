# SpendWise

SpendWise is a simple and intuitive web application that helps you visualize your monthly incomes and expenses with a clear bar chart. Easily input your data for each month, instantly see the comparison between your earnings and spendings, and download the chart for your records or reports.

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
Download the source code or clone this repository to your local machine.

### 2. Open the App
Simply open `src/index.html` in your web browser. No installation or build steps are required.

### 3. Usage
- Enter your income and expense values for each month in the **Data** tab.
- Switch to the **Chart** tab to view your data as a bar chart.
- Click the **Download** button to save the chart as a PNG image for your records.

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