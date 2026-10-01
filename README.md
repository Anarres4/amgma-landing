# AMGMA — Landing page

Site vitrine du studio AMGMA, construit en **Jekyll** et hébergé gratuitement sur **GitHub Pages**.

## Stack

- **Jekyll 4.4** — générateur de site statique
- **Ruby 3.4** — runtime
- **CSS custom** — aucun framework (pas de Bootstrap / Tailwind)
- **JS minimal** — IntersectionObserver pour le reveal au scroll et la vidéo Book Nova, bascule jour/nuit

## Prérequis

- Ruby ≥ 3.1 (testé avec 3.4)
- Bundler (`gem install bundler`)

## Démarrage

```bash
bundle install
bundle exec jekyll serve
```

Le site est disponible sur http://127.0.0.1:4000/amgma-landing/

## Structure

```
.
├── _config.yml              # Config Jekyll
├── _data/                   # Copy des sections (YAML)
│   ├── nav.yml
│   ├── hero.yml
│   ├── marquee.yml
│   ├── about.yml
│   ├── principles.yml
│   ├── product.yml
│   ├── stats.yml
│   ├── team.yml
│   ├── contact.yml
│   └── footer.yml
├── _includes/               # Composants de section
│   ├── brand-mark.html      # Monogramme « A. » (SVG inline)
│   └── section-break.html   # Fleuron • ● • entre deux sections
├── _layouts/
│   └── default.html         # Layout principal
├── assets/
│   ├── brand/amgma-mark.svg # Monogramme « A. » (fichier autonome)
│   ├── css/main.css         # Styles
│   ├── js/                  # reveal.js, theme.js, product-video.js
│   ├── team/                # Portraits des fondateurs
│   └── video/               # Vidéo Book Nova (AV1 + H.264) et son poster
├── index.html               # Page unique (single-page)
├── 404.html
└── .github/workflows/
    └── jekyll.yml           # Déploiement GitHub Pages
```

Toute la copy du site est externalisée dans `_data/` — pour éditer un texte, modifiez le YAML, pas le HTML.

### Ajouter un portrait

Déposer un portrait carré (≥ 480 px) dans `assets/team/`, puis renseigner
`photo` et `photo_alt` sur le membre concerné dans `_data/team.yml`. Sans
photo, l'avatar affiche l'initiale.

## Build de production

```bash
bundle exec jekyll build
```

Sortie dans `_site/`.

## Déploiement

Le déploiement est automatisé via GitHub Actions ([.github/workflows/jekyll.yml](.github/workflows/jekyll.yml)) à chaque push sur `main`.

Voir [DEPLOYMENT.md](DEPLOYMENT.md) pour les détails (choix de GitHub Actions vs gem `github-pages`, domaine custom, etc.).

## Accessibilité

- Thème jour (papier) par défaut, thème nuit au choix (mémorisé) — contrastes WCAG AA dans les deux
- Skip link clavier
- `aria-hidden` sur les éléments décoratifs
- `prefers-reduced-motion` respecté (désactive marquee, reveal et lecture automatique de la vidéo)
- Vidéo muette, avec bouton lecture/pause

## Licence

Le code de ce site est publié sous licence MIT — voir [LICENSE](LICENSE).

Les contenus rédactionnels (textes, copy) et les marques **AMGMA** et **Book Nova** restent la propriété de AMGMA SAS.
