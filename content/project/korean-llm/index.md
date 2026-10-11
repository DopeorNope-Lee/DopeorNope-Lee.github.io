---
title: Korean & Robust LLMs
summary: '#1 on the Open LLM Leaderboard (SOLARC-MOE-10.7Bx6) and the Open Ko-LLM Leaderboard (COKAL-DPO-13b-v2). NIA Month''s LLM award.'
date: 2024-01-14
external_link: ''
tags:
  - LLM
  - Korean
  - DPO
  - MoE
links:
  - name: SOLARC-MOE-10.7Bx6
    url: https://huggingface.co/DopeorNope/SOLARC-MOE-10.7Bx6
    icon: custom/huggingface
  - name: COKAL-DPO-13b-v2
    url: https://huggingface.co/Markr-AI/COKAL-DPO-13b-v2
    icon: custom/huggingface
---

Developed at Markr (with Media Group Human & Forest), 2022 – 2024.

## Results

- **#1 on the [Open LLM Leaderboard](https://huggingface.co/spaces/HuggingFaceH4/open_llm_leaderboard)** as of January 14, 2024 — [DopeorNope/SOLARC-MOE-10.7Bx6](https://huggingface.co/DopeorNope/SOLARC-MOE-10.7Bx6)
- **#1 on the [Open Ko-LLM Leaderboard](https://huggingface.co/spaces/upstage/open-ko-llm-leaderboard)** as of November 11, 2023 — [HumanF-MarkrAI/COKAL-DPO-13b-v2](https://huggingface.co/Markr-AI/COKAL-DPO-13b-v2)
- **NIA Director's Prize (Month's LLM)**, December 2023, for holding SOTA on the Open Ko-LLM Leaderboard the longest

## Methods

- SFT with LoRA, followed by DPO preference tuning
- Data cleansing with MinHash / MinHash-LSH near-deduplication (Jaccard similarity ≥ 0.8) to stabilize the text distribution
- Mixture-of-Experts to improve performance and robustness
