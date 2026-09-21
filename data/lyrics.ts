export interface LyricLine {
  /** seconds from track start (from kirinsan_ongen.lrc) */
  t: number
  text: string
  /** 1-origin verse number */
  verse: number
  /** emphasized shout line (40cm!!!! etc.) */
  shout?: boolean
}

export const TRACK = {
  title: 'きりんさん',
  credit: '作詞/作曲: kirinsan.org',
  m4a: '/audio/kirinsan_ongen.m4a',
  ogg: '/audio/kirinsan_ongen.ogg',
}

export const LYRICS: LyricLine[] = [
  { t: 7.98, verse: 1, text: 'きりんさん　きりんさん' },
  { t: 11.56, verse: 1, text: 'クビが長いのね' },
  { t: 15.32, verse: 1, text: 'きりんさん きりんさん' },
  { t: 18.93, verse: 1, text: 'ツノもあるのね' },
  { t: 22.91, verse: 1, text: 'だけど体の長い部分' },
  { t: 26.09, verse: 1, text: 'それだけじゃないんだぜ' },
  { t: 29.91, verse: 1, text: '実は、舌も、長いんだぜ！' },
  { t: 33.85, verse: 1, text: '40cm!!!!', shout: true },
  { t: 34.61, verse: 1, text: '40cm!!!!', shout: true },
  { t: 35.33, verse: 1, text: '40cm!!!!', shout: true },
  { t: 37.54, verse: 1, text: 'イイヨネ、きりんさん。' },
  { t: 45.37, verse: 2, text: 'きりんさん きりんさん' },
  { t: 48.96, verse: 2, text: 'ウマに似てるよね' },
  { t: 52.7, verse: 2, text: 'きりんさん きりんさん' },
  { t: 56.25, verse: 2, text: '実は違うのね' },
  { t: 60.01, verse: 2, text: '実はウシの仲間だぜ' },
  { t: 63.77, verse: 2, text: '首、長いくせに' },
  { t: 67.05, verse: 2, text: 'だから、実は鳴くんだぜ' },
  { t: 70.87, verse: 2, text: 'ウンボァ！', shout: true },
  { t: 71.89, verse: 2, text: 'ウンボァ！', shout: true },
  { t: 72.63, verse: 2, text: 'ウンボァ！', shout: true },
  { t: 75.44, verse: 2, text: 'イイヨネ、きりんさん。' },
  { t: 79.87, verse: 3, text: 'きりんさん きりんさん' },
  { t: 83.32, verse: 3, text: '首が長いから' },
  { t: 86.82, verse: 3, text: 'キリンさん キリンさん' },
  { t: 90.49, verse: 3, text: '血圧高いんだぜ' },
  { t: 94.36, verse: 3, text: 'だから長い首だけど' },
  { t: 98.14, verse: 3, text: 'ちゃんと頭まで' },
  { t: 101.46, verse: 3, text: '血流ちゃんとながせるぜ' },
  { t: 104.99, verse: 3, text: 'ワンダーネット！！', shout: true },
  { t: 105.99, verse: 3, text: 'ワンダーネット！！', shout: true },
  { t: 106.8, verse: 3, text: 'ワンダーネット！！', shout: true },
  { t: 110.05, verse: 3, text: 'イイヨネ、キリンさん。' },
]

export const LOCALES = [
  { code: 'ja', label: '日本語(標準)', file: 'kirinsan_ja.ly' },
  { code: 'en', label: 'English', file: 'kirinsan_en.ly' },
  { code: 'ja-kagoshima', label: '日本語(鹿児島)', file: 'kirinsan_kagoshima.ly' },
  { code: 'ja-okinawa', label: '日本語(沖縄)', file: 'kirinsan_okinawa.ly' },
]
