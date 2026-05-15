import type { BlogPost, BlogShort, BlogNear, Event } from "./types";
import { events as allEvents } from "./data/events";
import { projects as allProjects } from "./data/projects";
import { projectCategories as allProjectCategories } from "./data/project-categories";
import { blogCategories as allBlogCategories } from "./data/blog-categories";
import { blogPosts as allBlogPosts } from "./data/blogs";
import { eventLocations as allEventLocations } from "./data/events";

// ── Blog utilities ────────────────────────────────────────────────

export function getBlogs(): BlogPost[] {
  return [...allBlogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlog(slug: string): BlogPost | undefined {
  return allBlogPosts.find((b) => b.slug === slug);
}

export function getBlogNear(id: number): BlogNear {
  const blogs = getBlogs();
  const idx = blogs.findIndex((b) => b.id === id);
  const toShort = (b: BlogPost): BlogShort => ({
    id: b.id,
    title: b.title,
    slug: b.slug,
  });
  return {
    prev: idx > 0 ? toShort(blogs[idx - 1]) : null,
    next: idx < blogs.length - 1 ? toShort(blogs[idx + 1]) : null,
  };
}

export function getBlogCategories() {
  return allBlogCategories;
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
