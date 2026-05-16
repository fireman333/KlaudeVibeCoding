# 康勞德亂碼（KlaudeVibeCoding）

> Notes from a non-CS-background vibe-coder building with LLMs.
> Sister site to [康勞德醫普 (KlaudeHealthEducation)](https://fireman333.github.io/KlaudeHealthEducation/).

**Live site**: <https://fireman333.github.io/KlaudeVibeCoding/>

---

## 站點性質

台大醫學生 WLK 學 Claude Code / LLM workflow / vibe-coding 過程的觀察筆記。長文 deep-dive 為主、跟 Threads 串文 + 各 workflow 的 GitHub repo 形成三角。

**Phase A → Phase B**：初期 hedge-rich、學習日記語氣，慢慢演化到帶 evidence 的 architecture observation。每篇 frontmatter 標 `phase: "A"` 或 `"B"`。

---

## Stack

- [Astro 5](https://astro.build/) + Content Collections（type-safe markdown）
- TypeScript + Zod schema
- GitHub Pages（Actions auto-deploy on push to `main`）
- pnpm 9
- Sister-site CSS palette swap：warm cream surface + teal accent（vs 醫普的 sage + terracotta）

---

## 本地開發

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # 含 astro check + astro build
pnpm preview      # 本地預覽 build 產物
```

需要 Node ≥ 20、pnpm 9（`corepack enable` 即可）。

---

## 新增文章

```bash
# 1. 在 src/content/posts/ 建 markdown 檔，檔名 = slug
touch src/content/posts/$(date +%Y-%m-%d)-my-post-slug.md
```

最小 frontmatter：

```yaml
---
title: "我的文章標題"
date: 2026-05-16
summary: "一句摘要，會出現在首頁 card 跟 OG description"
categories: ["skill-design"]   # 出現在首頁 chip + categories 頁
tags: ["claude-code", "mcp"]   # 內部組織用
phase: "A"                      # "A" 或 "B"
draft: false                    # true 不會發布
---

文章本文……
```

可選 frontmatter：

- `description` — 比 summary 更長的 meta description（OG / Twitter card 用）
- `sources` — 參考連結陣列 `[{ title, url, note }]`
- `carousel` — 圖片懶人包 `[{ src, alt, caption, threads_text }]`
- `repo` — 對應 GitHub repo URL
- `threads_thread` — 對應 Threads thread 第一則 permalink

完整 schema 在 [`src/content/config.ts`](src/content/config.ts)。

---

## 部署

Push to `main` → `.github/workflows/deploy.yml` 自動 build + deploy GitHub Pages。

第一次 enable：repo Settings → Pages → Source 選 **GitHub Actions**（不是 branch deploy）。

---

## 內容 license

文章 / diagram / 截圖 預設 CC-BY-4.0（同作者其他 repo 慣例）。Stack code（Astro layouts / config / styles）MIT（衍生自 KlaudeHealthEducation 結構）。

---

## 相關 channels

| 出口 | 用途 |
|---|---|
| 本站 | 長文 deep-dive |
| [Threads `@weilingkang3`](https://www.threads.com/@weilingkang3) | 短文觀察串、`<康勞德日記>` 系列 |
| [康勞德醫普 (KlaudeHealthEducation)](https://github.com/fireman333/KlaudeHealthEducation) | 醫學科普給大眾，另一條 track |
| 各 workflow repo | 例 [openspec-grill-me-workflow](https://github.com/fireman333/openspec-grill-me-workflow) |

---

Built with [Claude Code](https://claude.com/claude-code).
