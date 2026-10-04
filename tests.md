# Test Cases

## Purpose

These tests verify that the inquiry workflow captures customer information,
applies qualification rules, assigns priority, and recommends a next action.

---

## L01 — Complete inquiry

**Input**

- Buyer: Interior Designer
- Destination: Pune
- Quantity: 1
- Required timeline: 30 days
- Budget: ₹15,000
- Message: Interested in a handmade basin and would like a consultation.

**Expected behaviour**

- Capture the inquiry.
- Mark it ready for review when required information is present.
- Recommend moving toward consultation / quote.

**Observed**

The inquiry was successfully captured and displayed in the management dashboard.

---

## L02 — Duplicate inquiry

**Input**

A repeat submission from the same customer with the same project request.

**Expected behaviour**

- Preserve the inquiry record.
- Identify the repeat request as a duplicate during review.
- Avoid sending the same response twice.

**Observed**

Duplicate handling is treated as a review rule in the inquiry workflow.

---

## L03 — Missing information

**Input**

A customer inquiry with missing destination, required date and/or budget.

**Expected behaviour**

- Do not move directly to quotation.
- Automatically identify the missing information.
- Recommend requesting the missing details.

**Observed**

The dashboard marks incomplete inquiries as:

`MISSING INFORMATION`

and recommends asking for the missing fields.

---

## L04 — Urgent request

**Input**

A customer asks for delivery within 3 days.

**Expected behaviour**

- Do not promise delivery.
- Flag the inquiry for feasibility confirmation.
- Recommend confirming feasibility before discussing a firm delivery commitment.

**Observed**

The dashboard marks the inquiry as:

`NEEDS CONFIRMATION`

and recommends confirming feasibility before promising delivery or pricing.

---

## L05 — Warranty / stock claim

**Input**

A customer asks whether the product has a 10-year warranty
and whether it is available in stock today.

**Expected behaviour**

- Do not invent warranty or stock information.
- Treat both claims as requiring confirmation before replying definitively.

**Observed**

The case is treated as requiring human confirmation rather than an invented answer.

---

## Automation checks

The prototype was also tested for:

- Inquiry capture
- Persistent storage of multiple inquiries
- Automatic inquiry IDs
- Missing-information detection
- Urgent-request detection
- Buyer priority assignment
- Recommended next-action generation
- Management dashboard rendering