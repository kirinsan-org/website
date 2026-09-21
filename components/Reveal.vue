<script setup lang="ts">
import { motion } from 'motion-v'

/**
 * Scroll-reveal wrapper built on motion-v.
 * Fades + rises the slot content when it enters the viewport.
 */
withDefaults(
  defineProps<{
    delay?: number
    y?: number
    once?: boolean
    amount?: number
  }>(),
  { delay: 0, y: 36, once: true, amount: 0.4 },
)
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, y }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :in-view-options="{ once, amount }"
    :transition="{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }"
  >
    <slot />
  </motion.div>
</template>
