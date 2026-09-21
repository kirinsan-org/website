<script setup lang="ts">
const links = [
  { to: '/song', label: 'Song' },
  { to: '/cd', label: 'CD' },
  { to: '/showcase', label: 'Showcase' },
  { to: '/license', label: 'License' },
]

function toggleTheme() {
  const root = document.documentElement
  const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
  if (next === 'light') root.setAttribute('data-theme', 'light')
  else root.removeAttribute('data-theme')
  try {
    localStorage.setItem('kirinsan-theme', next)
  } catch {
    /* private mode etc. */
  }
}
</script>

<template>
  <div class="site">
    <header class="site-header">
      <nav class="container site-nav">
        <NuxtLink to="/" class="brand">
          <span class="brand-icon" aria-hidden="true">🦒</span>
          <span>きりんさん</span>
          <span class="brand-org mono">kirinsan.org</span>
        </NuxtLink>
        <div class="nav-links">
          <NuxtLink v-for="l in links" :key="l.to" :to="l.to" class="nav-link">{{ l.label }}</NuxtLink>
          <a
            href="https://github.com/kirinsan-org"
            target="_blank"
            rel="noopener"
            class="nav-link nav-github"
            aria-label="GitHub"
          >GitHub ↗</a>
          <button type="button" class="theme-btn" aria-label="ライト/ダークモード切替" @click="toggleTheme">
            <span class="icon-sun" aria-hidden="true">☀</span>
            <span class="icon-moon" aria-hidden="true">☾</span>
          </button>
        </div>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-badges">
          <span class="badge">license: <b>MIT</b></span>
          <span class="badge">since: <b>2007</b></span>
          <span class="badge">locales: <b>4</b></span>
          <span class="badge">tongue: <b>40cm</b></span>
        </div>
        <p class="footer-note">
          きりんさんは、オープンソースの童謡です。歌う自由、アレンジする自由、フォークする自由はすべてのひとにあります。
        </p>
        <p class="footer-copy mono">
          © 2007-{{ new Date().getFullYear() }} kirinsan.org — the Opensource-song for the children.
          <br />
          本活動は株式会社キリンさんの事業とは関係のない、原点のほうの活動です。
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: color-mix(in srgb, var(--bg) 72%, transparent);
  border-bottom: 1px solid var(--line);
}

.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.55em;
  font-weight: 900;
  font-size: 1.05rem;
}

.brand-icon {
  font-size: 1.2em;
  line-height: 1;
}

.brand-org {
  font-size: 0.7rem;
  color: var(--fg-muted);
  font-weight: 400;
  margin-top: 0.35em;
}

.nav-links {
  display: flex;
  gap: clamp(0.8rem, 2.5vw, 1.8rem);
  align-items: center;
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--fg-muted);
  transition: color 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--fg);
}

.nav-github {
  color: var(--yellow);
}

.theme-btn {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: none;
  color: var(--fg-muted);
  cursor: pointer;
  display: grid;
  place-items: center;
  font-size: 0.85rem;
  line-height: 1;
  transition: color 0.2s, border-color 0.2s;
}

.theme-btn:hover {
  color: var(--yellow);
  border-color: var(--yellow);
}

/* dark mode shows the sun (=switch to light), light mode shows the moon */
.icon-moon {
  display: none;
}

[data-theme='light'] .icon-sun {
  display: none;
}

[data-theme='light'] .icon-moon {
  display: inline;
}

main {
  min-height: 100vh;
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 4rem 0 5rem;
  background: var(--bg-elevated);
}

.footer-inner {
  display: grid;
  gap: 1.4rem;
}

.footer-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-note {
  color: var(--fg-muted);
  font-size: 0.9rem;
  max-width: 40em;
}

.footer-copy {
  font-size: 0.72rem;
  color: var(--fg-muted);
  opacity: 0.7;
}

@media (max-width: 640px) {
  .brand-org {
    display: none;
  }

  .brand {
    font-size: 0.95rem;
    white-space: nowrap;
  }

  .nav-links {
    gap: 0.65rem;
  }

  .nav-link {
    font-size: 0.75rem;
  }
}
</style>
