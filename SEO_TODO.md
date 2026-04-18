# SEO Roadmap — AMGMA Landing

Document de suivi post-audit du 18 avril 2026.
Score SEO actuel : **60 / 100** → cible **85+ / 100**.

Basé sur l'audit parallélisé (technical, content/E-E-A-T, schema, performance, GEO, visual).

---

## ✅ Déjà fait (quick wins)

- [x] Plugin `jekyll-sitemap` activé (Gemfile + `_config.yml`) → génère `/sitemap.xml`
- [x] Plugin `jekyll-seo-tag` activé
- [x] `robots.txt` créé avec directives explicites pour GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.
- [x] `llms.txt` créé à la racine (contenu citable pour Perplexity/ChatGPT)
- [x] Canonical URL dans `_layouts/default.html`
- [x] Meta OG complets (`og:url`, `og:image`, `og:image:width/height/alt`) + Twitter Cards
- [x] `og-image.png` 1200×630 généré
- [x] Favicon SVG + ICO
- [x] JSON-LD @graph complet (Organization + WebSite + MobileApplication + 2 Person)
- [x] Fix mobile hero CTA (media query `<420px` avec `clamp(40px, 12vw, 56px)` sur h1)
- [x] Fix marquee overflow (`max-width: 100vw`)

---

## 🔴 CRITICAL — obligations légales & blocages

### 1. Mentions légales (obligation légale SAS — LCEN art. 6)

**Pourquoi** : non-conformité juridique actuelle. Aucune page, aucun SIREN, aucun RCS.

**À faire** :
- Créer `/mentions-legales.md` avec layout `default`
- Contenu obligatoire :
  - Raison sociale : AMGMA SAS
  - Forme juridique + capital social
  - Siège social (adresse complète)
  - SIREN / RCS (numéro d'immatriculation)
  - Directeur de la publication
  - Hébergeur : GitHub Inc. (88 Colin P Kelly Jr St, San Francisco, CA 94107, +1 877 448 4820)
  - Email contact
- Lier depuis `_data/footer.yml` (champ `bottom.right`) au lieu du texte brut actuel
- Créer également `/politique-confidentialite.md` (si collecte de données via formulaire un jour — pour l'instant facultatif)

### 2. Hero h1 — crossbar "e" invisible sur certains rendus

**Statut** : corrigé (weight 400 + `font-optical-sizing: none`) mais à re-vérifier sur Firefox/Safari après déploiement.

### 3. Vérifier rendu `/sitemap.xml` après premier build avec plugin

**À faire après push** : `curl https://anarres4.github.io/amgma-landing/sitemap.xml` doit renvoyer un XML valide.

---

## 🟠 HIGH — à faire sous 1 semaine

### 4. Lier "● Live sur l'App Store" à la fiche App Store réelle

**Pourquoi** : preuve E-E-A-T vérifiable (actuellement assertion non prouvée).

**À faire** : éditer `_data/product.yml`, champ `head.tag` — transformer en lien vers `apps.apple.com/fr/app/book-nova/id...`. Même chose pour Google Play quand publié.

### 5. Publier LinkedIn page AMGMA + l'ajouter au schema

**À faire** :
- Créer la page LinkedIn (`/company/amgma-studio`)
- Dans `_layouts/default.html`, enrichir le `sameAs` de l'Organization :
  ```json
  "sameAs": [
    "https://book-nova.com/",
    "https://www.linkedin.com/company/amgma-studio",
    "https://apps.apple.com/fr/app/book-nova/id...",
    "https://play.google.com/store/apps/details?id=..."
  ]
  ```
- Activer le lien LinkedIn dans le footer et contact (actuellement `#`)

### 6. Self-host des webfonts (gain LCP + CLS)

**Pourquoi** : 3 webfonts Google Fonts actuellement = 2 requêtes cross-origin sur le chemin critique. LCP estimé 2–2.8s, Needs Improvement.

**À faire** :
- Télécharger les WOFF2 via `google-webfonts-helper` ou `fontsource`
- Placer dans `assets/fonts/`
- Déclarer les `@font-face` dans `main.css` avec `font-display: swap`
- Retirer le `<link>` Google Fonts de `default.html`
- Ajouter un fallback `@font-face` avec `size-adjust` et `ascent-override` pour limiter le reflow

**Gain attendu** : LCP -300 à -500ms, CLS -0.05.

### 7. Migrer vers domaine propre `amgma.fr`

**Pourquoi** : l'URL actuelle `anarres4.github.io/amgma-landing` dilue l'autorité perçue. Impact fort sur résolution d'entité par les LLMs et sur signaux de crédibilité B2B.

**À faire** :
1. Réserver `amgma.fr` (ou `.com` / `.studio`)
2. Ajouter fichier `CNAME` à la racine du repo avec `amgma.fr`
3. Configurer DNS chez le registrar (enregistrements `A` ou `CNAME` → GitHub Pages)
4. Vider `baseurl` dans `_config.yml` (passer à `""`)
5. Mettre à jour `url: "https://amgma.fr"`
6. Cocher "Enforce HTTPS" dans Settings → Pages
7. Mettre à jour toutes les URLs dans `_layouts/default.html` (JSON-LD `@id`, `sameAs`) et `llms.txt`

**Voir** `DEPLOYMENT.md` pour la procédure complète.

### 8. Email pro `contact@amgma.fr` (après migration domaine)

**Pourquoi** : `amgma@outlook.fr` est un email grand public, contraste avec le positionnement "studio exigeant".

**À faire** : configurer un alias chez le registrar ou un service type Proton/Fastmail. Mettre à jour `_data/contact.yml`, `_data/footer.yml`, `_config.yml`, `llms.txt`, JSON-LD.

---

## 🟡 MEDIUM — à faire sous 1 mois

### 9. Enrichir les biographies des fondateurs

**Pourquoi** : bios actuelles = 30 mots chacune, purement fonctionnelles. Un quality rater ne peut pas valider l'expertise.

**À faire** : éditer `_data/team.yml`, ajouter pour chaque membre :
- Domaine d'expertise précédent (ex. "15 ans en édition de logiciels grand public")
- Technologie ou secteur de référence
- Idéalement un diplôme ou certification clé

### 10. Photos des fondateurs

**Pourquoi** : les avatars à initiales sont un choix design mais privent la page de signal d'identité humaine vérifiable.

**À faire** :
- Photos portrait 4:5, traitement warm/desaturé (cohérent avec la palette)
- Placer dans `assets/team/ana.jpg` et `assets/team/florent.jpg`
- Modifier `_includes/team.html` pour utiliser `<img>` quand `photo` présent dans `team.yml`
- Ajouter `alt` descriptif pour chaque image

### 11. Reformater passages pour citabilité LLM (130–160 mots)

**Pourquoi** : blocs actuels trop courts pour extraction LLM. Objectif : que Perplexity cite AMGMA pour "studio logiciel indépendant Toulouse".

**À faire** :
- Étendre `_data/about.yml` avec un bloc auto-contenu de ~140 mots répondant implicitement à "Qu'est-ce qu'AMGMA ?"
- Renforcer la description de Book Nova dans `_data/product.yml` (description produit évaluable, pas 4 features en 4 mots)

### 12. Créer une page `/book-nova/` ou enrichir la section produit

**Pourquoi** : section actuelle = 4 features x 5 mots. Trop maigre pour un produit présenté comme pièce maîtresse.

**À faire** : page dédiée avec copie longue (400–600 mots), screenshots réels de l'app, témoignages utilisateurs, lien App Store/Play Store.

### 13. Inline critical CSS + reste async

**Gain** : FCP -200ms.

**À faire** :
- Extraire ~3-4 KB de CSS hero/nav dans `_includes/critical.css`
- Inliner dans `<head>` via `{% include critical.css %}` dans `<style>`
- Charger `main.css` en async : `<link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="...">`

### 14. Ajouter `meta name="robots" content="noindex"` sur la page 404

**Pourquoi** : bonne pratique défensive, évite l'indexation de la 404 en cas de bug.

**À faire** : dans `404.html`, ajouter dans le front-matter :
```yaml
robots: noindex, nofollow
```
Et dans `_layouts/default.html`, rendre la meta conditionnelle :
```html
{% if page.robots %}<meta name="robots" content="{{ page.robots }}" />{% endif %}
```

---

## 🔵 LOW — backlog

### 15. Headers de sécurité

**Note** : GitHub Pages ne permet pas de configurer CSP/X-Frame-Options/Permissions-Policy sans proxy Cloudflare. Hors scope tant que GitHub Pages est l'hébergeur.

**Option si migration derrière Cloudflare** : Rules → Transform Rules pour ajouter `Content-Security-Policy`, `X-Content-Type-Options: nosniff`, `Permissions-Policy`, `Referrer-Policy: strict-origin-when-cross-origin`.

### 16. Préchargement WOFF2 (après self-hosting, point 6)

**À faire** dans `_layouts/default.html` :
```html
<link rel="preload" as="font" type="font/woff2"
      href="{{ '/assets/fonts/fraunces-variable.woff2' | relative_url }}" crossorigin>
```

### 17. Google Search Console + soumission sitemap

**À faire après migration domaine** :
1. Ajouter la propriété dans GSC
2. Vérifier via DNS TXT ou fichier HTML
3. Soumettre `/sitemap.xml`
4. Monitorer la couverture d'indexation

### 18. Préparer une page presse / dossier de presse

**Contexte** : cible investisseurs + presse tech. Un dossier de presse PDF + page dédiée renforce la crédibilité.

**À faire** : `/presse/` avec dossier de presse PDF téléchargeable, contacts, photos HD, logos.

### 19. OG image dynamique par page (si pages additionnelles créées)

Si un jour il y a des pages `/book-nova/`, `/presse/`, etc., générer une OG image spécifique par page (cf. https://github.com/vercel/og pour l'inspiration).

### 20. `generator` meta tag vs `build_date`

**À faire** : supprimer tout `generator` par défaut Jekyll dans le `<head>` (pas bloquant).

---

## Outils de suivi recommandés

- **Google Search Console** — couverture + performance
- **Lighthouse CI** — gate de build (actuellement manuel dans Chrome DevTools)
- **Schema.org Validator** — https://validator.schema.org/ — valider le @graph
- **OpenGraph Debugger** — https://www.opengraph.xyz/ — vérifier le preview social
- **llms.txt Validator** — informel pour l'instant, vérifier manuellement le rendu
- **PageSpeed Insights** — https://pagespeed.web.dev/ — CWV field data (après accumulation de traffic réel)

---

## Priorisation synthétique

| # | Tâche | Impact | Effort |
|---|---|---|---|
| 1 | Mentions légales | 🔴🔴🔴 | 1h |
| 2 | Lier App Store réelle | 🟠🟠🟠 | 10min |
| 3 | Self-host fonts | 🟠🟠 | 2h |
| 4 | Migration `amgma.fr` | 🟠🟠🟠 | 3h + délai DNS |
| 5 | Enrichir bios | 🟡🟡 | 30min |
| 6 | Page Book Nova dédiée | 🟡🟡 | 4h |
| 7 | Photos fondateurs | 🟡 | variable |

**Ordre suggéré** : 1 → 2 → 4 → 3 → 5 → 6 → 7.
