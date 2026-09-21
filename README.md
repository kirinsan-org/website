# kirinsan.org — website

オープンソースのハートフル童謡「きりんさん」公式サイト。

> そう、ぞうじゃだめなんだ。

- 企画概要: [PLAN.md](./PLAN.md)
- 楽譜・歌詞: [kirinsan-org/kirinsan-score](https://github.com/kirinsan-org/kirinsan-score)

## Stack

- [Nuxt](https://nuxt.com/)(完全静的生成、CMSなし)
- [Motion](https://motion.dev/)(motion-v) — スクロール演出
- ホスティング: Cloudflare(予定)

## Development

```bash
pnpm install
pnpm dev       # 開発サーバー
pnpm generate  # 静的生成 → .output/public
```

## Structure

```
pages/        LP(index) / song / cd / showcase / license
data/         歌詞(.lrc由来のタイムスタンプ付き)・showcase事例
components/   Reveal(スクロールリビール)
public/       音源(m4a/ogg)・楽譜PNG・画像素材
assets-work/  素材作業場(スライド抽出・CD入稿データ等。デプロイ対象外)
```

## License

- サイトコード: MIT
- 楽曲「きりんさん」: MIT License(歌詞・楽譜・音源)
