---
# Leave the homepage title empty to use the site title
title: "Seungyoo Lee"
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: markdown
    id: news
    content:
      title: '📰 News'
      subtitle: ''
      # Paper news only. Add new items at the top: `- **YYYY.MM** — what happened`
      text: |-
        - **2026.09** — Two papers accepted at **NeurIPS 2026**: *SAVE* (first author) and *Mixture-Trained Merging* 🎉
        - **2026.04** — Three papers accepted at **ICML 2026**: *OCNR* (first author), *From Drift to Coherence*, and *Confidence is Not Universal* 🎉
        - **2026.01** — Liver tumor segmentation paper accepted in **Diagnostics**
        - **2025.12** — Couinaud segmentation paper accepted in **Current Problems in Surgery**
        - **2025.09** — *PANGEA* (first author) accepted at **NeurIPS 2025** 🎉
        - **2025.01** — *Variational Bayesian Pseudo-Coreset* accepted at **ICLR 2025**
        - **2025.01** — *G-UNETR++* accepted in **Applied Sciences**
        - **2023.10** — Liver graft weight estimation paper accepted in **Scientific Reports**
        - **2022.12** — Vehicle distance estimation paper accepted in **Symmetry**
    design:
      columns: '1'
  - block: markdown
    id: research
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        My main research topic is LLM, with the goal of developing domain-specific LLMs that are effective and efficient.

        Specifically, I aim to train LLMs robustly in data-scarce environments and optimize them effectively under constrained conditions.

        Through this research, I aim to create meaningful impacts across various industries.
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Selected Publications
      archive:
        enable: true
        link: publication/
      filters:
        folders:
          - publication
        featured_only: true
    design:
      view: citation
---
