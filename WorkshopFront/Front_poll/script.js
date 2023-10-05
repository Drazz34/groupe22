
const votes = {
    labels: ["Option 1", "Option 2"],
    datasets: [{
        label: "Votes",
        data: [10, 20],
        backgroundColor: ["#3498db", "#e74c3c"]
    }]
};


const ctx = document.getElementById("voteChart").getContext("2d");


const voteChart = new Chart(ctx, {
    type: "bar", 
    data: votes,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                stepSize: 1 
            }
        }
    }
});