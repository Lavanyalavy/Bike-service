// Define the stages and the corresponding content
const stages = [
    {
        id: "stepBooked",
        title: "Service Booked",
        description: "Your service has successfully booked."
    },
    {
        id: "stepProcessing",
        title: "Processing",
        description: "Your bike service is currently being processed."
    },
    {
        id: "stepReady",
        title: "On-the-way",
        description: "Your bike is on the way to be delivered."
    },
    {
        id: "stepDelivery",
        title: "Delivered",
        description: "Your bike service has been completed and delivered."
    }
];

let currentStage = 0;

function updateProgress() {
    // Remove 'completed' class from all stages
    stages.forEach(stage => {
        document.getElementById(stage.id).classList.remove("completed");
    });

    // Mark all previous stages as completed
    for (let i = 0; i <= currentStage; i++) {
        document.getElementById(stages[i].id).classList.add("completed");
    }

    // Update the content in the statusContent div
    const statusContentElement = document.getElementById("statusContent");
    statusContentElement.innerHTML = `
        <h3>${stages[currentStage].title}</h3>
        <p>${stages[currentStage].description}</p>
    `;

    // Move to the next stage, loop back to start if necessary
    currentStage = (currentStage + 1) % stages.length;
}

// Initialize the first stage
updateProgress();

// Change the stage every 30 seconds
setInterval(updateProgress, 30000);

// Function to show sections
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'flex';
    }
}
