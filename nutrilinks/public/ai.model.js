// Dummy data for historical demand
const historicalData = {
    months: ['January', 'February', 'March', 'April', 'May', 'June'],
    demand: [120, 150, 180, 160, 200, 240]
};

// Prediction function using basic linear regression (just a simple example)
function predictDemand(data) {
    const increaseRate = 1.1; // Just a basic rate for demo
    return data.map(d => d * increaseRate);
}

// Prepare data for chart
const predictedData = predictDemand(historicalData.demand);

// Render Chart
const ctx = document.getElementById('demandChart').getContext('2d');
const demandChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: historicalData.months,
        datasets: [
            {
                label: 'Historical Demand',
                data: historicalData.demand,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            },
            {
                label: 'Predicted Demand',
                data: predictedData,
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Demand (kg)'
                }
            }
        }
    }
});