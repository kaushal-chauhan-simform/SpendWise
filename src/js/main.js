let myBarChart = null;

window.onload = () => {
    const chartTab = document.getElementById('chart-tab');
    if (chartTab) {
        chartTab.addEventListener('shown.bs.tab', renderChart);
    }

    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', downloadCanvasAsImage);
    }
};

// Set dummy data for incomes and expenses on page load
document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 12; i++) {
        // Generate random income between 200 and 1000
        const income = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
        // Generate random expense between 200 and (income - 1)
        const expense = income > 200 ? Math.floor(Math.random() * (income - 200)) + 200 : 200;
        document.getElementById(`incomes${i}`).value = income;
        document.getElementById(`expenses${i}`).value = expense;
    }
});

const renderChart = () => {
    const incomes = [];
    const expenses = [];

    for (let i = 1; i <= 12; i++) {
        const incomeInput = document.getElementById(`incomes${i}`);
        const expenseInput = document.getElementById(`expenses${i}`);
        const incomeValue = incomeInput ? parseFloat(incomeInput.value) || 0 : 0;
        const expenseValue = expenseInput ? parseFloat(expenseInput.value) || 0 : 0;
        incomes.push(incomeValue);
        expenses.push(expenseValue);
    }

    const canvas = document.getElementById('myBarChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (myBarChart) {
        myBarChart.destroy();
    }

    myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: incomes,
                backgroundColor: 'rgba(40, 167, 69, 0.7)'
            }, {
                label: 'Expense',
                data: expenses,
                backgroundColor: 'rgba(220, 53, 69, 0.7)'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
};

const downloadCanvasAsImage = () => {
    const canvas = document.getElementById('myBarChart');
    if (!canvas) return;

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'chart.png';
    link.click();
};