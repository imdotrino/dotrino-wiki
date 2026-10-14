---
title: iatosvg — Illustrator files to SVG
description: Convert Illustrator .ai files to SVG on your own device, with their layers, gradients, photos and artboards.
---

# iatosvg

[`iatosvg.dotrino.com`](https://iatosvg.dotrino.com/) · repo
[`dotrino-iatosvg`](https://github.com/imdotrino/dotrino-iatosvg)

Converts your **Illustrator (`.ai`)** files to **SVG**, the drawing format that
browsers, web editors and almost any design program can open. You do not need
Illustrator.

Everything happens **on your device**: the file is opened in the tab and is not
uploaded anywhere.

## How to use it

1. Open [iatosvg.dotrino.com](https://iatosvg.dotrino.com/).
2. Drop your `.ai` files on the page, or press **Choose .ai files**. You can drop
   several at once.
3. If the design has photos, also add the **Links** folder that comes with it (or the
   loose photos). That way they come out in full resolution.
4. Press **Download SVG** on each artboard.

If a photo is missing, the app says so and uses the small preview the `.ai` keeps.
Add it and press **Convert again**.

Installed as an app, Chrome or Edge on desktop can open an `.ai` straight from your
file explorer.

## What the SVG keeps

- The **layers**, with their names. Hidden ones are left out unless you tick
  **Include hidden layers**.
- Shapes, **gradients**, transparency and blend modes.
- The **photos**, both those inside the file and the linked ones. Very large photos
  are reduced to the size you choose in **Photo size**.
- Each **artboard** as a separate SVG.

## What does not come out right yet

- **Text** comes out as shapes: it looks the same, but it cannot be edited as text.
- **Gradient meshes**, **symbols** and **pattern fills** are not drawn yet.
- Print colours (CMYK) are turned into screen colours with Illustrator's standard
  profile. They may look slightly different from your program if you use another one.

## What is saved

Your storage only keeps **your settings** and the **list of what you converted** (file
name, date and artboards). The files are not saved anywhere.

## For developers

The same conversion exists as a terminal command and as a library (`@dotrino/iatosvg`):
the [repo README](https://github.com/imdotrino/dotrino-iatosvg) explains how to use it
and how the `.ai` format is built inside.
