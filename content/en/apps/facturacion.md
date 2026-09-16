---
title: Facturero — SRI electronic invoicing
description: Issue electronic invoices authorized by Ecuador's SRI from your browser, with your electronic signature, and keep them in your own storage.
---

# Facturero — SRI electronic invoicing

[`facturero.dotrino.com`](https://facturero.dotrino.com/) · repo
[`dotrino-facturero`](https://github.com/imdotrino/dotrino-facturero)

Facturero issues **electronic invoices authorized by the SRI**, Ecuador's tax authority.
You load your electronic signature once and, from then on, each invoice is signed on your
own device, goes straight to the SRI and is kept in [your storage](/en/empezar/privacidad/).

Your signature, your customers and your sales do not go through Dotrino's servers: the
invoice leaves your device for the SRI, and the authorization comes back from there.

## Before you start

You need three things, all arranged outside the app:

1. **Your RUC** (tax ID), active.
2. **Your electronic signature** as a file (`.p12` or `.pfx`), issued by an accredited
   entity: Banco Central, Security Data, Uanataca, ANF or another.
3. **The SRI's permission to issue electronic invoices.** You request it at
   [SRI en línea](https://srienlinea.sri.gob.ec/) → Facturación Electrónica. First in
   **Pruebas** (test) and, once everything works, in **Producción** (production).

> In the **test** environment the SRI also requires a real signature: with one that does not
> come from an accredited entity it answers "invalid signature". What test invoices lack is
> tax validity, so you can issue as many as you like.

## 1. Your issuer details

In **Settings → Issuer**, enter your details exactly as they appear on your RUC: legal
name, head office address, establishment and emission point (usually `001` and `001`), and
whether you keep accounting records, are a special taxpayer, a withholding agent or in the
RIMPE regime.

- **Next sequence number**: the number the next invoice will carry. If you already
  invoiced with another system **at that same emission point**, enter the one after the
  last you used.
- **Environment**: start in **Test**. Switch to **Production** once the SRI has granted you
  permission and your test invoices come back authorized.

If you invoice from **more than one device**, give each one its own emission point: two
devices sharing one could use the same number, and the SRI rejects the second.

## 2. Your electronic signature

In **Settings → Electronic signature**, choose your file and type its password.

- The app checks that the file opens and that the signature is valid, and shows you the
  holder and its expiry date.
- The file is stored **encrypted with your profile's key**.
- **The password is not stored.** Each time you open the app to issue invoices it asks for
  it once; when you close or reload the page, the signature is locked again.
- The signature stays on **this device**. To issue from another one, load it there too.

## 3. Issuing an invoice

In **New invoice**:

1. **Buyer**: ID type, number and name. For a **final consumer** the details fill in by
   themselves; the SRI only allows it up to **USD 50**.
2. **Items**: one line per product or service, with quantity, price, discount and VAT rate
   (15% is the standard one).
3. **Payment method**.
4. **Sign and send to the SRI.** In production the app asks you to confirm first.

The app signs, sends and waits a few seconds for the SRI's answer.

## What each status means

| Status | What happened | What to do |
|---|---|---|
| **Authorized** | The SRI accepted it. This is the valid invoice. | Deliver it to the buyer. |
| **Waiting** | The SRI received it and has not answered yet. | Check later: it has up to 24 hours. |
| **Returned** | The SRI rejected it on receipt (a badly formed field). | Read the SRI's message and **Correct**. |
| **Not authorized** | The SRI reviewed it and did not accept it. | Read the SRI's message and **Correct**. |
| **Not sent** | The SRI could not be reached (for example, no connection). | **Send again**. |

**Correct** resends the invoice with **the same number and the same date**, as the SRI
requires. You have **72 hours** from issue for it to reach the SRI.

## Delivering the invoice to the buyer

The law requires you to give them the **authorized XML** and its printed version (the
**RIDE**). From an authorized invoice you can:

- **Download XML**: the file that has legal validity.
- **Print or save as PDF**: the RIDE, with the access key and its barcode.
- **Share**: on your phone, send the XML through the app of your choice.

## Keeping your invoices

Invoices must be kept for **7 years**. Besides what stays in your storage, in **Invoices**
you can **download the month's XML files as a `.zip`**. Do it every month and keep those
files wherever you keep your documents.

## The "RUC Proveedor" field

Since SRI resolution NAC-DGERCGC26-00000027 (July 28, 2026), anyone who invoices with a system
**sold by a provider** must include that provider's RUC in the additional information of every
invoice.

The resolution defines a provider as whoever develops or owns an invoicing system **in order
to sell it**. Facturero is free and not sold, so it has no provider in that sense, and its
invoices **do not include** that field.

This is how the resolution reads as of September 16, 2026: the SRI has not yet said anything
about free software. If your accountant sees your case differently, check it with them.

## What the app does not do (yet)

- **Cancel** an invoice: that is done at SRI en línea → Facturación Electrónica →
  Anulación, up to 90 days after issuing it.
- Credit notes, withholding receipts and delivery guides.
- Emailing the invoice for you: you download or share it yourself.
