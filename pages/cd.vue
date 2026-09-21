<script setup lang="ts">
useHead({ title: 'CD — きりんさん 5周年記念盤 | kirinsan.org' })

const specs = [
  { k: '型番', v: 'KRSN-0001' },
  { k: '名称', v: 'きりんさん 5周年記念盤' },
  { k: '形態', v: 'フィジカル・ディストリビューション(CD-DA)' },
  { k: 'プレス数', v: '1,000枚(正気)' },
  { k: '頒布', v: 'コミックマーケット84(2013年夏)' },
  { k: '盤面刻印', v: 'you can(not) stretch your neck.' },
  { k: 'ライセンス', v: 'MIT License(楽曲)' },
]

const credits = [
  { k: '開発', v: 'kirinsan.org / Savanna' },
  { k: 'アレンジ・マスタリング', v: 'niu(電子甘楽民芸品同好会)' },
  { k: 'デザイニング', v: '銀 キヨヒデ(Orange Designworks)' },
  { k: 'イラストレーション', v: 'YOGEN(TOKYO NPRO)' },
  { k: '神', v: 'ヤヤネヒロコ' },
]
</script>

<template>
  <div>
    <!-- hero -->
    <section class="cd-hero">
      <div class="container cd-hero-inner">
        <Reveal :y="20">
          <p class="fig-label">Physical Distribution — C84</p>
        </Reveal>
        <Reveal :delay="0.1">
          <h1 class="cd-title">
            首も長い、舌も長い、<br />ついでに言うと、<span class="accent-text">歴史も長い。</span>
          </h1>
        </Reveal>
        <Reveal :delay="0.3">
          <img
            src="/img/cd_cover.webp"
            alt="きりんさん 5周年記念盤 ジャケット"
            class="cd-cover"
          />
        </Reveal>
        <Reveal :delay="0.45">
          <p class="cd-lede">
            きりんさん 5周年記念盤。<br />
            それは、ダウンロード全盛の時代にプレスされた、1000枚のフィジカル・ディストリビューション。
          </p>
        </Reveal>
      </div>
    </section>

    <!-- quote -->
    <section class="page-section quote-sec">
      <div class="container" style="text-align: center">
        <Reveal :once="false" :amount="0.6">
          <blockquote class="big-quote">
            「正気か？このCD、<br class="sp-br" />本気で1000枚もプレスすんの？」
          </blockquote>
          <p style="color: var(--fg-muted); max-width: 38em; margin: 2em auto 0">
            多方面からそう言われた。でも私はこの考えを全く変えようとは思わなかった。
            誰だって、自由に歌っていいんだ。未来を見据えよう、自由をつかみ取ろう。
            そう、きりんのように、遠くまで見渡そう。そう決めたのだから。
          </p>
          <p class="mono" style="color: var(--fg-muted); font-size: 0.78rem; margin-top: 1.5em">
            — kirinsan.org(当時のC84特設ページより)
          </p>
        </Reveal>
      </div>
    </section>

    <!-- origin story -->
    <section class="page-section origin-sec">
      <div class="container origin-grid">
        <Reveal>
          <div>
            <p class="fig-label">Origin Story</p>
            <h2 class="section-title" style="margin: 0.4em 0 1em">
              全ては、あの日から始まりました。
            </h2>
            <div class="origin-body">
              <p>
                2007年某日。「ぞうさん」がJAS○AC管理楽曲だという衝撃の事実を、私たちは知ります。
                誰でも知っているあの象の童謡が、丁度その頃ネットラジオで屈託なく歌われていた、管理楽曲であったという事実を。
              </p>
              <p>
                その時この事実を知った一人の男が、Wikipediaを見ながら通信にのせてきりんの歌を歌い始めました。
                それが、きりんさんの始まりです。何気ない放歌はやがてインターネット上で何匹か転載され、
                絆(ほだ)されて、そしておもしろがった一部の人々によりさらなる発展を遂げていったのです。
              </p>
              <p>
                そして2008年中頃、この実績を鑑み kirinsan.org
                は誕生を宣言します。この楽曲はオープンソースとし、如何なるアレンジも、改変も辞さない、と。
                その後も当の本人らが忘れていた頃に新しいアレンジが続々と生まれ、それら成果を紹介する目的と共に新たなる暴レ入りして、kirinsan.org
                となり、今日に至ります。
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal :delay="0.15">
          <div class="disc-visual" aria-hidden="true">
            <div class="disc">
              <p class="mono disc-text">
                kirinsan.org:5.55<br />you can(not)<br />stretch your neck.
              </p>
              <div class="disc-hole" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- specs + credits -->
    <section class="page-section spec-sec">
      <div class="container spec-grid">
        <Reveal>
          <div>
            <p class="fig-label" style="margin-bottom: 1.2em">Tech Specs</p>
            <dl class="spec-list">
              <div v-for="s in specs" :key="s.k" class="spec-row">
                <dt>{{ s.k }}</dt>
                <dd>{{ s.v }}</dd>
              </div>
            </dl>
          </div>
        </Reveal>
        <Reveal :delay="0.12">
          <div>
            <p class="fig-label" style="margin-bottom: 1.2em">Credits</p>
            <dl class="spec-list">
              <div v-for="c in credits" :key="c.k" class="spec-row">
                <dt>{{ c.k }}</dt>
                <dd>{{ c.v }}</dd>
              </div>
            </dl>
            <p style="font-size: 0.82rem; color: var(--fg-muted); margin-top: 1.5em">
              SPECIAL THANKS: デンパカーの人親子 / intercity / きりんさんを愛する全ての方々
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <!-- availability -->
    <section class="page-section avail-sec">
      <div class="container" style="text-align: center">
        <Reveal>
          <h2 class="section-title" style="margin-bottom: 0.6em">入手方法</h2>
          <p style="color: var(--fg-muted); max-width: 34em; margin: 0 auto 2em">
            頒布は終了しています。しかし嘆く必要はありません。楽曲はオープンソースなので、
            音源も歌詞も楽譜も、今この瞬間に無料で手に入ります。物理メディアの所有欲だけは、どうにもなりません。
          </p>
          <div style="display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap">
            <NuxtLink to="/song" class="btn btn-primary">音源を無料で入手</NuxtLink>
            <NuxtLink to="/" class="btn btn-ghost">トップへ戻る</NuxtLink>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.cd-hero {
  padding: calc(56px + 5rem) 0 5rem;
  background:
    radial-gradient(ellipse 55% 40% at 50% 0%, rgba(247, 148, 29, 0.14), transparent),
    var(--bg);
}

.cd-hero-inner {
  text-align: center;
  display: grid;
  gap: 2rem;
  justify-items: center;
}

.cd-title {
  font-size: var(--text-giant);
  font-weight: 900;
  line-height: 1.35;
}

.cd-cover {
  width: min(480px, 82vw);
  border-radius: 18px;
  box-shadow:
    0 40px 100px rgba(247, 148, 29, 0.18),
    0 30px 70px rgba(0, 0, 0, 0.6);
}

.cd-lede {
  font-size: var(--text-lg);
  color: var(--fg-muted);
  font-weight: 500;
}

.quote-sec {
  /* stays pitch black in both themes */
  background: #000;
  --fg: #f5f2ea;
  --fg-muted: #9a948a;
  color: var(--fg);
}

.big-quote {
  font-size: var(--text-xl);
  font-weight: 900;
  line-height: 1.5;
}

.origin-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}

.origin-body {
  display: grid;
  gap: 1.2em;
  color: var(--fg-muted);
  font-size: 0.95rem;
}

/* CSS-rendered disc face */
.disc-visual {
  display: grid;
  place-items: center;
}

.disc {
  width: min(380px, 74vw);
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(circle at 32% 28%, rgba(255, 255, 255, 0.09), transparent 45%),
    conic-gradient(from 120deg, #17130c, #221c11, #14100a, #241d12, #17130c);
  border: 1px solid var(--line);
  display: grid;
  place-items: center;
  position: relative;
  animation: spin 24s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .disc {
    animation: none;
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.disc-text {
  font-size: 0.7rem;
  color: var(--yellow);
  text-align: center;
  position: absolute;
  top: 22%;
  left: 0;
  right: 0;
  line-height: 1.7;
}

.disc-hole {
  position: absolute;
  width: 17%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--bg);
  border: 1px solid var(--line);
}

.spec-sec {
  border-top: 1px solid var(--line);
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(2rem, 5vw, 4rem);
}

.spec-list {
  display: grid;
}

.spec-row {
  display: grid;
  grid-template-columns: 11em 1fr;
  gap: 1em;
  padding: 0.8em 0;
  border-bottom: 1px solid var(--line);
  font-size: 0.92rem;
}

.spec-row dt {
  color: var(--fg-muted);
}

.spec-row dd {
  font-weight: 700;
}

@media (max-width: 560px) {
  .spec-row {
    grid-template-columns: 1fr;
    gap: 0.1em;
  }
}

.avail-sec {
  border-top: 1px solid var(--line);
}

.sp-br {
  display: none;
}

@media (max-width: 640px) {
  .sp-br {
    display: block;
  }
}
</style>
