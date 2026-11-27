/* ============================================================
   Health Insurance Subrogation: knowledge checks and practical simulations, Days 1 to 5.
   Adds ten sims to window.CS_PRACTICE (see the header of cs-practice.js for the step kinds):
     hs1-check … hs5-check  — Day N Knowledge Check
     hs1-sim   … hs5-sim    — Day N Practical Simulation
   Every fact comes from that day's deck (decks/hs-dayN). All companies and providers in the
   case briefs are fictional; the client is always John Doe.
   ============================================================ */
Object.assign(window.CS_PRACTICE, {

  /* ---------------------------------------------------------- Day 1 */
  "hs1-check": {
    title: "Day 1 Knowledge Check",
    intro: "Ten questions on Day 1: the jargon, what health insurance subrogation is, when to open it, how to protect the client, and the LOR and HIPAA.",
    scenarios: [
      {
        title: "Day 1 essentials",
        brief: ["Answer each question as you would on a new injury file."],
        steps: [
          { t: "choice", q: "What is health insurance subrogation?", options: [
            { a: "The client asking their own health plan to pay a bill the provider sent them", fb: "That's an ordinary claim. Subrogation runs the other way: the plan asks to be paid back by the party responsible." },
            { a: "The health insurer asking the third party (or its insurance) to reimburse the medical expenses it paid for its insured, when that party is legally accountable for the injury", ok: true, fb: "Right. The key words are legally accountable: someone else caused the injury, so the plan wants its money back out of the recovery." },
            { a: "A provider billing the client for the difference between its charge and what insurance paid", fb: "That's a balance bill. Subrogation is the insurer seeking reimbursement for what it paid." },
            { a: "The health insurer refusing to pay because another party caused the accident", fb: "The plan usually pays first, then seeks reimbursement. It doesn't simply refuse." }
          ] },
          { t: "choice", q: "On a case note you see \"PHI\". What does it stand for?", options: [
            { a: "Primary Health Insurer", fb: "Not on the jargon list. PHI is Protected Health Information, which HIPAA protects." },
            { a: "Personal Health Insurance", fb: "Close, but PHI is Protected Health Information: records, bills and other identifying health details." },
            { a: "Protected Health Information", ok: true, fb: "Right. PHI is what HIPAA protects, and we handle it every day: records, bills, lien ledgers." }
          ] },
          { t: "choice", q: "What is the health insurance subrogation lien?", options: [
            { a: "A list of all the payments the health insurance made", ok: true, fb: "Right. It's the itemized record of what the plan paid and wants back. You compare each line against the client's treatment." },
            { a: "The total of every provider's full billed charges", fb: "The lien lists what the plan paid, which is usually a discounted amount, not the gross bills." },
            { a: "The client's unpaid balances with each provider", fb: "Those are provider balances. The subrogation lien is the plan's own payments." }
          ] },
          { t: "choice", q: "For a client who is not on Medicare, when do you initiate subrogation?", options: [
            { a: "On every file at intake, whatever treatment there was", fb: "That's the Medicare rule. For other clients, there must be a hospital visit and use of health insurance." },
            { a: "Only after the case settles and the plan sends a lien", fb: "Too late. Setting up the HI subro claim happens early in the case workflow, not at the end." },
            { a: "Only when the client was seen at a hospital or related facility and has used their health insurance", ok: true, fb: "Right. Both must be true. With no hospital visit, or no use of health insurance, there's generally nothing for the plan to claim back." }
          ] },
          { t: "choice", q: "Your new client is on Medicare but says all his treatment was paid by his auto policy. What do you do?", options: [
            { a: "Initiate Medicare subrogation as soon as the case is set up", ok: true, fb: "Right. Medicare clients are the exemption: subrogation is initiated at case setup whether or not they treated under Medicare." },
            { a: "Skip Medicare: it paid nothing", fb: "Medicare clients are exempt from the hospital-and-health-insurance test. Open it at setup, every time." },
            { a: "Wait to see whether Medicare sends a lien", fb: "Don't wait. Medicare subrogation is initiated as soon as the case is set up." }
          ] },
          { t: "choice", q: "The client has no health insurance and a large hospital bill. What do you check first?", options: [
            { a: "Tell the client to pay the bill in full now", fb: "The deck's path is emergency Medicaid first, then the attorney liens option." },
            { a: "Ask the defendant's insurer to pay the hospital directly", fb: "That isn't the path taught. Check emergency Medicaid, then ask the case manager about attorney liens." },
            { a: "Whether the client can apply for emergency Medicaid; if not, ask the case manager whether the bill can go under Attorney Liens, with a reduction requested at settlement", ok: true, fb: "Right. Decide on a path early and document it. Don't leave an uninsured hospital bill unaddressed." }
          ] },
          { t: "choice", who: "Subrogation analyst", line: "It would help if you sent me the at-fault driver's auto insurance and claim number.", q: "What do you do?", options: [
            { a: "Send it: the analyst is entitled to it", fb: "Refrain. If the plan has those details it may notify the defendant's carrier, which can lead to a lien on the file." },
            { a: "Don't volunteer it. If the plan truly requires it, that's a deliberate decision to make, and you escalate to your supervisor or attorney", ok: true, fb: "Right. Releasing the defendant's auto insurance details is a decision, not something you hand over on request." },
            { a: "Give the claim number but not the carrier's name", fb: "Neither goes out by default. Refrain, and escalate if the plan says it needs them." }
          ] },
          { t: "choice", q: "What must go to the subrogation department together with the LOR?", options: [
            { a: "The client's itemized medical records", fb: "Records may come later. The LOR goes with a signed HIPAA form." },
            { a: "A copy of the police report", fb: "Not what the deck teaches. The LOR goes with a signed HIPAA form, so the plan can share the client's health information with us." },
            { a: "The defendant's insurance details", fb: "Never by default: refrain from sharing those." },
            { a: "A signed HIPAA form", ok: true, fb: "Right. The LOR says we represent the client; the signed HIPAA lets the plan share PHI with us. Then confirm they received it." }
          ] },
          { t: "choice", q: "Why should medical bills go to the health insurance as soon as possible?", options: [
            { a: "Providers often have a limited time from the DOL (typically 30 to 90 days) to submit a claim; a late bill can be denied for timely filing and leave the client with the full charge", ok: true, fb: "Right. Getting the insurance details to providers early protects the client." },
            { a: "Because the health plan pays more on older bills", fb: "There's no such rule. The risk is a timely filing denial." },
            { a: "It doesn't matter: the bills can always wait for the settlement", fb: "Providers aren't obligated to wait, and a late submission can be denied for timely filing." }
          ] },
          { t: "choice", q: "Which HIPAA rule sets the standards for safeguarding electronic PHI (ePHI)?", options: [
            { a: "The Privacy Rule", fb: "The Privacy Rule sets standards for medical records and PHI generally. ePHI has its own rule." },
            { a: "The Enforcement Rule", fb: "That governs how violations are investigated and penalized by the HHS Office for Civil Rights." },
            { a: "The Breach Notification Rule", fb: "That covers who must be notified after a breach of unsecured PHI." },
            { a: "The Security Rule", ok: true, fb: "Right. It keeps ePHI confidential, accurate (integrity) and available: portal downloads, emailed ledgers, scanned records." }
          ] }
        ]
      }
    ]
  },

  "hs1-sim": {
    title: "Day 1 Practical Simulation",
    intro: "A new file from intake to the first lien: spot the subrogation opportunity, protect the client from surprise bills, and handle PHI safely.",
    scenarios: [
      {
        title: "The ambulance and the ER",
        brief: ["Client: John Doe · Date of loss: 09/14/2026 · Rear-ended at a stop light",
          "Taken by Desert Valley EMS to Summit Ridge Medical Center",
          "The ER physician ordered X-rays",
          "John used his health insurance, Silverline Health Plan, at the hospital"],
        steps: [
          { t: "choice", q: "From that one visit, how many bills should you expect, and from whom?", options: [
            { a: "One: the hospital bill", fb: "Don't stop at the hospital. Each provider involved in the visit bills separately." },
            { a: "Two: the hospital and the ambulance", fb: "You're missing the ER physician and the radiology for the X-rays." },
            { a: "Four: ambulance, hospital, emergency room physician and radiology", ok: true, fb: "Right. Each comes from a different provider and may be billed to health insurance separately." }
          ] },
          { t: "choice", q: "Do you initiate health insurance subrogation on this file?", options: [
            { a: "Yes: John was seen at a hospital and used his health insurance", ok: true, fb: "Right. Both conditions are met, so open it, and note on the file what you found." },
            { a: "No: wait until the case settles", fb: "Setting up the HI subro claim happens early in the case workflow, not at the end." },
            { a: "No: subrogation only applies to Medicare clients", fb: "Medicare clients are the exemption (open at setup). Everyone else: hospital visit plus health insurance used." }
          ] },
          { t: "order", q: "Put the case workflow in order, from intake to the lien.", items: [
            "Intake",
            "Send LOR",
            "Open the 3P / 1P claim",
            "Treatment",
            "Set up the HI subro claim",
            "Property damage",
            "Finalized liability",
            "Records and bills acquisition",
            "Lien, if there is any"
          ] },
          { t: "choice", q: "You send Silverline's subrogation department the LOR with John's signed HIPAA. What's next?", options: [
            { a: "Nothing: the plan will call when it has a lien", fb: "Sending isn't receiving. Letters get misrouted and faxes fail." },
            { a: "Confirm they received it, and note who confirmed and when", ok: true, fb: "Right. Make confirmation a routine step, or you may find out months later that no file was opened." },
            { a: "Send the LOR again every week until the lien arrives", fb: "Confirm receipt once, and log it. Then allow time: bills may take up to 30 days to show on the lien." }
          ] },
          { t: "choice", who: "Silverline subrogation analyst", line: "Which of these claims are from the accident?", q: "What do you give the analyst?", options: [
            { a: "Information about John's injuries, his treatment and the facilities involved", ok: true, fb: "Right. That helps the analyst identify the accident-related care, so the lien is accurate and you spend less time disputing charges later." },
            { a: "The defendant's auto insurance and claim number", fb: "Refrain from sharing the defendant's auto insurance details." },
            { a: "Nothing: it's the plan's job to sort it out", fb: "Help the analyst help you: the better the information, the more accurate the lien." }
          ] },
          { t: "number", q: "Silverline's lien lists: ambulance (billed $1,850.00, paid $1,120.40), hospital (billed $9,600.00, paid $4,310.75), ER physician (billed $1,400.00, paid $562.00), radiology (billed $780.00, paid $214.35). What is the lien amount?", answer: 6207.50, tol: 0.01, unit: "$", fb: "$1,120.40 + $4,310.75 + $562.00 + $214.35 = $6,207.50. The lien is the list of what the plan paid, not the $13,630.00 billed: health insurance pays a discounted amount, which is why having coverage shrinks what has to be paid back." }
        ]
      },
      {
        title: "John calls about a bill",
        brief: ["Three weeks later, John calls the office.", "He has a full-balance statement from Desert Valley EMS in the mail and is worried about his credit."],
        steps: [
          { t: "choice", who: "John Doe", line: "The ambulance company sent me a bill for the whole amount. Do I have to pay it?", q: "What do you check first?", options: [
            { a: "Whether the provider has John's health insurance information, and whether his MedPay or PIP already paid it", ok: true, fb: "Right. Clients get bills directly when the provider doesn't know which insurance to bill, and sometimes MedPay or PIP already covered it." },
            { a: "Tell him to pay it today so it doesn't go to collections", fb: "Paying is one option, but first check whether the bill ever went to insurance, or MedPay/PIP." },
            { a: "Tell him to ignore it until the case settles", fb: "A full-balance statement may mean the bill never went to insurance. Follow up now." }
          ] },
          { t: "choice", who: "John Doe", line: "Can't all my doctors just wait until my case settles?", q: "How do you answer?", options: [
            { a: "Yes, every provider has to wait for the settlement", fb: "Not true. Providers aren't obligated to treat on a lien or to wait for payment." },
            { a: "Explain that we don't have relationships with all providers, and providers aren't obligated to treat on a lien or wait until the case is resolved; share his insurance with them without delay", ok: true, fb: "Right. Setting this expectation early avoids surprises, and prompting him to share his insurance keeps bills processed on time. Note on the file that you gave the reminder." },
            { a: "Tell him the firm will pay the providers now", fb: "That's not what the deck teaches. Set expectations and prompt him to give providers his insurance." }
          ] },
          { t: "choice", q: "John asks how to keep medical bills from hurting his credit. What do you share?", options: [
            { a: "Tell him to stop answering calls from providers", fb: "Not one of the tips. Offer the options the deck lists." },
            { a: "Tell him to apply for Medicaid even though he has health insurance", fb: "The Medicaid tip is for clients without health insurance." },
            { a: "Options to consider: pay the bill promptly, enter a payment plan, negotiate directly with the provider, or wait and pay from the settlement proceeds", ok: true, fb: "Right. Present them as options for John to consider, not instructions." }
          ] },
          { t: "fields", q: "John saw these abbreviations in a letter. Write out what each one stands for.", fields: [
            { label: "PIP", re: "^personal injury protection$", answer: "Personal Injury Protection" },
            { label: "LOR", re: "^letter of representation$", answer: "Letter of Representation" },
            { label: "EMS", re: "^emergency medical services$", answer: "Emergency Medical Services" }
          ] }
        ]
      },
      {
        title: "PHI on its way out",
        brief: ["You're emailing John's records and Silverline's lien ledger to the analyst at silverline.example.", "Before you click Send, you see the address auto-completed to a different company."],
        steps: [
          { t: "choice", q: "What do you do?", options: [
            { a: "Send it: the other company will delete it", fb: "That could be a breach of unsecured PHI. Double-check recipients before sending." },
            { a: "Stop, correct the recipient, and if PHI may already have gone to the wrong place, raise it with your supervisor straight away", ok: true, fb: "Right. A misdirected email with records attached is exactly how a breach process starts." },
            { a: "Send it and fix it next time", fb: "PHI must be handled securely every time. Check recipients before sending." }
          ] },
          { t: "choice", q: "If unsecured PHI is breached, who must the covered entity or business associate notify?", options: [
            { a: "Only the client's attorney", fb: "The rule names the affected individuals, HHS and sometimes the media." },
            { a: "Nobody, if it was an accident", fb: "Accidental or not, a breach of unsecured PHI triggers the Breach Notification Rule." },
            { a: "The affected individuals, the U.S. Department of Health and Human Services (HHS), and sometimes the media, depending on the breach's size", ok: true, fb: "Right. That's the Breach Notification Rule." }
          ] },
          { t: "choice", q: "Who investigates and penalizes HIPAA violations under the Enforcement Rule?", options: [
            { a: "The HHS Office for Civil Rights (OCR)", ok: true, fb: "Right. HIPAA has an enforcer, and violations are investigated." },
            { a: "The client's health plan", fb: "Plans are covered entities that must comply. Enforcement belongs to the HHS Office for Civil Rights." },
            { a: "The Centers for Medicare & Medicaid Services (CMS)", fb: "CMS runs Medicare and Medicaid. HIPAA enforcement is the HHS Office for Civil Rights." }
          ] },
          { t: "number", q: "Under HIPAA's civil penalties, what is the most that can be charged in a year for identical violations?", answer: 1500000, tol: 0, unit: "$", fb: "$1,500,000.00 a year for identical violations, at $100 to $50,000 per violation. Criminal penalties for severe violations go up to $250,000 and 10 years." }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- Day 2 */
  "hs2-check": {
    title: "Day 2 Knowledge Check",
    intro: "Ten questions on Day 2: providers, networks, the types of health insurance, the government programs and ERISA, and the subrogation companies.",
    scenarios: [
      {
        title: "Who treated, who paid, who is collecting",
        brief: ["Answer each question as you would when sorting out a new lien."],
        steps: [
          { t: "choice", q: "What makes a provider \"in-network\"?", options: [
            { a: "It's close to the client's home", fb: "Network is about contracts, not location." },
            { a: "It has an agreement with the insurance company to offer services at reduced rates, and the plan typically covers a higher percentage of the cost", ok: true, fb: "Right. That agreement is why the plan's payment is lower than the provider's full charge." },
            { a: "It treats patients on a lien", fb: "Treating on a lien has nothing to do with network status." }
          ] },
          { t: "choice", q: "An out-of-network provider was paid by the client's plan at a lower rate. What may the client receive?", options: [
            { a: "A refund from the plan", fb: "No. The provider may bill the client for what insurance didn't pay." },
            { a: "Nothing more: insurance paid", fb: "Out-of-network coverage is less favorable, so there's often a balance left." },
            { a: "A balance bill for the difference between what insurance paid and the provider's charge", ok: true, fb: "Right. So one treatment can mean two claims on the settlement: the plan's lien and the provider's balance." }
          ] },
          { t: "choice", q: "What does a subrogation company do?", options: [
            { a: "Acts on behalf of insurance providers to recover the expenses they covered for the insured's medical treatment", ok: true, fb: "Right. It's usually who sends the lien letter and who we negotiate with." },
            { a: "Pays the client's medical bills when the plan won't", fb: "It collects for the plan; it doesn't pay bills." },
            { a: "Represents the injured client against the at-fault driver", fb: "That's our role. The subrogation company works for the insurer." }
          ] },
          { t: "choice", q: "In the three-way connection, who places the lien on the settlement?", options: [
            { a: "The healthcare provider", fb: "The provider bills the health insurance for the treatment." },
            { a: "The health insurance company's member services", fb: "The insurer pays and may engage a subrogation company to recover." },
            { a: "The client's auto insurer", fb: "Not in this connection. Provider bills the insurer; insurer pays; subrogation company places the lien." },
            { a: "The subrogation company, so the insurer is reimbursed", ok: true, fb: "Right. Provider bills the insurer, the insurer pays and may bring in a subrogation company, and that company places the lien." }
          ] },
          { t: "choice", q: "What does CHIP cover?", options: [
            { a: "Adults 65 and older", fb: "That's Medicare." },
            { a: "Children in low-income families who don't qualify for Medicaid but need affordable coverage", ok: true, fb: "Right. CHIP is the Children's Health Insurance Program." },
            { a: "Military families", fb: "That's TRICARE." }
          ] },
          { t: "choice", q: "Who administers Medicare, and who does it cover?", options: [
            { a: "The states; low-income families", fb: "That describes Medicaid, which is run jointly by federal and state governments." },
            { a: "The Department of Defense; service members", fb: "That's TRICARE." },
            { a: "The federal government through CMS; people 65 and older, younger people with disabilities, and people with end stage renal disease", ok: true, fb: "Right. If a client fits any of these groups, ask about Medicare early." }
          ] },
          { t: "choice", q: "Why must you confirm which state's Medicaid program paid?", options: [
            { a: "Eligibility criteria and benefits can differ across states", ok: true, fb: "Right. A Medicaid file in one state may not work like one in another." },
            { a: "Medicaid is the same everywhere, so it doesn't matter", fb: "It's joint federal-state, and eligibility and benefits differ by state." },
            { a: "Only Nevada has Medicaid", fb: "Every state has a Medicaid program; the rules differ." }
          ] },
          { t: "choice", q: "A lien letter mentions ERISA. What does that tell you?", options: [
            { a: "It's a government program like Medicaid", fb: "ERISA is a federal law about private industry plans, not a government program." },
            { a: "It's an individual plan bought on the Marketplace", fb: "ERISA covers employer-provided plans." },
            { a: "The plan is employer-provided: ERISA (1974) is the federal law setting minimum standards for pension and health plans in private industry", ok: true, fb: "Right. Flag it: the kind of employer plan can affect the reimbursement rules." }
          ] },
          { t: "choice", q: "An older letter on the file is from Equian; a newer one is from Optum. What do you do?", options: [
            { a: "Add both to the net sheet as separate liens", fb: "Equian is now part of Optum. Don't assume two liens." },
            { a: "Confirm with the vendor whether it's the same claim before adding anything to the net sheet", ok: true, fb: "Right. Several vendor names (Equian, Ingenix) lead back to Optum." },
            { a: "Ignore the older letter", fb: "Don't ignore it. Confirm whether it's the same claim." }
          ] },
          { t: "choice", q: "How do you find out which subrogation company manages the lien for a client's health plan?", options: [
            { a: "Ask the defendant's insurer", fb: "No. The deck says to contact the provider, meaning the health insurance company." },
            { a: "Wait for a lien letter to arrive", fb: "Be proactive. Call and ask." },
            { a: "Guess from the carrier's name", fb: "Many insurers outsource. The company you negotiate with is often not the one on the card." },
            { a: "Contact the health insurance company and ask, and write down who you spoke with, the vendor's name and any reference number", ok: true, fb: "Right. Always identify who is actually handling the recovery before you send anything." }
          ] }
        ]
      }
    ]
  },

  "hs2-sim": {
    title: "Day 2 Practical Simulation",
    intro: "Sort out who treated, who paid and who is collecting: work out network balances, identify a subrogation vendor, and place each kind of coverage.",
    scenarios: [
      {
        title: "In and out of network",
        brief: ["Client: John Doe · Date of loss: 06/03/2026",
          "Health insurance: Granite Peak Health, through John's job",
          "Lakeview Orthopedic Group (out-of-network): charged $4,800.00; Granite Peak paid $2,150.00",
          "Harbor Physical Therapy (in-network): contracted amount $1,900.00; John paid $750.00 toward his deductible, and Granite Peak paid the rest"],
        steps: [
          { t: "choice", q: "What type of health insurance is Granite Peak, and why write it down right away?", options: [
            { a: "Individual and family: John bought it himself", fb: "John gets it through his job. That's employer-sponsored." },
            { a: "Employer-sponsored: the kind of employer plan can affect the reimbursement rules that apply", ok: true, fb: "Right. When a client says the insurance is through work, note it straight away." },
            { a: "Government program", fb: "Granite Peak is through John's employer, not a government program." }
          ] },
          { t: "number", q: "What balance bill may Lakeview send John?", answer: 2650, tol: 0.01, unit: "$", fb: "$4,800.00 − $2,150.00 = $2,650.00: the difference between the provider's charge and what insurance paid." },
          { t: "choice", q: "From Lakeview's treatment, what claims could sit against John's settlement?", options: [
            { a: "Only Granite Peak's lien", fb: "The out-of-network provider may also hold a balance." },
            { a: "Two: Granite Peak's lien for the $2,150.00 it paid, and Lakeview's balance", ok: true, fb: "Right. Account for both when you gather balances before settlement." },
            { a: "Only Lakeview's full $4,800.00 charge", fb: "Insurance paid part of it. The plan's lien and the provider's balance are separate." }
          ] },
          { t: "number", q: "For Harbor Physical Therapy, what should Granite Peak's lien show?", answer: 1150, tol: 0.01, unit: "$", fb: "$1,900.00 − $750.00 = $1,150.00. The $750.00 deductible was John's own money, so the lien should reflect only what the insurer actually paid." },
          { t: "choice", q: "Why did Granite Peak pay less for Harbor than a full charge?", options: [
            { a: "Harbor is in-network: it agreed with the plan to offer services at reduced rates", ok: true, fb: "Right. Knowing the network status explains why the plan paid less than the full charge." },
            { a: "Harbor made a mistake on the bill", fb: "Nothing suggests an error. In-network providers have contracted, reduced rates." },
            { a: "John's premiums covered the rest", fb: "Premiums are the monthly cost of insurance; they don't pay a bill's balance." }
          ] }
        ]
      },
      {
        title: "Who is collecting?",
        brief: ["A lien letter arrives from Keystone Recovery Services, \"on behalf of Granite Peak Health\".",
          "An older letter on the file is from Bramble Cost Containment, which Keystone has since absorbed."],
        steps: [
          { t: "choice", q: "Who is Keystone, and what do you do with the letter?", options: [
            { a: "A specialized subrogation firm working for the plan: treat it as the plan's lien, log the reference number and request the itemized payments", ok: true, fb: "Right. The name on the lien letter is often a vendor, not the carrier." },
            { a: "A collection agency for Lakeview: forward it to the client", fb: "It says it acts for Granite Peak, so it's the health plan's lien." },
            { a: "Junk mail: Keystone isn't the insurer", fb: "Vendors assert the plan's rights. Log it and respond." }
          ] },
          { t: "order", q: "Put the subrogation process in order.", items: [
            "Insurance payment: the plan pays the covered medical expenses",
            "Subrogation process: the plan's subrogation department identifies a liable party and tasks the subrogation company",
            "Claim recovery: the subrogation company pursues the claim by negotiation or litigation",
            "Settlement or judgment: the recovered funds reimburse the original insurer"
          ] },
          { t: "choice", q: "What about Bramble's older letter?", options: [
            { a: "List both on the net sheet to be safe", fb: "Counting the same claim twice takes money from the client. Confirm first." },
            { a: "Confirm with Keystone whether it's the same claim before adding anything to the net sheet", ok: true, fb: "Right. When a vendor has joined another group, letters under two names can lead back to one claim." },
            { a: "Throw it away", fb: "Keep every letter: the lien file may be reviewed by lawyers on both sides." }
          ] },
          { t: "choice", who: "Keystone negotiator", line: "Let's talk about the lien once the case settles.", q: "What do you prepare?", options: [
            { a: "Nothing: they set the number", fb: "Come prepared. Subrogation companies are measured on what they recover." },
            { a: "The defendant's claim number", fb: "Not what you need. Prepare the settlement amount, the itemized payments and your reasons." },
            { a: "The settlement amount, the itemized payments, and the reasons a reduction is fair", ok: true, fb: "Right. A clean, documented file gives the client a better chance of a fair result." }
          ] },
          { t: "choice", q: "The case settles and Keystone agrees a figure. What closes out the lien?", options: [
            { a: "Pay the agreed amount from the settlement and get written confirmation that the lien is resolved", ok: true, fb: "Right. Don't close the file without that confirmation." },
            { a: "Pay it and close the file the same day", fb: "Get the written confirmation that the lien is resolved first." },
            { a: "Give the money to John to pay Keystone", fb: "The lien is paid from the settlement through our office." }
          ] }
        ]
      },
      {
        title: "Sorting the coverage",
        brief: ["Four short intake notes, each on a separate John Doe file."],
        steps: [
          { t: "choice", who: "Intake note", line: "John bought his plan himself on Healthcare.gov.", q: "What kind of coverage is this?", options: [
            { a: "An employer plan", fb: "Healthcare.gov is for people shopping without employer coverage." },
            { a: "Medicaid", fb: "Healthcare.gov is the federal marketplace for buying plans." },
            { a: "An individual and family plan", ok: true, fb: "Right. Bought through the Marketplace or a private insurer, often subsidized based on income." }
          ] },
          { t: "choice", who: "Intake note", line: "John's wife is retired Army; the family is covered through the military.", q: "What do you ask about?", options: [
            { a: "Whether TRICARE paid for any treatment", ok: true, fb: "Right. TRICARE, run by the Department of Defense, covers retirees and their families, and it's easy to miss if you only ask for a regular card." },
            { a: "Whether Medicare paid", fb: "Military coverage points to TRICARE." },
            { a: "Nothing: military coverage never seeks repayment", fb: "Ask whether TRICARE paid, and make it part of intake." }
          ] },
          { t: "choice", who: "Intake note", line: "John's plan is a short-term health plan.", q: "What do you check?", options: [
            { a: "Nothing: short-term plans don't pay accident claims", fb: "They may pay. They're temporary and less comprehensive." },
            { a: "The coverage dates against the date of the accident and the dates of treatment", ok: true, fb: "Right. Coverage is for a limited time, so it may cover some of the care but not all." },
            { a: "Whether the employer pays part of the premium", fb: "The key fact for a short-term plan is its coverage period." }
          ] },
          { t: "choice", who: "Intake note", line: "John is 24 and has a catastrophic plan.", q: "What should you expect on the plan's payment list?", options: [
            { a: "The plan paid everything", fb: "Catastrophic plans have high deductibles." },
            { a: "Higher payments than other plans", fb: "Low premium, high deductible: the plan often pays less of the smaller treatment." },
            { a: "Much of the smaller treatment shows as John's own responsibility, because of the high deductible", ok: true, fb: "Right. Low premium, high deductible, built to protect against major health events." }
          ] }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- Day 3 */
  "hs3-check": {
    title: "Day 3 Knowledge Check",
    intro: "Ten questions on Day 3: the Notice of Lien, the HI Subro workflow steps 1 to 9, the final lien and the subrogation lien ledger.",
    scenarios: [
      {
        title: "Working the HI Subro file",
        brief: ["Answer each question as you would while working a health subrogation file."],
        steps: [
          { t: "choice", q: "A Notice of Lien arrives from the client's health plan. What do you do with it?", options: [
            { a: "Pay it: it's the final amount", fb: "A notice isn't the final amount; it tells us the plan has an interest." },
            { a: "Treat it as an official claim on the recovery: log it, save it to the file and update your lien tracking", ok: true, fb: "Right. It means the plan may have paid accident claims and expects to be reimbursed when the case concludes." },
            { a: "Send it to the client to deal with", fb: "The lien is paid from the settlement through our office, so we handle it." }
          ] },
          { t: "choice", q: "Where does step 1 of the HI Subro workflow start?", options: [
            { a: "Calling member services", fb: "That's step 3." },
            { a: "Generating the Letter of Subrogation", fb: "That's step 5." },
            { a: "Checking the intake for the MVA questionnaire", ok: true, fb: "Right. It tells us what the client reported about the accident and treatment." }
          ] },
          { t: "choice", q: "Step 2 is confirming transport. Which questions do you ask?", options: [
            { a: "Was the client taken to a hospital, and which one? By EMS, and which company? Were X-rays or CT scans taken?", ok: true, fb: "Right. Each answer points to a provider whose bills may end up on the lien." },
            { a: "Who was at fault, and what is their insurance?", fb: "Liability is a different part of the case. Step 2 is about transport and imaging." },
            { a: "How much did the client pay at the hospital?", fb: "Step 2 is about where the client went and what was done." }
          ] },
          { t: "choice", q: "Step 4: which details go into the health insurance record in the CMS?", options: [
            { a: "Only the insurance company's name", fb: "Too little. Every letter you generate pulls from these fields." },
            { a: "The defendant's claim number", fb: "Not in the health insurance record." },
            { a: "Insurance type, insured party, the client's name exactly as on the card, the insurance company, member ID and group number; then mark Subro yes, add the subrogation company and update its contact card", ok: true, fb: "Right. Check each against the card: a wrong member ID can stall the set-up for weeks." }
          ] },
          { t: "choice", q: "Step 5: what must the Subrogation LOR state at the top?", options: [
            { a: "How it is being sent: fax, first-class mail and/or email", ok: true, fb: "Right. That line is our record of how and where we sent the request." },
            { a: "The settlement amount", fb: "There's no settlement yet at step 5." },
            { a: "The defendant's insurance", fb: "Never. Only state the sending method and the client's details." }
          ] },
          { t: "choice", q: "Step 7: the subrogation company won't set up a case without first- or third-party insurance information. What can you offer?", options: [
            { a: "The defendant's policy and claim number", fb: "That's the information we avoid sharing." },
            { a: "A lien protection letter, guaranteeing the lien will be settled when the case resolves (approved template)", ok: true, fb: "Right. It's a promise from the firm, so use it only when appropriate and approved." },
            { a: "Nothing: close the subrogation claim", fb: "The lien still exists. Offer the lien protection letter." }
          ] },
          { t: "choice", q: "Step 8: the providers have the insurance information and billed correctly, but their claims aren't on the lien yet. What do you do?", options: [
            { a: "Send a removal request", fb: "Removal is for unrelated claims." },
            { a: "Send an abundance letter", fb: "That's when a bill shows a health insurance payment that's missing from the lien." },
            { a: "Allow more time for processing and request the lien again after a month", ok: true, fb: "Right. Claims take time to process and show on the lien." }
          ] },
          { t: "choice", q: "After the bills have been submitted, you ask for the updated subrogation lien ledger. How long can it take?", options: [
            { a: "Anywhere from 2 weeks to 30 to 60 days", ok: true, fb: "Right. Put a follow-up date on the file so the request isn't lost." },
            { a: "Same day", fb: "Plan for the wait: 2 weeks to 30 to 60 days." },
            { a: "Six months", fb: "The deck gives 2 weeks to 30 to 60 days." }
          ] },
          { t: "choice", q: "The ER physician wants to be paid from the settlement instead of through insurance. What do you do?", options: [
            { a: "Agree, and list the full bill on the disbursement sheet", fb: "The goal is to get the bill through insurance." },
            { a: "After sending the billing letter with the HIPAA and insurance card, ask the ER physician to return the bills to the hospital so the hospital can bill the insurance", ok: true, fb: "Right. That's the deck's instruction for this situation." },
            { a: "Tell the client to pay the physician", fb: "No. Get the bill processed through insurance." }
          ] },
          { t: "choice", q: "When might it be best NOT to request the bills and records behind a lien?", options: [
            { a: "Never: always request everything", fb: "The deck gives an exception. Check with the attorney." },
            { a: "When the bills are under $1,000", fb: "There's no dollar rule. The exception is about policy limits." },
            { a: "When the policy limits have been exceeded and the funds need to be interpleaded; check with the attorney", ok: true, fb: "Right. Whether to request them usually depends on whether you need them for the demand." }
          ] }
        ]
      }
    ]
  },

  "hs3-sim": {
    title: "Day 3 Practical Simulation",
    intro: "Set up John Doe's HI subrogation from intake (steps 1 to 6), follow up and review the lien (steps 7 and 8), then get to the final lien (step 9).",
    scenarios: [
      {
        title: "Steps 1 to 6: setting up the claim",
        brief: ["Client: John Doe · Date of loss: 08/21/2026",
          "Health insurance: Juniper Mutual Health · Member ID JMH448120 · Group 77031",
          "Juniper's subrogation is handled by Cobalt Subrogation Group · fax (702) 555-0186",
          "Today you open the file in the CMS"],
        steps: [
          { t: "choice", q: "Step 1. Where do you start?", options: [
            { a: "Call Juniper's member services", fb: "That's step 3. Start with what John told us at intake." },
            { a: "Check the intake for the MVA questionnaire", ok: true, fb: "Right. In FileVine it sits in the Intake section. It's where our health insurance work starts." },
            { a: "Request the final lien", fb: "That's step 9, at settlement." }
          ] },
          { t: "choice", q: "Step 2. The questionnaire says John went by Red Canyon EMS to St. Avalon Regional Hospital, where a CT scan was taken. What does that tell you?", options: [
            { a: "Only the hospital bill matters", fb: "Each provider (the EMS company, the hospital, the radiology for the CT) may bill health insurance." },
            { a: "Nothing until the lien arrives", fb: "Knowing the providers now lets you check the lien against them later." },
            { a: "Each one points to a provider whose bills may go to health insurance and end up on the lien: the EMS company, the hospital and the radiology for the CT", ok: true, fb: "Right. Hospital and which one, EMS and which company, X-rays or CT: the three step 2 questions." }
          ] },
          { t: "choice", q: "Step 3. You call the member services number on the back of John's card. What do you ask?", options: [
            { a: "How to send the LOR and HIPAA, whether they handle subrogation themselves, and the particulars to set it up", ok: true, fb: "Right. And never give out the defendant's insurance, claim number or other pertinent information." },
            { a: "How much the lien will be", fb: "Too early. Step 3 is about where and how to send the LOR and HIPAA." },
            { a: "Whether they want the at-fault driver's insurance", fb: "Don't offer it: member services only needs what it takes to identify John and set up the file." }
          ] },
          { t: "choice", q: "Step 4. Member services says Cobalt Subrogation Group handles their subrogation. How do you set this up in the CMS?", options: [
            { a: "Put Cobalt's name in the notes only", fb: "It goes in the health insurance record, so every letter pulls it." },
            { a: "Fill in the health insurance record from the card (insurance type, insured, John's name as on the card, company, member ID JMH448120, group 77031), mark Subro yes, add Cobalt as the subrogation company and update its contact card", ok: true, fb: "Right. Generated letters pull from these fields, so get them right now." },
            { a: "Enter Juniper as the subrogation company", fb: "The plan uses an outside vendor, Cobalt, so that's who we correspond with." }
          ] },
          { t: "order", q: "Step 5. Put the Letter of Subrogation tasks in order.", items: [
            "Click Generate (or Regenerate) under Health Insurance Subrogation",
            "Download the letter and read it before sending",
            "Edit the letter: state the sending method at the top and check the enclosure line",
            "Download the HIPAA form from Intake and put the insurance company's name as the provider",
            "Attach the signed HIPAA with Nitro's insert or combine function"
          ] },
          { t: "fields", q: "Step 6. You fax the letter with John's HI card through email. Fill in the To address and the subject line, as the deck shows.", fields: [
            { label: "To (fax by email)", re: "^17025550186@metrofax\\.com$", answer: "17025550186@metrofax.com" },
            { label: "Subject line", re: "^john doe - juniper mutual health - (lor with hipaa|letter of subrogation( with hipaa)?)$", answer: "John Doe - Juniper Mutual Health - LOR with HIPAA" }
          ] }
        ]
      },
      {
        title: "Steps 7 and 8: confirm and review",
        brief: ["The letter went out on 09/02/2026.",
          "Cobalt's initial lien for John Doe claims $6,805.78:",
          "08/21/2026 St. Avalon Regional Hospital · $5,240.18",
          "08/21/2026 Red Canyon EMS · $968.00",
          "08/21/2026 St. Avalon Radiology (CT) · $412.60",
          "07/30/2026 Allergy clinic follow-up · $185.00",
          "Desert Bloom Emergency Physicians' bill shows Juniper paid $377.50 on 09/20/2026. That claim isn't on the lien."],
        steps: [
          { t: "choice", q: "Step 7. When do you check that Cobalt received the letter?", options: [
            { a: "Within 15 to 30 days: confirm it was received and a case was set up (the initial lien typically takes 30 days)", ok: true, fb: "Right. If they have no record at day 20, there's time to resend before the delay builds." },
            { a: "Only when the case settles", fb: "Far too late. You may find no file was ever opened." },
            { a: "Never: a fax confirmation is enough", fb: "Sending is not receiving. Verify with the subrogation company." }
          ] },
          { t: "choice", who: "Cobalt Subrogation Group", line: "We can open the file, but first we need the third-party insurance information.", q: "What do you do?", options: [
            { a: "Give them the at-fault carrier and claim number", fb: "Don't share the defendant's insurance details." },
            { a: "Close the subrogation claim", fb: "The plan's interest is still there." },
            { a: "Offer a lien protection letter, using the approved template", ok: true, fb: "Right. It guarantees the lien will be settled when the case resolves, without sharing the 3P information." }
          ] },
          { t: "choice", q: "Step 8. What do you send about the Desert Bloom and allergy clinic lines?", options: [
            { a: "An abundance letter for Desert Bloom (with the bill showing Juniper's payment), and a removal request for the 07/30/2026 allergy clinic visit, listed line by line", ok: true, fb: "Right. Paid but missing → abundance letter. Unrelated (before the accident) → removal request." },
            { a: "A removal request for Desert Bloom and an abundance letter for the allergy clinic", fb: "It's the other way round: Desert Bloom is paid but missing; the allergy visit predates the accident." },
            { a: "Nothing: accept the lien as it is", fb: "An incomplete lien now can turn into a surprise after funds go out." }
          ] },
          { t: "number", q: "Once Cobalt adds Desert Bloom and removes the allergy clinic visit, what should the lien be?", answer: 6998.28, tol: 0.01, unit: "$", fb: "$6,805.78 + $377.50 − $185.00 = $6,998.28. Save it in the health insurance tab and update the lien amount." }
        ]
      },
      {
        title: "Step 9: the final lien",
        brief: ["John's case moves to settlement.", "Cobalt's updated ledger matches the corrected lien: $6,998.28."],
        steps: [
          { t: "choice", q: "Step 9. What do you do now?", options: [
            { a: "Disburse using the $6,998.28 ledger figure", fb: "That's an interim figure. A common mistake is disbursing on it instead of the final lien." },
            { a: "Request the final lien (have the settlement information ready if Cobalt asks for it), then update the disbursement sheet", ok: true, fb: "Right. Until you have the final subrogation letter, any lien amount is only an estimate." },
            { a: "Wait for Cobalt to send the final lien on its own", fb: "Request it when the case moves to settlement." }
          ] },
          { t: "choice", q: "The final ledger arrives. What do you check first on each line?", options: [
            { a: "The service dates, and that the dates and services link to the incident", ok: true, fb: "Right. That's why the sample ledger boxes the service dates in red. Read every line before you accept the total." },
            { a: "Only the total at the bottom", fb: "Read every line. The total is only as good as the lines behind it." },
            { a: "The diagnosis code descriptions only", fb: "Start with the service dates and whether each service links to the incident." }
          ] },
          { t: "number", q: "You asked Juniper to reduce the $6,998.28 final lien by 35%. They denied 35% but reduced it by 30% as a show of good faith. What is the reduced lien?", answer: 4898.80, tol: 0.01, unit: "$", fb: "$6,998.28 × (1 − 0.30) = $4,898.80. Get the reduced figure in writing." },
          { t: "choice", q: "What must be in hand before any settlement proceeds go out?", options: [
            { a: "A phone note that Juniper agreed", fb: "Never issue proceeds on a phone note. Get the final payoff letter." },
            { a: "The client's OK", fb: "The client's agreement doesn't replace the final payoff letter." },
            { a: "The final payoff letter from Juniper (or Cobalt) at the reduced figure", ok: true, fb: "Right. Never issue settlement proceeds without the final payoff letter." }
          ] }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- Day 4 */
  "hs4-check": {
    title: "Day 4 Knowledge Check",
    intro: "Ten questions on Day 4: the Collateral Source Rule, Medicare from the Conditional Payment Letter to the final demand, timely filing, hospital liens and Medicaid.",
    scenarios: [
      {
        title: "Medicare, Medicaid and the collateral source rule",
        brief: ["Answer each question as you would on a government-program file."],
        steps: [
          { t: "choice", q: "In Nevada, what does the Collateral Source Rule do?", options: [
            { a: "Lets the defendant pay less because health insurance paid the bills", fb: "That's the opposite. Nevada holds the defendant fully responsible." },
            { a: "Stops defendants reducing their liability by showing the plaintiff got compensation from third parties", ok: true, fb: "Right. That's one reason the health insurer, not the defendant, asks to be paid back from the settlement." },
            { a: "Bans health insurers from asserting liens", fb: "It's about the defendant's liability, not the insurer's lien." }
          ] },
          { t: "choice", q: "How do you open Medicare subrogation?", options: [
            { a: "Send the LOR and HIPAA to Medicare's Coordination of Benefits and Recovery Center, or open a claim in the Medicare portal", ok: true, fb: "Right. And open it early, even if Medicare didn't pay for treatment." },
            { a: "Wait for Medicare to contact the firm", fb: "Medicare needs pertinent information from the firm before it sends a Conditional Payment Letter." },
            { a: "Ask the client's doctor to call Medicare", fb: "The firm opens it, by letter or through the portal." }
          ] },
          { t: "choice", q: "Why are Medicare's payments called \"conditional\"?", options: [
            { a: "They depend on the client paying premiums", fb: "It's about the primary payer, not premiums." },
            { a: "Medicare only pays if the client wins", fb: "Medicare pays first; repayment is what's conditional." },
            { a: "Under the MSP statute, Medicare may pay and then seek reimbursement, so its payments are conditional on locating a primary payer", ok: true, fb: "Right. On our files, the primary payer is usually the liability settlement." }
          ] },
          { t: "choice", q: "If Medicare's lien isn't paid, what can Medicare claim, and from whom?", options: [
            { a: "Only the lien amount, from the client", fb: "It's more, and from more parties." },
            { a: "Up to three times the lien amount (treble damages), from any responsible party, including the defendant's insurer, the client's insurer or the law firm", ok: true, fb: "Right. That's why adjusters require a Medicare letter before settling." },
            { a: "Nothing, once the case is closed", fb: "An unpaid Medicare lien is a risk to the firm, not just the client." }
          ] },
          { t: "choice", q: "A Medicare case settles for $5,000 or less. What option may apply?", options: [
            { a: "Medicare waives its lien entirely", fb: "Not a waiver: a fixed percentage." },
            { a: "Medicare takes 55% of the settlement", fb: "55% is the hospital statutory lien cap. The Fixed % option is 25%." },
            { a: "The Fixed % option: Medicare accepts 25% of the settlement, whatever the size of its lien", ok: true, fb: "Right. It's quite uncommon, so raise it with the attorney when a small Medicare case comes up." }
          ] },
          { t: "choice", q: "For Medicare's final demand, what goes on the settlement detail you send by fax or mail?", options: [
            { a: "The settlement amount, the date of case resolution, Med Pay or PIP (if applicable), the attorney's fees and the member's injuries", ok: true, fb: "Right. Pull them from the settlement documents: the figures must match the closing statement exactly." },
            { a: "Only the settlement amount", fb: "Medicare needs the full detail to work out what it's owed and whether a reduction applies." },
            { a: "The defendant's policy limits and claim number", fb: "Not on the list." }
          ] },
          { t: "choice", q: "A provider chose not to bill Medicare. Twelve months after the date of service the case still hasn't resolved. What happens?", options: [
            { a: "The provider can keep pursuing the client for the full bill", fb: "No. Collection efforts must stop (apart from deductibles and co-pays)." },
            { a: "The provider must stop collection against the patient and the liability carrier, and drop its claims or liens", ok: true, fb: "Right. That's Medicare's timely filing period, 42 U.S.C. § 1395cc(a)(1). Flag a provider chasing a bill past a year." },
            { a: "The provider gets another 12 months", fb: "There's no extension in the deck. The 12-month window from the date of service is the limit." }
          ] },
          { t: "choice", q: "The client has Medicare or Medicaid, and the hospital chooses to assert a statutory lien instead. What's the limit?", options: [
            { a: "None: the full billed charges", fb: "There's a cap." },
            { a: "25% of the settlement", fb: "That's Medicare's Fixed % option." },
            { a: "55% of the billed charges", ok: true, fb: "Right. And hospitals are not entitled to UM/UIM benefits, only third-party settlements." }
          ] },
          { t: "choice", q: "A dual-eligible client had care paid by both Medicare and Medicaid. Which program takes precedence?", options: [
            { a: "Medicare: it's the primary payer, and Medicaid is the payer of last resort", ok: true, fb: "Right. Medicaid only seeks what it paid after Medicare and any other primary insurance were billed." },
            { a: "Medicaid: it's state-run", fb: "Medicaid is the payer of last resort." },
            { a: "Whichever lien arrives first", fb: "Payer order decides it: Medicare is primary." }
          ] },
          { t: "choice", q: "Why give Nevada Medicaid notice of the claim early?", options: [
            { a: "Nevada has a statutory reduction formula that only applies with notice", fb: "Nevada has no such formula; reductions are negotiated." },
            { a: "Under NRS § 422.293(4), the Director may reduce the lien when the Department got notice; without notice it isn't obligated to reduce", ok: true, fb: "Right. Early notice protects the client's chance at a reduction." },
            { a: "Medicaid waives liens it hears about early", fb: "There's no automatic waiver: notice keeps a reduction possible." }
          ] }
        ]
      }
    ]
  },

  "hs4-sim": {
    title: "Day 4 Practical Simulation",
    intro: "Open a Medicare claim through the portal, take it from the Conditional Payment Letter to the final demand, then work a Medicaid client's lien and a hospital's statutory lien.",
    scenarios: [
      {
        title: "Opening Medicare in the portal",
        brief: ["Client: John Doe, age 68 · Date of loss: 04/09/2026",
          "John has a Medicare card. He says his urgent care bills went to his auto policy, not Medicare.",
          "Today you set up the case."],
        steps: [
          { t: "choice", q: "Do you open Medicare subrogation?", options: [
            { a: "No: Medicare paid nothing", fb: "Medicare clients are the exemption: open it whether or not they treated under Medicare." },
            { a: "Yes, now: you'll need the Conditional Payment Letter for the settlement release, and asking late leaves the file waiting on Medicare", ok: true, fb: "Right. Start the Medicare process early in every Medicare client's case." },
            { a: "Only if the adjuster asks for it", fb: "The adjuster will ask, at settlement. Start now so the file doesn't stall." }
          ] },
          { t: "fields", q: "What is the Medicare portal (MSPRP) login address?", fields: [
            { label: "Address", re: "^(https?://)?(www\\.)?cob\\.cms\\.hhs\\.gov/msprp/login/?$", answer: "https://www.cob.cms.hhs.gov/MSPRP/login" }
          ] },
          { t: "order", q: "Put the portal steps in order.", items: [
            "Go to the MSPRP login page and read the Login Warning",
            "Read the Privacy Act statement and attestation, and click I Accept",
            "New Registration, then Account Setup, choosing the account type",
            "Sign in with your user name and password",
            "Complete Multi-Factor Authentication",
            "Click Report A Case",
            "Fill in the New Case Request",
            "Read the Case Information: conditional payment, demand amount and balance"
          ] },
          { t: "choice", q: "To Report A Case, what must you upload?", options: [
            { a: "The police report", fb: "Not what the portal asks for." },
            { a: "The client's itemized medical bills", fb: "The portal asks for proof you may act for the member." },
            { a: "A Consent to Release or Proof of Representation document signed by the member (available on cms.gov)", ok: true, fb: "Right. Use Request Case Access instead when the claim is already open, and Case Listing to see your open cases." }
          ] },
          { t: "choice", q: "On the New Case Request, which entries can stand in for each other?", options: [
            { a: "Case ID OR date of incident, and Medicare ID OR SSN", ok: true, fb: "Right. Then the last name (at least the first five letters), the date of birth and the insurance type." },
            { a: "Last name OR date of birth", fb: "Both are required. The OR pairs are Case ID/date of incident and Medicare ID/SSN." },
            { a: "Medicare ID OR the client's phone number", fb: "The OR pairs are Case ID/date of incident and Medicare ID/SSN." }
          ] }
        ]
      },
      {
        title: "From conditional payment to final demand",
        brief: ["Case Information shows a Current Conditional Payment Amount of $4,416.90.",
          "John's case settles on 10/20/2026 for $60,000.00 · Attorney fee 33.33% · Med Pay paid $5,000.00",
          "Injuries: neck sprain, left shoulder"],
        steps: [
          { t: "choice", q: "Before the case settled, what did you do with the $4,416.90?", options: [
            { a: "Ignored it: it's not final", fb: "It's not final, but allocate it so the repayment to Medicare is covered." },
            { a: "Allocated it in the numbers so the repayment to Medicare is covered", ok: true, fb: "Right. The conditional amount must be reimbursed once the case resolves. Never disburse without addressing Medicare." },
            { a: "Paid it straight away", fb: "Allocate it, then pay the final demand once Medicare works it out." }
          ] },
          { t: "choice", q: "The case has settled and you request the final lien. What does Medicare require?", options: [
            { a: "The Final Settlement Detail Document, sent by fax or mail", ok: true, fb: "Right. It lets Medicare work out what it's owed and whether the case qualifies for a reduction." },
            { a: "A new LOR", fb: "The LOR opened the claim. At settlement Medicare needs the settlement detail." },
            { a: "Nothing: Medicare already knows the figure", fb: "Medicare can't calculate the demand without the settlement detail." }
          ] },
          { t: "number", q: "What attorney fee goes on the Final Settlement Detail Document? ($60,000.00 at 33.33%)", answer: 19998, tol: 0.01, unit: "$", fb: "$60,000.00 × 33.33% = $19,998.00, entered as \"33.33% - $19,998.00\", the way the sample shows \"33.33% - $8,332.50\" on a $25,000.00 settlement. It must match the closing statement." },
          { t: "choice", q: "Later the Case Information shows a Demand Amount of $3,902.55 and a Balance Amount of $3,902.55. Which figure goes on the disbursement sheet?", options: [
            { a: "$4,416.90, the conditional payment", fb: "That was Medicare's running picture before the final demand." },
            { a: "The $3,902.55 demand amount", ok: true, fb: "Right. The conditional payment is not the final demand. Use the demand amount." },
            { a: "Nothing: once the case settles, Medicare is paid by the defendant", fb: "Medicare's demand is paid from the settlement through our office." }
          ] },
          { t: "number", q: "If that $3,902.55 lien went unpaid, how much could Medicare claim under treble damages?", answer: 11707.65, tol: 0.01, unit: "$", fb: "3 × $3,902.55 = $11,707.65, from any responsible party, the law firm included." },
          { t: "number", q: "On another Medicare file, the case settles for $4,800.00 and Medicare's lien is $6,200.00. What would Medicare accept under the Fixed % option?", answer: 1200, tol: 0.01, unit: "$", fb: "The settlement is $5,000 or less, so Medicare accepts 25% of the settlement: $4,800.00 × 25% = $1,200.00, regardless of the $6,200.00 lien." }
        ]
      },
      {
        title: "Medicaid and the hospital lien",
        brief: ["Another file. Client: John Doe, a Nevada Medicaid recipient through Silver Sage Health, an MCO",
          "Mojave Valley Hospital didn't take payment through Medicaid. It asserts a statutory lien on its billed charges of $18,400.00.",
          "John has a third-party settlement and a separate UIM recovery."],
        steps: [
          { t: "number", q: "What is the most Mojave Valley's statutory lien can be?", answer: 10120, tol: 0.01, unit: "$", fb: "When the client has Medicare or Medicaid and the hospital chooses a statutory lien, it's capped at 55% of the billed charges: $18,400.00 × 55% = $10,120.00." },
          { t: "choice", who: "Mojave Valley Hospital", line: "We'll also take our lien out of John's UIM recovery.", q: "What do you say?", options: [
            { a: "Agree: liens follow every recovery", fb: "Hospitals are not entitled to UM/UIM benefits." },
            { a: "Hospitals aren't entitled to UM/UIM benefits, only third-party settlements", ok: true, fb: "Right. Check which funds a hospital lien is being asserted against." },
            { a: "Agree, but only for half", fb: "There's no split. Hospitals aren't entitled to UM/UIM benefits." }
          ] },
          { t: "choice", q: "Who do you contact about the Medicaid lien?", options: [
            { a: "The MCO handling John's plan (Silver Sage Health); search online for Nevada Medicaid contacts to find the right number", ok: true, fb: "Right. The contact depends on whether the plan is direct Medicaid or managed through an MCO." },
            { a: "Medicare's recovery contractor", fb: "This is a Medicaid lien, run by the state." },
            { a: "The hospital's billing office", fb: "The hospital has its own lien. Medicaid's lien goes through the MCO or the state." }
          ] },
          { t: "order", q: "Put the example Medicaid lien process in order, as the deck lists it.", items: [
            "Report the third-party liability claim to the state Medicaid Recovery Unit",
            "Receive the notice of Medicaid lien",
            "Once the case settles, get the final lien amount to negotiate or pay",
            "Submit the settlement details: attorney fees, case expenses and the total recovery",
            "After paying, obtain a lien release"
          ] },
          { t: "choice", q: "John's recovery is limited by the policy limits. What can you expect on a Nevada Medicaid reduction?", options: [
            { a: "A reduction by the state's statutory formula", fb: "Nevada has no statutory reduction formula for Medicaid liens." },
            { a: "Nothing: Nevada Medicaid never reduces", fb: "It's willing to take small reductions when policy limits prevent a full recovery." },
            { a: "Possibly a small reduction, negotiated; it may depend on the adjuster you reach, so be prepared with the numbers and ask again if the first answer is no", ok: true, fb: "Right. And it helps that notice was given early (NRS § 422.293(4))." }
          ] }
        ]
      }
    ]
  },

  /* ---------------------------------------------------------- Day 5 */
  "hs5-check": {
    title: "Day 5 Knowledge Check",
    intro: "Ten questions on Day 5: TRICARE, ERISA plans, the reduction steps and outcomes, PIP waivers, UM/UIM and how PIP and health insurance work together.",
    scenarios: [
      {
        title: "Plans, reductions, UM/UIM and PIP",
        brief: ["Answer each question as you would when resolving the liens on a file."],
        steps: [
          { t: "choice", q: "Who usually handles TRICARE's subrogation recovery?", options: [
            { a: "The client's employer", fb: "TRICARE is a military program, not an employer plan." },
            { a: "Medicare's recovery center", fb: "TRICARE has its own contractor." },
            { a: "A dedicated contractor: the TRICARE Subrogation Contractor (TSC) or TRICARE Recovery Audit Contractor (TRAC)", ok: true, fb: "Right. Find out which contractor has the claim and send your correspondence there." }
          ] },
          { t: "choice", q: "The client's card looks like an ordinary HMO card, but you suspect an ERISA plan. What do you do?", options: [
            { a: "Request the plan documents", ok: true, fb: "Right. ERISA cards look like standard HMO cards. As US Airways v. McCutchen highlights, the plan's terms matter." },
            { a: "Treat it as a personal plan", fb: "Don't assume. Request the plan documents." },
            { a: "Ask the client's doctor", fb: "The plan documents tell you, not the doctor." }
          ] },
          { t: "choice", q: "What does ERISA preemption mean for a lien?", options: [
            { a: "State law always controls the plan", fb: "It's the reverse: federal ERISA rules generally override state regulations." },
            { a: "ERISA preempts state laws on employee benefit plans, so federal rules generally override state regulations; the attorney should review the file", ok: true, fb: "Right. That's why an ERISA lien can behave differently from other health liens." },
            { a: "The plan has no right to reimbursement", fb: "ERISA plans often have subrogation clauses." }
          ] },
          { t: "choice", q: "Where is an ERISA plan's subrogation clause usually set out?", options: [
            { a: "On the back of the insurance card", fb: "The card rarely tells you. Ask for the plan's documents." },
            { a: "In the Notice of Lien", fb: "The notice asserts the claim. The clause itself is in the plan's SPD." },
            { a: "In the Summary Plan Description (SPD)", ok: true, fb: "Right. Request it and keep it in the file whenever an ERISA plan asserts a lien." }
          ] },
          { t: "choice", q: "When will PIP be waived?", options: [
            { a: "Once PIP is completely exhausted and the third-party limits are submitted; send the request to the PIP adjuster, usually with the signed third-party release and the total billed amount", ok: true, fb: "Right. Have both documents ready so the request isn't delayed." },
            { a: "As soon as the client starts treating", fb: "Too early. PIP must be exhausted and the third-party limits submitted." },
            { a: "Only if the client asks the PIP carrier", fb: "We send the request to the PIP adjuster." }
          ] },
          { t: "choice", q: "What is typically the standard practice for a PIP reduction?", options: [
            { a: "A full waiver on every file", fb: "Waivers depend on the treatment picture and on PIP being exhausted." },
            { a: "A Mahler reduction; you can ask for more, but the PIP adjuster will want bills, third-party offers and other details", ok: true, fb: "Right. Gather the support before you send a request for more." },
            { a: "No reduction is ever possible", fb: "A Mahler reduction is typically the standard practice." }
          ] },
          { t: "choice", q: "The UM/UIM first-party limits are tendered. What happens to PIP?", options: [
            { a: "PIP is always waived; nothing to do", fb: "Usually, not always. Never assume it." },
            { a: "PIP can no longer be waived", fb: "A tender usually results in an automatic PIP waiver." },
            { a: "It usually results in an automatic PIP waiver, but you verify that in writing", ok: true, fb: "Right. An unconfirmed waiver can turn into a PIP claim after the client is paid." }
          ] },
          { t: "choice", q: "Both PIP and health insurance are available. Under coordination of benefits, who usually pays first?", options: [
            { a: "PIP, then health insurance may cover the rest once PIP is exhausted; neither pays more than the total medical expenses", ok: true, fb: "Right. Track what each paid so a bill isn't counted twice." },
            { a: "Health insurance, always", fb: "PIP usually pays first. If health insurance pays first, it may seek reimbursement from PIP." },
            { a: "They split each bill in half", fb: "There's an order: PIP usually first." }
          ] },
          { t: "choice", q: "Under the workers' compensation rule the deck cites, which UM/UIM does the 616.215 lien apply to?", options: [
            { a: "All UM/UIM, whoever paid for it", fb: "It's limited to the employer's UM/UIM." },
            { a: "Only UM/UIM paid for by employees", fb: "The reverse: the employer's UM/UIM only." },
            { a: "The employer's UM/UIM only, not UM/UIM paid for by employees", ok: true, fb: "Right. These are legal calls, so flag them for the attorney." }
          ] },
          { t: "choice", q: "The lien holder counters your reduction request with a different amount and asks for the settlement information. What do you do?", options: [
            { a: "Accept it on the call", fb: "Don't accept a counter offer without checking with the attorney." },
            { a: "Treat it as a counter offer: check with the attorney before accepting, and get the result in writing", ok: true, fb: "Right. The three outcomes are approved, rejected or counter offer, and whatever happens, get it in writing." },
            { a: "Treat it as a rejection and pay the full lien", fb: "A different amount is a counter offer, not a rejection." }
          ] }
        ]
      }
    ]
  },

  "hs5-sim": {
    title: "Day 5 Practical Simulation",
    intro: "Work a TRICARE lien, decide what an employer plan is and whose rules apply, then coordinate PIP, UIM and health insurance and request a reduction step by step.",
    scenarios: [
      {
        title: "A TRICARE lien",
        brief: ["Client: John Doe · Date of loss: 05/18/2026",
          "John's wife is on active duty; John is covered as a dependent on TRICARE Select",
          "TRICARE's contractor itemizes $5,531.00:",
          "05/18/2026 Harborline Medical Center ER · $3,980.00",
          "06/02/2026 Orthopedic follow-up · $1,240.00",
          "05/19/2026 Pharmacy, pain medication · $96.00",
          "03/02/2026 Routine dental cleaning · $215.00"],
        steps: [
          { t: "choice", q: "Where do you send your TRICARE correspondence?", options: [
            { a: "To the contractor handling TRICARE's subrogation (TSC or TRAC) that has John's claim", ok: true, fb: "Right. Letters to the wrong office only delay the final lien amount." },
            { a: "To the Department of Defense's main office", fb: "TRICARE is managed by the Defense Health Agency, but recovery is handled by a dedicated contractor." },
            { a: "To John's wife's commanding officer", fb: "Not part of the process. Find the contractor handling the claim." }
          ] },
          { t: "choice", who: "TRICARE contractor", line: "We need John to complete our injury questionnaire and keep us updated on the case.", q: "How do you respond?", options: [
            { a: "Decline: John doesn't have to help them", fb: "Beneficiaries must provide information and cooperate with TRICARE's efforts." },
            { a: "Help John cooperate: respond promptly and keep a record of the request and our response", ok: true, fb: "Right. Beneficiaries must follow TRICARE's subrogation rules to avoid complications." },
            { a: "Send them the whole case file, including the defendant's details", fb: "Cooperate with what they ask for. Don't volunteer the defendant's details." }
          ] },
          { t: "choice", q: "Which charge doesn't belong in the lien?", options: [
            { a: "The pharmacy charge", fb: "Pain medication the day after the accident is accident-related. TRICARE covers pharmacy too." },
            { a: "The 03/02/2026 routine dental cleaning: it's before the accident and unrelated", ok: true, fb: "Right. TRICARE covers medical, dental and pharmacy, so make sure every charge actually relates to the accident." },
            { a: "The orthopedic follow-up", fb: "Follow-up care after the accident is accident-related." }
          ] },
          { t: "number", q: "What is the accident-related TRICARE lien?", answer: 5316, tol: 0.01, unit: "$", fb: "$3,980.00 + $1,240.00 + $96.00 = $5,316.00 ($5,531.00 − $215.00)." },
          { t: "choice", q: "The case settles. What must happen before funds go to John?", options: [
            { a: "TRICARE is repaid from the settlement, and you get its final amount in writing first", ok: true, fb: "Right. Beneficiaries must repay TRICARE from any settlement or judgment." },
            { a: "Pay John first; TRICARE can bill him later", fb: "TRICARE is repaid from the settlement before funds go to the client." },
            { a: "Nothing: military plans don't seek repayment", fb: "TRICARE pursues reimbursement from the at-fault party or the settlement." }
          ] }
        ]
      },
      {
        title: "Employer plan or personal plan?",
        brief: ["Client: John Doe · Health insurance card: Pinecrest HMO",
          "John gets the plan through his job at Tallgrass Freight",
          "Pinecrest's letter asserts a lien and quotes \"the plan's terms\""],
        steps: [
          { t: "choice", q: "Can you tell from the card whether this is an ERISA plan?", options: [
            { a: "Yes: HMO cards are never ERISA", fb: "ERISA cards resemble standard HMO cards, so the card can't tell you." },
            { a: "Not reliably: an ERISA card resembles a standard HMO card, so request the plan documents", ok: true, fb: "Right. That's the lesson of US Airways v. McCutchen." },
            { a: "Yes: if the card says HMO, state law applies", fb: "Don't guess. Request the plan documents." }
          ] },
          { t: "fields", q: "Name the plan document where an ERISA plan's subrogation clause is usually set out.", fields: [
            { label: "Document", re: "^(the )?(summary plan description|spd)( \\(spd\\))?$", answer: "Summary Plan Description (SPD)" }
          ] },
          { t: "choice", q: "The SPD shows an ERISA employer-sponsored health plan. Whose rules govern its lien?", options: [
            { a: "State law, like any health plan", fb: "ERISA preempts state laws on employee benefit plans." },
            { a: "Federal ERISA rules, which generally override state regulations, and the plan's own terms; flag it for the attorney", ok: true, fb: "Right. Each plan's own documents control. Don't guess from memory or from another client's plan." },
            { a: "Medicare's rules", fb: "This is an employer plan, not a government program." }
          ] },
          { t: "choice", q: "John also has a UIM recovery on his own policy. When does the ERISA plan's subrogation reach it?", options: [
            { a: "Always", fb: "Generally only when the plan says so." },
            { a: "Never: UIM is the client's own coverage", fb: "A health insurer may assert subrogation against UM/UIM, and an ERISA plan can reach UIM if the plan says so." },
            { a: "If the plan expressly states UIM", ok: true, fb: "Right. Read the plan language, and leave the legal judgment to the attorney." }
          ] },
          { t: "choice", q: "If Pinecrest were instead a non-ERISA plan in Nevada, what would apply?", options: [
            { a: "The make whole doctrine and similar rules, unless the plan language expressly excludes them (Canfora v. Coast Hotels and Casinos)", ok: true, fb: "Right. The plan language decides UM/UIM applicability." },
            { a: "Federal ERISA preemption", fb: "Not for a non-ERISA plan." },
            { a: "No subrogation at all", fb: "Non-ERISA plans can still have subrogation rights; the plan language decides." }
          ] },
          { t: "choice", q: "On a different file, John pays for his own health insurance (not through an employer). What should you expect?", options: [
            { a: "The same lien as an employer plan", fb: "A personal plan may have no subrogation claim at all." },
            { a: "A Medicare demand", fb: "This is a privately bought plan." },
            { a: "The insurer may have no subrogation claim; you'll learn that when you open the claim. Note who confirmed there's no claim", ok: true, fb: "Right. Don't be surprised if there's no lien, but document it so the file is clean at closing." }
          ] }
        ]
      },
      {
        title: "PIP, UIM and the reduction",
        brief: ["Client: John Doe · Total medical expenses: $16,500.00",
          "John's PIP ($10,000.00 limit) paid first and is exhausted; his health plan, Clearwater Health, covered the rest",
          "The at-fault driver's limits have been tendered and submitted, and John has a UIM claim on his own policy",
          "Clearwater asserts a subrogation lien"],
        steps: [
          { t: "number", q: "Under coordination of benefits, how much could Clearwater have paid without the two policies paying more than the total medical expenses?", answer: 6500, tol: 0.01, unit: "$", fb: "$16,500.00 − $10,000.00 = $6,500.00. PIP usually pays first; health insurance may cover the remaining costs, and neither pays more than the total." },
          { t: "choice", q: "You want PIP waived. What do you send, and to whom?", options: [
            { a: "A request to the PIP adjuster, with the signed third-party release and the total billed amount", ok: true, fb: "Right. PIP is exhausted and the third-party limits are submitted, so the waiver can be requested." },
            { a: "A letter to Clearwater asking it to waive PIP", fb: "The waiver request goes to the PIP adjuster." },
            { a: "Nothing: PIP waives itself", fb: "Send the request to the PIP adjuster, with the release and total billed." }
          ] },
          { t: "choice", q: "The UIM first-party limits are later tendered. What about PIP?", options: [
            { a: "Nothing more to do", fb: "Usually automatic, but verify." },
            { a: "It usually means an automatic PIP waiver: get it confirmed in writing and put it in the file", ok: true, fb: "Right. Usually is the key word." },
            { a: "Ask John to call the PIP carrier", fb: "We verify the waiver in writing." }
          ] },
          { t: "choice", q: "Clearwater says it will recover from the UIM money too. What do you do?", options: [
            { a: "Tell them a lien can't reach the client's own policy", fb: "A health insurer may assert subrogation against UM/UIM coverage." },
            { a: "Pay Clearwater from the UIM funds today", fb: "Check the rules first: plan language and state law decide." },
            { a: "Treat it as a lien to resolve before disbursing; the plan language and state law decide whether it reaches UIM, so check with the attorney", ok: true, fb: "Right. Health insurance liens must be resolved before the settlement is disbursed, and UM/UIM rules vary by state." }
          ] },
          { t: "order", q: "Put the steps to request a reduction of Clearwater's lien in order.", items: [
            "Identify the subrogation lien holder",
            "Review the lien details: amount, basis and correspondence",
            "Prepare the reduction request: the reason and the supporting documents",
            "Submit the request by mail, email or the lien holder's portal",
            "Document everything"
          ] },
          { t: "choice", who: "Clearwater Health", line: "We can't do the 40% you asked for. We'd consider 25% if you send us the settlement information.", q: "Which outcome is this, and what do you do?", options: [
            { a: "A rejection: pay the full lien", fb: "They proposed a different amount: that's a counter offer." },
            { a: "Approved: pay 25% less right away", fb: "It isn't approved yet. They're asking for settlement information first." },
            { a: "A counter offer: check with the attorney before accepting, and get the result in writing", ok: true, fb: "Right. A counter offer may come with a request for settlement information, which you can choose to provide." }
          ] },
          { t: "choice", q: "Clearwater says the PIP carrier has already reimbursed it for some of the claims on its lien. What do you need?", options: [
            { a: "Written confirmation from Clearwater that that part of its lien is satisfied, so it isn't paid twice from John's settlement", ok: true, fb: "Right. When PIP reimburses health insurance, PIP satisfies that part of the lien. Until the payment is confirmed, treat it as open." },
            { a: "Nothing: take Clearwater's word for it", fb: "Get it in writing, or the same claims may be paid twice." },
            { a: "A new HIPAA form", fb: "What you need is written confirmation that the lien is satisfied." }
          ] }
        ]
      }
    ]
  }
});
