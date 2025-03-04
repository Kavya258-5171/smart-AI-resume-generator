function generateResume() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let experience = document.getElementById("experience").value;
    let skills = document.getElementById("skills").value;

    let resumeHTML = `
        <h3>${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h4>Work Experience</h4>
        <p>${experience}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
    `;

    document.getElementById("resumeResult").innerHTML = resumeHTML;
    document.getElementById("downloadBtn").classList.remove("hidden");
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();
    let resumeText = document.getElementById("resumeResult").innerText;

    doc.text(resumeText, 10, 10);
    doc.save("resume.pdf");
}

// Simple Login System
function showLogin() {
    document.getElementById("loginSection").classList.remove("hidden");
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "password") {
        sessionStorage.setItem("loggedIn", "true");
        alert("Login Successful!");
        document.getElementById("loginSection").classList.add("hidden");
        document.getElementById("loginBtn").classList.add("hidden");
        document.getElementById("logoutBtn").classList.remove("hidden");
    } else {
        alert("Invalid Username or Password!");
    }
}

function logout() {
    sessionStorage.removeItem("loggedIn");
    alert("Logged Out Successfully!");
    document.getElementById("loginBtn").classList.remove("hidden");
    document.getElementById("logoutBtn").classList.add("hidden");
}