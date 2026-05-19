const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// EJS lets Express render dynamic HTML templates from the views folder.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// The public folder contains browser assets such as CSS and client-side JavaScript.
app.use("/public", express.static(path.join(__dirname, "public")));

// The static folder stores files that should be served directly, including the resume PDF.
app.use("/static", express.static(path.join(__dirname, "static")));

// All portfolio data lives in one object so the template stays clean and easy to update.
const portfolio = {
  name: "Mohd Zeeshan Quraishi",
  role: "Full Stack Developer",
  location: "India",
  email: "your.email@example.com",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  resumePath: "/static/MOHD%20Zeeshan%20Quraishi.pdf",
  intro:
    "I build reliable, responsive web applications with a practical full-stack mindset. My current focus is Node.js, Express.js, EJS, frontend interfaces, APIs, and deployment-ready project structure.",
  stats: [
    { value: "Full Stack", label: "Web development focus" },
    { value: "Node.js", label: "Backend foundation" },
    { value: "Clean UI", label: "Professional frontend approach" }
  ],
  skills: [
    {
      title: "Frontend Development",
      items: ["HTML5", "CSS3", "JavaScript", "Responsive layouts", "Theme-aware UI"]
    },
    {
      title: "Backend Development",
      items: ["Node.js", "Express.js", "EJS rendering", "REST APIs", "Server-side routing"]
    },
    {
      title: "Developer Workflow",
      items: ["Git", "Project structure", "Reusable components", "Static assets", "Documentation"]
    },
    {
      title: "Professional Strengths",
      items: ["Problem solving", "Fast learning", "Debugging", "Clear communication", "Ownership"]
    }
  ],
  projects: [
    {
      name: "Monolithic Portfolio",
      type: "Node.js + Express + EJS",
      description:
        "A server-rendered portfolio website with static resume hosting, a polished dark/light theme, and clean sections for skills, projects, and contact."
    },
    {
      name: "Cloud Technology Training",
      type: "Learning + implementation",
      description:
        "Hands-on training experience focused on understanding cloud concepts, deployment workflows, and practical technical communication."
    },
    {
      name: "Resume-driven Profile",
      type: "Career presentation",
      description:
        "A professional digital identity designed to present skills, learning progress, and downloadable resume access in one place."
    }
  ],
  timeline: [
    {
      title: "Building production-style web foundations",
      text: "Currently strengthening full-stack development through server-rendered apps, structured routing, polished UI, and static asset delivery."
    },
    {
      title: "Growing through training and projects",
      text: "Applying concepts from training, internships, and personal practice to create cleaner, more confident engineering work."
    },
    {
      title: "Ready for practical opportunities",
      text: "Focused on roles and projects where I can contribute to frontend polish, backend logic, and end-to-end web application delivery."
    }
  ]
};

// Home route: renders the portfolio page and passes portfolio data to the EJS template.
app.get("/", (req, res) => {
  res.render("index", { portfolio });
});

// Resume route: forces a browser download instead of only opening the PDF in a new tab.
app.get("/resume", (req, res) => {
  const resumeFile = path.join(__dirname, "static", "MOHD Zeeshan Quraishi.pdf");
  res.download(resumeFile, "Mohd-Zeeshan-Quraishi-Resume.pdf");
});

// Start the server only when this file is run directly with Node.
// Exporting app also makes the Express instance easier to test later.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Portfolio website running at http://localhost:${PORT}`);
  });
}

module.exports = app;
