# Handmade Bathtub — Workflow & Automation Write-up

## Problem

The product is highly considered and project-dependent, so a simple product page is not enough. Customer inquiries need to capture useful project information and be converted into clear next actions without making unsupported promises.

## What I built

I built a buyer-to-quote workflow with two interfaces.

The customer interface presents the handmade product and collects buyer type, quantity, destination, required date, budget and message.

The management interface acts as an inquiry desk. Submitted inquiries are stored as individual records and can be reviewed together.

## Automation

The workflow automatically:

1. Captures and structures an inquiry.
2. Generates an inquiry ID.
3. Checks for missing destination, date or budget.
4. Detects urgent requests such as a three-day delivery requirement.
5. Assigns buyer priority using buyer type and quantity.
6. Recommends the next business action.

This creates a simple human-in-the-loop process from inquiry to consultation / quote.

## Buyer prioritisation

I prioritised buyers using product fit, project potential and feasibility rather than order size alone. An interior designer with strong project context is a strong fit, while a large hotel requirement has higher potential but greater feasibility uncertainty.

## AI experiment

I tested an AI response for an urgent customer inquiry. A generic response could accidentally promise delivery or pricing. I improved the prompt by restricting the AI to known facts and requiring confirmation for unsupported delivery, stock, warranty and pricing claims.

## Measurement

The main metric is qualified inquiry rate:

`qualified unique inquiries / total unique inquiries`

The prototype establishes the workflow needed to collect and classify inquiries; I did not invent performance results that were not measured.

## Limitations and next step

The prototype uses browser storage rather than a production database and does not include authentication or live messaging integrations. A production version could connect the workflow to a CRM, email/WhatsApp follow-ups and a secure database.

stone first