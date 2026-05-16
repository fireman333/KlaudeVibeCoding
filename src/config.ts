export const SITE = {
  title: '康勞德亂碼',
  tagline: 'Notes from a non-CS-background vibe-coder building with LLMs',
  description:
    '台大醫學生 WLK 學 Claude Code / LLM workflow / vibe-coding 過程的觀察筆記。從踩坑到 pattern 累積，hedge-rich、誠懇、留下可被打臉的空間。',
  author: '康瑋麟（WLK）',
  lang: 'zh-Hant-TW',
  url: 'https://fireman333.github.io',
  base: '/KlaudeVibeCoding',
  ogImage: 'og-default.png',
} as const;

export const NAV = [
  { href: '/', label: '首頁' },
  { href: '/categories/', label: '主題' },
  { href: '/about/', label: '關於' },
  { href: '/feed.xml', label: 'RSS' },
] as const;
