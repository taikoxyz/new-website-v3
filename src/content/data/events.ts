import type { Event, EventLocation } from "@/content/types";

// Events data — originally fetched from Strapi /events endpoint.
// Add/remove events here as needed.
export const events: Event[] = [
  {
    id: 1,
    title: "ETHDenver 2024",
    slug: "ethdenver-2024",
    location: "Denver, CO",
    date: "2024-02-23",
    image: "/img/events/ethdenver.png",
    createdAt: "2024-01-15T00:00:00.000Z",
    updatedAt: "2024-01-15T00:00:00.000Z",
    publishedAt: "2024-01-15T00:00:00.000Z",
  },
  {
    id: 2,
    title: "ETH Tokyo 2024",
    slug: "eth-tokyo-2024",
    location: "Tokyo, Japan",
    date: "2024-08-23",
    image: "/img/events/eth-tokyo.png",
    createdAt: "2024-03-01T00:00:00.000Z",
    updatedAt: "2024-03-01T00:00:00.000Z",
    publishedAt: "2024-03-01T00:00:00.000Z",
  },
  {
    id: 3,
    title: "Devconnect 2024",
    slug: "devconnect-2024",
    location: "Istanbul, Turkey",
    date: "2024-11-12",
    image: "/img/events/devconnect.png",
    createdAt: "2024-06-01T00:00:00.000Z",
    updatedAt: "2024-06-01T00:00:00.000Z",
    publishedAt: "2024-06-01T00:00:00.000Z",
  },
];

// Unique event locations derived from events data
export const eventLocations: EventLocation[] = [
  ...new Set(events.map((e) => e.location)),
].map((name) => ({ name }));
