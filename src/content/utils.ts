import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Career, Event } from "./types";
import { events as allEvents } from "./data/events";
import { projects as allProjects } from "./data/projects";
import { projectCategories as allProjectCategories } from "./data/project-categories";
import { eventLocations as allEventLocations } from "./data/events";

// ── Career utilities ──────────────────────────────────────────────

const CAREER_DIR = path.join(process.cwd(), "src/content/careers");

function parseCareerMdx(filePath: string): Career {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    id: data.id,
    title: data.title,
    slug: data.slug,
    type: data.type,
    location: data.location,
    content,
    howToApply: data.howToApply,
    createdAt: data.createdAt || new Date().toISOString(),
    updatedAt: data.updatedAt || new Date().toISOString(),
    publishedAt: data.publishedAt || new Date().toISOString(),
  };
}

export function getCareers(): Career[] {
  if (!fs.existsSync(CAREER_DIR)) return [];
  const files = fs
    .readdirSync(CAREER_DIR)
    .filter((f) => f.endsWith(".mdx"));
  return files.map((f) => parseCareerMdx(path.join(CAREER_DIR, f)));
}

export function getCareer(slug: string): Career | undefined {
  const careers = getCareers();
  return careers.find((c) => c.slug === slug);
}

// ── Event utilities ───────────────────────────────────────────────

export function getEvents(): Event[] {
  return [...allEvents].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getEvent(slug: string): Event | undefined {
  return allEvents.find((e) => e.slug === slug);
}

export function getEventLocations() {
  return allEventLocations;
}

// ── Project/Ecosystem utilities ───────────────────────────────────

export function getProjects() {
  return allProjects;
}

export function getProject(slug: string) {
  return allProjects.find(
    (p) => p.name.toLowerCase().replace(/\s+/g, "-") === slug
  );
}

export function getProjectCategories() {
  // Compute counts from actual projects
  return allProjectCategories.map((cat) => ({
    ...cat,
    count: allProjects.filter((p) => p.categories.includes(cat.name)).length,
  }));
}
