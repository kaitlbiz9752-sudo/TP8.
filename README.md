


#### TP réalisé par Kaoutar AITLBIZ

### Dans le cadre d’un exercice React : Consommer une API.






Ce projet a pour objectif d’apprendre à consommer une API externe dans une application React, en utilisant deux méthodes :

- fetch()

- axios

Le TP comprend également la gestion du chargement, des erreurs, ainsi qu'un bouton permettant de recharger les données.

# Installation

- Cloner ou créer un projet React

- npx create-react-app api-react-tp


**ou (si tu utilises Vite) :**

```text
npm create vite@latest api-react-tp --template react
```

Installer Axios


```text
npm install axios
```

Lancer le serveur
```text
npm start
```



📂 Structure du projet



<img width="609" height="1079" alt="image" src="https://github.com/user-attachments/assets/29d9907c-ded8-4d4d-9673-2df1efd137e0" />


## Étape 1 – Composant avec fetch()

Fichier : src/FetchData.js

- Ce composant récupère 10 articles depuis l’API


- affiche un bouton Recharger les données.

**Fonctionnalités :**

- Affichage d’un message de chargement

- Gestion des erreurs

- Liste des articles

- Bouton pour relancer la requête

## Étape 2 – Composant avec Axios

**Fichier : src/AxiosData.js**





- Nom

- Email

- Ville (user.address.city)

- Bouton Recharger les données

## Étape 3 – Intégration dans App.js

Fichier : src/App.js

**Résultat attendu**

L’application doit afficher :

1️. Articles chargés avec fetch()

- 10 articles (titres)

- Bouton « Recharger les données »

- Gestion des erreurs

2️. Utilisateurs chargés avec axios

- Nom — Email — Ville

- Bouton « Recharger les données »

- Gestion des erreurs

## Exercices facultatifs réalisés

- Afficher 10 articles au lieu de 5
- Afficher la ville de chaque utilisateur
-Ajouter un bouton « Recharger les données »



## Description vidéo :






https://github.com/user-attachments/assets/25b60a85-fc5a-4ec1-a60e-ef57a76d77d6


