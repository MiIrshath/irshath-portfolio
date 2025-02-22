function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function toggleSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none"; // Hide all sections
    });

    let selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block";
        selectedSection.classList.remove("hidden"); // Ensure it's not hidden
        selectedSection.style.opacity = "0";
        setTimeout(() => {
            selectedSection.style.opacity = "1";
        }, 100);
    }
}

function showProject(project) {
    let projectDetails = document.getElementById("project-details");
    projectDetails.style.display = "block";
    projectDetails.classList.remove("hidden");

    if (project === "reddit") {
        projectDetails.innerHTML = `
            <h3>Reddit Sentiment Analysis for Ticker Prediction</h3>
            <p>Analyzed Reddit posts to predict stock trends using sentiment analysis.</p>
            <p><strong>Technologies Used:</strong> Python, Pandas, NLTK</p>
        `;
    } else if (project === "iot") {
        projectDetails.innerHTML = `
            <h3>Gas Sensor Monitoring System Using IoT</h3>
            <p>Developed a real-time gas monitoring system using IoT technologies.</p>
            <p><strong>Technologies Used:</strong> MQ-6 Gas Sensor, Arduino UNO, IoT Cloud</p>
        `;
    }
}

function showContact() {
    let contactInfo = document.getElementById("contact-info");
    contactInfo.style.display = "block";
    contactInfo.classList.remove("hidden");
}
