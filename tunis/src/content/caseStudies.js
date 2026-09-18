// Locked Phase 4 case-study copy. Content is authoritative — do not edit
// wording here without going back through the positioning/content process.
// Structure only should change during implementation.

const caseStudies = {
  propia: {
    slug: "propia",
    name: "Propia",
    tagline: "A backend-first lease intelligence platform.",
    status: "Built and deployed. Backend/database intentionally stopped — not currently a live demo.",
    statusTone: "neutral",
    sections: [
      {
        id: "context",
        heading: "Problem / Context",
        paragraphs: [
          "As a landlord, when an issue came up with a property, I'd often need to go back to the lease to figure out what it actually said — what applied, what didn't, what I or the tenant were on the hook for. The lease was the only place that information lived, and finding it meant reading through pages of language that mostly didn't apply to whatever the specific issue was. It wasn't a hard problem, just a tedious and repetitive one, and it kept happening. That repetition is what made it worth building around: a lease is structured information trapped in an unstructured document, and once I had the ability to build software, that felt like a problem worth solving with it.",
        ],
      },
      {
        id: "built",
        heading: "What I Built",
        paragraphs: [
          "Propia starts with the lease document itself. You upload it, and Propia reads through it and pulls out the specific terms and clauses that actually matter, rather than leaving the whole thing as one long block of text you have to search through yourself. Because that extraction isn't perfect, every piece of information it pulls out can be reviewed and corrected before it's treated as fact — Propia proposes what a clause says; it doesn't just assume it's right. Once a lease has been processed, you can ask it direct questions — what the notice period is, what a specific clause actually covers — instead of hunting through the document by hand. It also checks the lease's terms against California rental rules and flags anything that doesn't line up.",
        ],
      },
      {
        id: "architecture",
        heading: "System / Architecture",
        flow: "Upload → ingestion & state tracking → OCR worker → structured extraction → review & confirmation → retrieval/Q&A + compliance analysis",
        paragraphs: [
          "The lease is uploaded and its processing state is tracked from upload through to done (or failed). Document processing itself runs in a separate worker service rather than inline in the request that handles the upload, so OCR and document processing don't hold the upload request open. That worker pulls individual terms and clauses out as structured data rather than leaving the document as raw text. Each extracted piece is held as a proposal, not a fact, until it's reviewed and confirmed.",
          "Once a lease's content is available, two things happen with it independently: it's indexed for retrieval, so a direct question pulls the specific relevant piece of the lease rather than sending the whole document to a model every time — and it's checked against a California-specific compliance ruleset, which is a distinct rules system rather than a general question asked of a language model.",
          "The React/Vite frontend is what you interact with directly. It talks to a FastAPI backend, which owns the lease, document, and fact data in PostgreSQL and coordinates the pipeline above — handing documents to the OCR worker, storing confirmed facts, and serving retrieval-backed answers back to the frontend. A separate evaluation harness exists to check how well the retrieval and Q&A step is actually performing; what it found is covered later.",
        ],
      },
      {
        id: "decisions",
        heading: "Important Engineering Decisions",
        decisions: [
          {
            title: "Login timing and account enumeration",
            body: "Checking a password only when a username actually exists (and skipping that work otherwise) makes a login endpoint respond measurably faster for accounts that don't exist — which lets someone probe which usernames are real without ever logging in. The fix compares against a dummy bcrypt hash even when the user doesn't exist, so both paths perform comparable password-hashing work, reducing the timing difference between them. It closes off a passive, low-cost way to enumerate accounts, without adding any user-facing friction.",
          },
          {
            title: "JWT timestamps and server timezone",
            body: "The initial JWT issuing logic used naive, timezone-unaware timestamps for issued-at/expiration — meaning the correctness of a token's timing depended on the server itself running in UTC. If it didn't, tokens could compute the wrong expiry. The fix switched to explicit timezone-aware timestamps, so token timing is correct regardless of the server's local clock configuration. This was a correctness fix caught and addressed directly, not a response to an incident.",
          },
          {
            title: "OCR worker as its own service",
            body: "Because document processing runs in a separate worker reached over HTTP rather than inline in the API, that worker needed some way to reject requests that weren't actually coming from the backend. The fix is a shared-secret header the backend sends on every call — a straightforward check, not a full service-to-service auth system — but it's enough to keep the worker from being an open endpoint anyone could call directly to trigger processing.",
          },
          {
            title: "Fail-fast startup in production",
            body: "If placeholder or default secrets ever ended up in an environment flagged as production, the app would otherwise start normally and mask a real misconfiguration behind a seemingly healthy service. The fix is a startup check that refuses to boot if it detects placeholder secrets while running in a production-flagged environment — turning a silent gap into an immediate, visible failure at deploy time instead of something that might not surface until later.",
          },
        ],
      },
      {
        id: "evidence",
        heading: "Evidence / Evaluation",
        paragraphs: [
          "Extracted lease facts go through an explicit human review step before they're treated as fact — but a generated Q&A answer is produced fresh each time, with no equivalent confirmation built into the product itself, and a wrong answer can sound just as confident as a right one. I didn't want “the answer looked right when I tried it” to be the actual quality bar for that pipeline, so Propia includes a small evaluation harness that runs retrieval and answer generation against known baseline cases, repeatably, instead of relying on spot-checking a handful of questions by hand.",
        ],
      },
      {
        id: "deployment",
        heading: "Deployment / Current Status",
        paragraphs: [
          "Propia was built and deployed — the frontend through Vercel, the backend on AWS App Runner. I later intentionally stopped the backend and database myself, so Propia isn't currently running as a live, working demo. The deployment itself worked; it's just not turned on right now.",
        ],
      },
      {
        id: "outcome",
        heading: "Outcome / What I Learned",
        paragraphs: [
          "Propia changed how I think about one specific gap: getting a feature working and establishing that it actually works well are not the same thing. The evaluation harness came from refusing to let “the answer looked right when I tried it” be the bar for retrieval-backed Q&A — moving from eyeballing output to something repeatable. The security and correctness fixes came from the same instinct in a different form: going back and questioning assumptions that had held up fine under normal conditions, but not necessarily under every condition. And finishing a first working version wasn't the finish line — once Propia existed end-to-end, I went back and reworked parts of it rather than treating that version as permanent.",
        ],
      },
    ],
  },

  contextflow: {
    slug: "contextflow",
    name: "ContextFlow",
    tagline: "A context-aware outreach platform, currently running in production.",
    status: "Currently running in production.",
    statusTone: "live",
    sections: [
      {
        id: "context",
        heading: "Problem / Context",
        paragraphs: [
          "Reaching out to one contact for one job application meant moving through a handful of disconnected tools every time: pull the job posting, find the right person to contact, enrich that contact's information, pull together my own background and communication preferences, draft something that didn't read like a generic template, and then actually send it. None of that was hard individually — it was just fragmented, manual, and repeated for every single contact. That fragmentation, not the job search itself, is the problem ContextFlow was built to solve: turning a multi-tool, multi-step workflow into one system.",
        ],
      },
      {
        id: "built",
        heading: "What I Built",
        paragraphs: [
          "ContextFlow consolidates that workflow into a single system. You give it a job posting and a contact, and it works out who that contact actually is — their role, seniority, and relationship to you — and generates outreach written for that specific person rather than a generic template with a name filled in. It classifies the audience type first, generates a draft grounded in the actual job posting and your own background, and sends it either through your own Gmail, so it comes from you, or — for people who haven't signed in yet — through a separate platform-level email path. It's a real, currently running production system, not a demo.",
        ],
      },
      {
        id: "architecture",
        heading: "System / Architecture",
        flow: "Job posting + contact → audience classification → context assembly (you / the role / the recipient) → grounded draft generation → send (Gmail or platform email)",
        paragraphs: [
          "Before anything is written, ContextFlow classifies who the recipient actually is — executive, founder, hiring manager, peer, or recruiter — because that classification changes what follows, not just the tone of a template. Each audience type has its own generation logic: what to emphasize, what from your background is actually relevant to that kind of person, and how to open the message. Context for generation is assembled from three places at once — who you are (profile, background, communication preferences), what the campaign is about (company, role, job description), and who you're writing to (the audience type just classified) — and a draft goes through a grounding-verification step before it's treated as ready, rather than being sent as soon as a model produces text.",
          "Sending is split by who's actually doing the sending. If you're logged in and have connected your own Gmail, outreach goes out through your account, authenticated as you, using the Gmail API directly. If a message needs to reach someone before they've signed up, it goes through Resend instead — a separate, platform-level send path. The two are handled as distinct integrations rather than one shared “send email” function; why is covered next.",
          "The frontend is React and Vite. It talks to a FastAPI backend backed by PostgreSQL, which owns the campaign, contact, and message data and coordinates the flow above. Generation, enrichment, and sending don't run inside the request/response cycle — they run through a background job system, in a worker process that operates independently from the API.",
        ],
      },
      {
        id: "decisions",
        heading: "Important Engineering Decisions",
        decisions: [
          {
            title: "Why audience type drives generation, not just tone",
            body: "A recruiter, a hiring manager, a peer, a founder, and an executive don't just want a different tone — they care about different things and respond to different kinds of evidence. Treating that as a single prompt with a name and company swapped in produces outreach that reads the same regardless of who's receiving it. ContextFlow classifies the recipient's audience type first and routes generation through logic built specifically for that audience, rather than one universal template with variables filled in — the classification changes what the generator actually does, not just how it's phrased.",
          },
          {
            title: "Grounding/verification before a draft is considered ready",
            body: "A generated message can read as confident and specific while still being loosely connected to what the job posting or the recipient's actual background support. Rather than treating any generated draft as final, ContextFlow runs it through a grounding-verification step that checks the output against the context it was supposed to be based on before it's surfaced as ready to send. The point isn't that this makes every message perfect — it's that “the model produced text” and “the text is actually grounded in the right context” are treated as two different things.",
          },
          {
            title: "Why Gmail and Resend aren't the same integration",
            body: "Outreach that's supposed to look and feel like it's genuinely coming from you needs to actually be sent from your own email, authenticated as you, not a shared platform address. But not everyone ContextFlow needs to reach has an account yet, and there's no personal inbox to send from until they do. Rather than force both cases through one generic send path, Gmail handles authenticated, per-user outreach, and Resend handles platform-originated email to people outside that loop — splitting them by responsibility keeps “this is from you” and “this is from the platform” architecturally clear instead of something to remember to handle correctly in application logic.",
          },
          {
            title: "Separating background work from the request cycle",
            body: "Generation, enrichment, and sending all take real time and can fail independently of whatever request triggered them, which makes them a poor fit for running inline inside an API call. ContextFlow runs that work through a PostgreSQL-backed job queue instead: jobs are persisted in the database, and a separate worker process claims and works through them independently of the API. SKIP LOCKED is used during dequeue so multiple workers can claim different available jobs at the same time without claiming the same one. Jobs are leased rather than permanently claimed, so if a worker stops mid-job without releasing it, that job's lease eventually expires and it becomes eligible to be picked up again.",
          },
        ],
      },
      {
        id: "deployment",
        heading: "Deployment & Production Verification",
        paragraphs: [
          "ContextFlow runs as five separate services: PostgreSQL, the FastAPI backend, a background worker, the React frontend, and Caddy in front of all of it. Caddy acts as the public entry point, terminates TLS via Let's Encrypt, and routes API requests to the backend and application traffic to the frontend. It's hosted on AWS.",
          "This isn't just a description of how it's supposed to work — contextflow.dev is live right now: the production API reports a healthy database connection, and logging in triggers a real Google OAuth handshake, not a stub. A substantial migration history and test suite exist alongside the application code, reflecting continued iteration rather than a single initial build.",
        ],
      },
      {
        id: "outcome",
        heading: "Outcome / What I Learned",
        paragraphs: [
          "The broader lesson from building ContextFlow is that things that look like small variations at the product level often deserve different architecture underneath, not just different parameters inside the same one. Different audience types aren't just template variables. Gmail and Resend aren't just two interchangeable ways to send an email. Slow, unreliable work isn't just another synchronous API call with a longer timeout. In each case, treating the difference as real and modeling it explicitly in the architecture — rather than hiding it behind one generic abstraction — is what made the system actually hold up as more of it got built.",
        ],
      },
    ],
  },
};

export default caseStudies;
