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
      # Add new items at the top: `- **YYYY.MM** — what happened`
      text: |-
        - **2025.01** — *Variational Bayesian Pseudo-Coreset* accepted at **ICLR 2025** 🎉
        - **2025.01** — *G-UNETR++* published in **Applied Sciences**
        - **2024.11** — Lectured on *Quantization for LLM Fine-Tuning*
        - **2024.09** — Started M.S. in AI at **KAIST Kim Jaechul Graduate School of AI** ([SIML Lab](https://siml.kaist.ac.kr/))
        - **2024.09** — Joined **Markr AI** as a founding member
        - **2023.12** — Received the **NIA Director's Prize** (Month's LLM) for the longest-running SOTA on the Open Ko-LLM Leaderboard
        - **2023.10** — Paper published in **Scientific Reports**
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
