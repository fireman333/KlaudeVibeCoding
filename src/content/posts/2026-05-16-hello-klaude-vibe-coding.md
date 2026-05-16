---
title: "歡迎來到康勞德亂碼（Hello, KlaudeVibeCoding）"
date: 2026-05-16
summary: "非資工背景醫學生 vibe-coding 筆記站開張第一篇。先說明這個 site 想記什麼、不想做什麼、phase A 怎麼演化到 phase B、為什麼叫亂碼。"
categories: ["meta"]
tags: ["site-launch", "vibe-coding-101"]
phase: "A"
draft: false
---

## 為什麼有這個站

我是台大醫學系大六學生 WLK。這一年用 Claude Code 跟 LLM workflow 蓋了一些東西：統計 pipeline、衛教文章 generator、實習學習紀錄工具、Threads 自動化、各種 skill。過程踩了不少坑，也累積一些 pattern。

這些觀察散在三個地方：

- **Threads** — 短文、個人語氣，500 字內講不完
- **GitHub repo** — 一個 workflow 一個 repo（例：[openspec-grill-me-workflow](https://github.com/fireman333/openspec-grill-me-workflow)），但散
- **RemNote** — 私人筆記，不對外

中間少了一塊「**長文 + 公開 + 對非 CS 背景同類人友善**」的地方。康勞德亂碼補這塊。

## 這站想記什麼

- **踩坑紀錄**：什麼地方爆掉、為什麼爆、最後怎麼修
- **Skill / workflow 設計過程**：不只 final 結果，包含「為什麼這樣設計」的決策路徑
- **跨工具串接的 pattern**：例如 OpenSpec × grill-me、Threads MCP × image generation、Chrome MCP × Pages 部署

不想做：

- Tutorial 風（「跟我做一遍 step by step」）
- Best practice 宣稱（我也是邊學邊試）
- 短訊息（那些去 Threads）

## Voice：phase A 慢慢走向 phase B

初期（**phase A**）會很 hedge-rich，類似 lab meeting 講「我目前的做法是 X，還在調」。受眾預設是**像我一樣非 CS 背景但在 vibe-coding 的人** — 醫學生、PhD 學生、研究助理、想學寫 code 但不想科班的人。

寫多了之後（**phase B**）會慢慢往「帶實證的 architecture observation」走 — 還是 hedge，但 claim 會更技術化、會帶 benchmark / code 範例 / 設計 trade-off 分析。受眾擴到 AI engineer / Claude Code power user。

每篇 frontmatter 會標 `phase: "A"` 或 `phase: "B"`，自己也是讀者，方便回看 voice 演化。

## 為什麼叫「亂碼」

幾個層次：

1. **vibe-coding 的本質就是有點亂** — 不是 spec-driven 寫完、不是 TDD 嚴守、是邊想邊寫邊改
2. **非 CS 背景在學寫 code 看到的 error 訊息本來就像亂碼** — 從這種「看不懂但要硬幹」的位置寫文章，誠實
3. **跟 sister site 康勞德醫普對仗**（醫普 = 公開醫學 / 亂碼 = 公開 LLM workflow）

## 跟相關 channel 的關係

| 出口 | 內容形狀 | 頻率 |
|---|---|---|
| 本站（康勞德亂碼） | 長文 deep-dive、含 diagram / code / 決策 trace | 不定期 |
| [Threads `<康勞德日記>`](https://www.threads.com/@weilingkang3) | 3–5 post 串文、個人觀察 | 高 |
| 各 workflow GitHub repo | 一個 workflow 一個 repo、含可 install 的 skill source | per workflow |
| [康勞德醫普](https://fireman333.github.io/KlaudeHealthEducation/) | 醫學科普給大眾 | 另一條 track |

每篇本站文章通常會對應一條 Threads 串 + 一個 repo。三者交叉引用。

---

這是 site 的第一篇也是說明文。下一篇正式內容大概會從以下幾個 ready topic 開始：OpenSpec × grill-me workflow（整篇 import 自既有 repo）、Drug Helper 一日六版的 BOM bug 紀錄、`/klaude-diary` skill 自己長出來的過程、Codex CLI 生圖三個坑。

歡迎指教 — Threads 留言 / GitHub issue / 任何形式都行。
