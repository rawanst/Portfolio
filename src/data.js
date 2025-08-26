const data = {
  frontData: {
    title:'Rawan Tabaja',
    titleDeux:'Développeuse Full-Stack',
    content:'Passionné par la tech, je transforme les défis en solutions innovantes. Découvrez mon parcours et mes réalisations.',
  },
  menu: [
    {
      id: 1,
      name: 'Projets',
      url: '/projects'
    },
    {
      id: 2,
      name: 'Blog',
      url: '/blog'
    },
  ],
  links: [
    {
      id: 1,
      name: 'LinkedIn',
      shortName: 'LN',
      url: 'https://www.linkedin.com/in/rawan-t-5ba1bb170/'
    },
    {
      id: 2,
      name: 'GitHub',
      shortName: 'GH',
      url: 'https://github.com/rawanst'
    },
    {
      id: 3,
      name: 'rawantabaja12@gmail.com',
      shortName: '@',
      url: 'mailto:rawantabaja12@gmail.com?cc=&subject=Contact portfolio&body=Bonjour Rawan,%0D%0A%0D%0A<Votre message> %0D%0A%0D%0ACordialement, %0D%0A<NOM Prénom>'
    },
  ],
  aPropos : {
    title:'À Propos',
    routh:'/',
    desc:"Développeuse web full-stack diplômée d’un Master en développement informatique, je suis passionnée par la conception de solutions innovantes. Mon expertise en React.js pour le front-end, et en C# .NET pour le back-end, me permet d’aborder des projets complexes avec efficacité. Dotée d’une forte capacité d’adaptation, je cherche à intégrer une équipe dynamique où je pourrai contribuer à des projets ambitieux tout en continuant à développer mes compétences techniques.",
    listOfList:[
      { 
        id: 1, 
        name: 'Programmation', 
        list: [
          {id: '11', name: 'React'}, 
          {id: '12', name:'C# .Net'}
        ] 
      },
      { 
        id: 2, 
        name: 'Base de données', 
        list: [{id:'21', name:'MSSMSQL'}] },
      { 
        id: 4, 
        name: 'Langue', 
        list: [
          {id:'41', name:'Français Native'}, 
          {id:'42', name:'Anglais TOEIC B2'}] 
      },
      { 
        id: 3, 
        name: 'Outils', 
        list: [
          {id:'31', name:'GitHub'}, 
          {id:'32', name:'Fork'}, 
          {id:'33', name:'Postman'}
        ]
      },
    ],
    isCV:true,
  },
  projets : {
    title:'Projets',
    routh:'/projects',
    summaries:[
      { 
        id: 1, 
        routh: '/projects', 
        title: 'Projet 1', 
        resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      },
      { 
        id: 2, 
        routh: '/projects', 
        title: 'Projet 2', 
        resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      },
      { 
        id: 3, 
        routh: '/projects', 
        title: 'Projet 3', 
        resume: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
      },
     ],
  },
  blog : {
    title:'Blog',
    routh:'/blog',
    summaries:[
      { 
        id: 1, 
        routh: '/blog', 
        title: 'React server composant', 
        resume: "Réinventez vos applications web avec les composants serveur React : performance, rapidité et efficacité au cœur de Next.js !",
        date: "2024",
        contenu: `Les **composants serveur React** marquent une avancée majeure dans le développement web moderne, transformant la manière de concevoir et déployer des applications React.

Cette innovation, intimement liée à **Next.js**, redéfinit les rôles du client et du serveur, ouvrant de nouvelles perspectives pour optimiser les performances et l'expérience utilisateur.
Dans cet article, nous allons explorer en profondeur les composants serveur React, clarifier la distinction entre client et serveur, et expliquer comment cette nouveauté s'intègre au **framework Next.js**, qui tire pleinement parti de cette technologie. Nous comparerons également les approches traditionnelles avec les nouvelles possibilités offertes par ces composants, en analysant leur impact sur le rendu, l'interactivité et les performances des applications web.

### Le client et le serveur dans le développement web
Pour bien comprendre les composants serveur React, il est essentiel de saisir la différence entre le **client** et le **serveur**.
Le **client** correspond au navigateur de l'utilisateur (ordinateur, téléphone, etc.). Son rôle est de recevoir et interpréter les fichiers HTML et d'exécuter les fichiers JavaScript pour gérer les interactions utilisateurs.
Le **serveur**, de son côté, est une machine distante chargée de stocker les données du site (code, images, etc.) et de répondre aux requêtes du client en générant du HTML, CSS et JS. Cette communication constante entre client et serveur est cruciale pour le bon fonctionnement des sites web, et c’est dans cette interaction que les **composants serveur React** entrent en jeu.

(Schéma à venir)

### Les approches traditionnelles : Client-Side Rendering et Server-Side Rendering
Dans le **Client-Side Rendering (CSR)**, lorsque le client accède à un site, il reçoit d'abord un fichier HTML minimal, puis un fichier JS contenant les éléments interactifs. Le client interprète ces fichiers pour afficher la page dans un premier temps en exécutant le fichier HTML. Puis le client va rendre les éléments interactifs grâce au fichier JS. Après une requête supplémentaire est faite pour récupérer les données manquantes.

(Schéma à venir)

Avec **Next.js**, nous utilisons une autre approche : le **Server-Side Rendering (SSR)**. Le serveur génère d'abord un fichier HTML complet, incluant toutes les données nécessaires, avant de l'envoyer au client. Ce dernier reçoit ensuite le fichier JS pour activer les éléments interactifs via une phase appelée **hydratation**, où les éléments HTML et JS sont superposés pour créer une page interactive.

(Schéma à venir)

L'hydratation, spécifique au SSR, consiste à **associer les composants HTML déjà rendus** avec le code JavaScript côté client, ce qui permet d'ajouter de l'interactivité (comme des boutons cliquables). Elle transforme un rendu statique en une page dynamique en liant les deux versions du DOM (HTML et JS) pour améliorer la réactivité de l'application.

(Schéma à venir)

### Les composants serveur React et Next.js

Avec les **React Server Components**, la procédure est similaire au SSR, mais avec une différence notable : le **fichier JS** reçu par le client ne contient plus **tous les éléments de la page**. Seuls les éléments interactifs sont inclus, ce qui rend le fichier JS plus léger et accélère la phase d'hydratation. Même sur des petits projets, ce gain de performance est significatif, démontrant l’efficacité des composants serveur.

(Schéma à venir)

### Pour conclure

Les **composants serveur React** révolutionnent le développement web moderne en optimisant la gestion des ressources et en améliorant les performances. Grâce à **Next.js**, cette technologie permet de réduire la taille des fichiers JS envoyés au client et d’accélérer le temps de chargement des applications, offrant ainsi une expérience utilisateur plus fluide et réactive. L’adoption croissante des composants serveur promet de façonner l’avenir des applications web dynamiques.
Dans un prochain article, nous explorerons en détail leur implémentation pratique et les meilleures pratiques de codage pour profiter pleinement de cette innovation. Restez à l’écoute !`,
      },
      { 
        id: 2, 
        routh: '/blog', 
        title: 'Advent of code', 
        resume: "Plongez dans l’Advent of Code, le défi ultime des développeurs pour allier logique, algorithmes et esprit de Noël !",
        date: "12/2022",
        contenu:`Cette année pour bien préparer Noël, j'ai découvert le fameux calendrier de l'avant pour les développeurs : Advent of Code.

Cet évènement de programmation annuel a été créer par Eric Wastl pour tout développeurs et langages. De jours en jours les défis se complexifient, cependant, il est important de noter que ces défis sont conçus pour être difficiles et peuvent prendre beaucoup de temps et d'efforts pour les résoudre. Il est donc important de ne pas être trop dur envers soi-même si vous avez du mal à trouver une solution.

Ces défi sont vraiment challengeant car il nous font sortir de notre zone de travail habituel, que ce soit des cours, du travail ou des projets personnels. Cela nous permet de nous réévaluer entant que développeur tout en évoluant. Personnellement, j'ai été surprise de voir à quel point j'ai pu bloqué sur des choses que je pensais facile. Cela m'a rappelé l'importance de développer ces projets personnels pour garder la forme

Pour résoudre ces défis vous pouvez utiliser votre langage de prédilection ou carrément en profiter pour en apprendre un nouveau. Ici nous allons détails les étapes qui vont nous permettre de résoudre ce défi en écrivant ensemble un peu de JS.
Pour vous parler plus en détail de cet événement nous allons ensemble faire le 5éme défi !

Pour ce défi, les Elfes se préparent à partir en expédition pour aller collecter la nourriture des rênes, les fruits d’étoiles . Les fournitures nécessaires sont stockées dans des caisses sur plusieurs piles. Un grutier est affecté à l’organiser ces caisses, selon les fournitures nécessaires elle réarrangera les caisses aux dessus des piles. Ces réarrangements sont prédéfinis en plusieurs étapes. Cependant les elfes aimeraient savoir quels caisses se retrouveront au sommet des piles mais ne veulent pas déranger le grutier pendant son travail. Ainsi ils nous demandes de leurs programmer une méthode leurs permettant de répondre cette question.

Pour cela on nous fournis le schéma d’organisation initiale des caisses ainsi que les étapes que le grutier va suivre :

(Schéma à venir)

Pour le schéma d’organisation initiale des caisses, nous trouvons dans la pile numéro [1] la caisse [Z] puis au dessus d’elle la caisse [N]. Dans la pile numéro [2] nous trouvons la caisse [M] par terre, la caisse [C] au dessus et la caisse [D] au sommet. Et dans la pile numéro [3] nous avons la caisse [P].

Concernant les instructions , le grutier va d’abord déplacer une caisse de la pile numéro 2 pour la mettre dans la pile numéro 1, et ainsi de suite …

Après les instructions finis nous arrivons au schéma ci-dessous, nous devrons donc retourner **CMZ** comme réponse aux Elfes.

(Schéma à venir)

Pour commencer nous avons besoin transformer ces données en différents tableaux bien structurés.  Nous allons créer un tableaux contenant notre schéma et un autre contenant les instructions.

La première grand étape va être de transformer notre variable input en deux tableaux intelligemment structuré. Voici mon idée :

(Schéma à venir)

Une fois cela fait nous allons pourvoir parcourir le tableau procédure pour affecter ces modifications au tableau puzzle.

(Schéma à venir)

Nous nous retrouvons enfin dans le schéma schéma ci-dessous. Tout ce qu’il nous manque à faire c’est de créer une boucle pour chaque pile dans puzzle récupérez la pile au dessus. Nous obtenons bien donc CMZ

(Schéma à venir)

Les elfes sont heureux ils peuvent enfin savoir à quelles caisses ils peuvent avoir accès sans déranger personne. Et nous aussi on est heureux d’avoir fini notre défi !`,
      },
    ],
  }
}

export default data