# Rapport d’optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 12 mai 2024, 21:35:18](https://pagespeed.web.dev/analysis/https-william-tim-momo-com/o1ny4705cz?form_factor=desktop)

## Problème #1
### Différez le chargement des images hors écran
Les images qui ne sont pas dans l'écran chargent en même temps que celles qui y sont.
### Action concrète pour résoudre le problème
Les images qui ne sont pas dans l'écran chargeront au fur et à mesure du déffilement de la page.
### Résultats
J'ai réussi à mettre un délai d'affichage en utilisant loading="lazy"

## Problème #2
### Élément identifié comme "Largest Contentful Paint"
Les images qui sont très grandes rajoute un délai de 3.63 secondes lors de la visite du site.
### Action concrète pour résoudre le problème
Les grandes images du site seront préchargé de manière à ce que quand on arrive sur la page on ne perd pas de temps.
### Résultats
J'ai réussi à diminuer le délai de plus de 2 secondes sans même les préchargé

## Problème #3
### Réduisez le travail du thread principal
Le temps d'analyse des fichiers CSS et JS est trop élevé. 
### Action concrète pour résoudre le problème
Les fichier CSS et JS seront optimiser en enlevant un maximum de caractères inutiles
### Résultats
J'ai réussi à optimisé le CSS et le JS en utilisant des sites d'optimisation

## Rapport projet ScrollyTelling après optimisation
[Page Speed Insights - Rapport du 12 mai 2024, 22:22:40](https://pagespeed.web.dev/analysis/https-william-tim-momo-com/kz0p71wmm1?form_factor=desktop)