---
name: "Domus Cultura — House Index"
version: "1.0"
tags:
  - contemporary art
  - photography
  - sound
  - collector editorial
author: "Domus Cultura"
source_url: "local established Domus Cultura website"
created: "2026-10-13"

style_prompt_short: >
  An exact, nocturnal house for contemporary photography, sound and objects:
  editorial typography, warm paper-framed images, deep architectural green and
  one sharp chartreuse signal.

style_prompt_full: >
  Build Domus Cultura as a quiet contemporary-art house, not a generic luxury
  shop. Use ink black #090A08 as the dominant field, warm paper #F7F7F2 for
  type and photographic borders, architectural green #173A2A as structural
  depth, and chartreuse #C6D834 only for active navigation, decisions and
  small signals. Keep the existing DOMUS CULTURA wordmark and DM Sans as the
  authorial display face; use DM Mono only for genuine metadata and labels.
  Compose each primary page as two rooms: a typographic threshold and one
  paper-framed photographic work. Images are gallery objects with real white
  borders, never decorative backgrounds, gradients, glass panels, stock luxury
  cues or crowded e-commerce card grids. Motion is singular and restrained:
  photographs change by a short dissolve after first paint; sections reveal
  only as they enter the room; no perpetual drifting, bounce or spectacle.
  Preserve generous negative space, 1px rules, exact alignment and practical
  commerce clarity. Everything must remain highly legible, keyboard-visible,
  responsive and calm under reduced motion.

colors:
  primary:
    - name: "House Ink"
      hex: "#090A08"
      role: "dominant field, navigation, gallery background"
    - name: "Edition Paper"
      hex: "#F7F7F2"
      role: "primary type, photographic border, light surface"
  accent:
    - name: "House Signal"
      hex: "#C6D834"
      role: "active state, focus, release and decision signal"
    - name: "Architectural Green"
      hex: "#173A2A"
      role: "depth plane, offset edge, secondary structure"
  neutral:
    - name: "Warm Paper Muted"
      hex: "#E8E8E0"
      role: "quiet light surface and secondary field"
    - name: "Night Surface"
      hex: "#0D0F0C"
      role: "subtle dark depth behind editorial material"

typography:
  display:
    family: "DM Sans"
    weight: "700, with 500 italic only where established"
    style: "large editorial caps or sentence fragments, tight but never below -0.04em tracking"
  body:
    family: "DM Sans"
    weight: "400–500"
    style: "warm-white copy, 62ch maximum on dark hero surfaces"
  caption:
    family: "DM Mono"
    weight: "400–500"
    style: "small factual labels, controlled uppercase, real metadata only"
  rules:
    - "Keep the DOMUS CULTURA wordmark untouched."
    - "Use italic as a secondary note inside a display phrase, not a separate brand voice."
    - "Balance display headings; keep product and reading copy comfortably scannable."

layout:
  grid: "House Index split: typographic threshold at left, photographic room at right; lower pages repeat the same proportion."
  alignment: "Flush-left type, hard 1px rules, generous margins; 3.4vw desktop gutters and 6vw mobile gutters."
  aspect_ratio: "Portrait artwork defaults to 3:4; editorial image modules keep their native ratio."
  notes:
    - "A photograph is an edition with a paper edge, not a crop used as decoration."
    - "Commerce uses product information in the same architectural rhythm; avoid generic rounded card systems."
    - "Give every room one clear primary action and visible focus state."

motion:
  transitions:
    - "Section reveal: opacity and 18px translate over 640ms with cubic-bezier(.23,1,.32,1)."
    - "Photography: 820ms dissolve only after the initial image is already visible."
  animation_style: >
    One authored arrival per page. Hover depth belongs only to physical-looking
    images and edition surfaces; controls remain exact and immediate.
  pacing: "Measured, gallery-like, never perpetual or attention-seeking."
  audio_cues: []

mood:
  keywords:
    - "nocturnal"
    - "architectural"
    - "editorial"
    - "collector-facing"
  era: "Contemporary, with Swiss editorial discipline"
  cultural_reference: "Contemporary art publishing, photographic editions and independent music culture"
  avoid:
    - "pastel luxury gradients or decorative glass"
    - "generic marketplace cards and fake scarcity"
    - "constant image drift, bounce or gratuitous 3D motion"

assets:
  reference_images:
    - "assets/house-index/index-city-glass.jpg"
  gsep_elements: []
  html_snippets: []
  color_palette_image:
    url: ""

## Design Principles

The Domus Cultura site should feel like entering a real house of images: the
landing page is an index; every other page is a room cut from the same material.
Craft comes from restraint—high contrast, exact paper edges, calm pacing and
real work given enough space—not from visual ornament.

## Implementation Notes

Shared tokens and finish rules live in `luxe-finish.css`. Keep future pages on
that layer, use the same header and footer treatment, and test both keyboard
focus and reduced motion before publishing.
