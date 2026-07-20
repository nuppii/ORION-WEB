// Contenu du site ORION — version française (structure identique à content.js)

export const GITHUB_URL = "https://github.com/nuppii/ORION-WEB";

export const UI = {
  scrollExplore: "Défiler pour explorer",
  keepScrollArch: "Continuez à défiler pour traverser le réseau ↓",
  keepScrollSolar: "Continuez à défiler pour visiter chaque environnement ↓",
  corePrinciples: "Principes fondamentaux",
  diagnostics: "orion — diagnostic système",
  live: "en direct",
};

export const NAV_LINKS = [
  { label: "Accueil", id: "hero" },
  { label: "À propos", id: "about" },
  { label: "Capacités", id: "capabilities" },
  { label: "Architecture", id: "architecture" },
  { label: "Fonctionnement", id: "how-it-works" },
  { label: "Intégrations", id: "integrations" },
  { label: "Feuille de route", id: "roadmap" },
  { label: "FAQ", id: "faq" },
  { label: "État du projet", id: "status" },
];

export const HERO = {
  eyebrow: "Réseau d'exploitation IA proactif",
  title: "ORION",
  subtitle: "Obviously Rochat's Intelligent Operating Network",
  tagline: "De l'intention humaine à l'action numérique coordonnée.",
  actions: [
    { label: "Explorer ORION", target: "about", primary: true },
    { label: "Découvrir l'architecture", target: "architecture" },
    { label: "Voir l'état du projet", target: "status" },
  ],
  mention: "Actuellement en développement actif. ORION n'est pas encore prêt pour une utilisation en production ni pour une commercialisation.",
};

export const VISION = {
  eyebrow: "Vision",
  title: "Au-delà de la conversation. Vers l'action coordonnée.",
  p1: "La plupart des assistants IA s'arrêtent après avoir généré une réponse. ORION explore la suite : une couche opérationnelle intelligente capable de transformer une demande en plan actionnable.",
  p2: "La vision à long terme est de créer un système capable de comprendre un objectif, d'identifier les bonnes capacités, de coordonner plusieurs opérations, d'interagir avec des outils locaux et connectés, de se rétablir après certains échecs et de communiquer clairement le résultat final.",
  ideaLead: "ORION est conçu autour d'une idée centrale :",
  quoteParts: ["« L'intelligence devient réellement utile lorsqu'elle peut transformer l'", "intention", " en ", "action", " fiable. »"],
  p3: "Le projet vise à combler le fossé entre l'IA conversationnelle et l'exécution numérique concrète, tout en gardant le contrôle, la transparence et la vigilance de l'utilisateur au centre de chaque workflow.",
};

export const ABOUT = {
  eyebrow: "À propos d'ORION",
  title: "Conçu pour comprendre, coordonner et agir.",
  intro:
    "ORION — Obviously Rochat's Intelligent Operating Network — est un système d'IA expérimental centré sur l'assistance proactive, l'orchestration de workflows et l'interaction intelligente avec l'ordinateur.",
  layersLead: "Plutôt que de fonctionner comme un assistant monolithique, ORION combine plusieurs couches coordonnées :",
  layers: [
    "Interaction naturelle vocale et textuelle",
    "Compréhension contextuelle",
    "Mémoire persistante",
    "Analyse d'objectifs et planification",
    "Sélection d'agents spécialistes",
    "Outils d'automatisation locaux",
    "Intégrations de services connectés",
    "Supervision de l'exécution",
    "Retour d'information et récupération d'erreurs",
  ],
  routing:
    "Cette approche modulaire permet à ORION d'orienter chaque demande vers le chemin opérationnel le plus approprié. Une question simple peut recevoir une réponse directe. Une demande pratique peut activer un outil dédié. Un objectif complexe peut être décomposé en plusieurs étapes structurées et confié à des capacités spécialisées.",
};

export const PRINCIPLES = [
  { title: "Proactif par conception", text: "ORION est conçu pour identifier les actions nécessaires à l'accomplissement d'un objectif plutôt que de se limiter à expliquer ce que l'utilisateur devrait faire." },
  { title: "Modulaire par architecture", text: "Chaque capacité est implémentée comme un module indépendant qui peut évoluer sans nécessiter une refonte de l'ensemble du système." },
  { title: "Sensible au contexte", text: "ORION peut utiliser l'état de la conversation, les préférences de l'utilisateur, les informations précédentes, les tâches actives et la mémoire persistante pour produire des réponses plus pertinentes." },
  { title: "Orienté outils", text: "Le système connecte l'intelligence à de réelles capacités opérationnelles : scripts locaux, automatisation du bureau, API, bases de données et services connectés." },
  { title: "Contrôlé par l'utilisateur", text: "Les actions sensibles doivent rester visibles, compréhensibles et soumises à des mécanismes de confirmation appropriés." },
  { title: "Conçu pour évoluer", text: "ORION est un projet actif de recherche et développement. Son architecture est conçue pour accueillir de nouveaux agents, outils, modèles, interfaces et workflows au fil du temps." },
];

export const CAPABILITIES = {
  eyebrow: "Capacités",
  title: "L'intelligence au service des workflows numériques modernes",
  items: [
    {
      title: "Interaction vocale et textuelle",
      tagline: "Communiquez avec ORION en langage naturel : voix, saisie de texte sur le bureau ou canaux de communication pris en charge.",
      text: "La couche d'interaction est conçue pour offrir des échanges fluides tout en préservant l'accès aux outils opérationnels et aux informations contextuelles.",
      listLabel: "Fonctions potentielles",
      list: ["Conversations vocales en temps réel", "Commandes textuelles", "Interaction multilingue", "Gestion des interruptions", "Gestion des périphériques audio", "Réponses contextuelles", "Communication via Discord"],
    },
    {
      title: "Automatisation intelligente des tâches",
      tagline: "Transformez le travail répétitif ou multi-étapes en workflows coordonnés.",
      text: "ORION peut relier des actions individuelles en une séquence opérationnelle plus large, tout en maintenant l'état d'exécution et en fournissant un retour compréhensible.",
      listLabel: "Exemples",
      list: ["Ouvrir des applications", "Organiser des fichiers sélectionnés", "Lancer des scripts", "Interagir avec les contrôles du bureau", "Collecter des informations", "Préparer des résultats structurés", "Coordonner plusieurs outils"],
    },
    {
      title: "Orchestration de workflows IA",
      tagline: "Analyser un objectif et déterminer quelles capacités doivent participer à son exécution.",
      text: "Plutôt que d'appeler des outils au hasard, ORION vise à établir un chemin opérationnel structuré :",
      listLabel: "Chemin opérationnel",
      list: ["Comprendre l'objectif", "Identifier le contexte utile", "Sélectionner le spécialiste approprié", "Préparer les actions requises", "Exécuter le workflow", "Évaluer le résultat", "Fournir un retour d'information"],
    },
    {
      title: "Couche d'interaction système",
      tagline: "Relier l'intention humaine aux opérations informatiques prises en charge.",
      text: "ORION comprend des modules conçus pour interagir avec les applications, les fichiers, les contrôles système, le clavier, la souris, les fenêtres, les scripts et certains paramètres du système d'exploitation.",
      note: "Ces capacités pouvant affecter un ordinateur réel, l'interaction système reste l'un des domaines les plus sensibles du projet en matière de sécurité.",
      listLabel: "Surface d'interaction",
      list: ["Applications", "Fichiers", "Contrôles système", "Saisie clavier", "Actions souris", "Fenêtres", "Scripts", "Paramètres OS"],
    },
    {
      title: "Mémoire persistante",
      tagline: "Conserver les informations pertinentes au-delà d'une seule conversation.",
      text: "L'architecture mémoire d'ORION explore plusieurs formes de contexte. L'objectif n'est pas simplement de stocker l'information, mais de la rendre utile lors des interactions futures.",
      listLabel: "Formes de contexte",
      list: ["Préférences", "Projets", "Notes importantes", "Objectifs récurrents", "Relations", "Contexte personnel à long terme", "Connaissances liées", "Résultats opérationnels précédents"],
    },
    {
      title: "Second cerveau",
      tagline: "Construire un environnement de connaissances structuré et connecté.",
      text: "Le Second Cerveau expérimental d'ORION s'appuie sur PostgreSQL pour stocker notes, projets, concepts et relations sous forme de nœuds de connaissances connectés.",
      listLabel: "Il peut prendre en charge",
      list: ["Stockage durable des notes", "Organisation sémantique", "Liaison des connaissances", "Découverte de contenus liés", "Exploration en graphe", "Synchronisation de la mémoire", "Recherche contextuelle"],
    },
    {
      title: "Agents IA spécialistes",
      tagline: "Orienter les tâches vers des profils d'agents spécialisés par domaine.",
      text: "ORION comprend un ensemble évolutif de profils spécialistes conçus pour apporter un contexte plus pertinent à différentes catégories de travail.",
      note: "Ces agents spécialistes sont des composants du système d'orchestration d'ORION. Ce ne sont pas des experts professionnels indépendants ou infaillibles.",
      listLabel: "Domaines d'expérimentation actuels",
      list: ["Développement logiciel", "Assistance technique", "Analyse de sécurité", "Supervision financière", "Recherche", "Communication", "Planification", "Productivité", "Coordination opérationnelle"],
    },
    {
      title: "Analyse et récupération d'erreurs",
      tagline: "Détecter les échecs et explorer des chemins d'exécution alternatifs.",
      text: "Lorsqu'un outil ou un workflow échoue, ORION peut collecter des informations sur l'erreur, analyser le contexte, générer une correction possible ou demander un plan révisé. L'objectif à long terme est de rendre les workflows plus résilients.",
      listLabel: "Mécanismes de résilience",
      list: ["Rapports d'erreur structurés", "Analyse contextuelle des échecs", "Nouvelles tentatives ciblées", "Sélection d'outils alternatifs", "Re-planification du workflow", "Retour transparent à l'utilisateur"],
    },
    {
      title: "Aide à la décision intelligente",
      tagline: "Aider à structurer l'information et à évaluer les actions possibles.",
      text: "ORION peut aider à organiser le contexte, comparer des options, identifier des contraintes et présenter un raisonnement structuré.",
      note: "L'aide à la décision vise à aider l'utilisateur à comprendre une situation. Elle ne remplace pas l'avis de professionnels qualifiés dans les domaines médicaux, juridiques, financiers, de sécurité ou tout autre domaine à fort enjeu.",
      listLabel: "Domaines d'assistance",
      list: ["Organisation du contexte", "Comparaison d'options", "Identification des contraintes", "Raisonnement structuré"],
    },
  ],
};

export const ARCHITECTURE = {
  eyebrow: "Architecture",
  title: "Un réseau d'exploitation modulaire",
  intro: "ORION est organisé comme un ensemble de couches en interaction plutôt que comme un modèle d'intelligence artificielle unique.",
  layers: [
    { short: "Interface", nameMain: "Couche ", nameAccent: "Interface", text: "Gère l'expérience bureau, l'entrée vocale, l'interaction textuelle, les retours système, les paramètres et les panneaux d'applications intégrés." },
    { short: "Intelligence", nameMain: "Couche ", nameAccent: "Intelligence", text: "Utilise des modèles d'IA pour comprendre le langage, interpréter les objectifs, générer des réponses, sélectionner des outils et assister la planification." },
    { short: "Planification", nameMain: "Couche ", nameAccent: "Planification", text: "Transforme des objectifs complexes en séquences structurées d'actions exécutables." },
    { short: "Agents", nameMain: "Couche ", nameAccent: "Agents", text: "Ajoute un contexte spécialisé par domaine et oriente les demandes vers des profils dédiés." },
    { short: "Exécution", nameMain: "Couche ", nameAccent: "Exécution", text: "Invoque les outils locaux et les services connectés à l'aide de paramètres structurés." },
    { short: "Mémoire", nameMain: "Couche ", nameAccent: "Mémoire", text: "Maintient un contexte local à long terme et des connaissances connectées." },
    { short: "Intégration", nameMain: "Couche ", nameAccent: "Intégration", text: "Connecte ORION à des plateformes tierces et à des API sélectionnées." },
    { short: "Sécurité", nameMain: "Couche ", nameAccent: "Sécurité", text: "Applique des politiques opérationnelles et vise à identifier les actions sensibles ou potentiellement destructrices." },
    { short: "Récupération", nameMain: "Couche ", nameAccent: "Récupération", text: "Analyse les échecs d'exécution et prend en charge les nouvelles tentatives ou la re-planification." },
  ],
};

export const HOW_IT_WORKS = {
  eyebrow: "Fonctionnement d'ORION",
  title: "De la demande à l'action accomplie",
  steps: [
    { title: "Entrée utilisateur", text: "L'utilisateur communique une demande par la voix, le texte, l'interface bureau ou un canal externe pris en charge." },
    { title: "Collecte du contexte", text: "ORION rassemble les informations pertinentes : historique de conversation, paramètres locaux, mémoire persistante, tâches actives et outils disponibles." },
    { title: "Analyse de l'intention", text: "Le système détermine ce que l'utilisateur cherche à accomplir et distingue une demande conversationnelle, une action directe ou un objectif complexe." },
    { title: "Planification", text: "Pour les demandes complexes, ORION peut décomposer l'objectif en étapes opérationnelles plus petites, avec dépendances et ordre d'exécution." },
    { title: "Sélection du spécialiste", text: "La demande peut être orientée vers un profil d'agent spécialisé capable d'ajouter des instructions et un contexte pertinents." },
    { title: "Sélection des outils", text: "ORION identifie quelle capacité locale, API, module d'automatisation, base de données ou service connecté convient à chaque étape." },
    { title: "Exécution contrôlée", text: "Les outils sélectionnés effectuent les opérations demandées pendant qu'ORION suit la progression et collecte les résultats." },
    { title: "Validation et récupération", text: "Le système évalue si l'opération a réussi. Lorsque c'est possible, il peut analyser les échecs et préparer un chemin alternatif." },
    { title: "Retour d'information", text: "ORION communique ce qui s'est passé, ce qui a été accompli, ce qui a échoué et si une intervention supplémentaire est nécessaire." },
    { title: "Mise à jour de la mémoire", text: "Lorsque c'est approprié, les informations utiles peuvent être conservées pour les interactions futures." },
  ],
};

export const SERVICES = {
  eyebrow: "Services connectés",
  title: "Une couche d'intelligence, de multiples environnements numériques",
  intro: "Selon la configuration locale et les autorisations des comptes, ORION contient des intégrations expérimentales pour plusieurs services.",
  items: [
    {
      name: "Google Workspace",
      short: "Workspace",
      text: "Prise en charge d'opérations sélectionnées dans l'écosystème Google, exposées via les API officielles.",
      list: ["Google Drive", "Google Docs", "Google Sheets", "Gmail", "Google Agenda", "Données de compte YouTube"],
      note: "Les intégrations Google nécessitent une autorisation de l'utilisateur via OAuth et des permissions appropriées.",
      color: "#48cae4",
    },
    {
      name: "Spotify",
      short: "Spotify",
      text: "Interagissez avec les appareils Spotify compatibles via l'API officielle.",
      list: ["Contrôle de la lecture", "Pause et reprise", "Navigation entre pistes", "Contrôle du volume", "Sélection de l'appareil", "Lecture de playlists ou de contextes"],
      note: "Certaines fonctions nécessitent Spotify Premium et un appareil de lecture actif.",
      color: "#2596be",
    },
    {
      name: "Discord",
      short: "Discord",
      text: "Utilisez ORION via un bot Discord pour les workflows textuels pris en charge et l'envoi d'outils.",
      list: ["Workflows textuels", "Dispatch d'outils", "Communication via bot"],
      color: "#7dd3fc",
    },
    {
      name: "Informations Web",
      short: "Web",
      text: "Accédez à des informations actuelles grâce à la recherche web et à des modules d'information dédiés.",
      list: ["Recherche web", "Modules météo", "Recherche de vols"],
      color: "#38bdf8",
    },
    {
      name: "Applications locales",
      short: "Apps locales",
      text: "Ouvrez et interagissez avec des applications installées sur l'ordinateur.",
      list: ["Lancement d'applications", "Interaction bureau", "Workflows locaux"],
      color: "#93c5fd",
    },
  ],
};

export const FINANCE = {
  eyebrow: "ORION Finance",
  title: "Visibilité financière locale et supervision intelligente",
  intro: "ORION comprend un tableau de bord financier local expérimental conçu pour organiser les informations financières personnelles et fournir des synthèses structurées.",
  listLabel: "Axes d'exploration actuels",
  list: ["Suivi des revenus et dépenses", "Organisation des transactions", "Suivi des actifs", "Synthèses de trésorerie", "Analyse budgétaire", "Recommandations financières", "Aide à la planification d'investissements", "Simulations de stratégie patrimoniale"],
  disclaimer: "Les fonctionnalités financières sont uniquement éducatives et informatives. Elles ne constituent ni un conseil financier réglementé, ni une gestion de portefeuille, ni une garantie de performance financière.",
};

export const SECURITY = {
  eyebrow: "Confidentialité et sécurité",
  title: "Des capacités puissantes exigent des limites solides",
  intro: "ORION peut interagir avec des fichiers locaux, des applications, des comptes authentifiés et des services connectés. La protection de ces environnements est une priorité centrale du développement. Le projet est conçu autour de plusieurs principes :",
  principles: [
    "Les identifiants doivent rester locaux",
    "L'accès doit être limité aux permissions nécessaires",
    "Les actions sensibles doivent exiger une confirmation appropriée",
    "La mémoire privée ne doit pas être exposée publiquement",
    "L'activité opérationnelle doit rester compréhensible",
    "Les actions destructrices doivent être restreintes",
    "Les services connectés doivent utiliser des méthodes d'autorisation officielles",
    "Les données importantes doivent toujours être sauvegardées indépendamment",
  ],
  audit: "ORION n'a pas encore fait l'objet d'un audit de sécurité. Son modèle de sécurité, ses mécanismes de confirmation, ses limites de permissions et son système de gestion des secrets restent en développement actif.",
  warning: "Les utilisateurs ne devraient jamais donner à ORION accès à des systèmes critiques ou à des données irremplaçables sans comprendre les risques associés.",
};

export const TECH = {
  eyebrow: "Stack technologique",
  title: "Conçu pour l'expérimentation concrète",
  marquee: ["Python", "Google Gemini", "Ollama", "PostgreSQL", "Docker", "OpenCV", "Discord", "Spotify API", "REST APIs", "PyInstaller"],
  groups: [
    { name: "Cœur", items: ["Python", "Exécution asynchrone des tâches", "Architecture d'outils modulaire", "Appels de fonctions structurés"] },
    { name: "Intelligence artificielle", items: ["Google Gemini", "Workflows locaux Ollama", "Profils d'agents spécialisés", "Planification contextuelle et sélection d'outils"] },
    { name: "Interface", items: ["Interface bureau personnalisée", "Interaction vocale", "Interaction textuelle", "Tableaux de bord locaux intégrés"] },
    { name: "Automatisation", items: ["Scripts système", "Contrôle du bureau", "Automatisation clavier et souris", "Interaction presse-papiers", "Gestion des fenêtres", "Automatisation du navigateur"] },
    { name: "Vision", items: ["Capture d'écran", "Traitement d'images", "Analyse du contexte visuel", "OpenCV", "Pillow", "MSS"] },
    { name: "Mémoire", items: ["Mémoire JSON locale", "PostgreSQL", "Connaissances liées", "Contexte persistant"] },
    { name: "Services connectés", items: ["REST APIs", "Google APIs", "Spotify API", "Discord", "Services d'information web"] },
    { name: "Infrastructure", items: ["Docker Compose", "PostgreSQL 16", "PyInstaller", "GitHub", "GitHub Pages"] },
  ],
};

export const STATUS = {
  eyebrow: "État du développement",
  title: "Un système ambitieux toujours en développement actif",
  intro: "ORION est actuellement un projet expérimental de recherche, d'ingénierie et de productivité. Certains modules fonctionnent déjà via des workflows complets. D'autres restent des prototypes, nécessitent une configuration manuelle, dépendent de services tiers ou peuvent évoluer significativement avec l'architecture.",
  entries: [
    { label: "Développement", value: "Actif", state: "good" },
    { label: "Architecture", value: "En évolution", state: "mid" },
    { label: "Interface utilisateur", value: "Fonctionnelle mais expérimentale", state: "mid" },
    { label: "Installation", value: "Orientée développeurs", state: "mid" },
    { label: "Tests", value: "Partiels", state: "mid" },
    { label: "Durcissement sécurité", value: "En cours", state: "mid" },
    { label: "Support multiplateforme", value: "Expérimental", state: "mid" },
    { label: "Prêt pour la production", value: "Non", state: "bad" },
    { label: "Prêt à la commercialisation", value: "Non", state: "bad" },
  ],
  commercial: "ORION n'est pas actuellement disponible en tant que produit commercial fini. Il n'existe ni abonnement commercial, ni service de production, ni garantie de disponibilité, ni contrat de support officiel, ni accord de niveau de service.",
  limitationsTitle: "Limitations connues",
  limitationsLead: "ORION présente actuellement plusieurs limitations importantes :",
  limitations: [
    "L'installation peut nécessiter des connaissances techniques",
    "Certaines dépendances sont spécifiques à Windows",
    "La compatibilité multiplateforme est incomplète",
    "La couverture de tests automatisés reste limitée",
    "Les API externes peuvent changer ou imposer des quotas",
    "Les services connectés exigent une configuration individuelle",
    "Les plans générés par l'IA peuvent être incomplets ou incorrects",
    "L'automatisation à l'écran peut être affectée par les changements d'interface",
    "Les actions locales peuvent produire des résultats non souhaités",
    "La mémoire persistante exige une gestion prudente de la vie privée",
    "Le packaging et les mises à jour automatiques ne sont pas de niveau production",
    "Les limites de sécurité restent en développement",
    "La récupération après des actions échouées n'est pas garantie",
  ],
};

export const ROADMAP = {
  eyebrow: "Feuille de route",
  title: "Construire ORION étape par étape",
  phases: [
    { name: "Fiabilité du cœur", items: ["Renforcer la gestion de la configuration", "Améliorer la journalisation structurée", "Étendre les tests automatisés", "Standardiser la gestion des erreurs", "Améliorer la gestion des dépendances", "Séparer les modules stables et expérimentaux"] },
    { name: "Automatisation plus sûre", items: ["Ajouter des mécanismes de confirmation renforcés", "Améliorer la détection des actions sensibles", "Étendre l'historique d'exécution", "Introduire de meilleures stratégies de rollback", "Améliorer la visibilité des permissions", "Renforcer le sandboxing local"] },
    { name: "Intelligence et planification", items: ["Améliorer la décomposition des tâches", "Augmenter la précision de sélection des outils", "Étendre l'évaluation des agents spécialistes", "Améliorer la récupération contextuelle", "Ajouter une meilleure observabilité des workflows", "Renforcer la validation des résultats"] },
    { name: "Mémoire et personnalisation", items: ["Améliorer la récupération des connaissances", "Étendre les capacités du Second Cerveau", "Ajouter des contrôles de gestion de la mémoire", "Améliorer les réglages de confidentialité et de rétention", "Clarifier la provenance des souvenirs", "Prendre en charge un contexte projet plus structuré"] },
    { name: "Expérience utilisateur", items: ["Simplifier la première installation", "Améliorer les workflows de connexion de comptes", "Ajouter des contrôles de permissions côté utilisateur", "Améliorer l'accessibilité", "Étoffer la documentation", "Créer un mécanisme de mise à jour stable"] },
    {
      name: "Préparation commerciale",
      lead: "Avant d'envisager une commercialisation, ORION nécessitera :",
      items: ["Un audit de sécurité formel", "Une gestion stable des versions", "Une licence claire", "Des politiques de confidentialité et de rétention des données", "La définition des environnements pris en charge", "Des revues de dépendances et de conformité", "Un onboarding fiable", "Des procédures de récupération testées", "Une distribution de niveau production", "Des processus de support documentés"],
      outro: "La commercialisation ne sera envisagée qu'après la mise en œuvre et la validation de ces fondations.",
    },
  ],
};

export const FAQ = {
  eyebrow: "FAQ",
  title: "Questions fréquentes",
  items: [
    { q: "ORION est-il disponible au téléchargement ?", a: "ORION est toujours en développement actif. La visibilité publique ne signifie pas qu'une version stable grand public est prête pour l'installation ou un usage quotidien en production." },
    { q: "ORION est-il open source ?", a: "Le site web public est visible en ligne, mais aucune licence open source n'est actuellement accordée pour l'application ORION privée ou son code source." },
    { q: "ORION est-il prêt pour un usage commercial ?", a: "Non. ORION n'est pas encore prêt pour un déploiement en production ni pour une commercialisation." },
    { q: "ORION est-il un chatbot ?", a: "Pas exactement. L'interaction conversationnelle n'est qu'une partie du système. ORION est conçu comme un réseau opérationnel plus large, capable de coordonner outils, mémoire, agents et workflows automatisés." },
    { q: "ORION peut-il contrôler un ordinateur ?", a: "ORION contient des modules expérimentaux pour les opérations bureau et système prises en charge. Leur disponibilité dépend du système d'exploitation, de la configuration, des permissions et des logiciels installés." },
    { q: "ORION fonctionne-t-il hors ligne ?", a: "Certains composants locaux peuvent fonctionner sans connexion internet, mais les modèles d'IA et les intégrations de services connectés peuvent nécessiter un accès internet. Des workflows avec modèles locaux sont explorés via Ollama." },
    { q: "ORION stocke-t-il des informations personnelles ?", a: "ORION peut conserver des informations contextuelles locales lorsque les fonctions de mémoire sont activées. La mémoire doit être gérée avec prudence, car elle peut contenir des informations personnelles ou sensibles." },
    { q: "ORION est-il sécurisé ?", a: "La sécurité est une priorité active du développement, mais le projet n'a pas encore fait l'objet d'un audit de sécurité formel. ORION ne devrait pas actuellement se voir confier des infrastructures critiques ou des informations irremplaçables." },
    { q: "ORION fournit-il des conseils professionnels ?", a: "Non. Les fonctionnalités financières, techniques, de sécurité ou d'aide à la décision sont informatives et expérimentales. Elles ne remplacent pas l'avis de professionnels qualifiés." },
    { q: "Quand ORION sera-t-il disponible ?", a: "Aucune date de sortie finale n'a été annoncée. Les priorités de développement peuvent évoluer à mesure que l'architecture, les mécanismes de sécurité et l'expérience utilisateur mûrissent." },
  ],
};

export const FINAL_CTA = {
  intro: "La prochaine génération d'IA personnelle n'est pas seulement conversationnelle.",
  lines: ["Elle comprend le contexte.", "Elle coordonne les capacités.", "Elle interagit avec de vrais outils.", "Elle transforme l'intention en action."],
  reveal: "Voici ORION.",
  horizon: "Au-delà de l'horizon des événements",
  subtitle: "Obviously Rochat's Intelligent Operating Network",
  actions: [
    { label: "Suivre le projet", target: "github", primary: true },
    { label: "Explorer l'architecture", target: "architecture" },
    { label: "Voir l'état du développement", target: "status" },
  ],
};

export const DISCLAIMER = {
  title: "Avertissement final",
  p1: "ORION est un projet d'IA expérimental créé à des fins de recherche, d'éducation, de développement et de productivité personnelle.",
  p2: "Le projet peut générer des informations inexactes, mal comprendre des demandes, échouer pendant l'exécution ou produire des effets non souhaités lors d'interactions avec un ordinateur ou un service externe.",
  p3: "ORION est fourni sans aucune garantie de fiabilité, de disponibilité, de sécurité, d'intégrité des données ou d'adéquation à un usage particulier.",
  lead: "Les utilisateurs restent responsables de :",
  responsibilities: [
    "Vérifier les opérations demandées",
    "Protéger leurs identifiants",
    "Maintenir des sauvegardes indépendantes",
    "Contrôler les permissions d'accès",
    "Respecter les conditions des services tiers",
    "Valider les informations importantes",
    "Superviser les actions sensibles",
  ],
  outro: "ORION est toujours en développement actif. Il n'est pas actuellement prêt pour une utilisation en production ni pour une commercialisation.",
};

export const FOOTER = {
  subtitle: "Obviously Rochat's Intelligent Operating Network",
  tagline: "De l'intention à l'action coordonnée.",
  nav: [
    { label: "À propos", id: "about" },
    { label: "Capacités", id: "capabilities" },
    { label: "Architecture", id: "architecture" },
    { label: "Intégrations", id: "integrations" },
    { label: "Feuille de route", id: "roadmap" },
    { label: "État du projet", id: "status" },
    { label: "Confidentialité", id: "security" },
    { label: "Avertissement", id: "disclaimer" },
  ],
  copyright: "© 2026 Rochat's Enterprise. Tous droits réservés. ORION est un projet expérimental en développement actif.",
};
