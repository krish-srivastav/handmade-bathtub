# Handmade Bathtub — Inquiry-to-Quote Automation

A small workflow prototype for turning handmade-stone product inquiries into structured business actions.

## Problem

High-consideration handmade products need more than a basic contact form. Each inquiry needs to be captured, checked for missing information, prioritised and routed toward the right next action without inventing delivery, pricing, stock or warranty claims.

## What I Built

- Customer-facing product and quote inquiry page
- Management-facing inquiry dashboard
- Inquiry capture using browser storage
- Buyer prioritisation
- Qualification and missing-information checks
- Urgent-request confirmation logic
- Recommended next actions
- Sample customer messages
- AI experiment showing how prompts can be constrained by known business facts
- Test cases for L01–L05
- Social post visual

## Automation Workflow

**Capture → Qualify → Decide → Recommend**

The workflow checks destination, required date and budget. Missing information triggers a request for details. Urgent requests such as a three-day delivery requirement trigger a feasibility-confirmation step. Complete inquiries move toward consultation or quotation.

## Buyer Prioritisation

1. **P01 — Interior Designer:** strongest fit for premium residential use and a 2-unit requirement.
2. **P02 — Boutique Hotel:** highest volume potential with 12 units, but feasibility needs confirmation because of the short timeline.
3. **P03 — Homeowner:** lower priority because it is a single-unit, ₹5,000 request with a three-day requirement.

## Measurement

**Qualified inquiry rate = qualified unique inquiries ÷ total unique inquiries**

An increase would indicate that the inquiry form and qualification workflow are producing a higher proportion of actionable inquiries.

No results are invented.

## AI Experiment

The initial AI approach could make unsupported promises about delivery, discounts, stock or warranty. The improved approach restricts responses to known facts and requires human confirmation for uncertain operational details.

## Limitations

This prototype uses browser localStorage and does not include authentication, a production database or real email/WhatsApp/CRM integrations. A production version could connect the workflow to those systems.

## Files

- `index.html` — customer interface
- `dashboard.html` — management interface
- `script.js` — inquiry capture and decision logic
- `style.css` — interface styling
- `writeup.md` — assignment write-up
- `ai-log.md` — AI experiment log
- `tests.md` — test cases
- `sample-messages.md` — customer messages
- `artifact/social-post.html` — social visual

stone first