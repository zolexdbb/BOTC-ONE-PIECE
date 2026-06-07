const roles = {
  marine: [
    {
      name: "Sengoku",
      title: "Amiral en chef",
      badge: "amiral",
      body: "Chaque nuit, désigne un joueur (mort ou vivant) pour le tuer, sauf la première nuit. Connaît trois rôles absents de la partie.",
      note: "Si Sengoku meurt → les Pirates gagnent (sauf si Akainu est en vie). Peut se cibler lui-même : il meurt et un nouvel Amiral est désigné (Akainu prioritaire)."
    },
    {
      name: "Garp",
      title: "Amiral",
      badge: "amiral",
      body: "Si Garp est présent dans la composition, deux Révolutionnaires sont automatiquement ajoutés à la partie.",
      note: null
    },
    {
      name: "Aramaki",
      title: "Amiral",
      badge: "amiral",
      body: "Chaque nuit, empoisonne un joueur de son choix. Le joueur empoisonné peut recevoir de fausses informations ou perdre ses pouvoirs sans le savoir.",
      note: null
    },
    {
      name: "XDrake",
      title: "Marine",
      badge: null,
      body: "Obtient un rôle de façade Pirate qu'il ne connaît pas — ce rôle de façade change chaque nuit. La première nuit, découvre les rôles de tous les joueurs en jeu.",
      note: null
    },
    {
      name: "Akainu",
      title: "Amiral",
      badge: "amiral",
      body: "Si 5 joueurs ou plus sont encore en vie au moment de la mort de Sengoku, Akainu devient automatiquement le nouvel Amiral en chef.",
      note: null
    }
  ],

  pirate: [
    {
      name: "Robin",
      title: "Pirate",
      badge: null,
      body: "La première nuit, découvre deux joueurs et un rôle Révolutionnaire spécifique. L'un des deux le possède, le deuxième peut être de n'importe quel camp.",
      note: null
    },
    {
      name: "Brook",
      title: "Pirate",
      badge: null,
      body: "Si Brook meurt, il se réveille une seule fois pour connaître le rôle d'un personnage de son choix (mort ou vivant).",
      note: null
    },
    {
      name: "Sanji",
      title: "Pirate",
      badge: null,
      body: "La première nuit, apprend le nombre de paires de Marines côte à côte autour de la table.",
      note: "2 Marines adjacents = 1 paire. 3 Marines adjacents = 2 paires. Les morts ne comptent pas."
    },
    {
      name: "Chopper",
      title: "Pirate",
      badge: null,
      body: "Chaque nuit, découvre le nombre de Marines directement adjacents à lui (0, 1 ou 2). Les joueurs morts ne comptent pas.",
      note: null
    },
    {
      name: "Ace",
      title: "Pirate",
      badge: null,
      body: "La première nuit, découvre deux joueurs et un rôle Marine spécifique. L'un le possède, le deuxième peut être de n'importe quel camp.",
      note: null
    },
    {
      name: "Moria",
      title: "Pirate",
      badge: null,
      body: "Chaque nuit, si un joueur a été exécuté lors du conseil du jour précédent, Moria apprend son vrai rôle.",
      note: "Si c'est Usopp, Moria voit le vrai rôle et non le rôle de façade."
    },
    {
      name: "Nami",
      title: "Pirate",
      badge: null,
      body: "La première nuit, découvre deux joueurs et un rôle Pirate spécifique. L'un le possède, le deuxième peut être de n'importe quel camp.",
      note: null
    },
    {
      name: "Luffy",
      title: "Capitaine des Pirates",
      badge: "capitaine",
      body: "Si ciblé par Sengoku la nuit, un autre joueur vivant peut mourir à sa place (au choix du MJ).",
      note: "Quand il reste 3 joueurs en vie : si la journée se termine sans exécution, les Pirates gagnent instantanément."
    },
    {
      name: "Kuma",
      title: "Pirate",
      badge: null,
      body: "Chaque nuit, protège un joueur contre le meurtre de Sengoku. Peut choisir plusieurs fois le même joueur mais ne peut pas se choisir lui-même.",
      note: null
    },
    {
      name: "Zoro",
      title: "Pirate",
      badge: null,
      body: "Une fois par partie, durant la journée, Zoro peut désigner une cible publiquement. Si c'est l'Amiral en chef → il meurt immédiatement. Sinon → rien ne se passe.",
      note: null
    },
    {
      name: "Shanks",
      title: "Pirate",
      badge: null,
      body: "Shanks ne peut pas mourir de la main de Sengoku la nuit. Si Sengoku le cible, l'action est annulée sans effet.",
      note: null
    },
    {
      name: "Roger",
      title: "Roi des Pirates",
      badge: "capitaine",
      body: "Si Roger est nommé au vote par un joueur Pirate (hors Révolutionnaire), ce joueur est exécuté instantanément — mais seulement si le nominant est bien Pirate. Cela ne peut se produire qu'une seule fois dans la partie.",
      note: null
    },
    {
      name: "Katakuri",
      title: "Pirate",
      badge: null,
      body: "Chaque nuit, choisit deux joueurs (morts ou vivants) et apprend si l'Amiral en chef est parmi eux.",
      note: "Un Pirate secret appelé Leurre est désigné par le MJ au début. Ce joueur apparaît toujours comme Amiral en chef pour Katakuri, toute la partie."
    }
  ],

  revo: [
    {
      name: "Usopp",
      title: "Révolutionnaire",
      badge: "revo",
      body: "Croit être un rôle Pirate, mais n'a aucun pouvoir réel. Reçoit de fausses informations si son rôle supposé est un rôle à info.",
      note: "Apparaît comme son faux rôle Pirate pour les autres joueurs, sauf pour Robin, Zoro et Moria qui voient son vrai rôle."
    },
    {
      name: "Sabo",
      title: "Révolutionnaire",
      badge: "revo",
      body: "Chaque nuit, choisit une cible : celle-ci se retrouve automatiquement nommée au prochain conseil de jour avec un vote supplémentaire contre elle.",
      note: null
    },
    {
      name: "Ivankov",
      title: "Révolutionnaire",
      badge: "revo",
      body: "À chaque action le concernant (info d'un autre rôle), peut apparaître comme un rôle aléatoire — y compris un rôle Marine. Les rôles à info peuvent donc se tromper sur lui.",
      note: null
    },
    {
      name: "Dragon",
      title: "Chef des Révolutionnaires",
      badge: "revo",
      body: "Si Dragon est exécuté lors d'un vote de jour, les Pirates perdent instantanément, quelle que soit la situation.",
      note: null
    }
  ]
};

// ── Génère le HTML d'une carte (version réduite pour la grille) ──
function makeCard(r, faction) {
  const badgeLabel = { amiral: "Amiral", capitaine: "Capitaine", revo: "Révo" };
  const badgeHtml = r.badge
    ? `<span class="badge badge-${r.badge}">${badgeLabel[r.badge]}</span>`
    : "";
  const dataNote = r.note ? `data-note="${r.note.replace(/"/g, '&quot;')}"` : "";

  return `
    <div class="role-card ${faction}"
         data-name="${r.name}"
         data-title="${r.title}"
         data-badge="${r.badge || ''}"
         data-body="${r.body.replace(/"/g, '&quot;')}"
         ${dataNote}
         data-faction="${faction}"
         onclick="openModal(this)">
      <div class="card-top">
        <span class="role-name">${r.name}</span>
        ${badgeHtml}
      </div>
      <div class="role-title">${r.title}</div>
      <div style="height:0.5rem;"></div>
      <div class="role-body">${r.body}</div>
    </div>`;
}

// ── Injecte les cartes dans tous les conteneurs ──
function renderCards() {
  ["marine", "pirate", "revo"].forEach(faction => {
    const html = roles[faction].map(r => makeCard(r, faction)).join("");
    const elAll  = document.getElementById(faction + "-all");
    const elSolo = document.getElementById(faction + "-solo");
    if (elAll)  elAll.innerHTML  = html;
    if (elSolo) elSolo.innerHTML = html;
  });
}

// ── MODAL ──
function openModal(card) {
  const faction = card.dataset.faction;
  const name    = card.dataset.name;
  const title   = card.dataset.title;
  const badge   = card.dataset.badge;
  const body    = card.dataset.body;
  const note    = card.dataset.note || "";

  const badgeLabel = { amiral: "Amiral", capitaine: "Capitaine", revo: "Révo" };
  const badgeClass = { amiral: "badge-amiral", capitaine: "badge-capitaine", revo: "badge-revo" };

  document.getElementById("modal-faction-bar").className = "modal-faction-bar " + faction;
  document.getElementById("modal-name").className = "modal-name " + faction;
  document.getElementById("modal-name").textContent = name;
  document.getElementById("modal-badge").innerHTML = badge
    ? `<span class="badge ${badgeClass[badge]}">${badgeLabel[badge]}</span>` : "";
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").textContent = body;

  const noteEl = document.getElementById("modal-note");
  if (note) {
    noteEl.className = "modal-note " + faction;
    noteEl.textContent = note;
  } else {
    noteEl.className = "modal-note";
    noteEl.textContent = "";
  }

  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

// ── Onglets ──
const tabMap = {
  all:    { section: "s-all",    btnClass: "active-all"    },
  rules:  { section: "s-rules",  btnClass: "active-rules"  },
  marine: { section: "s-marine", btnClass: "active-marine" },
  pirate: { section: "s-pirate", btnClass: "active-pirate" },
  revo:   { section: "s-revo",   btnClass: "active-revo"   }
};

function show(tab) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("visible"));
  document.querySelectorAll(".nav-btn").forEach(b => (b.className = "nav-btn"));
  const entry = tabMap[tab];
  if (!entry) return;
  document.getElementById(entry.section).classList.add("visible");
  const btn = document.querySelector(`[data-tab="${tab}"]`);
  if (btn) btn.classList.add(entry.btnClass);
}

// ── Init ──
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  show("all");
});
