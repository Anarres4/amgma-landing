# Handoff : Landing Page AMGMA

## Overview

Ce package contient la landing page corporate d'**AMGMA**, SAS française fondée en 2024 par Ana Martinez (Présidente) et Florent Garcia (Directeur Général). AMGMA est un studio logiciel indépendant basé à Paris qui édite des applications mobiles, à commencer par **Book Nova** (déjà publiée sur iOS).

La landing s'adresse prioritairement à :
- **Investisseurs & business angels**
- **Partenaires B2B** (éditeurs, librairies)
- **Presse et médias tech**

Objectif : projeter une image **tech / corporate haut de gamme** tout en restant en cohérence avec l'ADN éditorial et chaleureux de Book Nova.

## About the Design Files

Les fichiers livrés dans ce bundle sont des **références de design créées en HTML/CSS** — des prototypes qui montrent l'apparence et le comportement voulus, **pas du code de production à copier tel quel**.

La cible de production est **Jekyll + GitHub Pages** (site statique, hébergement gratuit). L'implémentation doit :

1. **Recréer le design à l'identique** dans une structure Jekyll (layouts + includes + data files).
2. Utiliser **CSS custom pur** (pas de Bootstrap, pas de framework JS). Le design a été construit sans dépendance, il est volontairement léger.
3. Découper les sections en `_includes` Jekyll pour faciliter la maintenance.
4. Externaliser la copy et la palette dans `_config.yml` / `_data/` pour itération facile.

## Fidelity

**High-fidelity (hifi)** — tous les choix sont finaux : palette, typographie, espacements, animations, copy française. Le développeur doit reproduire l'UI **au pixel près**, puis structurer le code en Jekyll idiomatique.

## Structure du site (page unique, ancres internes)

Le site est une **single-page landing** avec navigation par ancres. Ordre des sections :

1. **Nav** (sticky, blur, transparent)
2. **Hero** — manifeste de studio
3. **Marquee** — bande typographique défilante
4. **Studio / About** — manifeste à deux colonnes
5. **Principes** — grille 3 colonnes (Édition / Artisanat / Indépendance)
6. **Book Nova** — vitrine produit N° 001 avec mockup iPhone
7. **Stats** — 4 chiffres éditoriaux
8. **Équipe** — Ana + Florent (cartes avec avatars placeholder)
9. **Contact** — CTA email centré
10. **Footer**

---

## Design Tokens

### Colors (thème sombre par défaut)

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#0E0D10` | Fond principal onyx |
| `--bg-deep` | `#08070A` | Fond plus profond (marquee, principes, team, footer) |
| `--surface` | `#17161B` | Cartes (team members) |
| `--surface-2` | `#1F1D24` | Surface secondaire |
| `--line` | `rgba(244, 235, 217, 0.08)` | Bordures subtiles |
| `--line-strong` | `rgba(244, 235, 217, 0.16)` | Bordures visibles |
| `--ink` | `#F4EBD9` | Texte principal (papier chaleureux) |
| `--ink-soft` | `#C9BFA9` | Texte secondaire |
| `--ink-faint` | `#7A7266` | Texte tertiaire / meta |
| `--accent` | `#E4885F` | Terracotta Book Nova (accent principal) |
| `--accent-deep` | `#C96A4B` | Accent sombre (hovers, gradients) |
| `--gold` | `#F0BB62` | Or vieilli (accent secondaire) |
| `--sage` | `#9FB089` | Sauge (tags "live", "success") |

### Thème clair (toggle optionnel via Tweaks)

| Token | Hex |
|---|---|
| `--bg` | `#F4EBD9` |
| `--bg-deep` | `#EDE2CE` |
| `--surface` | `#FAF4EA` |
| `--ink` | `#2B2118` |
| `--ink-soft` | `#5C4A3A` |
| `--ink-faint` | `#9A8775` |

### Typography

**Fonts (Google Fonts)** :
- **Fraunces** (serif expressif) — `ital,opsz,wght@0,9..144,300..700;1,9..144,300..600` — utilisé pour les titres, accents italiques, logos
- **Inter** (sans-serif neutre) — `300..800` — texte courant, nav, UI
- **JetBrains Mono** — `400,500` — eyebrow labels, meta tags, "N° 001" etc.

**Échelle** :

| Usage | Famille | Taille | Poids | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| H1 hero | Fraunces | `clamp(56px, 9vw, 132px)` | 350 | -0.04em | 0.95 |
| H2 sections | Fraunces | `clamp(44px, 6vw, 76px)` | 350 | -0.03em | 1.0 |
| Product title | Fraunces | `clamp(60px, 9vw, 128px)` | 300 | -0.04em | 0.9 |
| Pull quote | Fraunces italic | 32px | 400 | — | 1.3 |
| H3 principle | Fraunces | 26px | 500 | -0.5px | 1.15 |
| Member name | Fraunces | 32px | 400 | -0.5px | — |
| Stat value | Fraunces | `clamp(48px, 6vw, 80px)` | 350 | -0.03em | 1.0 |
| Body | Inter | 15-22px | 300-400 | — | 1.5-1.6 |
| Nav | Inter | 14px | 400-500 | — | — |
| Eyebrow / meta | JetBrains Mono | 11px | 500 | 1.5-2px | — |

**Les italiques Fraunces en couleur terracotta (`--accent`) sont la signature visuelle** — présents dans presque chaque titre (ex. "comme on édite *des livres*").

### Spacing

- Section padding vertical : `120-160px` (desktop), `80-100px` (mobile)
- Section padding horizontal : `32px`
- Container max-width : `1240px`
- Grid gaps typiques : `40px`, `60px`, `80px`

### Border radius

- Boutons pilule : `999px`
- Cartes team : `20px`
- Phone screen : `34-46px`
- Small elements : `8-14px`

### Shadows

```css
/* Phone mockup */
box-shadow:
  0 40px 80px rgba(0,0,0,0.6),
  0 0 0 1px var(--line-strong),
  inset 0 0 0 2px rgba(244, 235, 217, 0.04);

/* CTA terracotta inside phone */
box-shadow: 0 6px 16px rgba(228,136,95,0.3);

/* Tweaks panel */
box-shadow: 0 20px 50px rgba(0,0,0,0.5);
```

---

## Screens / Sections — Détails

### 1. Nav (fixed top)

- Position fixed, padding `18px 32px`
- Background `rgba(14, 13, 16, 0.72)` + `backdrop-filter: blur(14px)`
- Border-bottom `1px solid var(--line)`
- Z-index 100
- Layout : logo gauche, liens centre (masqués < 780px), CTA "Nous écrire →" droite
- Logo : cercle 28px terracotta avec lettre "A" en Fraunces + wordmark "AMGMA" en Fraunces 22px

### 2. Hero

- Min-height `100vh`, padding-top `180px`
- Grille de fond : deux lignes CSS à 80px d'intervalle, maskée en radial gradient
- **Glow** : radial gradient terracotta `rgba(228, 136, 95, 0.22)` blur 40px, placé en haut-droite
- **Eyebrow** mono : `"Studio indépendant · Paris · EST. 2024"` avec petite ligne 24x1px devant
- **H1** :
  ```
  Nous éditons
  des logiciels
  comme on édite      ← italic + terracotta
  des livres.         ← italic + terracotta
  ```
- **Sub** (19px, ink-soft, max-width 620px) : "AMGMA est un studio logiciel indépendant. Nous concevons, éditons et faisons grandir des applications mobiles pensées pour durer — à commencer par Book Nova, notre première œuvre."
- **CTAs** : primary "Découvrir Book Nova →" (ink sur bg) + ghost "Le studio"
- **Meta footer** en mono (11px, ink-faint), position absolute bas :
  - Gauche : "**AMGMA SAS** — Studio logiciel / Paris, France"
  - Droite : "**N° 001** Book Nova · ● Live / **N° 002** — In progress"

### 3. Marquee

- Background `var(--bg-deep)`, borders top/bottom
- Texte Fraunces italic 26px, couleur `--ink-faint`
- Animation CSS `scroll 45s linear infinite`, translateX de 0 à -50%
- Contenu (répété 2x pour loop) : `Logiciel édité ● Fait à la main ● Indépendant ● Book Nova ● Paris ● AMGMA`
- Les dots `●` en couleur terracotta

### 4. Studio / About (#studio)

- Grid 1fr / 1.4fr, gap 80px
- Gauche : eyebrow "Le studio" + H2 "Un studio, *pas une startup.*"
- Droite : corps éditorial 22px, 300 weight, avec **pull quote** au milieu (border-left 2px terracotta, padding-left 24px, Fraunces italic 32px)
- Texte complet dans le HTML source

### 5. Principes (#principles)

- Background `var(--bg-deep)`
- H2 : "Trois convictions *qui tiennent* nos projets."
- Grid 3 colonnes séparées par des lignes 1px (background: `var(--line)`, gap: 1px)
- Chaque carte : fond `bg-deep`, padding `40px 36px 44px`, min-height 280px
- Contenu :
  - **01 — Édition** : "Un logiciel, *un propos.*"
  - **02 — Artisanat** : "Le soin *comme cahier des charges.*"
  - **03 — Indépendance** : "Pas de pression *extérieure.*"
- Numéros en JetBrains Mono 12px, ink-faint
- Titres Fraunces 26px avec italic terracotta

### 6. Book Nova (#product)

- Glow subtil or (`rgba(240, 187, 98, 0.12)`) bottom-left
- Header : "N° 001 · Première œuvre" + tag "● Live sur l'App Store" (fond sauge, texte bg)
- H2 géant : "Book *Nova.*" (Fraunces 300)
- Grid 2 colonnes gap 80px
- **Gauche** :
  - Lede 20px
  - Liste features numérotées 01-04 avec séparateurs :
    - 01 Scans illimités / Identifiez n'importe quel livre
    - 02 Recommandations éditoriales / Humaines, pas algorithmiques
    - 03 Statistiques de lecture / Votre carnet vivant
    - 04 Bibliothèque enrichie / Chaque livre, une histoire
  - CTAs : "Visiter book-nova.com →" + "Dossier presse"
- **Droite** : mockup iPhone (voir ci-dessous)

#### Phone Mockup (custom CSS, pas d'image)

- `.phone` : 280x580px, fond `#0B0A0D`, border-radius 46px, padding 12px
- Rotation -3deg au repos, passe à 0deg + translate Y sur hover (transition 0.5s)
- `.phone-back` : téléphone fantôme derrière (260x540, rotation +4deg, translate (30, 20), gradient surface)
- `.phone-notch` : 88x24 en haut centre, même couleur que le châssis
- **Screen** : fond papier `#FAF4EA`, radius 34px
  - Status bar "9:41 / ●●●●" en Inter 13px bold
  - Eyebrow mono "VOTRE BIBLIOTHÈQUE" 9px
  - Titre Fraunces 34px : "42 livres, *une vie.*"
  - Sub 11px : "Votre pile grandit à chaque lecture terminée."
  - **Pile de livres** : 10 tranches empilées (flex column-reverse) — chaque livre = div 11-14px hauteur, largeurs variées, couleurs spécifiques, texte Fraunces 6px uppercase blanc, inner-shadow droit, bande dorée à gauche. Liste exacte des 10 livres dans le HTML.
  - CTA terracotta bas : "Scanner un livre"
- Label latéral rotation -90deg : "N° 001 — iOS"

### 7. Stats

- Grid 4 colonnes (2 en mobile)
- Chiffres Fraunces `clamp(48px, 6vw, 80px)` weight 350
- Valeur italic terracotta pour accent :
  - **2024** — Année de fondation
  - **1 / ∞** — Applications publiées / à venir
  - **0 €** — Levées de fonds — auto-financé
  - **2** — Co-fondateurs, Paris

### 8. Équipe (#team)

- Background `bg-deep`
- Head : eyebrow "Les fondateurs" + H2 "Deux voix, *une même exigence.*" + lede
- Grid 2 colonnes, gap 40px
- Chaque membre : card 36px padding, border 1px line, radius 20px
  - Grid `140px 1fr`, gap 28px
  - **Avatar** : 140x170, background `repeating-linear-gradient(135deg, surface-2 0 8px, bg-deep 8px 16px)` — trame diagonale
    - Initiale géante au centre (Fraunces italic 64px, terracotta)
    - Tag mono en bas (ex. "AM — 01") sur fond bg semi-transparent
  - Role mono 11px terracotta uppercase
  - Nom Fraunces 32px avec italic pour le nom de famille
  - Bio 15px ink-soft
  - Liens mono 11px (LinkedIn ↗ / Email ↗)
- **Ana Martinez** — Présidente · Co-fondatrice — "Ana dirige la vision produit et la stratégie d'AMGMA…"
- **Florent Garcia** — Directeur général · Co-fondateur — "Florent pilote les opérations, la tech et le développement commercial…"

**Note** : les avatars sont des placeholders stylisés. À remplacer par de vraies photos lorsque disponibles (format portrait 140x170, traitement désaturé/warm tone recommandé pour cohérence).

### 9. Contact (#contact)

- Centré
- Eyebrow "Entrons en contact"
- H2 géant : "Parlons *logiciel.*" (jusqu'à 120px)
- Lede 19px ink-soft
- 3 **channels** en pilules cliquables (border line-strong, radius 999px, padding 14px 22px) :
  - Mail — hello@amgma.fr
  - Presse — presse@amgma.fr
  - LinkedIn — /amgma-studio
  - Chaque channel : petit label mono 10px en préfixe

### 10. Footer

- Background `bg-deep`, padding `56px 32px 40px`
- Grid `2fr 1fr 1fr 1fr`
- Colonnes : Brand + desc / Studio / Produits / Contact
- Bottom : "© 2026 AMGMA SAS · Paris · France" + "Mentions légales · Confidentialité" (mono 11px)

---

## Interactions & Behavior

### Smooth scroll
`html { scroll-behavior: smooth; }` — navigation par ancres fluide.

### Nav blur
Transparent avec backdrop-filter — présent au chargement, ne change pas au scroll (on peut opter pour une variante qui se solidifie au scroll si besoin).

### Marquee
Animation CSS infinie `scroll 45s linear infinite`. Le contenu est dupliqué dans le HTML pour que la translation -50% donne une boucle sans couture.

### Reveal on scroll
Les éléments `section > .wrap`, `.principle`, `.member`, `.stat` ont une classe `.reveal` (opacity 0, translateY 20px, transition 0.8s ease). Un `IntersectionObserver` (threshold 0.1) ajoute la classe `.shown` quand ils entrent dans la viewport.

### Phone hover
`.phone:hover { transform: rotate(0) translateY(-8px) }` transition 0.5s ease.

### Btn hover
- `.btn-primary:hover` : `translateY(-1px)` + shadow glow
- `.btn-ghost:hover` : border passe à ink
- `.channel:hover` : fond surface + border ink-soft

### Film grain
Pseudo-element `body::before`, position fixed full-viewport, SVG turbulence inline, opacity 0.035, mix-blend overlay. Z-index 999 pointer-events none. Peut être toggle off.

---

## State Management

La page est statique. Côté JS uniquement :
- `IntersectionObserver` pour les reveals
- Aucun fetch / aucune route

**Pour Jekyll** : tout est statique, pas de JS critique. La copy vit dans `_data/content.yml` ou directement dans les `_includes`.

---

## Assets

- **Fonts** : Google Fonts (Fraunces, Inter, JetBrains Mono) — chargés via `<link>` avec preconnect
- **Aucune image** dans la version actuelle — toute l'iconographie est CSS/SVG inline
- **SVG noise** pour le grain : data-URI inline dans le CSS (pas de fichier externe)
- **Photos équipe** : à fournir par le client (Ana, Florent) — fallback avatar stylisé en place

### Assets à produire plus tard
- Photos portraits Ana & Florent (format carré ou 4:5, traitement warm)
- Logo AMGMA SVG (actuellement typo Fraunces)
- OpenGraph image (1200x630) — reprendre le hero
- Favicon (cercle terracotta "A")

---

## Guide d'implémentation Jekyll

### Structure recommandée

```
amgma-landing/
├── _config.yml
├── _data/
│   ├── team.yml
│   ├── principles.yml
│   └── nav.yml
├── _includes/
│   ├── nav.html
│   ├── hero.html
│   ├── marquee.html
│   ├── about.html
│   ├── principles.html
│   ├── product-booknova.html
│   ├── stats.html
│   ├── team.html
│   ├── contact.html
│   └── footer.html
├── _layouts/
│   └── default.html
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── reveal.js
├── index.html
├── Gemfile
└── .github/workflows/jekyll.yml  (ou config Pages built-in)
```

### `_config.yml` — extrait

```yaml
title: AMGMA
description: Studio logiciel indépendant. Éditeur de Book Nova.
email: hello@amgma.fr
press_email: presse@amgma.fr
url: https://amgma.fr
locale: fr_FR

brand:
  primary: "#0E0D10"
  accent: "#E4885F"
  paper: "#F4EBD9"

founders:
  - name: Ana Martinez
    role: Présidente · Co-fondatrice
    initials: AM
    bio: "Ana dirige la vision produit…"
  - name: Florent Garcia
    role: Directeur général · Co-fondateur
    initials: FG
    bio: "Florent pilote les opérations…"
```

### GitHub Pages

1. Repo public `amgma/amgma.github.io` (ou custom domain `amgma.fr` avec CNAME)
2. Activer Pages dans Settings → Pages → Source: GitHub Actions
3. Workflow Jekyll par défaut suffit
4. Custom domain : ajouter `CNAME` file à la racine avec `amgma.fr`

---

## Files

- `AMGMA Landing.html` — prototype complet monolithique (source de vérité pour le développeur)

---

## Notes pour le développeur

- **Pas de Bootstrap, pas de Tailwind**. Le design a été pensé pour du CSS custom. L'ajouter diluerait l'identité.
- **L'italique Fraunces en terracotta est la signature** — à préserver partout. Si un titre n'a pas d'italique coloré, il manque quelque chose.
- **Les tailles fluides** (`clamp(min, vw, max)`) gèrent la responsivité des titres — ne pas remplacer par du media query fixe.
- **La grille de fond du hero** utilise un mask radial — important à garder, c'est ce qui donne la profondeur.
- **Les chiffres dans la section Stats** (1/∞, 0€) sont volontairement non conventionnels — ils font partie du positionnement studio indépendant.
- **Le ton français est soigné et éditorial** — si traduction EN à venir, préserver ce registre (pas de startup-speak).
# amgma-landing
