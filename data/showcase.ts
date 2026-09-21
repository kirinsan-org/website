export interface ShowcaseItem {
  name: string
  description: string
  tech: string
  url: string
}

/** kirinsan.org のもう一つの軸 — ハッカソン等で生まれてきたプロダクト群 */
export const SHOWCASE: ShowcaseItem[] = [
  {
    name: 'kirinsampler-web',
    description:
      'きりんさんぷらー。いつでもどこでもだれとでも、きりんさんを演奏できるサンプラー。いいよね。きりんさん。',
    tech: 'HTML / Web Audio',
    url: 'https://github.com/kirinsan-org/kirinsampler-web',
  },
  {
    name: 'kirinsampler-flutter',
    description: 'きりんさんぷらーのFlutter実装。サンプラーはプラットフォームを選ばない。',
    tech: 'Dart / Flutter',
    url: 'https://github.com/kirinsan-org/kirinsampler-flutter',
  },
  {
    name: 'kirinsampler-android',
    description: 'きりんさんぷらー for Android。ネイティブ実装の原点。',
    tech: 'Java / Android',
    url: 'https://github.com/kirinsan-org/kirinsampler-android',
  },
  {
    name: 'HydrogenBooster',
    description: '「水素水はつくれる」。ハッカソンが生んだ、あの水素水を、つくる。',
    tech: 'CSS',
    url: 'https://github.com/kirinsan-org/HydrogenBooster',
  },
  {
    name: 'kirinlyric',
    description:
      '.lrc歌詞をaudioタグと自動同期するjQueryプラグイン。本サイトの歌詞プレイヤーの精神的祖先。',
    tech: 'JavaScript / jQuery',
    url: 'https://github.com/kirinsan-org/kirinlyric',
  },
  {
    name: 'kirinsan-score',
    description: '楽譜リポジトリ。LilyPond形式で、日本語・英語・鹿児島・沖縄の4ローカライズを収録。',
    tech: 'LilyPond',
    url: 'https://github.com/kirinsan-org/kirinsan-score',
  },
  {
    name: 'wmh2016',
    description: 'World Maker Hackathon 2016 出場作。詳細はリポジトリの奥深くに眠る。',
    tech: 'JavaScript',
    url: 'https://github.com/kirinsan-org/wmh2016',
  },
  {
    name: 'ALPS',
    description: 'ALPSセンサーモジュールをSwiftから使うためのライブラリ。ハッカソンの副産物。',
    tech: 'Swift',
    url: 'https://github.com/kirinsan-org/ALPS',
  },
]
