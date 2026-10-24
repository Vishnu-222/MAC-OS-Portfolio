import React from "react";
import MacWindow from "./MacWindow";
import "./cli.scss";
import TerminalLib from "react-console-emulator";
const Terminal = TerminalLib.default;

const Cli = ({ windowsName, setWindowsState }) => {
  const commands = {
    about: {
      description: "About me",
      usage: "about",
      fn: () =>
        "I'm a Software Engineer with experience in React-based UI development, backend API changes, and application observability. I've worked with Node.js, Express.js, Databases, Socket.io, Elasticsearch, and OpenTelemetry, and I'm building full-stack applications with the MERN stack. I practice Data Structures and Algorithms in Java and explore practical Generative AI integrations.",
    },
    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Languages: Java, JavaScript (ES6+), TypeScript
Frontend: React.js, HTML5, CSS3, SCSS, Tailwind CSS
Backend: Node.js, Express.js, REST APIs, Socket.IO, JWT
Databases: MongoDB, MySQL, Redis, Elasticsearch
Tools: Git, GitHub, Postman, Linux, Render, Vercel
Other: DSA in Java, OpenTelemetry, Generative AI`,
    },
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. ConvoX - Real-Time Messaging App [MERN + Socket.IO]
   - One-to-one chat with JWT authentication, online presence, and instant messaging
   - REST APIs, image sharing, input validation, and rate limiting

2. ResumeIQ - AI Resume Analysis [MERN + Google Gemini API]
   - Analyzes resumes and identifies skill gaps
   - Provides career recommendations and interview preparation insights

3. Home Budget & Expense Tracker [React + React-Router]
   - Manage budgets and expenses with React
   - Along with great UI visualization to maintian financial control`,
    },
    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () => `Associate Software Engineer | Cavisson Systems (May 2025 - Sept 2025)

- Contributed to the UI team of NetDiagnostics, an enterprise network monitoring product
- Built and maintained reusable React components for monitoring dashboards
- Modified Node.js application logic and REST API endpoints
- Worked with Elasticsearch queries and aggregations for diagnostic reports
- Supported OpenTelemetry instrumentation and investigated logs, metrics, and traces
- Debugged frontend-backend integration issues and transformed API data

--------------------------------------------------

Web Development Intern | Softapper Tech Solutions (Sept 2024 - Dec 2024)

- Built responsive interfaces using HTML, CSS, JavaScript, and React
- Developed reusable components, animations, and creative UI layouts
- Contributed to UI/UX discussions and frontend implementation
- Used AI-assisted tools to support development productivity`,
    },
    contact: {
      description: "Get contact information",
      usage: "contact",
      fn: () => `Email: vs414447@gmail.com
Phone: +91 7505759189
Location: Noida , India`,
    },
    github: {
      description: "Open GitHub profile",
      usage: "github",
      fn: () => {
        window.open("https://github.com/Vishnu-222", "_blank");
        return "Opening GitHub...";
      },
    },
    resume: {
      description: "Open my resume",
      usage: "resume",
      fn: () => {
        window.open("/resume.pdf", "_blank");
        return "Opening resume...";
      },
    },
    social: {
      description: "View social media links",
      usage: "social",
      fn: () => `GitHub: github.com/Vishnu-222
LinkedIn: linkedin.com/in/vishnu-singh-435116237
Instagram: instagram.com/_its_vishnuuuu__`,
    },
    echo: {
      description: "Echo a passed string",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
  };

  const welcomeMessage = `
╔════════════════════════════════════════╗
║     Welcome to My Portfolio CLI!       ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio. You can navigate through my work experience, skills, and projects using terminal commands.

Try all available commands :
  • about      - Learn about me
  • skills     - View my technical skills
  • projects   - Check out my projects
  • experience - See my career history
  • contact    - Get in touch
  • github     - Open my GitHub profile
  • resume     - Open my resume
  • social     - View my social links
  • echo       - Echo a message

Happy exploring! 🚀
`;
  return (
    <MacWindow
      width="40vw"
      height="60vh"
      x="800"
      y="180"
      windowsName={windowsName}
      setWindowsState={setWindowsState}
    >
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"vishnusingh:~$"}
          promptLabelStyle={{
            color: "#47f141",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
          messageStyle={{
            color: "#54f5e5",
            fontFamily: "Courier New, monospace",
            fontSize: "0.95rem",
            lineHeight: "1.8",
          }}
          commandStyle={{
            color: "#eaff00",
            fontWeight: "600",
          }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
