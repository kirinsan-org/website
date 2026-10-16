<script setup lang="ts">
const CLONE_CMD = 'git clone https://github.com/kirinsan-org/kirinsan-score.git'

const whyOpenSource = [
  'Creative Commonsと思想が合致しない',
  '人や文化、国家、そして時代による変化を許容する為',
  'オリジナルの存在を絶対視させないため',
  'オープンソースって方がカッコいいから',
]

const figs = [
  {
    no: 'FIG.01',
    stat: '40cm',
    title: '舌の長さ、40cm。',
    body: '長いのは首だけだと思っていたなら、認識を改めてほしい。きりんの舌は40cmある。40cm!!!! 40cm!!!! 40cm!!!!',
  },
  {
    no: 'FIG.02',
    stat: 'ウンボァ！',
    title: '鳴き声は「うんゔぉぁ」。',
    body: '首、長いくせに。実はウシの仲間なので、鳴く。現地(サバンナ)での正確な発音は「ウンボァ！」とされる。',
  },
  {
    no: 'FIG.03',
    stat: '奇驚網',
    title: 'ワンダーネット搭載。',
    body: '首が長いから血圧が高い。それでも頭まで血流をちゃんとながせるのは、首の毛細血管網「ワンダーネット(奇驚網)」のおかげである。',
  },
]

const XRAY_TEXT = '© JASRAC 045-0017-2 · ALL RIGHTS RESERVED · ¥ · 無断使用禁止 · '.repeat(4)

/** Apple-style copy that lights up phrase by phrase as you scroll */
const MANIFESTO: { text: string; accent?: boolean; br?: boolean }[] = [
  { text: 'このままで、' },
  { text: '良いのだろうか？', br: true },
  { text: '私たちは、' },
  { text: '真剣に考えました。', br: true },
  { text: 'オープンソースの童謡が、', accent: true },
  { text: 'これからの社会には', accent: true },
  { text: '必須だと。', accent: true },
]
const MANIFESTO_STEP = 0.7 / MANIFESTO.length

/** closing "install" session */
const TERMINAL = [
  { t: 'cmd', v: 'git clone https://github.com/kirinsan-org/kirinsan-score.git' },
  { t: 'out', v: "Cloning into 'kirinsan-score'..." },
  { t: 'out', v: 'remote: Enumerating objects: 4 locales, 1 song, 0 royalties.' },
  { t: 'out', v: 'Receiving objects: 100% (40/40), 40cm | 40cm/s, done.' },
  { t: 'cmd', v: 'head -n1 kirinsan-score/LICENSE' },
  { t: 'ok', v: 'MIT License' },
  { t: 'cmd', v: 'kirinsan --sing' },
  { t: 'out', v: '♪ きりんさん　きりんさん　クビが長いのね' },
]

const permissions = ['商用利用', '改変', '配布', '私的利用', '街中での放歌']

/** easeOutBack — overshoots slightly then settles; the ニュッ in question */
function backOut(x: number) {
  const c1 = 1.70158
  const c3 = c1 + 1
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2)
}

const copied = ref(false)
async function copyCmd() {
  try {
    await navigator.clipboard.writeText(CLONE_CMD)
    copied.value = true
    setTimeout(() => (copied.value = false), 1600)
  } catch {
    /* clipboard unavailable — no-op */
  }
}
</script>

<template>
  <div>
    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="container hero-inner">
        <Reveal :y="24">
          <p class="fig-label">The Opensource-song for the children — since 2007</p>
        </Reveal>
        <Reveal :delay="0.1">
          <h1 class="hero-title">きりんさん</h1>
        </Reveal>
        <Reveal :delay="0.25">
          <p class="hero-tagline">
            オープンソースの<span class="accent-text">ハートフル童謡</span>。
          </p>
        </Reveal>
        <Reveal :delay="0.4">
          <div class="hero-badges">
            <span class="badge">license: <b>MIT</b></span>
            <span class="badge">locales: <b>4</b></span>
            <span class="badge">royalty: <b>¥0</b></span>
            <span class="badge">tongue: <b>40cm</b></span>
          </div>
        </Reveal>
        <Reveal :delay="0.55">
          <button class="codeblock hero-clone" type="button" @click="copyCmd" :title="copied ? 'copied!' : 'クリックでコピー'">
            <span class="prompt">$ </span><span class="cmd">{{ CLONE_CMD }}</span>
            <span class="copy-state mono">{{ copied ? ' ✓ copied' : '' }}</span>
          </button>
        </Reveal>
        <Reveal :delay="0.7">
          <div class="hero-ctas">
            <NuxtLink to="/song" class="btn btn-primary">歌ってみる</NuxtLink>
            <a href="https://github.com/kirinsan-org" target="_blank" rel="noopener" class="btn btn-ghost">GitHub ↗</a>
          </div>
        </Reveal>
      </div>
      <div class="hero-scroll mono">scroll ↓</div>
    </section>

    <!-- ============ STORY ============ -->
    <section class="story">
      <!-- 問題提起 -->
      <div class="scene">
        <div>
          <Reveal :once="false" :amount="0.6">
            <p class="scene-sub" style="margin: 0 0 1.2em">親と子のための歌、童謡。</p>
          </Reveal>
          <Reveal :once="false" :amount="0.6" :delay="0.35">
            <p class="scene-text">
              誰もが無自覚に歌うその曲の<span class="accent-text">問題</span>、<br />ご存知ですか？
            </p>
          </Reveal>
        </div>
      </div>

      <!-- pinned: an x-ray scan reveals the elephant is made of copyright notices -->
      <PinScene :screens="3.5" v-slot="{ p, seg }">
        <div class="pin-stack">
          <div
            class="xray-stage"
            role="img"
            aria-label="ぞうのシルエット。スキャンすると、中身は著作権表示でできている"
            :style="{ '--scan': `${seg(p, 0.3, 0.62) * 100}%` }"
          >
            <div class="elephant-solid" />
            <div class="elephant-xray" aria-hidden="true">
              <p v-for="n in 34" :key="n" class="xray-row mono">{{ XRAY_TEXT }}</p>
            </div>
            <div class="scan-line" :style="{ opacity: seg(p, 0.27, 0.31) - seg(p, 0.62, 0.68) }" />
          </div>
          <div class="elephant-captions">
            <p
              class="scene-text pin-abs-caption"
              :style="{ opacity: seg(p, 0.02, 0.12) - seg(p, 0.26, 0.34) }"
            >
              親子に親しまれている童謡の実態は、
            </p>
            <p
              class="mono pin-abs-caption scan-status"
              :style="{ opacity: seg(p, 0.3, 0.34) - seg(p, 0.6, 0.64) }"
            >
              SCANNING「ぞうさん」… {{ Math.round(seg(p, 0.3, 0.62) * 100) }}%
            </p>
            <div class="pin-abs-caption" :style="{ opacity: seg(p, 0.64, 0.74) }">
              <p class="scene-text">管理楽曲なのです。</p>
              <p class="scene-sub mono" :style="{ opacity: seg(p, 0.74, 0.84) }">
                「ぞうさん」 JASRAC No. 045-0017-2
              </p>
            </div>
          </div>
        </div>
      </PinScene>

      <!-- pinned: 利用制限 → 著作使用料¥ の畳みかけ -->
      <PinScene :screens="3" class="pin-dark" v-slot="{ p, seg }">
        <div class="pin-stack fee-stack">
          <span
            class="fee-yen-bg mono"
            aria-hidden="true"
            :style="{ opacity: seg(p, 0.5, 0.66) * 0.1, transform: `scale(${0.8 + seg(p, 0.5, 0.8) * 0.25})` }"
            >¥</span
          >
          <div
            class="fee-premise"
            :style="{
              opacity: (0.35 + 0.65 * (1 - seg(p, 0.42, 0.54))) * seg(p, 0.04, 0.14),
              transform: `translateY(${-seg(p, 0.42, 0.54) * 12}px) scale(${1 - seg(p, 0.42, 0.54) * 0.06})`,
            }"
          >
            <p class="fee-line">即ち、自由な利用は出来ず、</p>
            <p
              class="fee-line"
              :style="{ opacity: seg(p, 0.18, 0.3) }"
            >
              街中での放歌も許諾が必要。
            </p>
          </div>
          <p
            class="scene-text-giant fee-punch"
            :style="{
              opacity: seg(p, 0.48, 0.6),
              transform: `scale(${1.25 - Math.min(seg(p, 0.48, 0.64), 1) * 0.25})`,
            }"
          >
            如何なる使用にも<br /><span class="yen">著作使用料</span>が発生。
          </p>
        </div>
      </PinScene>

      <!-- pinned: the manifesto lights up phrase by phrase -->
      <PinScene :screens="2.6" v-slot="{ p, seg }">
        <div class="container manifesto">
          <p class="manifesto-copy">
            <template v-for="(s, i) in MANIFESTO" :key="i">
              <span
                class="mf-seg"
                :class="{ 'accent-text': s.accent }"
                :style="{ opacity: 0.14 + 0.86 * seg(p, 0.06 + i * MANIFESTO_STEP, 0.06 + (i + 1) * MANIFESTO_STEP) }"
                >{{ s.text }}</span
              ><br v-if="s.br" />
            </template>
          </p>
        </div>
      </PinScene>

      <!-- why open source -->
      <div class="scene scene-list">
        <div class="container">
          <Reveal>
            <p class="fig-label">Why Open Source?</p>
            <h2 class="section-title" style="margin: 0.4em 0 1.2em">なぜオープンソースなのか？</h2>
          </Reveal>
          <ul class="why-list">
            <Reveal v-for="(w, i) in whyOpenSource" :key="w" :delay="i * 0.12">
              <li class="why-item">
                <span class="mono why-no">{{ String(i + 1).padStart(2, '0') }}</span>
                <span>{{ w }}</span>
              </li>
            </Reveal>
          </ul>
        </div>
      </div>

      <!-- pinned: 象は、だめだ。→(でが割り込む)→ 象では、だめなんだ。 -->
      <PinScene :screens="3" v-slot="{ p, seg }">
        <div class="pin-stack">
          <p class="dame-kicker">
            我々は、作りました。<br />では、何を歌う歌にしようか？
          </p>
          <p
            class="scene-text-giant pin-abs-caption dame-line"
            :style="{
              opacity: seg(p, 0.05, 0.18),
              transform: `scale(${0.94 + seg(p, 0.05, 1) * 0.12})`,
            }"
          >
            <span>象</span
            ><span
              class="dame-insert"
              :style="{ width: `${seg(p, 0.38, 0.56) * 1}em`, opacity: seg(p, 0.42, 0.6) }"
              >で</span
            ><span>は、だめ</span
            ><span
              class="dame-insert"
              :style="{ width: `${seg(p, 0.38, 0.56) * 2}em`, opacity: seg(p, 0.42, 0.6) }"
              >なん</span
            ><span>だ。</span>
          </p>
        </div>
      </PinScene>

      <!-- kirin reveal: the neck extends from below, faster than you scroll -->
      <PinScene :screens="3.5" v-slot="{ p, seg }">
        <div class="kirin-scene">
          <p
            class="scene-text kirin-question"
            :style="{
              opacity: 1 - seg(p, 0.14, 0.24),
              transform: `translateY(${-seg(p, 0.14, 0.24) * 40}px)`,
            }"
          >
            では、象以上に愛されうる動物とは？
          </p>
          <div
            class="giraffe"
            aria-hidden="true"
            :style="{ '--neck-h': `${backOut(seg(p, 0.18, 0.55)) * 58}svh` }"
          >
            <!-- head rides on top of the stretching neck -->
            <svg viewBox="0 0 200 142" class="g-head">
              <!-- ears -->
              <ellipse cx="56" cy="74" rx="17" ry="8" fill="#EDB53E" transform="rotate(-28 56 74)" />
              <ellipse cx="144" cy="74" rx="17" ry="8" fill="#EDB53E" transform="rotate(28 144 74)" />
              <!-- ossicones -->
              <rect x="84" y="14" width="7" height="30" rx="3.5" fill="#EDB53E" />
              <rect x="109" y="14" width="7" height="30" rx="3.5" fill="#EDB53E" />
              <circle cx="87.5" cy="12" r="9" fill="#A9691F" />
              <circle cx="112.5" cy="12" r="9" fill="#A9691F" />
              <!-- head -->
              <ellipse cx="100" cy="85" rx="35" ry="44" fill="#EDB53E" />
              <!-- muzzle -->
              <ellipse cx="100" cy="110" rx="23" ry="17" fill="#F4D391" />
              <ellipse cx="92" cy="106" rx="3" ry="4.5" fill="#7A4D1C" transform="rotate(-15 92 106)" />
              <ellipse cx="108" cy="106" rx="3" ry="4.5" fill="#7A4D1C" transform="rotate(15 108 106)" />
              <!-- eyes -->
              <circle cx="82" cy="73" r="4.5" fill="#2B1C0A" />
              <circle cx="118" cy="73" r="4.5" fill="#2B1C0A" />
            </svg>
            <!-- the neck itself grows; patches tile instead of stretching -->
            <div class="g-neck"></div>
          </div>
          <div
            class="kirin-caption"
            :style="{
              opacity: seg(p, 0.6, 0.72),
              transform: `translateX(${(1 - seg(p, 0.6, 0.72)) * -28}px)`,
            }"
          >
            <p class="kirin-ruby">きりん</p>
            <p class="kirin-kanji">麒麟</p>
            <p class="kirin-en mono">Giraffe</p>
          </div>
        </div>
      </PinScene>
    </section>

    <!-- ============ FIG FEATURES ============ -->
    <section class="page-section figs">
      <div class="container">
        <Reveal>
          <p class="fig-label">Features</p>
          <h2 class="section-title" style="margin: 0.4em 0 0.6em">
            きりんは、もっとも面白い動物の一つ。
          </h2>
          <p style="color: var(--fg-muted); max-width: 38em">
            だから歌になった。主な仕様は以下の通りです。すべて歌詞に収録されています。
          </p>
        </Reveal>
        <div class="fig-grid">
          <Reveal v-for="(f, i) in figs" :key="f.no" :delay="i * 0.12">
            <article class="fig-card">
              <p class="fig-label">{{ f.no }}</p>
              <p class="fig-stat accent-text">{{ f.stat }}</p>
              <h3 class="fig-title">{{ f.title }}</h3>
              <p class="fig-body">{{ f.body }}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ============ DEMO → /song ============ -->
    <section class="page-section demo">
      <div class="container demo-inner">
        <Reveal>
          <LyricPreview />
        </Reveal>
        <div>
          <Reveal>
            <p class="fig-label">Live Demo</p>
            <h2 class="section-title" style="margin: 0.4em 0 0.8em">聴ける。歌える。同期する。</h2>
            <p style="color: var(--fg-muted); margin-bottom: 2em">
              公式音源を、タイムスタンプ同期歌詞付きで再生できます。カラオケの練習にも、お子様への英才教育にもどうぞ。
            </p>
            <NuxtLink to="/song" class="btn btn-primary">デモを再生 ▶</NuxtLink>
          </Reveal>
        </div>
      </div>
    </section>

    <!-- ============ LICENSE ============ -->
    <section class="page-section license-sec">
      <div class="container" style="text-align: center">
        <Reveal>
          <p class="scene-text">楽曲は、もちろんオープンソースです。</p>
          <p class="scene-sub" style="margin-bottom: 2.5em">OSSは、ライセンスが命。</p>
        </Reveal>
        <Reveal :delay="0.1">
          <div class="lic-card">
            <div class="lic-head">
              <p class="fig-label">License</p>
              <h3 class="lic-title">MIT License</h3>
              <p class="lic-desc">
                もっとも先進的かつオープンなライセンスを、童謡に。著作権表示とライセンス表示さえ残せば、あとは何をしても自由です。
              </p>
            </div>
            <div class="lic-cols">
              <div>
                <p class="lic-col-title">Permissions</p>
                <ul class="lic-list">
                  <li v-for="perm in permissions" :key="perm"><span class="lic-ok">✓</span>{{ perm }}</li>
                </ul>
              </div>
              <div>
                <p class="lic-col-title">Limitations</p>
                <ul class="lic-list">
                  <li><span class="lic-ng">✕</span>責任</li>
                  <li><span class="lic-ng">✕</span>保証</li>
                </ul>
                <p class="lic-note">1000枚プレスして爆死しても、誰も責任を負いません。</p>
              </div>
              <div>
                <p class="lic-col-title">Conditions</p>
                <ul class="lic-list">
                  <li><span class="lic-info">ⓘ</span>著作権表示とライセンス表示</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal :delay="0.2">
          <NuxtLink to="/license" class="btn btn-ghost" style="margin-top: 2.5rem">ライセンス全文を読む</NuxtLink>
        </Reveal>
      </div>
    </section>

    <!-- ============ CD teaser ============ -->
    <section class="page-section cd-teaser">
      <div class="container demo-inner">
        <div>
          <Reveal>
            <p class="fig-label">Physical Distribution</p>
            <h2 class="section-title" style="margin: 0.4em 0 0.8em">
              首も長い、舌も長い、<br />ついでに言うと、歴史も長い。
            </h2>
            <p style="color: var(--fg-muted); margin-bottom: 2em">
              C84で頒布された5周年記念ディストリビューション「きりんさん 5周年記念盤」。
              ダウンロード全盛の時代に、1000枚がプレスされました。正気です。
            </p>
            <NuxtLink to="/cd" class="btn btn-primary">CDを見る</NuxtLink>
          </Reveal>
        </div>
        <Reveal :delay="0.15">
          <img src="/img/cd_cover.webp" alt="きりんさん 5周年記念盤 ジャケット" class="demo-kv cd-tilt" />
        </Reveal>
      </div>
    </section>

    <!-- ============ GET KIRINSAN ============ -->
    <section class="page-section get-sec">
      <div class="container get-inner">
        <Reveal>
          <p class="fig-label">Get Kirinsan</p>
          <h2 class="section-title" style="margin: 0.4em 0 0.6em">
            未来を見据えて、<br />誰しもが楽しめる<span style="white-space: nowrap">楽曲を。</span>
          </h2>
          <p style="color: var(--fg-muted); margin-bottom: 2em; max-width: 30em">
            インストールは不要です。クローンして、歌ってください。フォークも歓迎します。
          </p>
          <div class="hero-ctas" style="justify-content: flex-start">
            <NuxtLink to="/song" class="btn btn-primary">歌詞と楽譜</NuxtLink>
            <a href="https://github.com/kirinsan-org" target="_blank" rel="noopener" class="btn btn-ghost">
              kirinsan-org on GitHub ↗
            </a>
          </div>
        </Reveal>
        <Reveal :delay="0.15">
          <div class="term" aria-label="ターミナルの実行例">
            <div class="term-bar">
              <span /><span /><span />
              <span class="mono term-title">kirinsan — zsh</span>
            </div>
            <div class="term-body mono">
              <p v-for="(l, i) in TERMINAL" :key="i" class="term-line" :class="'term-' + l.t">
                <span v-if="l.t === 'cmd'" class="term-prompt">$ </span>{{ l.v }}
              </p>
              <p class="term-line"><span class="term-prompt">$ </span><span class="term-cursor" /></p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ---------- hero ---------- */
.hero {
  min-height: 100svh;
  display: grid;
  place-items: center;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(ellipse 60% 45% at 50% 118%, rgba(247, 148, 29, 0.22), transparent),
    radial-gradient(ellipse 45% 32% at 50% 108%, rgba(255, 196, 0, 0.16), transparent),
    var(--bg);
}

/* a whisper of giraffe hide behind the glow */
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('/img/giraffe-pattern.svg') 50% 100% / 240px 240px repeat;
  opacity: 0.07;
  mask-image: radial-gradient(ellipse 70% 55% at 50% 110%, #000, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 70% 55% at 50% 110%, #000, transparent 70%);
  pointer-events: none;
}

[data-theme='light'] .hero::before {
  opacity: 0.16;
}

.hero-inner {
  position: relative;
  text-align: center;
  display: grid;
  gap: 1.4rem;
  padding-top: 56px;
}

.hero-title {
  font-size: var(--text-hero);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.01em;
  background: linear-gradient(180deg, var(--fg) 55%, color-mix(in srgb, var(--fg) 62%, var(--orange)));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-tagline {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--fg-muted);
}

.hero-tagline .accent-text {
  font-weight: 900;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.hero-clone {
  cursor: pointer;
  display: inline-block;
  border: 1px solid var(--line);
  max-width: 92vw;
}

.copy-state {
  color: var(--yellow);
  font-size: 0.8em;
}

.hero-ctas {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-scroll {
  position: absolute;
  bottom: 1.6rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.72rem;
  color: var(--fg-muted);
  animation: bob 2.2s ease-in-out infinite;
}

@keyframes bob {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 8px);
  }
}

/* ---------- story scenes ---------- */
.scene {
  min-height: 92svh;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 2rem 5vw;
}

.scene-dark {
  background: #000;
}

/* ---------- pinned scenes ---------- */
.pin-stack {
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 2rem;
}

/* elephant x-ray: right of the scan line is the silhouette, left is what it's made of */
.xray-stage {
  position: relative;
  width: clamp(260px, 42vw, 520px);
  aspect-ratio: 1780 / 1472;
}

.elephant-solid,
.elephant-xray {
  position: absolute;
  inset: 0;
  mask: url('/img/elephant.svg') center / contain no-repeat;
  -webkit-mask: url('/img/elephant.svg') center / contain no-repeat;
}

.elephant-solid {
  background: var(--fg);
  clip-path: inset(0 0 0 var(--scan));
}

.elephant-xray {
  background: #160707;
  clip-path: inset(0 calc(100% - var(--scan)) 0 0);
  overflow: hidden;
  display: grid;
  align-content: center;
}

.xray-row {
  font-size: clamp(7px, 0.85vw, 11px);
  line-height: 1.3;
  letter-spacing: 0.05em;
  white-space: nowrap;
  color: #ff4a3d;
}

.xray-row:nth-child(even) {
  transform: translateX(-4.5em);
  color: #ffb13d;
}

.scan-line {
  position: absolute;
  top: -8%;
  bottom: -8%;
  left: var(--scan);
  width: 2px;
  translate: -1px 0;
  background: #ff4a3d;
  box-shadow:
    0 0 12px 2px rgba(255, 74, 61, 0.7),
    0 0 60px 12px rgba(255, 74, 61, 0.25);
}

.scan-status {
  font-size: 0.8rem;
  letter-spacing: 0.14em;
  color: #ff4a3d;
}

/* manifesto — Apple-style phrase-by-phrase light-up */
.manifesto {
  text-align: left;
}

.manifesto-copy {
  font-size: clamp(2rem, 5.6vw, 4.4rem);
  font-weight: 900;
  line-height: 1.4;
  letter-spacing: 0.01em;
}

.mf-seg {
  display: inline-block; /* wrap by phrase, never mid-phrase */
  will-change: opacity;
}

.dame-kicker {
  position: absolute;
  top: 18svh;
  left: 0;
  right: 0;
  color: var(--fg-muted);
  font-size: var(--text-lg);
  font-weight: 500;
  line-height: 1.7;
}

.elephant-captions {
  position: relative;
  width: 100%;
  min-height: 7em;
}

.pin-abs-caption {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  translate: 0 -50%;
  will-change: opacity, transform;
}

/* 利用制限→著作使用料 pinned scene — stays pitch black in both themes */
.pin-dark :deep(.pin-viewport) {
  background: #000;
  --fg: #f5f2ea;
  --fg-muted: #9a948a;
  --yellow: #ffc400;
  color: var(--fg);
}

.fee-stack {
  gap: clamp(1.5rem, 4vh, 3rem);
}

.fee-premise {
  will-change: opacity, transform;
}

.fee-line {
  font-size: var(--text-xl);
  font-weight: 700;
  line-height: 1.6;
  color: var(--fg-muted);
  text-wrap: balance;
}

.fee-punch {
  will-change: opacity, transform;
  text-wrap: balance;
  font-size: clamp(2rem, 6.5vw, 5rem);
}

.fee-punch .yen {
  text-shadow: 0 0 40px rgba(224, 27, 36, 0.45);
}

.fee-yen-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -54%;
  font-size: clamp(16rem, 70svh, 40rem);
  font-weight: 500;
  line-height: 1;
  color: #e01b24;
  pointer-events: none;
  will-change: opacity, transform;
}

.dame-line {
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
}

.dame-insert {
  display: block;
  overflow: hidden;
  color: var(--yellow);
  will-change: width, opacity;
}

@media (prefers-reduced-motion: reduce) {
  .pin-abs-caption {
    transform: none !important;
  }
}

.scene-text {
  font-size: var(--text-xl);
  font-weight: 700;
  line-height: 1.5;
}

.scene-text-giant {
  font-size: var(--text-giant);
  font-weight: 900;
  line-height: 1.35;
  letter-spacing: 0.01em;
}

.scene-sub {
  margin-top: 1.2em;
  color: var(--fg-muted);
  font-size: var(--text-lg);
}

.yen {
  color: #e01b24;
}

/* why list */
.scene-list {
  min-height: auto;
  padding: clamp(4rem, 12vh, 9rem) 0;
  text-align: left;
}

.why-list {
  list-style: none;
  display: grid;
  gap: 0;
  max-width: 46em;
}

.why-item {
  display: flex;
  gap: 1.4em;
  align-items: baseline;
  padding: 1.1em 0;
  border-bottom: 1px solid var(--line);
  font-size: var(--text-lg);
  font-weight: 700;
}

.why-no {
  color: var(--yellow);
  font-size: 0.8em;
}

/* kirin reveal — neck extends from below, faster than the scroll */
.kirin-scene {
  position: absolute;
  inset: 0;
}

.giraffe {
  --gw: clamp(150px, 22vw, 250px);
  position: absolute;
  bottom: 0;
  left: 70%;
  transform: translateX(-50%);
  width: var(--gw);
  pointer-events: none;
}

.g-neck {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 42%;
  height: var(--neck-h);
  background: #edb53e url('/img/giraffe-pattern.svg') 50% 100% / 160px 160px repeat;
  border-radius: 60px 60px 0 0;
  will-change: height;
}

.g-head {
  position: absolute;
  z-index: 1;
  bottom: calc(var(--neck-h) - var(--gw) * 0.14); /* chin overlaps the neck top */
  left: 0;
  width: 100%;
  will-change: bottom;
}

.kirin-question {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  translate: 0 -50%;
  padding: 0 5vw;
  will-change: opacity, transform;
}

.kirin-caption {
  position: absolute;
  top: 50%;
  left: clamp(1.2rem, 10vw, 14rem);
  translate: 0 -50%;
  text-align: left;
  max-width: 52vw;
  will-change: opacity, transform;
}

@media (min-width: 860px) {
  .giraffe {
    left: 64%;
  }
}

.kirin-ruby {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--fg);
}

.kirin-kanji {
  font-size: clamp(4rem, 14vw, 11rem);
  font-weight: 900;
  line-height: 1.15;
  color: var(--fg);
}

.kirin-en {
  font-size: var(--text-lg);
  color: var(--fg-muted);
}

@media (prefers-reduced-motion: reduce) {
  .g-neck {
    height: 58svh !important;
  }

  .g-head {
    bottom: calc(58svh - var(--gw) * 0.14) !important;
  }
}

/* ---------- figs ---------- */
.figs {
  border-top: 1px solid var(--line);
}

.fig-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.2rem;
  margin-top: 3rem;
}

.fig-card {
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1.8rem 1.6rem;
  height: 100%;
  transition: border-color 0.3s, transform 0.3s;
}

.fig-card:hover {
  border-color: rgba(255, 196, 0, 0.45);
  transform: translateY(-3px);
}

.fig-stat {
  font-size: clamp(2.4rem, 4.2vw, 3.6rem);
  font-weight: 900;
  line-height: 1.1;
  margin: 0.45em 0 0.5em;
  letter-spacing: -0.01em;
}

.fig-title {
  font-size: 1.15rem;
  font-weight: 900;
  margin: 0 0 0.6em;
}

.fig-body {
  color: var(--fg-muted);
  font-size: 0.92rem;
}

/* ---------- demo / cd teaser ---------- */
.demo-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}

.demo-kv {
  border-radius: 20px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.55);
}

.cd-tilt {
  transform: rotate(2deg);
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.cd-tilt:hover {
  transform: rotate(0deg) scale(1.02);
}

.demo,
.cd-teaser,
.license-sec,
.get-sec {
  border-top: 1px solid var(--line);
}

/* ---------- closing terminal ---------- */
.get-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}

.term {
  background: #0d0c0a;
  border: 1px solid var(--line);
  border-radius: 14px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  --fg: #e8e3d6;
  --fg-muted: #8c8676;
  color: var(--fg);
}

.term-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0.7rem 0.9rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.term-bar > span:not(.term-title) {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #3a3630;
}

.term-title {
  margin-left: auto;
  margin-right: auto;
  font-size: 0.7rem;
  color: var(--fg-muted);
}

.term-body {
  padding: 1.1rem 1.2rem 1.2rem;
  font-size: 0.8rem;
  line-height: 1.85;
}

.term-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.term-cmd {
  white-space: pre-wrap; /* commands must stay copyable in full */
  word-break: break-all;
}

.term-prompt {
  color: var(--yellow);
}

.term-out {
  color: var(--fg-muted);
}

.term-ok {
  color: var(--yellow);
  font-weight: 500;
}

.term-cursor {
  display: inline-block;
  width: 0.6em;
  height: 1.1em;
  vertical-align: -0.2em;
  background: var(--fg);
  animation: blink 1.1s steps(2) infinite;
}

@keyframes blink {
  to {
    opacity: 0;
  }
}

/* ---------- license card (GitHub-sidebar style) ---------- */
.lic-card {
  max-width: 760px;
  margin: 0 auto;
  text-align: left;
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 20px;
  overflow: hidden;
}

.lic-head {
  padding: 1.8rem 2rem 1.5rem;
  border-bottom: 1px solid var(--line);
}

.lic-title {
  font-size: 1.6rem;
  font-weight: 900;
  margin: 0.25em 0 0.4em;
}

.lic-desc {
  color: var(--fg-muted);
  font-size: 0.92rem;
}

/* 1px gaps over a line-colored background draw the dividers */
.lic-cols {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1px;
  background: var(--line);
}

.lic-cols > div {
  padding: 1.4rem 2rem 1.8rem;
  background: var(--bg-elevated);
}

@media (min-width: 820px) {
  .lic-cols {
    grid-template-columns: repeat(3, 1fr);
  }
}

.lic-col-title {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--fg-muted);
  margin-bottom: 0.8em;
}

.lic-list {
  list-style: none;
  display: grid;
  gap: 0.45em;
  font-size: 0.92rem;
  font-weight: 700;
}

.lic-list li {
  display: flex;
  gap: 0.6em;
  align-items: baseline;
}

.lic-ok {
  color: var(--yellow);
}

.lic-ng {
  color: #e5534b;
}

.lic-info {
  color: var(--fg-muted);
}

.lic-note {
  margin-top: 1em;
  font-size: 0.78rem;
  color: var(--fg-muted);
}
</style>
