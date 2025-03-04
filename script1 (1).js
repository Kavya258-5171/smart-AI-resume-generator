function generateResume() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let experience = document.getElementById("experience").value.trim();
    let skills = document.getElementById("skills").value.trim();

    if (!name || !email || !phone || !experience || !skills) {
        alert("Please fill in all fields!");
        return;
    }

    let resumeHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Work Experience</h4>
        <p>${experience.replace(/\n/g, "<br>")}</p>
        <h4>Skills</h4>
        <p>${skills.replace(/\n/g, "<br>")}</p>
    `;

    document.getElementById("resumeResult").innerHTML = resumeHTML;
    document.getElementById("downloadBtn").classList.remove("hidden");
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    doc.text(document.getElementById("resumeResult").innerText, 10, 10);
    doc.save("resume.pdf");
}