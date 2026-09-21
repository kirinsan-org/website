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
    title: '舌の長さ、40cm。',
    body: '長いのは首だけだと思っていたなら、認識を改めてほしい。きりんの舌は40cmある。40cm!!!! 40cm!!!! 40cm!!!!',
  },
  {
    no: 'FIG.02',
    title: '鳴き声は「うんゔぉぁ」。',
    body: '首、長いくせに。実はウシの仲間なので、鳴く。現地(サバンナ)での正確な発音は「ウンボァ！」とされる。',
  },
  {
    no: 'FIG.03',
    title: 'ワンダーネット搭載。',
    body: '首が長いから血圧が高い。それでも頭まで血流をちゃんとながせるのは、首の毛細血管網「ワンダーネット(奇驚網)」のおかげである。',
  },
]

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

      <!-- pinned: elephant turns into a skeleton as you scroll -->
      <PinScene :screens="3" v-slot="{ p, seg }">
        <div class="pin-stack">
          <div class="elephant-stage">
            <img
              src="/img/elephant_silhouette.png"
              alt="ぞうのシルエット"
              class="scene-img scene-img-plain pin-abs"
              :style="{ opacity: 1 - seg(p, 0.35, 0.52) }"
            />
            <img
              src="/img/elephant_skeleton.png"
              alt="ぞうの骨格"
              class="scene-img pin-abs"
              :style="{ opacity: seg(p, 0.35, 0.52) }"
            />
          </div>
          <div class="elephant-captions">
            <p
              class="scene-text pin-abs-caption"
              :style="{ opacity: seg(p, 0.02, 0.14) - seg(p, 0.38, 0.5) }"
            >
              親子に親しまれている童謡の実態は、
            </p>
            <div
              class="pin-abs-caption"
              :style="{ opacity: seg(p, 0.52, 0.66) }"
            >
              <p class="scene-text">管理楽曲なのです。</p>
              <p class="scene-sub mono" :style="{ opacity: seg(p, 0.66, 0.8) }">
                「ぞうさん」 JASRAC No. 045-0017-2
              </p>
            </div>
          </div>
        </div>
      </PinScene>

      <!-- pinned: 利用制限 → 著作使用料¥ の畳みかけ -->
      <PinScene :screens="3" class="pin-dark" v-slot="{ p, seg }">
        <div class="pin-stack fee-stack">
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
            如何なる使用にも<br /><span class="yen">著作使用料¥</span>が発生。
          </p>
        </div>
      </PinScene>

      <div class="scene">
        <Reveal :once="false" :amount="0.6">
          <p class="scene-text-giant">このままで、良いのだろうか？</p>
        </Reveal>
      </div>

      <div class="scene">
        <Reveal :once="false" :amount="0.6">
          <p class="scene-text">私たちは、真剣に考えました。</p>
          <p class="scene-text-giant accent-text" style="margin-top: 0.6em">
            オープンソースの童謡が、<br />これからの社会には必須。
          </p>
        </Reveal>
      </div>

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

      <div class="scene">
        <Reveal :once="false" :amount="0.6">
          <p class="scene-text">我々は、作りました。</p>
          <p class="scene-sub">— では、何を歌う歌にしようか？</p>
        </Reveal>
      </div>

      <!-- pinned: 象は、だめだ。→(でが割り込む)→ 象では、だめなんだ。 -->
      <PinScene :screens="3" v-slot="{ p, seg }">
        <div class="pin-stack">
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

      <div class="scene">
        <Reveal :once="false" :amount="0.6">
          <p class="scene-text">では、象以上に愛されうる動物とは？</p>
        </Reveal>
      </div>

      <!-- kirin reveal: the neck extends from below, faster than you scroll -->
      <PinScene :screens="3" v-slot="{ p, seg }">
        <div class="kirin-scene">
          <div
            class="giraffe"
            aria-hidden="true"
            :style="{ '--neck-h': `${backOut(seg(p, 0.08, 0.5)) * 58}svh` }"
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
              <circle cx="82" cy="73" r="5" fill="#2B1C0A" />
              <circle cx="118" cy="73" r="5" fill="#2B1C0A" />
              <circle cx="83.6" cy="71.4" r="1.6" fill="#fff" />
              <circle cx="119.6" cy="71.4" r="1.6" fill="#fff" />
              <!-- smile -->
              <path d="M94 118 q6 5 12 0" stroke="#7A4D1C" stroke-width="2" fill="none" stroke-linecap="round" />
            </svg>
            <!-- the neck itself grows; patches tile instead of stretching -->
            <div class="g-neck"></div>
          </div>
          <div
            class="kirin-caption"
            :style="{
              opacity: seg(p, 0.55, 0.7),
              transform: `translateX(${(1 - seg(p, 0.55, 0.7)) * -28}px)`,
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
          <img src="/img/keyvisual.webp" alt="きりんさん キービジュアル" class="demo-kv" />
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
          <p class="mit-mark mono">(MIT)</p>
          <p style="max-width: 36em; margin: 1.5em auto 2em; color: var(--fg-muted)">
            もっとも先進的かつオープンなライセンス、MIT Licenseを採用致しました。
            著作使用料の発生もなく、改変も自由。実は当たり前ではなかった自由が、この曲にはあります。
          </p>
          <NuxtLink to="/license" class="btn btn-ghost">ライセンス全文を読む</NuxtLink>
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
      <div class="container" style="text-align: center">
        <Reveal>
          <p class="fig-label">Get Kirinsan</p>
          <h2 class="section-title" style="margin: 0.4em 0 1.2em">
            未来を見据えて、誰しもが楽しめる楽曲を。
          </h2>
          <button class="codeblock hero-clone" type="button" @click="copyCmd">
            <span class="prompt">$ </span><span class="cmd">{{ CLONE_CMD }}</span>
            <span class="copy-state mono">{{ copied ? ' ✓ copied' : '' }}</span>
          </button>
          <div class="hero-ctas" style="justify-content: center; margin-top: 2em">
            <NuxtLink to="/song" class="btn btn-primary">歌詞と楽譜</NuxtLink>
            <a href="https://github.com/kirinsan-org" target="_blank" rel="noopener" class="btn btn-ghost">
              kirinsan-org on GitHub ↗
            </a>
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
  background:
    radial-gradient(ellipse 60% 45% at 50% 118%, rgba(247, 148, 29, 0.22), transparent),
    radial-gradient(ellipse 45% 32% at 50% 108%, rgba(255, 196, 0, 0.16), transparent),
    var(--bg);
}

.hero-inner {
  text-align: center;
  display: grid;
  gap: 1.4rem;
  padding-top: 56px;
}

.hero-title {
  font-size: var(--text-hero);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0.02em;
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

.scene-img {
  width: clamp(180px, 30vw, 340px);
  margin: 0 auto 2rem;
  filter: invert(1);
  mix-blend-mode: screen; /* melt the baked-in background into the dark page */
  opacity: 0.92;
}

.scene-img-plain {
  filter: none;
  mix-blend-mode: normal;
}

/* light mode: keep the drawings dark-on-paper */
[data-theme='light'] .scene-img {
  filter: none;
  mix-blend-mode: multiply;
}

[data-theme='light'] .scene-img-plain {
  filter: brightness(0.16);
  mix-blend-mode: normal;
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

.elephant-stage {
  position: relative;
  width: clamp(180px, 30vw, 340px);
  aspect-ratio: 445 / 368;
}

.elephant-stage .pin-abs {
  position: absolute;
  inset: 0;
  width: 100%;
  margin: 0;
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
  position: absolute;
  bottom: 0;
  left: 70%;
  transform: translateX(-50%);
  width: clamp(150px, 22vw, 250px);
  pointer-events: none;
}

.g-neck {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 42%;
  height: var(--neck-h);
  background-color: #edb53e;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 150'%3E%3Cellipse cx='32' cy='35' rx='15' ry='19' fill='%23A9691F' transform='rotate(12 32 35)'/%3E%3Cellipse cx='72' cy='105' rx='12' ry='16' fill='%23A9691F' transform='rotate(-14 72 105)'/%3E%3C/svg%3E");
  background-size: 100% auto;
  background-position: 50% 100%;
  background-repeat: repeat-y;
  border-radius: 60px 60px 0 0;
  will-change: height;
}

.g-head {
  position: absolute;
  bottom: calc(var(--neck-h) - 8px);
  left: 0;
  width: 100%;
  will-change: bottom;
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
    bottom: calc(58svh - 8px) !important;
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

.fig-title {
  font-size: 1.3rem;
  font-weight: 900;
  margin: 0.5em 0 0.6em;
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

/* ---------- license ---------- */
.mit-mark {
  font-size: clamp(3rem, 9vw, 6rem);
  color: var(--yellow);
  font-weight: 500;
  line-height: 1;
}
</style>
