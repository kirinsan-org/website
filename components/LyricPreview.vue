<script setup lang="ts">
import { LYRICS } from '~/data/lyrics'

const TRACK_LENGTH = 126
const lines = LYRICS.filter((l) => l.verse === 1)
const active = ref(0)

let timer: ReturnType<typeof setInterval> | undefined
onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    active.value = lines.findIndex((l) => l.shout)
    return
  }
  timer = setInterval(() => {
    active.value = (active.value + 1) % lines.length
  }, 1500)
})
onUnmounted(() => clearInterval(timer))

const fmt = (t: number) =>
  `${String(Math.floor(t / 60)).padStart(2, '0')}:${String(Math.floor(t % 60)).padStart(2, '0')}`
</script>

<template>
  <div class="lp-card" aria-hidden="true">
    <div class="lp-head">
      <span class="lp-dot" />
      <span class="mono lp-label">NOW PLAYING — きりんさん</span>
      <span class="mono lp-time">{{ fmt(lines[active].t) }}</span>
    </div>
    <div class="lp-window">
      <div class="lp-track" :style="{ transform: `translateY(calc(${2 - active} * var(--lp-line)))` }">
        <p
          v-for="(l, i) in lines"
          :key="i"
          class="lp-line"
          :class="{ on: i === active, past: i < active, shout: l.shout }"
        >
          {{ l.text }}
        </p>
      </div>
    </div>
    <div class="lp-bar">
      <div class="lp-bar-fill" :style="{ width: `${(lines[active].t / TRACK_LENGTH) * 100}%` }" />
    </div>
  </div>
</template>

<style scoped>
.lp-card {
  --lp-line: 2.7rem;
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 1.2rem 1.4rem 1.4rem;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
}

.lp-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.7rem;
  color: var(--fg-muted);
  margin-bottom: 1rem;
}

.lp-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--yellow);
  box-shadow: 0 0 10px var(--yellow);
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  50% {
    opacity: 0.35;
  }
}

.lp-time {
  margin-left: auto;
  color: var(--yellow);
}

.lp-window {
  height: calc(var(--lp-line) * 5);
  overflow: hidden;
  mask-image: linear-gradient(transparent, #000 28%, #000 72%, transparent);
  -webkit-mask-image: linear-gradient(transparent, #000 28%, #000 72%, transparent);
}

.lp-track {
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.lp-line {
  height: var(--lp-line);
  line-height: var(--lp-line);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--fg-muted);
  opacity: 0.45;
  white-space: nowrap;
  transform-origin: left center;
  transition: opacity 0.4s, transform 0.4s, color 0.4s;
}

.lp-line.past {
  opacity: 0.3;
}

.lp-line.on {
  opacity: 1;
  color: var(--fg);
  transform: scale(1.06);
}

.lp-line.on.shout {
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 900;
}

.lp-bar {
  margin-top: 1rem;
  height: 3px;
  border-radius: 3px;
  background: var(--line);
  overflow: hidden;
}

.lp-bar-fill {
  height: 100%;
  background: var(--accent-gradient);
  transition: width 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
