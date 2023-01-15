---
layout: post
title: "Compte-rendu du Riviera Coding Week-end"
date: 2012-08-13 15:07
comments: true
category:
  - articles
tags:
 - In French
 - Personal Life
 - Events
---

_This post is about the Riviera Coding Week-end, a geek event that took place in Nice (France) from 10 to 12 August 2012.
As this post is closely related to a French event, I think for once, it's more appropriate to write in French, even if I usually blog in English.
If you're anyway interested, I'm sure [Google translate](http://translate.google.com/translate?hl=en&sl=fr&tl=en&u=http%3A%2F%2Fwww.dhar.fr%2Fblog%2F2012%2F08%2F13%2Ffr-compte-rendu-du-riviera-coding-week-end%2F) or any other translation tool can fit your needs..._

<!-- more -->

[{% img right /assets/images/RivieraCWE-1.jpg "Seb profite d un repos bien mérité" %}](https://www.icloud.com/sharedalbum/fr-fr/#B0h5Uzl7VjJbIn;E5B270E4-A32E-419E-9283-FF4AAF9404E9)
Du 10 au 12 Août dernier, j'ai participé au premier _Riviera Coding Week-end_, organisé par les membres du [RivieraGUG](http://www.meetup.com/Riviera-Groovy-Grails-User-Group/) avec la participation du [JSSophia](http://groups.google.com/group/jssophia) dont je fais partie.
À ma connaissance, c'est le premier événement du genre qui ait lieu sur la côte d'azur.
C'est en tout cas le premier auquel j'ai eu l'occasion de participer.
Après ces 48 heures passées à construire, échanger, mais surtout coder, un petit bilan me semble bien utile.

## Un Coding Week-End, quelle idée...

D'abord initié par le _[Groovy & Grails User Group](http://www.meetup.com/Riviera-Groovy-Grails-User-Group/)_ , l'événement avait pour objectif de construire un site dédié pour le groupe.
Par la suite, alors que certains membres du _[Javascript User Group](http://groups.google.com/group/jssophia)_ ont aussi souhaité participer au week-end, la thématique de l'événement a un peu changée, pour s'axer d'avantage sur la collaboration entre les communautés locales.

Nous y voilà, c'est Vendredi soir, il est un peu plus de 19h30 lorsque j'arrive aux [Satellites](http://www.satellites-teletravail.com/) (qui nous ont hébergés gracieusement tout le week-end).
La plupart des participants sont déjà arrivés.
Il y a quelques visages bien connus, des collègues de travail, avec qui je passe déjà mes journées en semaines; certains sont simplement familiers, croisés lors des précédentes réunions du JSSophia ou lors de conférences qui ont eu lieu à Sophia-Antipolis quelques mois plus tôt; puis d'autres, enfin, que je rencontre pour la première fois.

D'entrée de jeu, l'ambiance est décontractée, l'accueil chaleureux et tout le monde est souriant.
Sans trop savoir ce que va donner cette expérience, on sait déjà qu'on est tous là pour la même chose: partager notre passion du web et construire quelque chose, tous ensemble, _just for fun_.

## Entrée en matière

    | Loading Grails 2.1.0

Le programme du Week-end est assez simple et couvre principalement la soirée du vendredi, après tout, on est pas là pour subir un planning rigoureux.

Le début de soirée est assez calme.
On fait connaissance, on se raconte nos vacances (pour ceux qui en ont pris...), on prends l'apéro en terrasse, on envoie quelques tweets en espérant ramener de nouveaux participants de dernière minute.
Certains configurent le Raspberry Pi qui hébergera un [EtherPad](http://fr.wikipedia.org/wiki/EtherPad) pour la durée du week-end.

## Grails Crash Course

    | Configuring classpath

[{% img left /assets/images/RivieraCWE-2.jpg "Grails Crash course" %}](https://www.icloud.com/sharedalbum/fr-fr/#B0h5Uzl7VjJbIn;3B2C0153-74D4-4E8B-B8CD-16B70D6F0FC1)
Après avoir dévoré quelques pizzas, on attaque les choses sérieuses avec un _Crash Course Grails_ d'une petite demi-heure présenté par [Bertrand Goetzmann](https://twitter.com/bgoetzmann), bien utile pour ceux qui n'auraient jamais eu l'occasion d'utiliser le Framework.
Là encore, l'ambiance est bien loin d'un cours magistral.
La plupart des participants connaissent bien les rouages de Grails et le cours de Bertrand devient un bon prétexte pour partager les expériences de chacun et échanger les points de vue.

## Brainstorming

    | Environment set to development
Presque deux heures plus tard (la demi-heure la plus longue qu'on ai connu), nous démarrons un Brainstorming animé avec un objectif simple : qu'allons nous construire pendant le week-end?

Rapidement, quelques sujets intéressants font surface, souvent liés à l'activité des User Groups autour de Sophia-Antipolis :

[{% img left /assets/images/RivieraCWE-3.jpg "Brainstroming en cours" %}](https://www.icloud.com/sharedalbum/fr-fr/#B0h5Uzl7VjJbIn;6213F156-D247-41CF-85D9-2B62628738E6)

 - Manque d'activité des communautés : Il y a bien quelques user groups plus ou moins actifs mais la plupart restent globalement peu connus.
 - Manque de relations et de collaboration entre ces groupes.
 - Problématiques récurrentes d'un groupe à l'autre: trouver une salle, un sponsor, se faire connaître localement, informer et impliquer les membres

Vient ensuite l'idée de créer un site dédié aux User Groups de la région, ayant pour objectif de faciliter la découverte des communautés locales et leur collaboration.
Le projet est ambitieux, mais l'important est surtout de lancer une initiative.
Pour pouvoir obtenir un résultat concret en un week-end, nous décidons de nous concentrer sur les éléments de base du site et de garder de côté les idées qui demandent davantage de travail.

#### Première itération: Briques de base

 - Enregistrement des utilisateurs
 - Création d'un groupe par un utilisateur
 - Abonnement à un groupe existant par un utilisateur
 - Publication d'éventements organisés par le groupe
 - Publication d'articles (blog) par un groupe
 - Présentation des sponsors d'un groupe
 - Association de tags aux groupes, utilisateurs

#### Développements ultérieurs:

 - Favoriser la mise en relations des groupes géographiquement proches
 - Favoriser la découverte des groupes par les utilisateurs
 - Favoriser la mise en commun des ressources (salles, sponsors, relations) des groupes

 C'est un résumé un peu rapide, mais tous les détails sont en ligne grâce au [Raspberry Minute](https://github.com/rivieragug/website/blob/master/RASPBERRY_MINUTE.md)

## On est là pour coder, non?

    | Packaging Grails application

[{% img right /assets/images/RivieraCWE-4.jpg "Au boulot" %}](https://www.icloud.com/sharedalbum/fr-fr/#B0h5Uzl7VjJbIn;8238AAD4-2826-4305-BC33-D1990E910983)
Après avoir déterminé notre objectif pour le week-end, nous n'avions plus qu'à nous mettre au travail.
Raconter les deux jours suivants en détail serait sans doute trop long et assez peu constructif.

L'important à retenir est sans doute que les contributions ont été nombreuses : écrire du code, décortiquer OAuth, dessiner des croquis d'IHM, mettre en place l'intégration continue (_continious outage?_), travailler le design de site, aider les débutants ou simplement mettre l'ambiance et remotiver les troupes; chacun a contribué au projet selon ses compétences et sa forme du moment.

Le résultat est là! Le projet est bien démarré, le code est [disponible sur Github](https://github.com/rivieragug/website) et une première version est [déjà en ligne](http://ughub.cloudfoundry.com/)

## Bilan

    | Running Grails application

Concernant la soirée de vendredi, je crois qu'il aurait été judicieux d'attaquer le brainstorming avant le Crash Course Grails.
Cela aurait permis d'entrer directement dans le vif du sujet et d'utiliser le cours pour construire les premiers éléments du projet. On aurait gagné un peu de temps, et tout le monde aurait été plus impliqué dans le cours.

Ensuite, comme je l'ai dis plus haut, le projet était sans doute trop ambitieux par rapport au temps à notre disposition. Il faut reconnaître que la version obtenue à l'issue du week-end est plus proche du prototype que d'une application de qualité professionnelle.

Malgré tout, en ce qui me concerne, cette expérience a été clairement positive.
Une ambiance bien sympa, des locaux au top, et une belle brochette de passionnés qui se sont tous  impliqués dans le projet comme si l'enjeu avait été important.

Et tant pis si le résultat n'a pas la qualité que nous aurions pu attendre.
Après tout, l'initiative est lancée et le code est là, ouvert à tous, disponible sur Github.
Il ne tiens qu'à nous de continuer à faire avancer ce projet, en y contribuant nous-même ou en motivant d'autres personnes à participer. Quelques _pull requests_ de plus et on l'aura le site communautaire qu'on a imaginé tous ensemble vendredi dernier.

Y'a plus qu'à comme on dit... ;)

## Remerciements

    | Server running. Browse to http://ughub.cloudfoundry.com/

Quelques remerciements pour finir.
D'abord parce que j'ai passé un excellent week-end, mais aussi parce que ce type d'initiative participe à créer cette dynamique locale qui nous tiens tous à cœur.

Merci, donc, aux membres du RiveraGUG pour avoir lancé l'initiative et géré l'organisation.
Merci aux [Satellites](http://www.satellites-teletravail.com/), et plus particulièrement à Nicolas, qui a accueilli notre petit groupe sans rien demander en retour. Vos locaux sont géniaux, si un jour je me met à mon compte, je sais déjà où établir mon QG ;)
Merci aussi à nos deux sponsors, [Avisto](http://www.avisto.com) et [Sopra Group](http://www.sopragroup.com/) pour avoir nous avoir permis de travailler le ventre plein.

Et merci enfin à tous ceux qui étaient présent et qui se sont impliqués au cours du week-end.

## Quelques liens en vrac

 - L'application sur cloud-foundry : [UG-hub](http://ughub.cloudfoundry.com/)
 - Le [Code Source](https://github.com/rivieragug/website) sur Github
 - [Quelques Photos](https://www.icloud.com/sharedalbum/#B0h5Uzl7VjJbIn)
 - Les participants sont aussi [sur Twitter](https://twitter.com/_dhar/rivieracwe-2012)
 - _Update_: Les [slides](http://www.odelia-technologies.com/Grails/Grails.impress.html) de Bertrand sont maintenant disponibles





