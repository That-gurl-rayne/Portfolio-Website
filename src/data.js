import { COLORS } from "./theme.js";

export const TICKER = [
  "UI/UX DESIGNER",
  "GRAPHIC DESIGNER",
  "SOFTWARE ENGINEER",
  "VIDEO EDITOR",
  "WRITER SINCE 13",
  "STILL FIGURING IT OUT",
];

export const PROJECTS = [
  {
    tag: "BRAND IDENTITY",
    title: "ClarityOps AI",
    blurb:
      "A full brand system for an AI ops product — logo, guidelines, and social assets built around an iridescent sphere of converging data curves.",
    tools: ["Affinity Designer", "Affinity Photo", "Figma", "CapCut"],
    grad: `linear-gradient(135deg, ${COLORS.blue}, ${COLORS.indigo})`,
  },
  {
    tag: "PRODUCT DESIGN + BUILD",
    title: "Oya Deliver",
    blurb:
      "A grocery delivery platform designed and shipped solo — from Figma wireframes to a deployed React app with cart, auth, and order history.",
    tools: ["Figma", "React", "Vercel"],
    grad: `linear-gradient(135deg, #FFD561, ${COLORS.cyan})`,
  },
  {
    tag: "CAMPAIGN DESIGN",
    title: "Uncle Joe Scholarship Test",
    blurb:
      "Recruitment flyers and social assets for a scholarship platform, built into a cohesive editorial visual style.",
    tools: ["Figma"],
    grad: `linear-gradient(135deg, ${COLORS.cyan}, ${COLORS.indigo})`,
  },
  {
    tag: "PHOTO COMPOSITING",
    title: "Thumbnail Studio",
    blurb:
      "Retouching, color overlays, and shadow work for high-CTR YouTube thumbnails — first project in Affinity Photo.",
    tools: ["Affinity Photo"],
    grad: `linear-gradient(135deg, ${COLORS.ink}, ${COLORS.blue})`,
  },
  {
    tag: "UI CONCEPT",
    title: "Tonal Redesign",
    blurb:
      "A dark, glassmorphic reimagining of a fitness app interface — charcoal and forest green, built for focus.",
    tools: ["Figma"],
    grad: `linear-gradient(135deg, #2F3E36, ${COLORS.indigo})`,
  },
  {
    tag: "CONTENT PIPELINE",
    title: "Shorts, Automated",
    blurb:
      "A mobile-first content pipeline for short-form video — scripting, voice, and edit, end to end.",
    tools: ["CapCut", "ElevenLabs", "Canva"],
    grad: `linear-gradient(135deg, ${COLORS.blue}, #FFD561)`,
  },
];
