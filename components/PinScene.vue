<script setup lang="ts">
/**
 * Scroll-pinned scene: a tall wrapper whose inner viewport sticks to the
 * screen while the user scrolls through it. Exposes scroll progress (0-1)
 * to the slot so content can be animated against it.
 *
 * Usage:
 *   <PinScene :screens="3" v-slot="{ p }"> ... </PinScene>
 */
const props = withDefaults(
  defineProps<{
    /** wrapper height in viewport-heights; more screens = slower progression */
    screens?: number
  }>(),
  { screens: 3 },
)

const wrapper = ref<HTMLElement | null>(null)
const p = ref(0)

let ticking = false
function update() {
  ticking = false
  const el = wrapper.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const total = rect.height - window.innerHeight
  if (total <= 0) {
    p.value = 1
    return
  }
  p.value = Math.min(1, Math.max(0, -rect.top / total))
}

function onScroll() {
  // rAF is suspended in hidden tabs — update synchronously there
  if (document.hidden) {
    update()
    return
  }
  if (!ticking) {
    ticking = true
    requestAnimationFrame(update)
  }
}

onMounted(() => {
  update()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
})

/** map progress p into a 0-1 segment between a and b */
function seg(v: number, a: number, b: number) {
  return Math.min(1, Math.max(0, (v - a) / (b - a)))
}

defineExpose({ p })
</script>

<template>
  <div ref="wrapper" class="pin-wrapper" :style="{ height: `${screens * 100}vh` }">
    <div class="pin-viewport">
      <slot :p="p" :seg="seg" />
    </div>
  </div>
</template>

<style scoped>
.pin-wrapper {
  position: relative;
}

.pin-viewport {
  position: sticky;
  top: 0;
  height: 100svh;
  overflow: hidden;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 2rem 5vw;
}
</style>
