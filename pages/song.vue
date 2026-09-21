<script setup lang="ts">
import { LYRICS, LOCALES, TRACK } from '~/data/lyrics'

useHead({ title: 'Song — きりんさん | kirinsan.org' })

const audioEl = ref<HTMLAudioElement | null>(null)
const currentTime = ref(0)
const playing = ref(false)

const activeIndex = computed(() => {
  let idx = -1
  for (let i = 0; i < LYRICS.length; i++) {
    if (LYRICS[i].t <= currentTime.value + 0.08) idx = i
    else break
  }
  return idx
})

const verses = computed(() => {
  const map = new Map<number, { line: (typeof LYRICS)[number]; index: number }[]>()
  LYRICS.forEach((line, index) => {
    if (!map.has(line.verse)) map.set(line.verse, [])
    map.get(line.verse)!.push({ line, index })
  })
  return [...map.entries()]
})

function onTimeUpdate() {
  if (audioEl.value) currentTime.value = audioEl.value.currentTime
}

function toggle() {
  const a = audioEl.value
  if (!a) return
  if (a.paused) {
    a.play()
  } else {
    a.pause()
  }
}

function seekTo(t: number) {
  const a = audioEl.value
  if (!a) return
  a.currentTime = t
  a.play()
}

// keep the active line in view
watch(activeIndex, (idx) => {
  if (idx < 0) return
  const el = document.querySelector(`[data-lyric-index="${idx}"]`)
  el?.scrollIntoView({ block: 'center', behavior: 'smooth' })
})
</script>

<template>
  <div class="song-page">
    <section class="page-section song-head">
      <div class="container">
        <Reveal>
          <p class="fig-label">Live Demo — synced lyrics</p>
          <h1 class="section-title" style="margin: 0.4em 0 0.5em">きりんさん</h1>
          <p class="mono" style="color: var(--fg-muted); font-size: 0.85rem">
            {{ TRACK.credit }} / MIT License
          </p>
        </Reveal>
      </div>
    </section>

    <section class="container lyric-layout">
      <!-- lyrics -->
      <div class="lyrics" role="list">
        <div v-for="[verse, lines] in verses" :key="verse" class="verse">
          <p class="fig-label verse-label">VERSE {{ String(verse).padStart(2, '0') }}</p>
          <button
            v-for="{ line, index } in lines"
            :key="index"
            type="button"
            class="lyric-line"
            :class="{ active: index === activeIndex, shout: line.shout, sung: index < activeIndex }"
            :data-lyric-index="index"
            @click="seekTo(line.t)"
          >
            <span class="mono lyric-time">{{
              `${String(Math.floor(line.t / 60)).padStart(2, '0')}:${String(Math.floor(line.t % 60)).padStart(2, '0')}`
            }}</span>
            <span class="lyric-text">{{ line.text }}</span>
          </button>
        </div>
      </div>

      <!-- side info -->
      <aside class="song-side">
        <div class="side-card">
          <p class="fig-label" style="margin-bottom: 1em">Score / 楽譜</p>
          <img src="/score/kirinsan_ja.png" alt="きりんさん 楽譜(日本語版)" class="score-img" />
          <p style="font-size: 0.82rem; color: var(--fg-muted); margin-top: 1em">
            楽譜はLilyPond形式でメンテナンスされています。
          </p>
        </div>
        <div class="side-card">
          <p class="fig-label" style="margin-bottom: 1em">Localization / 4ローカライズ</p>
          <ul class="locale-list">
            <li v-for="loc in LOCALES" :key="loc.code" class="locale-item">
              <span class="mono locale-code">{{ loc.code }}</span>
              <a
                :href="`https://github.com/kirinsan-org/kirinsan-score/blob/master/${loc.file}`"
                target="_blank"
                rel="noopener"
                class="locale-link"
              >{{ loc.label }} ↗</a>
            </li>
          </ul>
        </div>
        <div class="side-card">
          <p class="fig-label" style="margin-bottom: 1em">Download</p>
          <div style="display: grid; gap: 0.6rem">
            <a :href="TRACK.m4a" download class="btn btn-ghost" style="justify-content: center">音源 (.m4a)</a>
            <a :href="TRACK.ogg" download class="btn btn-ghost" style="justify-content: center">音源 (.ogg)</a>
            <a
              href="https://github.com/kirinsan-org/kirinsan-score"
              target="_blank"
              rel="noopener"
              class="btn btn-ghost"
              style="justify-content: center"
            >楽譜リポジトリ ↗</a>
          </div>
        </div>
      </aside>
    </section>

    <!-- sticky player -->
    <div class="player">
      <div class="container player-inner">
        <button type="button" class="play-btn" @click="toggle" :aria-label="playing ? '一時停止' : '再生'">
          {{ playing ? '❚❚' : '▶' }}
        </button>
        <div class="player-meta">
          <p class="player-title">きりんさん <span class="mono player-note">公式音源</span></p>
          <p class="mono player-time">
            {{ `${String(Math.floor(currentTime / 60)).padStart(2, '0')}:${String(Math.floor(currentTime % 60)).padStart(2, '0')}` }}
          </p>
        </div>
        <audio
          ref="audioEl"
          preload="metadata"
          @timeupdate="onTimeUpdate"
          @play="playing = true"
          @pause="playing = false"
        >
          <source :src="TRACK.m4a" type="audio/mp4" />
          <source :src="TRACK.ogg" type="audio/ogg" />
        </audio>
      </div>
    </div>
  </div>
</template>

<style scoped>
.song-head {
  padding-top: calc(56px + 4rem);
  padding-bottom: 2rem;
}

.lyric-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, 1fr);
  gap: clamp(2rem, 5vw, 4rem);
  padding-bottom: 10rem;
}

@media (max-width: 800px) {
  .lyric-layout {
    grid-template-columns: 1fr;
  }
}

.verse {
  margin-bottom: 3rem;
}

.verse-label {
  margin-bottom: 0.8em;
}

.lyric-line {
  display: flex;
  gap: 1.2em;
  align-items: baseline;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.42em 0.6em;
  border-radius: 10px;
  font-family: var(--font-sans);
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--fg-muted);
  transition: color 0.3s, background 0.3s, transform 0.3s;
}

.lyric-line:hover {
  background: var(--bg-elevated);
}

.lyric-line.sung {
  color: color-mix(in srgb, var(--fg) 55%, var(--fg-muted));
}

.lyric-line.active {
  color: var(--fg);
  background: var(--bg-elevated);
  transform: scale(1.02);
  transform-origin: left center;
}

.lyric-line.active .lyric-text {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lyric-line.shout .lyric-text {
  font-weight: 900;
  letter-spacing: 0.04em;
}

.lyric-time {
  font-size: 0.62em;
  color: var(--fg-muted);
  opacity: 0.6;
  min-width: 3.6em;
}

.song-side {
  display: grid;
  gap: 1.2rem;
  align-content: start;
}

.side-card {
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1.5rem;
}

.score-img {
  border-radius: 8px;
  background: #fff;
}

.locale-list {
  list-style: none;
  display: grid;
  gap: 0.55rem;
}

.locale-item {
  display: flex;
  gap: 1em;
  align-items: baseline;
  font-size: 0.9rem;
}

.locale-code {
  color: var(--yellow);
  font-size: 0.75rem;
  min-width: 8.5em;
}

.locale-link:hover {
  color: var(--yellow);
}

/* player */
.player {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 90;
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid var(--line);
}

.player-inner {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0.8rem 0;
}

.play-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  background: var(--accent-gradient);
  color: #1a1200;
  font-size: 1.1rem;
  font-weight: 900;
  cursor: pointer;
  transition: transform 0.2s;
  flex-shrink: 0;
}

.play-btn:hover {
  transform: scale(1.06);
}

.player-title {
  font-weight: 900;
  font-size: 0.95rem;
}

.player-note {
  color: var(--fg-muted);
  font-weight: 400;
  font-size: 0.72rem;
  margin-left: 0.6em;
}

.player-time {
  font-size: 0.72rem;
  color: var(--yellow);
}
</style>
