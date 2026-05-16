---
title: "spec-driven dev 卡在 propose 第一行的時候，問題其實在前面一步"
date: 2026-05-16
summary: "OpenSpec 假設你已經知道要 propose 什麼。但 vibe-coding 場景最常卡的就是想不清楚。把 grill-me 的兩個粒度對齊到 OpenSpec 的兩個 lifecycle 節點，補上「propose 之前的釐清」這塊 gap。"
description: "把 spec-driven development 跟 structured clarification 對齊起來的工作流筆記。"
categories: ["workflow"]
tags: ["openspec", "grill-me", "spec-driven", "vibe-coding"]
phase: "A"
draft: false
repo: "https://github.com/fireman333/openspec-grill-me-workflow"
threads_thread: "https://www.threads.com/@weilingkang3/post/DYYuogjj66O"
sources:
  - title: "openspec-grill-me-workflow — 完整 repo（diagram + 對照表 + skill source）"
    url: "https://github.com/fireman333/openspec-grill-me-workflow"
    note: "本文是 narrative 版；reference 版見 README"
  - title: "OpenSpec by Fission AI"
    url: "https://github.com/Fission-AI/OpenSpec"
    note: "Layer 1 / 2 的上游 CLI + slash command 生成器"
  - title: "Threads 串文（5 posts，含 hero image）"
    url: "https://www.threads.com/@weilingkang3/post/DYYuogjj66O"
    note: "短版"
---

![OpenSpec × grill-me hero](/KlaudeVibeCoding/img/posts/2026-05-16-openspec-grill-me-workflow/hero.png)

## 我卡在 `/opsx:propose` 第一行的時候

裝完 [OpenSpec](https://github.com/Fission-AI/OpenSpec) 後，每次想開新 change 我都要對著 `proposal.md` 的「Problem」「Approach」「Acceptance Criteria」這幾個欄位坐很久。不是不會寫，是發現自己**連想做什麼都還沒講清楚**。

這不是 OpenSpec 設計的問題。Spec-driven dev 預設你已經有一個明確的變更想法，工具幫你結構化、validate、紀錄。但我這種非資工背景的 vibe-coder，最常的狀態是「我想做一個...嗯...像是 X 但又有點 Y 的東西」— 連 problem statement 自己都還沒收斂。

卡了兩三次之後，我意識到問題不在 OpenSpec 而是在 OpenSpec **之前**。

## OpenSpec 是 lifecycle 工具，不是想法工具

簡單回顧一下 OpenSpec 在做什麼。它把每個變更包成一個 **change proposal**，走四段：

```
propose → tasks → implement → archive
```

每段都有對應的 `.md` artifact（`proposal.md`、`design.md`、`tasks.md`），最後 archive 時把 spec delta merge 進 main `specs/` 目錄，並把整個 change 移到 `archive/` 永久保留。

這個結構超適合「我知道要做什麼，幫我把過程記錄下來」的情境。但它**完全沒有 gate**處理「我還不知道要做什麼」的階段。`/opsx:propose <name>` 一打下去就要寫 proposal — 沒地方讓你先卡一下、把模糊想法逼成可寫的東西。

## grill-me 兩個粒度剛好對上

差不多同期我裝了另一個自己寫的 skill 叫 `/grill-me` — 結構化問題拷問工具，給任何半成形的計畫丟 5-7 題（**Quick**）或 15+ 題（**Deep**）逼出 unstated assumption。

某天用 grill-me 想清楚一個 vibe-coding 專案的方向後，回頭再開 `/opsx:propose`，發現第一行突然寫得出來了。

回想剛剛 grill-me 問了什麼，我意識到：

- **Deep 模式（15+ 題）** 蓋的是 problem statement / target users / scope boundary / non-goals / success criteria / NFR / failure tolerance — 這些是**整個 project 的 context**
- **Quick 模式（5-7 題）** 聚焦在「這次具體要做什麼」「scope 在哪」「跟既有東西有衝突嗎」— 這些是**單個 change 的 context**

跟 OpenSpec 對照：

- OpenSpec 的 `openspec/project.md`（整個 project 層級的 stable context）→ 對應 grill-me Deep
- OpenSpec 的 `openspec/changes/<name>/proposal.md`（單個 change 的 scope）→ 對應 grill-me Quick

兩邊的釐清粒度剛好對上。不是巧合 — 兩個工具獨立設計時都瞄準同一組「描述軟體變更需要哪些 facet」的常識。

## 怎麼接

我目前的接法（還在調，不保證最佳）：

**第一次裝 OpenSpec 之前**，跑一個叫 `/spec clarify` 的薄 wrapper — 強制走 grill-me Deep 模式 + 鎖死用 `software-project` facet pack，輸出寫到 `openspec/project-clarifications.md`。然後 `/spec init` 啟動時自動讀這個檔，預填 `project.md` 對應 section。

**每次要開新 change 之前**，先跑 `/grill quick`。5-7 題，~5 分鐘，逼出這次要做什麼。然後再 `/opsx:propose <name>` — 第一行通常已經知道要寫什麼了。

**實作中如果發現 scope 走偏**（這在 vibe-coding 特別常見），再跑一次 `/grill quick` refocus。砍掉某些 task / 拆成兩個 change 都常發生。

**resume / handoff 那兩個 lifecycle gate 不用 grill** — 那是 session 邊界機制，不是釐清節點。硬加 grill 只會讓接手變慢。

完整的 lifecycle 跟對照表寫在 [openspec-grill-me-workflow](https://github.com/fireman333/openspec-grill-me-workflow) 這個 repo 裡，包含三層 architecture（OpenSpec CLI / `/opsx:*` slash commands / 我寫的 `/spec` lifecycle wrapper）的對照、3 個 Mermaid 流程圖、完整的 Gate × Grill 對照表，以及兩個 skill 的 source code（MIT 授權，但是是我個人 setup、有跨 skill 引用，建議先看 disclaimer 再決定要 fork 還是 study-only）。

## 用過幾週的觀察

幾個正面訊號：

- 寫 `proposal.md` 第一行的卡頓感顯著下降
- 大部分 change 從 propose 到 archive 不再中途砍掉重來（因為 scope 在 propose 之前就釐清過了）
- 新 session 接手時不需要 console 回憶「我當初為什麼這樣設計」— grill 留下的 `project-clarifications.md` + change 的 `proposal.md` 已經把 rationale 寫進檔案系統

也有一些限制：

- 對 trivial 變更（typo / dep bump / rename）grill 是 overhead — 直接 `/opsx:propose` 跳過比較快
- 對「我已經想很清楚」的場景 grill 是 friction — 但這對非 CS 背景的我很少發生，多數時候我以為自己想清楚了但其實沒有
- 整套對小專案（< 100 行 source code）overkill — 那種規模手寫 README 就夠
- 沒在 team setting 試過，多人協作的釐清節點可能要不同設計

整體還在中型 vibe-coding repo 範圍跑得順。規模上去會不會壞我不確定。

## 想自己試試

- **看 reference 版**（diagram + 對照表 + skill source）→ [github.com/fireman333/openspec-grill-me-workflow](https://github.com/fireman333/openspec-grill-me-workflow)
- **裝 OpenSpec**（Fission AI 上游）→ `npm install -g @fission-ai/openspec@latest`
- **裝我寫的 `/spec` + `/grill-me` skill**（要適配你自己的 setup）→ repo 內 [`skills/`](https://github.com/fireman333/openspec-grill-me-workflow/tree/main/skills) 目錄，MIT，read `skills/README.md` 的 disclaimer 再決定要不要 fork
- **看 Threads 短版** → [@weilingkang3 對應串文](https://www.threads.com/@weilingkang3/post/DYYuogjj66O)

歡迎指教 — Threads 留言、GitHub issue 都行。
