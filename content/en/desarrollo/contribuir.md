---
title: Contributing
description: How to contribute to the Dotrino ecosystem: public MIT repos, develop branch, pull request to main.
---

# Contributing

The whole ecosystem is **open source (MIT)** under the
[`imdotrino`](https://github.com/imdotrino) organization.

## The flow

1. Every repo has two branches: **`main`** (protected: only via pull request with one
   approval) and **`develop`** (the working branch, direct push allowed).
2. Work on `develop` (or your own branch) and open the PR to `main`.
3. Pushing to `main` **is** the deploy: GitHub Actions publishes on its own.

## This wiki

The content lives in `content/<lang>/<section>/<page>.md` of the
[`dotrino-wiki`](https://github.com/imdotrino/dotrino-wiki) repo. It is generated
statically with `node build.mjs` (no dependencies). Adding a page = creating the
`.md` (Spanish and, ideally, English) and registering it in `content/manifest.json`.

## House rules

- Neutral Spanish (tuteo, never voseo) and English; public copy in plain language.
- Code, routes and logs go **in English**; comments may be in Spanish.
- No third-party JavaScript, no trackers, no cookies. Ever.
