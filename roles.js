const roles = [
  // === MARINES ===
  {name: "Sengoku", camp: "marine", title: "Amiral en chef", power: "Chaque nuit (sauf la première) : choisit un joueur (mort ou vivant) pour le tuer. Connaît trois rôles absents. Peut se cibler lui-même pour mourir et déclencher la succession (Akainu prioritaire).", explication:"Force centrale de la Marine. Nuit : élimine un joueur ciblé. Connait trois rôles absents. Mort = Pirates gagnent (sauf si Akainu vivant).", img:"img/perso/Marine/Sengoku.png"},
  {name: "Akainu", camp: "marine", title: "Amiral", power: "Action passive jusqu’à la mort de Sengoku. Si 5+ joueurs vivants à la mort de Sengoku : devient Amiral en chef et obtient son pouvoir.", explication:"Nuit : aucune action initiale, mais devient actif comme Amiral en chef si conditions remplies.", img:"img/perso/Marine/Akainu.png"},
  {name: "Aramaki", camp: "marine", title: "Amiral", power: "Chaque nuit : empoisonne un joueur. La victime peut recevoir de fausses informations ou perdre son pouvoir sans le savoir.", explication:"Nuit : empoisonner un joueur → effet persistant inconnu pour la victime.", img:"img/perso/Marine/aramaki.png"},
  {name: "Kuzan", camp: "marine", title: "Amiral", power: "Première nuit : voit tous les rôles Pirates présents et choisit un rôle à “geler”. Le joueur possédant ce rôle est informé qu’il est gelé et ne peut plus utiliser son pouvoir tant que Kuzan est vivant.", explication:"Nuit 1 : choisir un rôle Pirate → gelé jusqu’à la mort de Kuzan. La victime sait qu’elle est gelée.", img:"img/perso/Marine/Kuzan.png"},
  {name: "Garp", camp: "marine", title: "Marine", power: "Action passive. Si présent : deux Révolutionnaires supplémentaires sont ajoutés à la partie.", explication:"Influence le setup de la partie. Aucun choix actif la nuit.", img:"img/perso/Marine/Garp.png"},
  {name: "XDrake", camp: "marine", title: "Marine", power: "Obtient un rôle de façade Pirates qu’il ne connaît pas. Chaque nuit : son rôle de façade change. Première nuit : découvre tous les rôles des joueurs.", explication:"Nuit 1 : voit tous les rôles. Chaque nuit : rôle de façade change → agit comme Pirate fictif.", img:"img/perso/Marine/XDrake.png"},

  // === PIRATES ===
  {name: "Basil Hawkins", camp: "pirate", title:"Pirate", power:"Chaque jour, peut deviner le rôle d’un joueur . Correct → rôle confirmé. Incorrect → mort immédiate.", explication:"Devinez le rôles d'un joueur → risque ou information. Erreur = mort instantanée.", img:"img/perso/Pirate/basil.png"},
  {name: "Robin", camp: "pirate", title:"Pirate", power:"Première nuit : découvre deux joueurs et un rôle Révolutionnaire spécifique. L’un le possède, l’autre peut être n’importe qui.", explication:"Nuit 1 : obtient 2 joueurs et 1 rôle Révolutionnaire.", img:"img/perso/Pirate/robin.png"},
  {name: "Brook", camp: "pirate", title:"Pirate", power:"Si Brook meurt, se réveille une seule fois pour connaître le rôle d’un joueur (mort ou vivant) de son choix.", explication:"Nuit post-mort : choisir un joueur et découvrir son rôle.", img:"img/perso/Pirate/brook.png"},
  {name: "Sanji", camp: "pirate", title:"Pirate", power:"Première nuit : apprend le nombre de paires de Marines côte à côte autour de la table.", explication:"Nuit 1 : obtient l'information sur le nombre de paires de Marine.", img:"img/perso/Pirate/sanji.png"},
  {name: "Chopper", camp: "pirate", title:"Pirate", power:"Chaque nuit : découvre le nombre de Marines adjacents à lui (0,1,2), morts exclu.", explication:"Nuit : obtient l'info du nombre de marines a proximité de lui.", img:"img/perso/Pirate/chopper.png"},
  {name: "Ace", camp: "pirate", title:"Pirate", power:"Première nuit : découvre deux joueurs et un rôle Marine spécifique. L’un le possède, l’autre peut être n’importe qui.", explication:"Nuit 1 : obtient 2 joueurs et 1 rôle Marine..", img:"img/perso/Pirate/ace.png"},
  {name: "Moria", camp: "pirate", title:"Pirate", power:"Chaque nuit : si un joueur a été exécuté lors du conseil, apprend son vrai rôle. Si c’est Usopp, voit le vrai rôle, pas le faux.", explication:"Nuit : connaît le rôle réel de l'exécutés.", img:"img/perso/Pirate/moria.png"},
  {name: "Nami", camp: "pirate", title:"Pirate", power:"Première nuit : découvre deux joueurs et un rôle Pirate spécifique. L’un le possède, l’autre peut être n’importe qui.", explication:"Nuit 1 : obtient 2 joueurs et 1 rôle Pirate.", img:"img/perso/Pirate/nami.png"},
  {name: "Luffy", camp: "pirate", title:"Pirate", power:"Si ciblé par Sengoku : un autre joueur peut mourir à sa place (choix du MJ).", explication:"Nuit : peux ne pa mourir si attaqué par l'Amiral en chef mais un autre joueur aléatoire meurt.", img:"img/perso/Pirate/luffy.png"},
  {name: "Kuma", camp: "pirate", title:"Pirate", power:"Chaque nuit : protège un joueur contre Sengoku. Peut choisir le même joueur plusieurs fois, mais pas lui-même.", explication:"Nuit : protection contre attaque de L'Amiral en chef.", img:"img/perso/Pirate/kuma.png"},
  {name: "Zoro", camp: "pirate", title:"Pirate", power:"Une fois par partie, durant le conseil, peut désigner publiquement une cible : si c’est l’Amiral en chef → il meurt.", explication:"Action de jour → désigne un jouer qu'il veut éliminer à la vue de tous.", img:"img/perso/Pirate/zoro.png"},
  {name: "Shanks", camp: "pirate", title:"Pirate", power:"Ne peut pas mourir de la main de Sengoku la nuit.", explication:"Immunité contre attaque nocturne de L'Amirale en chef.", img:"img/perso/Pirate/shanks.png"},
  {name: "Roger", camp: "pirate", title:"Pirate", power:"Si nommé au vote par un Pirate (hors Révolutionnaire), le joueur ciblé est exécuté instantanément (une seule fois).", explication:"Action de jour, exécution instantanée.", img:"img/perso/Pirate/roger.png"},
  {name: "Katakuri", camp: "pirate", title:"Pirate", power:"Chaque nuit : choisit deux joueurs et apprend si l’Amiral en chef est parmi eux. Un Pirate secret appelé Leurre apparaît comme Amiral pour Katakuri.", explication:"Nuit : info sur présence de l’Amiral en chef, même avec Leurre.", img:"img/perso/Pirate/katakuri.png"},

  // === RÉVOLUTIONNAIRES ===
  {name: "Usopp", camp: "revolutionnaire", title:"Révolutionnaire", power:"Croit être un Pirate mais n’a aucun pouvoir réel. Reçoit de fausses infos si rôle supposé à info.", explication:"Nuit : aucune action réelle, reçoit ou transmet fausses infos.", img:"img/perso/Revo/usopp.png"},
  {name: "Sabo", camp: "revolutionnaire", title:"Révolutionnaire", power:"Chaque nuit : choisit une cible. Cette cible est automatiquement nommée au prochain conseil avec un vote supplémentaire contre elle.", explication:"Nuit : influencer vote prochain conseil.", img:"img/perso/Revo/sabo.png"},
  {name: "Ivankov", camp: "revolutionnaire", title:"Révolutionnaire", power:"À chaque action le concernant, peut apparaître comme un rôle aléatoire, même Marine.", explication:"Nuit : brouille info adverses via apparence aléatoire.", img:"img/perso/Revo/ivankov.png"},
  {name: "Dragon", camp: "revolutionnaire", title:"Révolutionnaire", power:"Si exécuté lors du vote, les Pirates perdent instantanément.", explication:"Mort → défaite immédiate des Pirates. Action nocturne : aucune.", img:"img/perso/Revo/dragon.png"},
  {name: "Kaya", camp: "revolutionnaire", title:"Révolutionnaire", power:"Si présente, un Usopp est également dans la partie. Objectif : découvrir quel joueur est Usopp. Une seule tentative possible.", explication:"Nuit / action unique : choisir un joueur → s’il est Usopp, celui-ci peut utiliser son rôle correctement. Sinon, Usopp reste bloqué.", img:"img/perso/Revo/kaya.png"}
];

// ==== MODE SOMBRE ====
const darkModeBtn = document.getElementById("dark-mode-btn");
darkModeBtn.innerHTML = `<span>🌙</span> Mode sombre`;

function setDarkMode(enabled){
  const icon = darkModeBtn.querySelector("span");
  if(enabled){
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
    darkModeBtn.innerHTML = `${icon.outerHTML} Mode clair`;
  } else {
    document.body.classList.remove("dark-mode");
    icon.textContent = "🌙";
    darkModeBtn.innerHTML = `${icon.outerHTML} Mode sombre`;
  }
}

const darkModeStored = localStorage.getItem("darkMode");
if(darkModeStored === "true") setDarkMode(true);

darkModeBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");
  setDarkMode(isDark);
  localStorage.setItem("darkMode", isDark);
});

// ==== AFFICHAGE DES ROLES ====
const rolesContainer = document.getElementById("roles-container");
const modal = document.getElementById("role-modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalPower = document.getElementById("modal-power");
const modalExplication = document.getElementById("modal-explication");
const closeBtn = document.querySelector(".close");

function displayRoles(filter = "all") {
  rolesContainer.innerHTML = "";
  roles
    .filter(r => filter === "all" || r.camp === filter)
    .forEach(role => {
      const card = document.createElement("div");
      card.className = `role-card ${role.camp}`;
      card.innerHTML = `<div class="role-header">${role.name}</div>`;
      card.addEventListener("click", () => openModal(role));
      rolesContainer.appendChild(card);
    });
}

function openModal(role){
  modalTitle.textContent = `${role.name} — ${role.title}`;
  modalImg.src = role.img;
  modalPower.textContent = role.power;
  modalExplication.textContent = role.explication;
  modal.style.display = "block";
}

closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if(e.target === modal) modal.style.display = "none";
});

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => displayRoles(btn.dataset.camp));
});

displayRoles();
