// ORION site content — single source of truth

export const GITHUB_URL = "https://github.com/nuppii/ORION-WEB";

export const UI = {
  scrollExplore: "Scroll to explore",
  keepScrollArch: "Keep scrolling to traverse the network \u2193",
  keepScrollSolar: "Keep scrolling to visit each environment \u2193",
  corePrinciples: "Core Principles",
  diagnostics: "orion \u2014 system diagnostics",
  live: "live",
};

export const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Capabilities", id: "capabilities" },
  { label: "Architecture", id: "architecture" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Integrations", id: "integrations" },
  { label: "Roadmap", id: "roadmap" },
  { label: "FAQ", id: "faq" },
  { label: "Project Status", id: "status" },
];

export const HERO = {
  eyebrow: "Proactive AI Operating Network",
  title: "ORION",
  subtitle: "Obviously Rochat's Intelligent Operating Network",
  tagline: "From human intent to coordinated digital action.",
  actions: [
    { label: "Explore ORION", target: "about", primary: true },
    { label: "Discover the Architecture", target: "architecture" },
    { label: "View Project Status", target: "status" },
  ],
  mention: "Currently under active development. ORION is not yet ready for production use or commercialization.",
};

export const VISION = {
  eyebrow: "Vision",
  title: "Beyond conversation. Toward coordinated action.",
  p1: "Most AI assistants stop after generating an answer. ORION explores what comes next: an intelligent operational layer capable of turning a request into an actionable plan.",
  p2: "The long-term vision is to create a system that can understand a goal, identify the right capabilities, coordinate multiple operations, interact with local and connected tools, recover from selected failures, and clearly communicate the final result.",
  ideaLead: "ORION is designed around one central idea:",
  quoteParts: ["\u201cIntelligence becomes truly useful when it can transform ", "intent", " into dependable ", "action", ".\u201d"],
  p3: "The project aims to bridge the gap between conversational AI and practical digital execution while keeping control, transparency, and user awareness at the center of every workflow.",
};

export const ABOUT = {
  eyebrow: "About ORION",
  title: "Built to understand, coordinate, and act.",
  intro:
    "ORION — Obviously Rochat's Intelligent Operating Network — is an experimental AI system focused on proactive assistance, workflow orchestration, and intelligent computer interaction.",
  layersLead: "Instead of operating as a single monolithic assistant, ORION combines several coordinated layers:",
  layers: [
    "Natural voice and text interaction",
    "Contextual understanding",
    "Persistent memory",
    "Goal analysis and planning",
    "Specialist-agent selection",
    "Local automation tools",
    "Connected-service integrations",
    "Execution monitoring",
    "Feedback and error recovery",
  ],
  routing:
    "This modular approach allows ORION to route different requests toward the most appropriate operational path. A simple question may receive a direct response. A practical request may activate a dedicated tool. A complex objective may be decomposed into several structured steps and assigned to specialized capabilities.",
};

export const PRINCIPLES = [
  { title: "Proactive by design", text: "ORION is being designed to identify the actions required to complete a goal rather than limiting itself to explaining what the user should do." },
  { title: "Modular by architecture", text: "Each capability is implemented as an independent module that can evolve without requiring the entire system to be redesigned." },
  { title: "Context-aware", text: "ORION can use conversation state, user preferences, previous information, active tasks, and persistent memory to produce more relevant responses." },
  { title: "Tool-oriented", text: "The system connects intelligence with real operational capabilities, including local scripts, desktop automation, APIs, databases, and connected services." },
  { title: "User-controlled", text: "Sensitive actions should remain visible, understandable, and subject to appropriate confirmation mechanisms." },
  { title: "Built to evolve", text: "ORION is an active research and development project. Its architecture is designed to support new agents, tools, models, interfaces, and workflows over time." },
];

export const CAPABILITIES = {
  eyebrow: "Capabilities",
  title: "Intelligence for modern digital workflows",
  items: [
    {
      title: "Voice and Text Interaction",
      tagline: "Communicate with ORION using natural language through voice, desktop text input, or supported communication channels.",
      text: "The interaction layer is designed to provide fluid exchanges while preserving access to operational tools and contextual information.",
      listLabel: "Potential functions include",
      list: ["Real-time voice conversations", "Text-based commands", "Multilingual interaction", "Interruption handling", "Audio-device management", "Contextual responses", "Discord-based communication"],
    },
    {
      title: "Intelligent Task Automation",
      tagline: "Transform repetitive or multi-step work into coordinated workflows.",
      text: "ORION can connect individual actions into a larger operational sequence while maintaining execution state and returning understandable feedback.",
      listLabel: "Examples include",
      list: ["Opening applications", "Organizing selected files", "Launching scripts", "Interacting with desktop controls", "Collecting information", "Preparing structured results", "Coordinating multiple tools"],
    },
    {
      title: "AI Workflow Orchestration",
      tagline: "Analyze an objective and determine which capabilities should participate in its execution.",
      text: "Instead of calling tools randomly, ORION aims to establish a structured operational path:",
      listLabel: "Operational path",
      list: ["Understand the goal", "Identify useful context", "Select the appropriate specialist", "Prepare the required actions", "Execute the workflow", "Evaluate the result", "Provide feedback"],
    },
    {
      title: "System Interaction Layer",
      tagline: "Connect human intent with supported computer operations.",
      text: "ORION includes modules designed to interact with applications, files, system controls, keyboard input, mouse actions, windows, scripts, and selected operating-system settings.",
      note: "Because these capabilities can affect a real computer, system interaction remains one of the project's most security-sensitive areas.",
      listLabel: "Interaction surface",
      list: ["Applications", "Files", "System controls", "Keyboard input", "Mouse actions", "Windows", "Scripts", "OS settings"],
    },
    {
      title: "Persistent Memory",
      tagline: "Retain relevant information beyond a single conversation.",
      text: "ORION's memory architecture explores several forms of context. The objective is not simply to store information, but to make it useful during future interactions.",
      listLabel: "Forms of context",
      list: ["Preferences", "Projects", "Important notes", "Recurring objectives", "Relationships", "Long-term personal context", "Linked knowledge", "Previous operational results"],
    },
    {
      title: "Second Brain",
      tagline: "Build a structured and connected knowledge environment.",
      text: "ORION's experimental Second Brain uses a PostgreSQL-backed system to store notes, projects, concepts, and relationships as connected knowledge nodes.",
      listLabel: "It can support",
      list: ["Durable note storage", "Semantic organization", "Knowledge linking", "Related-content discovery", "Graph exploration", "Memory synchronization", "Contextual retrieval"],
    },
    {
      title: "Specialist AI Agents",
      tagline: "Route tasks toward domain-oriented agent profiles.",
      text: "ORION includes an evolving roster of specialist profiles designed to bring more relevant context to different categories of work.",
      note: "These specialist agents are components of ORION's orchestration system. They are not independent or infallible professional experts.",
      listLabel: "Current areas of experimentation",
      list: ["Software development", "Technical assistance", "Security analysis", "Financial supervision", "Research", "Communication", "Planning", "Productivity", "Operational coordination"],
    },
    {
      title: "Error Analysis and Recovery",
      tagline: "Detect failures and explore alternative execution paths.",
      text: "When a tool or workflow fails, ORION can collect information about the error, analyze the current context, generate a possible correction, or request a revised plan. The long-term objective is to make workflows more resilient.",
      listLabel: "Resilience mechanisms",
      list: ["Structured error reporting", "Contextual failure analysis", "Selected retries", "Alternative tool selection", "Workflow re-planning", "Transparent user feedback"],
    },
    {
      title: "Intelligent Decision Support",
      tagline: "Help structure information and evaluate possible actions.",
      text: "ORION can assist with organizing context, comparing options, identifying constraints, and presenting structured reasoning.",
      note: "Decision support is intended to help the user understand a situation. It should not replace qualified professional advice in medical, legal, financial, security, or other high-impact domains.",
      listLabel: "Assistance areas",
      list: ["Organizing context", "Comparing options", "Identifying constraints", "Structured reasoning"],
    },
  ],
};

export const ARCHITECTURE = {
  eyebrow: "Architecture",
  title: "A modular operating network",
  intro: "ORION is organized as a collection of interacting layers rather than a single artificial intelligence model.",
  layers: [
    { short: "Interface", nameMain: "Interface", nameAccent: " Layer", text: "Manages the desktop experience, voice input, text interaction, system feedback, settings, and integrated application panels." },
    { short: "Intelligence", nameMain: "Intelligence", nameAccent: " Layer", text: "Uses AI models to understand language, interpret goals, generate responses, select tools, and assist with planning." },
    { short: "Planning", nameMain: "Planning", nameAccent: " Layer", text: "Transforms complex objectives into structured sequences of executable actions." },
    { short: "Agent", nameMain: "Agent", nameAccent: " Layer", text: "Adds domain-oriented context and routes requests toward specialized profiles." },
    { short: "Execution", nameMain: "Execution", nameAccent: " Layer", text: "Invokes local tools and connected services using structured parameters." },
    { short: "Memory", nameMain: "Memory", nameAccent: " Layer", text: "Maintains local long-term context and connected knowledge." },
    { short: "Integration", nameMain: "Integration", nameAccent: " Layer", text: "Connects ORION with selected third-party platforms and APIs." },
    { short: "Security", nameMain: "Security", nameAccent: " Layer", text: "Applies operational policies and aims to identify sensitive or potentially destructive actions." },
    { short: "Recovery", nameMain: "Recovery", nameAccent: " Layer", text: "Analyzes execution failures and supports retries or re-planning." },
  ],
};

export const HOW_IT_WORKS = {
  eyebrow: "How ORION Works",
  title: "From request to completed action",
  steps: [
    { title: "User Input", text: "The user communicates a request through voice, text, the desktop interface, or a supported external channel." },
    { title: "Context Collection", text: "ORION gathers the information relevant to the request, which may include conversation history, local settings, persistent memory, active tasks, and available tools." },
    { title: "Intent Analysis", text: "The system determines what the user is trying to accomplish and distinguishes between a conversational request, a direct action, or a complex objective." },
    { title: "Planning", text: "For complex requests, ORION can decompose the objective into smaller operational steps with dependencies and execution order." },
    { title: "Specialist Selection", text: "The request may be routed to a domain-oriented agent profile capable of adding relevant instructions and context." },
    { title: "Tool Selection", text: "ORION identifies which local capability, API, automation module, database, or connected service is appropriate for each step." },
    { title: "Controlled Execution", text: "The selected tools perform the requested operations while ORION tracks progress and collects results." },
    { title: "Validation and Recovery", text: "The system evaluates whether the operation succeeded. When possible, it can analyze failures and prepare an alternative path." },
    { title: "Feedback", text: "ORION communicates what happened, what was completed, what failed, and whether additional user input is required." },
    { title: "Memory Update", text: "When appropriate, useful information can be stored for future interactions." },
  ],
};

export const SERVICES = {
  eyebrow: "Connected Services",
  title: "One intelligence layer, multiple digital environments",
  intro: "Depending on local configuration and account permissions, ORION contains experimental integrations for several services.",
  items: [
    {
      name: "Google Workspace",
      short: "Workspace",
      text: "Support for selected operations involving the Google ecosystem, exposed through official APIs.",
      list: ["Google Drive", "Google Docs", "Google Sheets", "Gmail", "Google Calendar", "YouTube account data"],
      note: "Google integrations require user authorization through OAuth and appropriate permissions.",
      color: "#48cae4",
    },
    {
      name: "Spotify",
      short: "Spotify",
      text: "Interact with compatible Spotify devices through the official API.",
      list: ["Playback control", "Pause and resume", "Track navigation", "Volume control", "Device selection", "Playlist or context playback"],
      note: "Some functions require Spotify Premium and an active playback device.",
      color: "#2596be",
    },
    {
      name: "Discord",
      short: "Discord",
      text: "Use ORION through a Discord bot for supported text workflows and tool dispatch.",
      list: ["Text workflows", "Tool dispatch", "Bot-based communication"],
      color: "#7dd3fc",
    },
    {
      name: "Web Information",
      short: "Web",
      text: "Access current information through web search and dedicated information modules.",
      list: ["Web search", "Weather modules", "Flight discovery"],
      color: "#38bdf8",
    },
    {
      name: "Local Applications",
      short: "Local Apps",
      text: "Open and interact with selected applications installed on the computer.",
      list: ["Application launch", "Desktop interaction", "Local workflows"],
      color: "#93c5fd",
    },
  ],
};

export const FINANCE = {
  eyebrow: "ORION Finance",
  title: "Local financial visibility and intelligent supervision",
  intro: "ORION includes an experimental local finance dashboard designed to organize personal financial information and provide structured summaries.",
  listLabel: "Current areas of exploration",
  list: ["Income and expense tracking", "Transaction organization", "Asset monitoring", "Cash-flow summaries", "Budget analysis", "Financial recommendations", "Investment-planning assistance", "Wealth-strategy simulations"],
  disclaimer: "Financial features are educational and informational only. They do not constitute regulated financial advice, portfolio management, or a guarantee of financial performance.",
};

export const SECURITY = {
  eyebrow: "Privacy and Security",
  title: "Powerful capabilities require strong boundaries",
  intro: "ORION can interact with local files, applications, authenticated accounts, and connected services. Protecting these environments is a central development priority. The project is being designed around several principles:",
  principles: [
    "Credentials should remain local",
    "Access should be limited to necessary permissions",
    "Sensitive actions should require appropriate confirmation",
    "Private memory should not be exposed publicly",
    "Operational activity should remain understandable",
    "Destructive actions should be restricted",
    "Connected services should use official authorization methods",
    "Important data should always be backed up independently",
  ],
  audit: "ORION is not currently security-audited. Its security model, confirmation mechanisms, permission boundaries, and secret-management system remain under active development.",
  warning: "Users should never provide ORION with access to critical systems or irreplaceable data without understanding the associated risks.",
};

export const TECH = {
  eyebrow: "Technology Stack",
  title: "Built for practical experimentation",
  marquee: ["Python", "Google Gemini", "Ollama", "PostgreSQL", "Docker", "OpenCV", "Discord", "Spotify API", "REST APIs", "PyInstaller"],
  groups: [
    { name: "Core", items: ["Python", "Asynchronous task execution", "Modular tool architecture", "Structured function calling"] },
    { name: "Artificial Intelligence", items: ["Google Gemini", "Local Ollama workflows", "Specialized agent profiles", "Contextual planning and tool selection"] },
    { name: "Interface", items: ["Custom desktop interface", "Voice interaction", "Text interaction", "Integrated local dashboards"] },
    { name: "Automation", items: ["System scripting", "Desktop control", "Keyboard and mouse automation", "Clipboard interaction", "Window management", "Browser automation"] },
    { name: "Vision", items: ["Screen capture", "Image processing", "Visual-context analysis", "OpenCV", "Pillow", "MSS"] },
    { name: "Memory", items: ["Local JSON memory", "PostgreSQL", "Linked knowledge", "Persistent context"] },
    { name: "Connected Services", items: ["REST APIs", "Google APIs", "Spotify API", "Discord", "Web information services"] },
    { name: "Infrastructure", items: ["Docker Compose", "PostgreSQL 16", "PyInstaller", "GitHub", "GitHub Pages"] },
  ],
};

export const STATUS = {
  eyebrow: "Development Status",
  title: "An ambitious system still in active development",
  intro: "ORION is currently an experimental research, engineering, and productivity project. Some modules already operate through complete workflows. Others remain prototypes, require manual configuration, depend on third-party services, or may change significantly as the architecture evolves.",
  entries: [
    { label: "Development", value: "Active", state: "good" },
    { label: "Architecture", value: "Evolving", state: "mid" },
    { label: "User interface", value: "Functional but experimental", state: "mid" },
    { label: "Installation", value: "Developer-oriented", state: "mid" },
    { label: "Testing", value: "Partial", state: "mid" },
    { label: "Security hardening", value: "In progress", state: "mid" },
    { label: "Cross-platform support", value: "Experimental", state: "mid" },
    { label: "Production readiness", value: "Not ready", state: "bad" },
    { label: "Commercial readiness", value: "Not ready", state: "bad" },
  ],
  commercial: "ORION is not currently available as a finished commercial product. There is no commercial subscription, production service, uptime guarantee, official support contract, or service-level agreement.",
  limitationsTitle: "Known Limitations",
  limitationsLead: "ORION currently has several important limitations:",
  limitations: [
    "Installation may require technical knowledge",
    "Some dependencies are specific to Windows",
    "Cross-platform compatibility is incomplete",
    "Automated test coverage remains limited",
    "External APIs can change or enforce quotas",
    "Connected services require individual configuration",
    "AI-generated plans can be incomplete or incorrect",
    "Screen automation can be affected by interface changes",
    "Local actions can create unintended results",
    "Persistent memory requires careful privacy management",
    "Packaging and automatic updates are not production-grade",
    "Security boundaries remain under development",
    "Recovery from failed actions is not guaranteed",
  ],
};

export const ROADMAP = {
  eyebrow: "Roadmap",
  title: "Building ORION step by step",
  phases: [
    { name: "Core Reliability", items: ["Strengthen configuration management", "Improve structured logging", "Expand automated testing", "Standardize error handling", "Improve dependency management", "Separate stable and experimental modules"] },
    { name: "Safer Automation", items: ["Add stronger confirmation mechanisms", "Improve sensitive-action detection", "Expand execution history", "Introduce better rollback strategies", "Improve permission visibility", "Strengthen local sandboxing"] },
    { name: "Intelligence and Planning", items: ["Improve task decomposition", "Increase tool-selection accuracy", "Expand specialist-agent evaluation", "Improve contextual recovery", "Add better workflow observability", "Strengthen result validation"] },
    { name: "Memory and Personalization", items: ["Improve knowledge retrieval", "Expand Second Brain capabilities", "Add memory-management controls", "Improve privacy and retention settings", "Add clearer memory provenance", "Support more structured project context"] },
    { name: "User Experience", items: ["Simplify first-time installation", "Improve account connection workflows", "Add user-facing permission controls", "Improve accessibility", "Expand documentation", "Create a stable update mechanism"] },
    {
      name: "Commercial Readiness",
      lead: "Before commercialization can be considered, ORION will require:",
      items: ["A formal security audit", "Stable release management", "Clear licensing", "Privacy and data-retention policies", "Supported-environment definitions", "Dependency and compliance reviews", "Reliable onboarding", "Tested recovery procedures", "Production-grade distribution", "Documented support processes"],
      outro: "Commercialization will only be considered after these foundations have been implemented and validated.",
    },
  ],
};

export const FAQ = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  items: [
    { q: "Is ORION available to download?", a: "ORION is still under active development. Public availability does not mean that a stable consumer version is ready for installation or daily production use." },
    { q: "Is ORION open source?", a: "The public website is visible online, but no open-source licence is currently granted for the private ORION application or its source code." },
    { q: "Is ORION ready for commercial use?", a: "No. ORION is not yet ready for production deployment or commercialization." },
    { q: "Is ORION a chatbot?", a: "Not exactly. Conversational interaction is one part of the system. ORION is being designed as a broader operational network capable of coordinating tools, memory, agents, and automated workflows." },
    { q: "Can ORION control a computer?", a: "ORION contains experimental modules for supported desktop and system operations. Their availability depends on the operating system, configuration, permissions, and installed software." },
    { q: "Does ORION work offline?", a: "Some local components may operate without an internet connection, but AI models and connected-service integrations can require internet access. Selected local-model workflows are being explored through Ollama." },
    { q: "Does ORION store personal information?", a: "ORION can retain local contextual information when memory features are enabled. Memory must be handled carefully because it may contain personal or sensitive information." },
    { q: "Is ORION secure?", a: "Security is an active development priority, but the project has not yet completed a formal security audit. ORION should not currently be trusted with critical infrastructure or irreplaceable information." },
    { q: "Does ORION provide professional advice?", a: "No. Financial, technical, security, or other decision-support features are informational and experimental. They do not replace qualified professional advice." },
    { q: "When will ORION be released?", a: "No final release date has been announced. Development priorities may evolve as the architecture, safety mechanisms, and user experience mature." },
  ],
};

export const FINAL_CTA = {
  intro: "The next generation of personal AI is not only conversational.",
  lines: ["It understands context.", "It coordinates capabilities.", "It interacts with real tools.", "It transforms intent into action."],
  reveal: "This is ORION.",
  horizon: "Beyond the event horizon",
  subtitle: "Obviously Rochat's Intelligent Operating Network",
  actions: [
    { label: "Follow the Project", target: "status", primary: true },
    { label: "Explore the Architecture", target: "architecture" },
    { label: "View Development Status", target: "status" },
  ],
};

export const DISCLAIMER = {
  title: "Final Disclaimer",
  p1: "ORION is an experimental AI project created for research, education, development, and personal productivity.",
  p2: "The project may generate inaccurate information, misunderstand requests, fail during execution, or produce unintended effects when interacting with a computer or external service.",
  p3: "ORION is provided without any guarantee of reliability, availability, security, data integrity, or fitness for a particular purpose.",
  lead: "Users remain responsible for:",
  responsibilities: [
    "Reviewing requested operations",
    "Protecting credentials",
    "Maintaining independent backups",
    "Controlling access permissions",
    "Respecting third-party service terms",
    "Validating important information",
    "Supervising sensitive actions",
  ],
  outro: "ORION is still in active development. It is not currently ready for production use or commercialization.",
};

export const FOOTER = {
  subtitle: "Obviously Rochat's Intelligent Operating Network",
  tagline: "From intent to coordinated action.",
  nav: [
    { label: "About", id: "about" },
    { label: "Capabilities", id: "capabilities" },
    { label: "Architecture", id: "architecture" },
    { label: "Integrations", id: "integrations" },
    { label: "Roadmap", id: "roadmap" },
    { label: "Project Status", id: "status" },
    { label: "Privacy", id: "security" },
    { label: "Disclaimer", id: "disclaimer" },
  ],
  copyright: "© 2026 Rochat's Enterprise. All rights reserved. ORION is an experimental project under active development.",
};
