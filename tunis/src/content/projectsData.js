// Locked Phase 4 Projects-overview copy. Do not edit wording without
// going back through the positioning/content process.

const projectsData = [
  {
    slug: "propia",
    name: "Propia",
    tier: "flagship",
    description:
      "Propia grew out of a problem I ran into firsthand as a landlord: finding the right clause in a lease usually meant reading the whole document. Propia turns leases into structured, searchable data instead — ingesting and processing lease documents, extracting key terms and clauses, and letting you ask questions directly against a lease rather than digging through it by hand. It also checks lease terms against California rental rules, flagging anything that doesn't line up.",
    cta: { label: "Read the case study", to: "/projects/propia" },
  },
  {
    slug: "contextflow",
    name: "ContextFlow",
    tier: "flagship",
    description:
      "ContextFlow came out of my own job search — reaching out to one contact for one role kept meaning the same repeated loop across multiple disconnected tools. ContextFlow consolidates that into one system: it generates outreach tailored to who you're actually talking to, integrates with Gmail to send it, and handles the work in the background rather than blocking on it. It's currently running in production.",
    cta: { label: "Read the case study", to: "/projects/contextflow" },
    liveUrl: "https://contextflow.dev",
  },
  {
    slug: "aeroskyops",
    name: "AeroSkyOps",
    tier: "supporting",
    description:
      "AeroSkyOps started from firsthand experience working airport operations — specifically the manual, spreadsheet-based way aircraft parking and location were tracked day to day. As an independent project, it grew into a system for managing aircraft and parking assignments, with real-time flight and weather data pulled in through FlightAware's API.",
    cta: null,
  },
];

export default projectsData;
