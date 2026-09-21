<script setup lang="ts">
import { SHOWCASE } from '~/data/showcase'

useHead({ title: 'Showcase — ハッカソンとプロダクト | kirinsan.org' })
</script>

<template>
  <div>
    <section class="page-section" style="padding-top: calc(56px + 4rem)">
      <div class="container">
        <Reveal>
          <p class="fig-label">Ecosystem / Hackathon Works</p>
          <h1 class="section-title" style="margin: 0.4em 0 0.8em">
            きりんさんは、エコシステムです。
          </h1>
          <p style="color: var(--fg-muted); max-width: 42em">
            kirinsan.org のもう一つの軸、それがハッカソン活動です。楽曲「きりんさん」という強固な基盤(コア)の上に、
            数々のプロダクトが生まれてきました。その一部を紹介します。すべてGitHubで公開されています。
          </p>
        </Reveal>

        <div class="show-grid">
          <Reveal v-for="(item, i) in SHOWCASE" :key="item.name" :delay="(i % 3) * 0.1">
            <a :href="item.url" target="_blank" rel="noopener" class="show-card">
              <p class="mono show-name">{{ item.name }}</p>
              <p class="show-desc">{{ item.description }}</p>
              <p class="mono show-tech">{{ item.tech }}</p>
            </a>
          </Reveal>
        </div>

        <Reveal>
          <div class="org-cta">
            <p style="color: var(--fg-muted)">この他のリポジトリ(全26+)は、GitHub Organizationでどうぞ。</p>
            <a href="https://github.com/kirinsan-org" target="_blank" rel="noopener" class="btn btn-primary">
              kirinsan-org on GitHub ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  </div>
</template>

<style scoped>
.show-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.2rem;
  margin: 3rem 0 4rem;
}

.show-card {
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  background: var(--bg-elevated);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 1.6rem 1.5rem;
  height: 100%;
  transition: border-color 0.3s, transform 0.3s;
}

.show-card:hover {
  border-color: rgba(255, 196, 0, 0.45);
  transform: translateY(-3px);
}

.show-name {
  color: var(--yellow);
  font-size: 0.92rem;
  font-weight: 500;
}

.show-desc {
  font-size: 0.9rem;
  color: var(--fg);
  flex: 1;
}

.show-tech {
  font-size: 0.72rem;
  color: var(--fg-muted);
}

.org-cta {
  display: grid;
  gap: 1.2rem;
  justify-items: center;
  text-align: center;
  padding: 2rem 0;
}
</style>
