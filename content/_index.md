---
# Leave the homepage title empty to use the site title
title: "Seungyoo Lee"
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "4rem"

sections:
  # About: name, tagline, photo, links. The bio text is in `content/authors/admin/_index.md`.
  - block: resume-biography-3
    content:
      username: admin
      tagline: 'Ph.D. Student @ KAIST AI · Large Language Models'
      text: ""
      button:
        text: Download CV
        url: uploads/resume.pdf
  - block: markdown
    id: news
    content:
      title: 'News'
      subtitle: ''
      # Paper news only. Add new items at the top: - `MM/YYYY` what happened
      text: |-
        - `09/2026` Two papers accepted to **NeurIPS 2026**: [SAVE](publication/save/) and [Mixture-Trained Merging](publication/mixture-trained-merging/).
        - `04/2026` Three papers accepted to **ICML 2026**: [OCNR](publication/ocnr/), [From Drift to Coherence](publication/drift-to-coherence/), and [Confidence is Not Universal](publication/confidence-not-universal/).
        - `01/2026` Liver tumor segmentation paper accepted to **Diagnostics**.
        - `12/2025` Couinaud segmentation paper accepted to **Current Problems in Surgery**.
        - `09/2025` [PANGEA](publication/pangea/) accepted to **NeurIPS 2025**.
        - `01/2025` [Variational Bayesian Pseudo-Coreset](publication/vbpc/) accepted to **ICLR 2025**.
        - `01/2025` [G-UNETR++](publication/g-unetr-plus-plus/) accepted to **Applied Sciences**.
        - `10/2023` Liver graft weight estimation paper accepted to **Scientific Reports**.
        - `12/2022` Vehicle distance estimation paper accepted to **Symmetry**.
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Selected Publications
      text: '(\*) denotes equal contribution, (†) denotes co-corresponding authors. See [publications](publication/) for the full list.'
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
