import type { Event, EventLocation } from "@/content/types";

// Events data.
// Add/remove events here as needed.
export const events: Event[] = [];

// Unique event locations derived from events data
export const eventLocations: EventLocation[] = [
  ...new Set(events.map((e) => e.location)),
].map((name) => ({ name }));
