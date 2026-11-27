/* ============================================================
   📚 The Health Subrogation course, in the CM course's format:
   the dashboard's Day cards → a day's Objectives page (what the trainee
   will be able to do, and the day's outline) → the day's steps, one at a
   time: the Training Agenda, then each module, then Day complete.
   This is the one place the course content is written down.

   day        — the day's number. Progress is saved against it (the trainee
                record's dayProgress[<day>], which the Portal reads), so never
                renumber a day.
   title      — the day's title (the Day card's head, the day's pages).
   theme      — the short theme on the Day card's pill and the agenda.
   objectives — "By the end of today you'll be able to …".
   topics     — the day's outline, in deck order, with the slides each covers.
   modules    — the day's modules, in order. Each has a stable id (progress is
                saved against it too) and is one of:
                  kind "slides" — a lesson deck kept on this site: deck is its id in
                                 js/cs-decks.js (the slide images in decks/<deck>/,
                                 built by decks/build_decks.py).
                  kind "practice" — a practice session or simulation, played on the
                                 stage: sim is its id in js/cs-practice.js.
                  kind "deck"  — a Canva deck. link: the Canva view link
                                 (canva.com/design/<id>/<token>/view); the page
                                 embeds it as …/view?embed, so trainees see the
                                 slides, never the editor.
                  kind "video" — a recorded session on Google Drive. link: the
                                 file link (drive.google.com/file/d/<id>/view);
                                 the page embeds it as …/preview. The file must
                                 be shared with whoever takes the course (the
                                 legalsupporthelp.com Workspace, or anyone with
                                 the link), or the player asks them to sign in.
   A module is complete when the trainee moves on from it (Next), and the day
   when they finish its last step.

   An admin can replace a module's address without a deploy: Admin → Course
   links (stored in settings:course by module id; an empty box goes back to
   this file).
   ============================================================ */
window.LN_COURSE = {
  title: "Health Subrogation Training",
  track: "Health Subro Track",
  headline: "Health Insurance Subrogation Professional Development Workshop",
  role: "Health Subrogation Specialist",
  days: [
    {
      day: 1,
      title: "Health Insurance Subrogation Foundations",
      theme: "Jargon, Subrogation & the LOR/HIPAA",
      icon: "\ud83d\udcd8",
      objectives: [
        "Use the jargon of health insurance subrogation",
        "Explain what health insurance subrogation is and how it fits the case workflow",
        "Identify a subrogation opportunity and the health insurance subrogation lien",
        "Initiate subrogation and minimize the risks to the client",
        "Give clients the tips that keep medical bills off their credit",
        "Know the exemptions and the critical details to check",
        "Prepare the Letter of Representation, the Medical Representation Letter and the HIPAA, and keep HIPAA compliance"
      ],
      topics: [
        { h: "Jargons" },
        { h: "Health Insurances & Health Insurance Subrogation" },
        { h: "Case Work Flow & Identifying a Subrogation Opportunity" },
        { h: "The Health Insurance Subrogation Lien & Initiating Subrogation" },
        { h: "Minimizing Risks, Tips for Clients & Exemption" },
        { h: "Critical Details, the LOR, the Medical Representation Letter & HIPAA" }
      ],
      modules: [
        { id: "d1-deck", kind: "slides", deck: "hs-day1", title: "Health Insurance Subrogation Training \u00b7 Day 1", slides: 47 },
        { id: "d1-handouts", kind: "files", title: "Handouts", label: "Handouts",
          note: "The full deck, to keep and read after the session.",
          items: [
            { title: "Health Insurance Subrogation Training \u00b7 Day 1", link: "/handouts/hs-day1.pdf" }
          ] }
      ]
    },
    {
      day: 2,
      title: "Health Insurances & Subrogation Companies",
      theme: "Plans, Providers & Who Handles the Recovery",
      icon: "\ud83c\udfe5",
      objectives: [
        "Tell health providers, health insurances and subrogation companies apart, and how they work together",
        "Explain in-network and out-of-network providers",
        "Name the types of health insurance: employer-sponsored, individual and family, government, short-term and catastrophic",
        "Describe Medicare, Medicaid, TRICARE and ERISA plans, and the major carriers",
        "Explain how insurers recover costs: liens, negotiation and legal coordination",
        "Name the specialized subrogation firms that handle recovery and when insurers outsource it"
      ],
      topics: [
        { h: "Health Insurances, Health Providers & Networks" },
        { h: "Types of Health Insurance" },
        { h: "Government Programs, ERISA & the Major Carriers" },
        { h: "Recovering Costs: Liens, Negotiation & Legal Coordination" },
        { h: "Subrogation Companies & Who Handles the Recovery" }
      ],
      modules: [
        { id: "d2-deck", kind: "slides", deck: "hs-day2", title: "Health Insurance Subrogation Training \u00b7 Day 2", slides: 53 },
        { id: "d2-handouts", kind: "files", title: "Handouts", label: "Handouts",
          note: "The full deck, to keep and read after the session.",
          items: [
            { title: "Health Insurance Subrogation Training \u00b7 Day 2", link: "/handouts/hs-day2.pdf" }
          ] }
      ]
    },
    {
      day: 3,
      title: "Setting Up the HI Subrogation",
      theme: "The HI Subro Workflow, Step by Step",
      icon: "\ud83e\uddfe",
      objectives: [
        "Follow the HI Subro workflow and checklist",
        "Explain a Notice of Lien",
        "Set up the claim from intake: the MVA questionnaire, transport, the HI card and member services",
        "Send the Letter of Subrogation with the HIPAA and HI card, and confirm receipt",
        "Review the subro lien, request the final lien and read the Subrogation Lien Ledger"
      ],
      topics: [
        { h: "HI Subro Work Flow & Subro Checklist" },
        { h: "Notice of Lien" },
        { h: "Steps 1 to 9: Intake to the Final Lien" },
        { h: "Billing Health Insurance & the Final Subrogation Lien Letter" },
        { h: "The Subrogation Lien Ledger" },
        { h: "HI Subro Guide" },
        { h: "Simulation: Health Subrogation" }
      ],
      modules: [
        { id: "d3-deck", kind: "slides", deck: "hs-day3", title: "Health Insurance Subrogation Training \u00b7 Day 3", slides: 49 },
        { id: "d3-hi-guide", kind: "guide", title: "HI Subro Guide", label: "HI Subro Guide",
          sections: [
            { h: "The Notice of Lien", p: "A health plan's notice that it paid accident-related claims and expects to be repaid from the settlement. It is a lien on the settlement: the plan waits for the firm to reimburse it when the case resolves.",
              links: [ { t: "📄 Sample: Notice of Statutory Subrogation Lien (Global Health Blue-Shield)", u: "/decks/docs/notice-of-statutory-subrogation-lien.pdf" } ] },
            { h: "The workflow, step by step", rows: [
              ["1 · Intake", "Check the intake for the MVA questionnaire"],
              ["2 · Transport", "Confirm whether the client was transported to the hospital"],
              ["3 · HI information", "Call member services (the number on the back of the HI card): how to send the LOR and HIPAA, and whether they handle subrogation. Never give out the defendant's insurance or claim number."],
              ["4 · CMS", "Set up the health subro information in the CMS"],
              ["5 · Letter of Subrogation", "Generate it, attach the signed HIPAA, and state how it's sent (fax, first-class mail or email)"],
              ["6 · Send", "Send the letter with the HI card by fax, email or regular mail"],
              ["7 · Confirm receipt", "Verify within 15 to 30 days that it was received and a case set up (the initial lien typically takes 30 days). If the company requires 1P/3P information, send a Lien Protection Letter."],
              ["8 · Review the lien", "Save it in the health insurance tab and update the amount. Every claim (hospital, ER physician, radiology, ambulance) must match the bills. Missing but paid → Abundance Letter. Unrelated → Removal Request."],
              ["9 · Final lien", "When the case moves to settlement, request the final lien (some companies want the settlement information first), and update the disbursement sheet"]
            ] },
            { h: "Before you fight a bill", rows: [
              ["Cost-benefit analysis", "Weigh the bill's amount against the work it takes to remove it. Pick your battles."],
              ["The ledger", "Dates and services must link to the incident; check for missing bills, and request bills and records only when you need them"],
              ["Reduction outcomes", "Approved (pay the reduced amount) · Rejected · Counter offer (they may ask for the settlement information)"],
              ["Before disbursing", "Never issue settlement proceeds without the final payoff letter"]
            ] }
          ] },
        { id: "d3-practice", kind: "practice", sim: "plans", title: "Simulation: Health Subrogation", label: "Simulation",
          note: "Work Global Health Blue-Shield's Notice of Lien to the final payoff, put the HI Subro workflow in order, then sort six plans' documents by the rules that govern them." },
        { id: "d3-handouts", kind: "files", title: "Handouts", label: "Handouts",
          note: "The full deck, to keep and read after the session.",
          items: [
            { title: "Health Insurance Subrogation Training \u00b7 Day 3", link: "/handouts/hs-day3.pdf" },
            { title: "Sample: Notice of Statutory Subrogation Lien", link: "/decks/docs/notice-of-statutory-subrogation-lien.pdf" }
          ] }
      ]
    },
    {
      day: 4,
      title: "Medicare & Medicaid",
      theme: "Collateral Source, the Medicare Portal & Medicaid",
      icon: "\ud83c\udfdb",
      objectives: [
        "Explain the Collateral Source Rule",
        "Open a Medicare subrogation and request the Conditional Payment Letter",
        "Navigate the Medicare portal step by step",
        "Read the conditional payment, the demand amount and the Fixed % option, and the Final Settlement Detail Document",
        "Apply Medicare's timely filing period and billing rules",
        "Work a Medicaid lien and tell Medicaid from Medicare"
      ],
      topics: [
        { h: "Collateral Source Rule" },
        { h: "Medicare: Opening Subrogation & the Conditional Payment Letter" },
        { h: "Navigating the Medicare Portal: Steps 1 to 8" },
        { h: "Conditional Payment, Demand Amount & the Fixed % Option" },
        { h: "Medicare Timely Filing & Billing Rules" },
        { h: "Medicaid & Medicaid vs Medicare" }
      ],
      modules: [
        { id: "d4-deck", kind: "slides", deck: "hs-day4", title: "Health Insurance Subrogation Training \u00b7 Day 4", slides: 59 },
        { id: "d4-handouts", kind: "files", title: "Handouts", label: "Handouts",
          note: "The full deck, to keep and read after the session.",
          items: [
            { title: "Health Insurance Subrogation Training \u00b7 Day 4", link: "/handouts/hs-day4.pdf" }
          ] }
      ]
    },
    {
      day: 5,
      title: "TRICARE, ERISA, Reductions & PIP",
      theme: "Plan Types, Reductions, UM/UIM & PIP",
      icon: "\ud83e\udd1d",
      objectives: [
        "Work a TRICARE subrogation",
        "Tell a self-funded ERISA plan from a fully insured one, and whose law governs the reduction",
        "Handle the major personal insurance carriers",
        "Request a reduction step by step",
        "Explain who is not entitled to UM/UIM subrogation",
        "Coordinate PIP and health insurance: coordination of benefits, reimbursement and the PIP subrogation lien"
      ],
      topics: [
        { h: "TRICARE & TRICARE Subrogation" },
        { h: "ERISA & Personal Insurance Carriers" },
        { h: "Requesting a Reduction" },
        { h: "UM/UIM" },
        { h: "PIP Insurance vs Health Insurance" },
        { h: "Health Plan Guide" },
        { h: "Recorded Session: ERISA & Government Plan Liens" }
      ],
      modules: [
        { id: "d5-deck", kind: "slides", deck: "hs-day5", title: "Health Insurance Subrogation Training \u00b7 Day 5", slides: 57 },
        { id: "d5-plan-guide", kind: "guide", title: "Health Plan Guide", label: "Health Plan Guide",
          sections: [
            { h: "Whose law governs the reduction", rows: [
              ["Fully insured group plan", "State law governs the reduction"],
              ["ERISA self-funded plan", "Federal law and the plan's own terms: the Made Whole and Common Fund doctrines may not apply"],
              ["Medicare, Medicaid, VA & TRICARE", "Each program's own recovery rules and process"]
            ], p: "Check the plan type before you ask for a reduction: it decides which rules you can lean on." },
            { h: "Audit the lien before it's paid", rows: [
              ["Itemization", "Match every charge on the plan's itemization to the bills and the accident's dates of service"],
              ["Unrelated charges", "Ask for any charge unrelated to the accident to be removed"],
              ["Request it in writing", "Request the corrected or final lien in writing, and keep it with the file"]
            ] }
          ] },
        { id: "d5-video", kind: "video", title: "Health Subrogation: ERISA & Government Plan Liens",
          link: "https://drive.google.com/file/d/1sUjQCpEqkrvf802Ck23aajx4Z2ox8zgE/view" },
        { id: "d5-handouts", kind: "files", title: "Handouts", label: "Handouts",
          note: "The full deck, to keep and read after the session.",
          items: [
            { title: "Health Insurance Subrogation Training \u00b7 Day 5", link: "/handouts/hs-day5.pdf" }
          ] }
      ]
    }
  ]
};

/* The embeddable address for a share link. Returns "" for anything that isn't
   a Canva design or a Drive file, so a typo never puts a stranger's page in the frame. */
window.lnEmbed = {
  deck: function(link){
    var m = /^https:\/\/(?:www\.)?canva\.com\/design\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)/.exec(String(link || "").trim());
    return m ? "https://www.canva.com/design/" + m[1] + "/" + m[2] + "/view?embed" : "";
  },
  video: function(link){
    var s = String(link || "").trim();
    var m = /^https:\/\/drive\.google\.com\/file\/d\/([A-Za-z0-9_-]+)/.exec(s) || /^https:\/\/drive\.google\.com\/open\?id=([A-Za-z0-9_-]+)/.exec(s);
    return m ? "https://drive.google.com/file/d/" + m[1] + "/preview" : "";
  },
  // The embed address for a module of either kind, and the page "Open in a new tab" goes to (the viewer, never the Canva editor).
  embed: function(kind, link){ return kind === "video" ? this.video(link) : this.deck(link); },
  page: function(kind, link){ var e = this.embed(kind, link); return kind === "video" ? e.replace(/\/preview$/, "/view") : e.replace(/\?embed$/, ""); }
};
