# Documentation du Tableau de Bord du Permis de Conduire

Ce projet est une application de tableau de bord interactif pour la gestion des réservations de date d'examen pour le permis de conduire. Vous pouvez suivre ces étapes pour exécuter le projet et interagir avec le tableau de bord.

## Credentiels :

- Admin : admin@admin.com / admin
- Candidate : candidate@candidate.com / candidate

## Prérequis

- Node.js et npm installés localement : [Télécharger Node.js](https://nodejs.org/)

## Installation

1. Clonez ce dépôt Git sur votre machine locale :

   ```bash
   git clone https://github.com/DoraymonIT/permis-de-conduire-dashboard1.git

   ```

2. Accédez au répertoire du projet :

cd permis-de-conduire-dashboard1

3. Installez les dépendances du projet en exécutant la commande suivante :

npm install

## Exécution du Projet

1. Une fois les dépendances installées, démarrez le serveur de développement avec la commande :

ng serve --o

2. Ouvrez un navigateur web et accédez à l'URL suivante :

http://localhost:4200/

Vous devriez maintenant voir le tableau de bord du permis de conduire.

## Interagir avec le Tableau de Bord

Le tableau de bord offre les fonctionnalités suivantes :

1. Liste des Candidats : Vous pouvez voir la liste des candidats enregistrés pour passer le permis de conduire. Utilisez le champ de recherche pour filtrer les candidats par nom, le bouton "Filtrer" pour appliquer le filtre, "Effacer le filtre" pour réinitialiser, et "Trier par nom" pour trier les candidats par nom.

2. Liste des Dates d'Examen : Vous pouvez voir la liste des dates d'examen disponibles. Vous pouvez également choisir une date d'examen dans un menu déroulant.

3. L'admin cree un nouveau candidat ( on envoit un email au candidat contient 'email' et 'password' [pas encore implemente] ) Et apres il peut acceder au board ( Voir sa reservation - Changer sa reservation - Payer sa reservation ).

## Arrêt du Serveur

Pour arrêter le serveur de développement, utilisez Ctrl + C dans la console où vous avez démarré le serveur.

C'est tout! Vous pouvez maintenant utiliser et explorer le tableau de bord du permis de conduire.
