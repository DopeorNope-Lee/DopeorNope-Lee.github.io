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
    id: research
    content:
      title: '🔬 Research'
      subtitle: ''
      text: |-
        I study how to make **Large Language Models** learn effectively when data and compute are limited, and behave reliably once deployed.

        **Data-efficient adaptation of LLMs** — adapting LLMs to new domains and vocabularies with scarce data, and selecting the data that matters.\
        [PANGEA](publication/pangea/) (NeurIPS 2025) · [SAVE](publication/save/) (NeurIPS 2026) · [Variational Bayesian Pseudo-Coreset](publication/vbpc/) (ICLR 2025)

        **Self-improvement & synthetic data** — training LLMs on data they generate themselves without collapsing.\
        [OCNR](publication/ocnr/) (ICML 2026)

        **Reliable LLMs** — calibration, belief consistency, and combining multiple objectives into a single model.\
        [Confidence is Not Universal](publication/confidence-not-universal/) (ICML 2026) · [From Drift to Coherence](publication/drift-to-coherence/) (ICML 2026) · [Mixture-Trained Merging](publication/mixture-trained-merging/) (NeurIPS 2026)
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
---
