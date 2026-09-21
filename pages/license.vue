<script setup lang="ts">
useHead({ title: 'License — MIT | kirinsan.org' })

const MIT_TEXT = `MIT License

Copyright (c) 2007-${new Date().getFullYear()} kirinsan.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this song and associated documentation files (the "Song"), to deal
in the Song without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Song, and to permit persons to whom the Song is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Song.

THE SONG IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SONG OR THE USE OR OTHER DEALINGS IN THE
SONG.`

const freedoms = [
  { title: '歌う自由', body: '路上で、風呂で、幼稚園の帰り道で。許諾は要りません。うたってください。' },
  { title: 'アレンジする自由', body: 'デスメタルにしても、ボサノヴァにしても、方言に翻訳しても構いません。' },
  { title: 'フォークする自由', body: '「鮫島さん」のように、まったく別の動物の歌として分岐させることも可能です。' },
  { title: '商用利用の自由', body: 'CDにして売っても大丈夫です。実際、私たちは1000枚プレスして爆死しました。' },
]
</script>

<template>
  <div>
    <section class="page-section" style="padding-top: calc(56px + 4rem)">
      <div class="container">
        <Reveal>
          <p class="fig-label">License</p>
          <h1 class="section-title" style="margin: 0.4em 0 0.8em">OSSは、ライセンスが命。</h1>
          <p style="color: var(--fg-muted); max-width: 42em">
            きりんさんは、世界的にもまだ前例が確認されていないMITライセンスを採用したオープンソースの童謡です。
            もっとも先進的かつオープンなライセンスを、童謡に。当たり前ではなかった自由が、この曲にはあります。
          </p>
        </Reveal>

        <div class="freedom-grid">
          <Reveal v-for="(f, i) in freedoms" :key="f.title" :delay="i * 0.1">
            <div class="freedom-card">
              <h2 class="freedom-title">{{ f.title }}</h2>
              <p class="freedom-body">{{ f.body }}</p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <p class="fig-label" style="margin-bottom: 1em">Full Text</p>
          <pre class="license-pre mono">{{ MIT_TEXT }}</pre>
          <p style="font-size: 0.8rem; color: var(--fg-muted); margin-top: 1.2em">
            ※ 上記は "Software" を "Song" に読み替えたMIT Licenseです。それ以外は一切改変されていません。
            ライセンスに改変を加えないこと — それがオープンソースへの礼儀だからです。
          </p>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.freedom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.2rem;
  margin: 3rem 0 4rem;
}

.freedom-card {
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1.6rem 1.5rem;
  height: 100%;
}

.freedom-title {
  font-size: 1.15rem;
  font-weight: 900;
  margin-bottom: 0.5em;
  color: var(--yellow);
}

.freedom-body {
  font-size: 0.9rem;
  color: var(--fg-muted);
}

.license-pre {
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 2rem;
  font-size: 0.78rem;
  line-height: 1.9;
  overflow-x: auto;
  white-space: pre-wrap;
  color: var(--fg);
}
</style>
