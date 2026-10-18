export type Screenshot = {
  /** Path relative to src/assets/projects/, e.g. "mech/hangar.png" */
  file: string;
  alt: string;
  caption?: string;
};

export type Project = {
  name: string;
  /** URL segment for /projects/<slug> */
  slug: string;
  description: string;
  tags: string[];
  url?: string;
  status?: "archived" | "fork";
  category: "oss" | "personal";
  /** Shown in the Featured strip on the home page */
  featured?: boolean;
  /** Longer write-up for the project's detail page */
  details?: string;
  /** First screenshot is used as the cover image */
  screenshots?: Screenshot[];
  /** Live demo link, e.g. a publicly shared Claude artifact */
  demoUrl?: string;
};

export const projects: Project[] = [
  // Open source / public
  {
    name: "MovieBot",
    slug: "moviebot",
    description:
      "Discord bot for scheduling movie nights, pulling metadata, and organizing watch lists for a server.",
    tags: ["Python", "Docker", "Discord API"],
    url: "https://github.com/cmheisner/MovieBot",
    category: "oss",
  },
  {
    name: "decky-speech-to-text",
    slug: "decky-speech-to-text",
    featured: true,
    description:
      "Speech-to-text plugin for Steam Deck's Decky Loader — dictate text directly into any game or app overlay.",
    tags: ["Python", "TypeScript", "Decky Loader"],
    url: "https://github.com/cmheisner/decky-speech-to-text",
    category: "oss",
  },
  {
    name: "deckyLoader-timestamp",
    slug: "deckyloader-timestamp",
    description:
      "Small Decky Loader plugin utility for Steam Deck, built with TypeScript against the plugin SDK.",
    tags: ["TypeScript", "Decky Loader"],
    url: "https://github.com/cmheisner/deckyLoader-timestamp",
    category: "oss",
  },
  {
    name: "decky-plugin-database",
    slug: "decky-plugin-database",
    description:
      "Contribution to a Decky Loader plugin adding a floating microphone bubble for speech-to-text input over any screen.",
    tags: ["Shell", "Decky Loader"],
    url: "https://github.com/cmheisner/decky-plugin-database",
    status: "fork",
    category: "oss",
  },
  {
    name: "gKnight",
    slug: "gknight",
    description:
      "Early JavaScript game project — archived, kept around as a record of where things started.",
    tags: ["JavaScript"],
    url: "https://github.com/cmheisner/gKnight",
    status: "archived",
    category: "oss",
  },

  // Personal (private repos, described without a repo link)
  {
    name: "voice-soundboard",
    slug: "voice-soundboard",
    description:
      "Browser-based soundboard app for triggering audio clips on demand during calls and streams.",
    tags: ["JavaScript", "Python", "HTML/CSS"],
    category: "personal",
  },
  {
    name: "STALKER 2 Co-op Mod",
    slug: "stalker-2-coop",
    featured: true,
    description:
      "Native co-op mod for S.T.A.L.K.E.R. 2, built against the game's Unreal Engine modding toolchain.",
    tags: ["C++", "Lua", "CMake"],
    category: "personal",
  },
  {
    name: "mech",
    slug: "mech",
    featured: true,
    description:
      "Unity game project with custom shaders and a companion web tool — a mech-combat game built from the ground up.",
    tags: ["C#", "Unity", "HLSL", "ShaderLab"],
    category: "personal",
  },
  {
    name: "SmartCamper",
    slug: "smartcamper",
    description:
      "Home-automation integration controlling a camper's AC, heater, and sensors through SmartLife, MOES, Tuya, and IR.",
    tags: ["Kotlin", "Python", "IoT"],
    category: "personal",
  },
  {
    name: "Myth-Remake",
    slug: "myth-remake",
    description:
      "Fan remake of the classic RTS games Myth: The Fallen Lords and Myth II: Soulblighter.",
    tags: ["C#", "Unity", "HLSL"],
    category: "personal",
  },
  {
    name: "Financier",
    slug: "financier",
    description:
      "Expense, savings, mortgage, and loan calculator for personal financial planning.",
    tags: ["JavaScript", "HTML/CSS"],
    category: "personal",
  },
  {
    name: "CarMaintenance",
    slug: "car-maintenance",
    description:
      "Simple web app for tracking vehicle maintenance history and upcoming service reminders.",
    tags: ["HTML", "JavaScript", "Python"],
    category: "personal",
  },
  {
    name: "journey",
    slug: "journey",
    description: "Web-based text adventure game, built as a lightweight narrative engine.",
    tags: ["JavaScript", "HTML/CSS"],
    category: "personal",
  },
  {
    name: "samsWorkSchedule",
    slug: "sams-work-schedule",
    description:
      "Utility that turns a screenshot of a scheduled work week into calendar events automatically.",
    tags: ["Kotlin", "OCR"],
    category: "personal",
  },
];
