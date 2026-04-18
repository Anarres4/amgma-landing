# SEO Roadmap — AMGMA Landing

Document de suivi post-audit du 18 avril 2026.
Score SEO estimé : **~75 / 100** → cible **85+ / 100**.

---

## ✅ Déjà fait

### Infrastructure SEO
- [x] Plugin `jekyll-sitemap` activé → `/sitemap.xml`
- [x] Plugin `jekyll-seo-tag` activé
- [x] `robots.txt` avec directives explicites pour tous les crawlers IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended…)
- [x] `llms.txt` à la racine (passage citable pour Perplexity/ChatGPT)
- [x] Canonical URL dans `_layouts/default.html`
- [x] Meta OG complets (`og:url`, `og:image`, `og:image:width/height/alt`) + Twitter Cards
- [x] `og-image.png` 1200×630 généré (terracotta + hero quote)
- [x] Favicon SVG + ICO

### Schema.org
- [x] JSON-LD `@graph` complet : Organization + WebSite + MobileApplication + 2 Person
- [x] Enrichi avec `vatID`, `taxID`, `legalName`
- [x] `sameAs` : book-nova.com, App Store, Play Store
- [x] `downloadUrl` + `installUrl` sur Book Nova

### Conformité légale
- [x] Page `/mentions-legales/` créée (SASU, capital, siège, SIREN, RCS Paris, TVA, directrice publication, hébergeur, RGPD)
- [x] Footer lié à la page légale avec `relative_url` (fix baseurl)

### Preuves App Store / Google Play
- [x] Badges cliquables dans la section Book Nova (iOS = sage, Android = gold)
- [x] App Store FR : https://apps.apple.com/fr/app/book-nova/id6752571289
- [x] Google Play : https://play.google.com/store/apps/details?id=com.quantumash.bigbangbook.app
- [x] Both URLs référencées dans JSON-LD + llms.txt

### Accessibilité / UX
- [x] Contraste `--ink-faint` WCAG AA (9A9082)
- [x] Skip link clavier
- [x] `aria-hidden` sur décoratifs (grid, glows, marquee, phone, avatars)
- [x] `aria-label` sur nav, logo, sections avec titres labellés
- [x] `<main>` landmark + `:focus-visible` terracotta
- [x] Fix mobile h1 clamp (<420px)
- [x] Fix marquee overflow horizontal

---

## 🔴 CRITICAL

### 1. Transition SASU → SAS (démarche en cours)

**À faire quand le changement est enregistré au greffe** :
- Remplacer `SASU` par `SAS` dans `mentions-legales.html`
- Mettre à jour le capital social si celui-ci change
- Vérifier que le SIREN reste identique (normalement oui)
- Si ajout d'un second associé : mentionner les co-fondateurs cohéremment

### 2. Vérifier post-push

- `curl https://anarres4.github.io/amgma-landing/sitemap.xml` → XML valide
- `curl https://anarres4.github.io/amgma-landing/robots.txt` → contenu attendu
- `curl https://anarres4.github.io/amgma-landing/llms.txt` → contenu attendu
- `curl https://anarres4.github.io/amgma-landing/mentions-legales/` → 200 OK
- Tester OG preview : https://www.opengraph.xyz/url/[URL encodée]
- Valider JSON-LD : https://validator.schema.org/

---

## 🟠 HIGH — sous 1 semaine

### 3. Migration vers domaine propre `amgma.fr`

**Pourquoi** : l'URL `anarres4.github.io/amgma-landing` dilue l'autorité perçue. Impact fort sur :
- Résolution d'entité par ChatGPT/Perplexity
- Crédibilité B2B (investisseurs, presse)
- Email pro possible (`contact@amgma.fr`)

**À faire** :
1. Réserver `amgma.fr`
2. Ajouter `CNAME` à la racine du repo avec `amgma.fr`
3. Configurer DNS chez le registrar (`A` ou `CNAME` → GitHub Pages)
4. Vider `baseurl` dans `_config.yml` (passer à `""`)
5. Mettre à jour `url: "https://amgma.fr"`
6. Cocher "Enforce HTTPS" dans Settings → Pages
7. Mettre à jour toutes les URLs dans JSON-LD (`@id`, `url`, `sameAs`) et `llms.txt`
8. Soumettre à Google Search Console

Voir `DEPLOYMENT.md` pour la procédure complète.

### 4. Email pro `contact@amgma.fr` (après #3)

**À faire** : configurer un alias chez le registrar ou un service type Proton/Fastmail. Mettre à jour `_data/contact.yml`, `_data/footer.yml`, `_config.yml`, `llms.txt`, `mentions-legales.html`, JSON-LD.

### 5. Créer page LinkedIn AMGMA + câbler

**À faire** :
- Créer page LinkedIn `/company/amgma-studio` (ou similaire)
- Enrichir le `sameAs` du JSON-LD avec l'URL LinkedIn
- Activer le vrai lien LinkedIn (actuellement `#`) dans les datafiles si vous voulez le réexposer un jour

### 6. Self-host des webfonts

**Pourquoi** : 3 webfonts Google Fonts = 2 requêtes cross-origin sur le chemin critique. LCP actuel estimé 2–2.8s (Needs Improvement).

**À faire** :
- Télécharger WOFF2 via `google-webfonts-helper` ou `fontsource`
- Placer dans `assets/fonts/`
- Déclarer les `@font-face` dans `main.css` avec `font-display: swap`
- Retirer le `<link>` Google Fonts de `default.html`
- Ajouter `size-adjust` sur fallback pour limiter le reflow

**Gain attendu** : LCP -300 à -500ms, CLS -0.05, +1 point performance.

---

## 🟡 MEDIUM — sous 1 mois

### 7. Enrichir les biographies des fondateurs

Bios actuelles : 30 mots chacune, purement fonctionnelles. Un quality rater / LLM ne peut pas valider l'expertise.

**À faire** dans `_data/team.yml` : ajouter pour chaque membre domaine d'expertise, technologies, secteur d'ancrage.

### 8. Photos des fondateurs

Avatars à initiales OK comme placeholder, mais privent la page de signal d'identité vérifiable.

**À faire** :
- Photos portrait 4:5, traitement warm
- `assets/team/ana.jpg` + `florent.jpg`
- Modifier `_includes/team.html` pour render `<img>` si `photo` présent

### 9. Reformater passages pour citabilité LLM (130–160 mots)

Objectif : que Perplexity cite AMGMA pour "studio logiciel indépendant Toulouse", "éditeur Book Nova".

**À faire** : étendre `_data/about.yml` avec un bloc auto-contenu de ~140 mots répondant à "Qu'est-ce qu'AMGMA ?".

### 10. Page dédiée `/book-nova/`

Section actuelle : 4 features x 5 mots. Trop maigre pour le produit présenté comme pièce maîtresse.

**À faire** : page avec copie longue (400–600 mots), screenshots réels, témoignages, app stores.

### 11. Inline critical CSS + reste async

**Gain** : FCP -200ms.

### 12. `noindex` sur la page 404

Actuellement indexable. Ajouter `robots: noindex, nofollow` en front-matter + rendre la meta conditionnelle dans le layout.

---

## 🔵 LOW — backlog

### 13. Preload WOFF2 (après self-host #6)
### 14. Headers de sécurité CSP/X-Frame-Options (nécessite Cloudflare)
### 15. Google Search Console + soumission sitemap (après domaine #3)
### 16. Page presse / dossier de presse téléchargeable
### 17. OG image par page (si pages additionnelles créées)

---

## Outils de validation

Une fois le site déployé sur le domaine final :

- **Schema validator** : https://validator.schema.org/
- **OpenGraph debugger** : https://www.opengraph.xyz/
- **PageSpeed Insights** : https://pagespeed.web.dev/
- **Google Search Console** : https://search.google.com/search-console
- **Lighthouse** (DevTools local) : pour monitoring ponctuel CWV + a11y

---

## Ordre recommandé (top 5)

| # | Tâche | Impact | Effort |
|---|---|---|---|
| 1 | Migration `amgma.fr` | 🟠🟠🟠 | 3h + DNS |
| 2 | Email pro `contact@amgma.fr` | 🟠🟠 | 30min |
| 3 | Self-host fonts | 🟠🟠 | 2h |
| 4 | Enrichir bios fondateurs | 🟡🟡 | 30min |
| 5 | Photos fondateurs | 🟡🟡 | variable |

**Ordre pragmatique** : 1 → 2 → 3 → 4 → 5.

Le point 1 (domaine) est prérequis de 2 et débloque la Search Console, le préchargement des fonts, et la crédibilité générale. C'est le meilleur ROI actuel.
