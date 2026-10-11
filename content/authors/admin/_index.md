---
# Display name
title: Seungyoo Lee

# Name pronunciation (optional)
name_pronunciation: DopeorNope

# Full name (for SEO)
first_name: SeungYoo
last_name: Lee

# Status emoji
status:
  icon: 🚀

# Is this the primary user of the site?
superuser: true

# Highlight the author in author lists? (true/false)
highlight_name: true

# Role/position/tagline
role: Ph.D. Student in AI

# Organizations/Affiliations to display in Biography blox
organizations:
  - name: KAIST Kim Jaechul Graduate School of AI
    url: https://gsai.kaist.ac.kr/

# Social network links
# Need to use another icon? Simply download the SVG icon to your `assets/media/icons/` folder.
profiles:
  - icon: at-symbol
    url: 'mailto:punctuate@kaist.ac.kr'
    label: E-mail Me
  - icon: brands/linkedin
    url: https://www.linkedin.com/in/seungyoo-lee-62b098281/
  - icon: custom/huggingface
    url: https://huggingface.co/DopeorNope
  - icon: brands/github
    url: https://github.com/DopeorNope-Lee
  - icon: brands/instagram
    url: https://www.instagram.com/do_pe_or_no_pe/
  - icon: academicons/orcid
    url: https://orcid.org/0000-0002-3100-0332

interests:
  - Large Language Models
  - Synthetic Data Generation
  - Multi-Modal Learning

education:
  - area: Ph.D. in Artificial Intelligence
    institution: KAIST Kim Jaechul Graduate School of AI
    date_start: 2026-09-01
    date_end: ~
    summary: |
      Research focus: Large Language Models. Advisor: Prof. [Juho Lee](https://juho-lee.github.io/), [SIML Lab](https://siml.kaist.ac.kr/).
  - area: M.S. in Artificial Intelligence
    institution: KAIST Kim Jaechul Graduate School of AI
    date_start: 2024-09-02
    date_end: 2026-08-31
    summary: |
      Research focus: Large Language Models. Advisor: Prof. [Juho Lee](https://juho-lee.github.io/), [SIML Lab](https://siml.kaist.ac.kr/).
  - area: B.S. in ICT Convergence and Business
    institution: Handong Global University
    date_start: 2013-02-28
    date_end: 2024-08-16
    summary: |
      Primary major: ICT Convergence, Secondary major: Business. GPA (Major) 4.37/4.5, GPA (Total) 4.24/4.5. Advisor: Prof. [Xiaopeng Yang](https://scholar.google.co.kr/citations?user=8w5uOesAAAAJ&hl=en).

work:
  - position: Research Intern
    company_name: Kakao
    date_end: 2026-08-31
    summary: |
      Research internship (2026 – Aug 2026).
  - position: Partner Researcher
    company_name: Markr.AI Research Team
    company_url: 'http://markr.co.kr/'
    date_start: 2024-08-01
    date_end:
    summary: |
      - [AutoRAG](https://github.com/Marker-Inc-Korea/AutoRAG)
      - Domain-specific LLMs in sparse domain data pools
      - LLM fine-tuning engineering and quantization
      - LLM guidance using Sequential Monte Carlo sampling
      - Korean LLMs and synthetic data generation
  - position: Researcher
    company_name: Markr (with Media Group Human & Forest)
    company_url: 'http://markr.co.kr/'
    date_start: 2022-09-01
    date_end: 2024-08-31
    summary: |
      **Robust & Korean LLM development**
      - #1 on the Open LLM Leaderboard (Jan 14, 2024) with [DopeorNope/SOLARC-MOE-10.7Bx6](https://huggingface.co/DopeorNope/SOLARC-MOE-10.7Bx6)
      - #1 on the Open Ko-LLM Leaderboard (Nov 11, 2023) with [HumanF-MarkrAI/COKAL-DPO-13b-v2](https://huggingface.co/Markr-AI/COKAL-DPO-13b-v2)
      - LoRA SFT + DPO training; MinHash / MinHash-LSH near-dedup data cleansing; Mixture-of-Experts for robustness
      - [K-G-OAT](https://github.com/Marker-Inc-Korea/K-G-OAT): parameter-efficient IA3 fine-tuning

      **NeRF** — D-NeRF for dynamic scenes, GUI prototype for 3D novel view synthesis, human 3D pose estimation

      **Medical & computer vision** — liver, Couinaud and tumor segmentation; autonomous driving; human pose estimation
  - position: Student Researcher (Head)
    company_name: AI Medical Vision Lab, Handong Global University
    company_url: 'https://aimv-handong.github.io/AIMV-Lab/'
    date_start: 2022-03-01
    date_end: 2024-03-31
    summary: |
      Advisor: Prof. Xiaopeng Yang. Vehicle distance estimation with a monocular camera; deep-learning liver segmentation; visual driver fatigue detection.
  - position: Research Assistant
    company_name: Korea Real Estate Agency Project, Handong Global University
    date_start: 2021-08-01
    date_end: 2024-03-31
    summary: |
      Advisor: Prof. Jung Eui Hong. Machine-learning analysis of local housing markets and risk prediction / detection of fraudulent real-estate subscriptions.

# Skills
# Add your own SVG icons to `assets/media/icons/`
skills:
  - name: Technical Skills
    items:
      - name: Python
        description: ''
        percent: 90
        icon: devicon/python
      - name: PyTorch
        description: ''
        percent: 90
        icon: devicon/pytorch
      - name: TensorFlow
        description: ''
        percent: 60
        icon: devicon/tensorflow
      - name: C++
        description: ''
        percent: 40
        icon: devicon/cplusplus
      - name: R
        description: ''
        percent: 40
        icon: devicon/r

  - name: Hobbies
    color: '#eeac02'
    color_border: '#f0bf23'
    items:
      - name: Cats
        description: ''
        percent: 100
        icon: cat
      - name: Driving
        description: ''
        percent: 80
        icon: hero/bug-ant

languages:
  - name: Korean
    percent: 100
  - name: English
    percent: 75

# Awards.
#   Add/remove as many awards below as you like.
#   Only `title`, `awarder`, and `date` are required.
#   Begin multi-line `summary` with YAML's `|` or `|2-` multi-line prefix and indent 2 spaces below.
awards:
  - title: Month's LLM - NIA Director's Prize
    url: https://www.aitimes.com/news/articleView.html?idxno=155801
    date: '2023-12-11'
    awarder: National Information Society Agency
    icon: trophy
    summary: |
      The LLM model I developed achieved the longest duration as the State-of-the-Art (SOTA) on the Open Ko-LLM Leaderboard, and I was awarded for this accomplishment.
  - title: Healthcare AI Hackathon Competition Using Walking Data - Grand Prize
    url: https://linc30.handong.edu/linc30/news/performance?print=true&page=1&idx=8&mode=view&page=1
    date: '2022-07-01'
    awarder: LINC 3.0 Project Group
    icon: medal
  - title: Problem-Solving Idea Contest Using Software - Best Prize
    url: https://csee.handong.edu/2022/10/2022-sw-festival-3/
    date: '2022-10-14'
    awarder: Handong Global University
    icon: medal
    summary: |
      I received the grand prize for optimization technology related to autonomous driving.
---

## About Me

I am a Ph.D. student in Artificial Intelligence at KAIST Kim Jaechul Graduate School of AI, advised by Professor [Juho Lee](https://juho-lee.github.io/) at the [SIML Lab](https://siml.kaist.ac.kr/), where I also completed my M.S. My research focuses on Large Language Models — in particular, training LLMs robustly in data-scarce domains, synthetic data generation, and efficient optimization. I have published at ICLR, ICML, and NeurIPS.

Previously, I earned a B.S. in ICT Convergence and Business from Handong Global University, where I conducted research in medical and computer vision under Professor [Xiaopeng Yang](https://scholar.google.co.kr/citations?user=8w5uOesAAAAJ&hl=en) at the [AIMV Lab](https://aimv-handong.github.io/AIMV-Lab/). At Markr, I developed Korean LLMs that ranked #1 on both the Open LLM Leaderboard and the Open Ko-LLM Leaderboard.
