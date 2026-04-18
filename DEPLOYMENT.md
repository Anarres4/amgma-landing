# Déploiement

## Choix technique : GitHub Actions plutôt que la gem `github-pages`

Ce projet utilise un workflow **GitHub Actions** ([.github/workflows/jekyll.yml](.github/workflows/jekyll.yml))
pour construire et déployer le site, plutôt que le mode "classique" basé sur la
gem [`github-pages`](https://github.com/github/pages-gem).

**Raison :** la gem `github-pages` est verrouillée sur **Jekyll 3.10** et un jeu
restreint de plugins. Nous utilisons **Jekyll 4.4** (et Ruby 3.4) pour bénéficier :

- des dernières fonctionnalités et corrections de Jekyll,
- de la liberté d'ajouter n'importe quel plugin (non limité à la whitelist GitHub),
- d'une version de Ruby moderne.

Le workflow exécute `bundle exec jekyll build` dans un runner Ubuntu, puis publie
le dossier `_site/` généré sur GitHub Pages via `actions/deploy-pages@v4`.

### Activation sur GitHub

Dans **Settings → Pages** du dépôt, choisir :

- **Source** : `GitHub Actions` (et non "Deploy from a branch").

## Configuration du `baseurl`

Dans [_config.yml](_config.yml) :

```yaml
baseurl: "/amgma-landing"
url: "https://anarres4.github.io"
```

### Si vous configurez un domaine custom plus tard

Lorsqu'un domaine personnalisé est ajouté (ex. `www.amgma.com`), il faut :

1. **Vider `baseurl`** dans `_config.yml` :
   ```yaml
   baseurl: ""
   url: "https://www.amgma.com"
   ```
2. Ajouter un fichier `CNAME` à la racine du projet contenant le domaine :
   ```
   www.amgma.com
   ```
3. Configurer les DNS chez le registrar (enregistrements `A` ou `CNAME` vers
   GitHub Pages — voir la
   [doc officielle](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site)).
4. Cocher **Enforce HTTPS** dans Settings → Pages une fois le certificat émis.

Sans ce nettoyage, tous les liens internes seront préfixés par `/amgma-landing/`
et casseront sur le domaine custom.
