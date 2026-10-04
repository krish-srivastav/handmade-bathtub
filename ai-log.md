# AI Experiment Log

## Case tested

L04 — Customer requests delivery within 3 days and provides a low budget.

## Initial AI approach

The initial prompt asked the AI to respond helpfully to the customer.

### Risk observed

A generic helpful response could accidentally:

- promise delivery within 3 days
- offer an unsupported discount
- claim stock availability
- present an unverified price as final

For a real business workflow, these would create operational and trust risks.

---

## Improved prompt

You are responding to a customer inquiry for a handmade stone product.

Use only the facts provided in the inquiry and the known business information.

Do not invent:

- delivery commitments
- discounts
- stock availability
- warranty terms
- final pricing

If the customer asks for something that cannot be confirmed from the available information, clearly say that it requires confirmation.

For urgent delivery requests, explain that feasibility must be confirmed before making a commitment.

Write a helpful, professional response that moves the customer toward the next appropriate step.

---

## Improved response approach

The improved approach acknowledges the customer's request without making an unsupported promise.

It explains that the requested timeline and pricing need to be confirmed and recommends collecting or confirming the information required before moving toward a quote.

## Learning

The experiment showed that AI should operate inside clear business rules.

The useful automation is not simply generating a reply. It is combining AI with constraints, human confirmation and structured inquiry data.