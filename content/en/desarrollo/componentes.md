---
title: The UI components
description: Shared Web Components — the top bar, the support coin, the profile card, share, install, back, notifications and tutorials.
---

# The UI components

Every app looks alike because they **share the pieces**, not because each one
copies the design. They are Web Components: Shadow DOM, no third-party JavaScript,
no cookies, in Spanish and English.

## The top bar

**`@dotrino/topbar`** — repo
[`dotrino-topbar`](https://github.com/imdotrino/dotrino-topbar)

`<dotrino-topbar>` brings the whole bar: brand, back button, room for the app's own
actions, the language switch, the profile button and the support coin. You import
one thing instead of wiring five.

```
import '@dotrino/topbar'
```

On a page with no build step it comes from the CDN, and **always with `+esm`**:

```
<script type="module"
  src="https://cdn.jsdelivr.net/npm/@dotrino/topbar@0.8/+esm"></script>
```

Customize it with slots (`brand`, `end`), `::part()` and CSS variables. Rebuilding
the bar by hand is debt: if you find yourself writing a topbar `@media` query, you
are reimplementing the component.

## Support and profile

**`@dotrino/support`** — repo
[`dotrino-support`](https://github.com/imdotrino/dotrino-support)

`<dotrino-support>`: the coin and its modal for support, sharing and contact. It is
the **only** form of monetization in the interface. See
[Supporting the project](/en/empezar/apoyar/).

**`@dotrino/profile`** — repo
[`dotrino-profile`](https://github.com/imdotrino/dotrino-profile)

`<dotrino-profile>`: the profile and reputation card, the same one everywhere.
Drawing a profile card or rating stars by hand is not allowed; an inline preview in
a list that **opens** the component is.

## Share, install, back

**`@dotrino/share`** — repo
[`dotrino-share`](https://github.com/imdotrino/dotrino-share) —
`<dotrino-share>`: the share modal, with the QR code generated in the browser
itself. It receives an address that is already assembled (with its `#fragment`).

**`@dotrino/install`** — repo
[`dotrino-install`](https://github.com/imdotrino/dotrino-install) —
`<dotrino-install>`: the «Install app» button, including the iOS variant and
preferring the Android app where one exists.

**`@dotrino/nav`** — repo
[`dotrino-nav`](https://github.com/imdotrino/dotrino-nav) — unified «back»: the
Android hardware button, the iOS gesture and the browser. It decides from history
state, not by counting events.

## Notifications and first steps

**`@dotrino/notifications`** — repo
[`dotrino-notifications`](https://github.com/imdotrino/dotrino-notifications) —
browser notifications and Web Push (against the vault and the proxy), with read
receipts and its panel.

**`@dotrino/tutorial`** — repo
[`dotrino-tutorial`](https://github.com/imdotrino/dotrino-tutorial) —
`<dotrino-tutorial>`: onboarding bubbles anchored to the UI, shown once.

## For development

**`@dotrino/inspector`** — repo
[`dotrino-inspector`](https://github.com/imdotrino/dotrino-inspector) — the
ecosystem's inspector: look inside what an app is doing against the pillars while
you build it.
