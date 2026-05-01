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
        "I worked as an Associate Software Engineer with a strong focus on frontend development using React and JavaScript. I enjoy building interactive UI applications and I am currently expanding my skills in the MERN stack and system design. I actively practice Data Structures and Algorithms in Java and continuously work on improving my development skills by building real-world projects.",
    },
    skills: {
      description: "List technical skills",
      usage: "skills",
      fn: () => `Frontend: React, JavaScript, SCSS , Tailwaind CSS 
Backend: Node.js, Express
Databases: MongoDB, MySQL
Tools: Git, Postman , Linux System , VS Code
Programming & Problem-Solving : Java | DSA`,
    },
    projects: {
      description: "View my projects",
      usage: "projects",
      fn: () => `1. MacOS Portfolio [React + React Libraries]
   - Interactive desktop UI with draggable windows & CLI

2. Home Budget & Expense Tracker [React + React-Router]
   - Manage budgets and expenses with React

3. Weather App [JavaScript + API Integration]
   - Real-time weather data using API integration`,
    },
    experience: {
      description: "Display work experience",
      usage: "experience",
      fn: () => `Associate Software Engineer | Cavisson Systems (May 2025 - Sept 2025)

- Worked on UI development for enterprise dashboards used in real-time monitoring
- Built and maintained reusable React components to improve development efficiency
- Debugged and optimized legacy code for better performance and maintainability
- Handled data visualization and dynamic UI rendering based on configurations
- Collaborated with cross-functional teams to deliver new UI features
- Used Git, Docker, and Linux environments in development workflows

--------------------------------------------------

Web Development Intern | Softapper Tech Solutions (Sept 2024 - Dec 2024)

- Worked on frontend basics using HTML, CSS, JavaScript and React
- Built foundational understanding of component-based development
- Practiced debugging and problem-solving for UI issues
- Utilized AI tools to improve learning efficiency and productivity`,
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
        window.open("https://github.com", "_blank");
        return "Opening GitHub...";
      },
    },
    resume: {
      description: "Download resume",
      usage: "resume",
      fn: () => "Resume download started...",
    },
    social: {
      description: "View social media links",
      usage: "social",
      fn: () => `Twitter: @vishnusingh
LinkedIn: /in/vishnusingh
Portfolio: vishnusingh.dev`,
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
  • about     - Learn about me
  • skills    - View my technical skills
  • projects  - Check out my work
  • experience - See my career history
  • contact   - Get in touch

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
