// ============================================
// DATA
// ============================================
const ICONS = {
  design: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>`,
  software: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  management: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  research: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6L3 20a1 1 0 0 0 1 2h16a1 1 0 0 0 1-2L15 8V2"/><path d="M9 2h6"/><path d="M8.5 14h7"/></svg>`
};

const TYPE_LABEL = {
  design: 'Design',
  software: 'Software',
  management: 'Management',
  research: 'Research'
};

// Each project can optionally include:
//   image: "assets/your-file.jpg"   -> shown on the card instead of the type icon.
//          Create an "assets" folder next to index.html, drop your image files in
//          there, and point to them like "assets/miniature-mayhem.jpg"
//   link:  "https://..."            -> shows a "Play" button on the front and back
//          of the card (Steam page, itch.io page, app store link, etc).
//          Leave it as "" if the project isn't playable/public.
const projects = [
    {
        name: "Miniature Mayhem: Flood Fighters",
        subtitle: "Flood Fighters",
        role: "Co-Developer (1 of 2)",
        types: ["software", "design"],
        blurb: "A local-multiplayer 3D brawler built with one other developer across a full year, shipped to Steam.",
        stats: ["Duo project", "~1 year", "Steam"],
        back: "My largest project to date, built with Mad Makers Games. I owned the full art pipeline — 3D and 2D — plus customization systems, UI programming, player-data management, and player animations. Four maps, 15+ weapons, and 36 cosmetic items, supporting up to four local players.",
        image: "assets/MinMayWebsite.jpg",
        link: "https://store.steampowered.com/app/3221220/Mini_Mayhem_Flood_Fighters/"
    },
    {
        name: "Overcharged",
        subtitle: "Energy Transition Education Game",
        role: "Designer & Developer",
        types: ["design", "software"],
        blurb: "Designed and built minigames and a scene system for a client-branded game about local battery storage and energy sustainability.",
        stats: ["Team of 10", "Client project", "Unity"],
        back: "Developed within Totem's Gamification Squad for client Lumosa, a sustainable lighting and energy company. I joined mid-production, improving an existing minigame's functionality and design while building the scene-transition system — with a strong focus on visual polish, VFX, and clear player feedback.",
        image: "assets/overchargedWebsite",
        link: "https://www.dutchgamesindustry.nl/game/overcharged"
    },
    {
        name: "Ripples",
        subtitle: "Electromagnetism Educational Game",
        role: "Designer",
        types: ["design", "software"],
        blurb: "Designed and built gameplay concepts to communicate concept to university students.",
        stats: ["Team of 5", "Client project","~1 year"],
        back: "An educational game project for TU/e Electrical Engineering. A point-and-click detective game that supports an electromagnetism course. Designed to support an electromagnetism course.",
        image: "",
        link: "https://www.cursor.tue.nl/campus/2026/juni/week-4/start-up-maakt-game-van-struikelvak-elektromagnetisme"
    },
    {
        name: "Mindful Waters",
        subtitle: "Digital Aquarium for People with Dementia",
        role: "Solo Researcher & Developer",
        types: ["research", "software"],
        blurb: "Built a hand-tracked digital aquarium from scratch, then ran the study and co-authored a published paper on the results.",
        stats: ["Solo build", "Published paper", "Python · C++ · C#"],
        back: "My Bachelor End Project, built entirely solo after deciding to remake a flawed existing system from scratch. Combined Python for hand-recognition, C++ for a physical fish-feeding device, and C# for the Unity simulation — including custom-rigged 3D fish models. Later continued as a junior researcher, publishing in Multimodal Technologies and Interaction and getting covered by Corriere della Sera.",
        image: "assets/MWWebsite",
        link: "https://www.mdpi.com/2414-4088/8/8/65"
    },
    {
        name: "GameBus",
        subtitle: "Research Platform for Health Concious Behaviour",
        role: "Designer & Artist",
        types: ["software", "design"],
        blurb: "Research platform making use of nudging to stimulate health conscious behavior through gamification and reward mechanisms.",
        stats: ["Duo project", "~1 year", "Steam"],
        back: "Minigames and a serious game for the GameBus platform. The research platform supports healthier habits and meaningful behaviour change. UniGames is working on game development for the existing platform.",
        image: "",
        link: "https://blog.gamebus.eu/"
    },
    {
        name: "Momentum Kart",
        subtitle: "TU/e Campus Arcade Racer",
        role: "Designer → Project Manager",
        types: ["management", "design"],
        blurb: "Took a campus-themed kart racer from art direction through project management to public relations for its stage launch.",
        stats: ["Team project", "Arcade + PC", "Unity"],
        back: "Built for the TU/e Momentum graduation ceremony. I started as designer and artist — recreating the TU/e campus, item boxes, and vehicle models — then moved into project management and UI-focused bug fixing, before taking on public relations with media and the stakeholder Artishock ahead of the live event.",
        image: "assets/MoKawebsite",
        link: "https://totemgamedev.com/momentum-kart"
    },
    {
        name: "Campus Quest",
        subtitle: "TU/e Lustrum Collection Game",
        role: "Project Manager, Developer & Designer",
        types: ["management", "design"],
        blurb: "Collaborative local multiplayer game to celebrate the 70 year lustrum of the TU/e",
        stats: ["Team project", "Lustrum TU/e", "Unity"],
        back: "Collaborative game meant to celebrate the 70 year lustrum of the TU/e and be part of a competition during the festivities. The game has two players collaborating to save the campus by collecting objects and freeing the university.",
        image: "",
        link: ""
    },
    {
        name: "Totem Arcade",
        subtitle: "Custom Arcade Cabinet",
        role: "Lead Builder",
        types: ["software", "management"],
        blurb: "Designed, cut, wired, and coded a fully custom arcade cabinet to give Totem's games a physical home on campus.",
        stats: ["4–5 months", "Physical build", "Custom software"],
        back: "A ground-up build: custom-cut wooden frame, hand-selected and soldered electronics, a 3D-printed miniature version for reference, and custom software running on the integrated computer. I was involved from component sourcing through final construction, plus painting the side art sourced from student-made games.",
        image: "",
        link: ""
    },
    {
        name: "Baranyi Yagu",
        subtitle: "Ecosystem Balance Game",
        role: "Lead Designer & Manager",
        types: ["design", "management"],
        blurb: "Directed art and concept for a cooperative ecosystem-balance game built in days for an international game jam.",
        stats: ["Game jam", "2nd place", "AEWT Sydney"],
        back: "Built for the Academic Esports World Tournament in Sydney under tight time pressure. I managed the development team alongside other academic tournament components, while concepting, designing, and creating art for the game's animal icons, environments, and diegetic ecosystem-selection system. Placed 2nd against seven other universities.",
        image: "assets/BaranyiWebsite",
        link: "https://apps.apple.com/nl/app/baranyi-yagu/id6761786954"
    },
    {
        name: "Innovation Station",
        subtitle: "Custom interactive game",
        role: "Art Designer & Co-Manager",
        types: ["design", "management"],
        blurb: "Game focused on stimulating the concept of the university of the future build on a custom interactive table for TU/e Innovation Space",
        stats: ["CBL", "Interactive Table", "Unity"],
        back: "Innovation Station is a collaborative game for a custom build interactive table meant to communicate the concepts of the university of the future while being focused on entertaining and collaborative multiplayer.",
        image: "",
        link: ""
    },
    {
        name: "Balance Stompers",
        subtitle: "Balance Rehabilitation for Children with CP",
        role: "Designer & Developer",
        types: ["design", "research"],
        blurb: "A minigame suite that trains balance in children with cerebral palsy through subconscious, game-based repetition.",
        stats: ["TU/e M11 project", "Clinical review", "Unity"],
        back: "Designed with Adelante, a rehabilitation care centre, this project uses progressive minigames to train muscles without requiring the user to focus on the training itself. Reviewed and tested by rehabilitation and technical experts, with the reward and progression systems refined through direct feedback from clients, peers, and coaches.",
        image: "",
        link: ""
    },
    {
        name: "The Eye",
        subtitle: "Teaching about Facial Recognition Technology",
        role: "Team Lead & Art Director",
        types: ["management", "design"],
        blurb: "Led a 12-person squad building a mobile game that teaches high-schoolers about facial-recognition bias, deepfakes, and false positives.",
        stats: ["Team of 12", "1 year", "iOS / Android"],
        back: "A year-long client project for Night of the Nerds, split across mechanics, art, and research departments. I managed the full team and led the art department through two rounds of iteration based on expert and student feedback. Shipped with a companion learning toolkit and a 4TU.school classroom module — published free on both app stores in English and Dutch.",
        image: "",
        link: ""
    },
    {
        name: "Vox Populi",
        subtitle: "Entertainment game on political debates",
        role: "Artist",
        types: ["design"],
        blurb: "Short development project using and mentioning concept about political debates featuring current and past political figures.",
        stats: ["Short Cycle", "5-person"],
        back: "Entertainment game of a strategic deck-builder focused on political debates and featuring political figures, made in a very short development cycle and communicates basic debate topics and concepts.",
        image: "",
        link: "https://orangeairfighter.itch.io/vox-populi"
    }
];

// ============================================
// RENDER PROJECT CARDS
// ============================================
function renderCards() {
  const grid = document.getElementById('cardGrid');
  grid.innerHTML = projects.map((p, i) => {
    const primaryType = p.types[0];
    const badges = p.types.map(t => `<span class="type-badge type-${t}">${TYPE_LABEL[t]}</span>`).join('');
    const stats = p.stats.map(s => `<span>${s}</span>`).join('');

    // Image if provided, otherwise fall back to the type icon
    const visual = p.image
      ? `<img src="${p.image}" alt="${p.name} screenshot" loading="lazy">`
      : ICONS[primaryType];

    // "Play" link if a URL was provided
    const playLink = p.link
      ? `<a class="pcard-play-link" href="${p.link}" target="_blank" rel="noopener" onclick="event.stopPropagation()">▶ Play</a>`
      : '';

    return `
    <div class="pcard reveal" data-index="${i}" style="--card-color: var(--type-${primaryType})" tabindex="0" role="button" aria-label="Flip card: ${p.name}">
      <div class="pcard-inner">
        <div class="pcard-face pcard-front">
          <div class="pcard-type-row">${badges}</div>
          <div class="pcard-icon">${visual}</div>
          <h3 class="pcard-name">${p.name}</h3>
          <p class="pcard-role">${p.role}</p>
          <p class="pcard-blurb">${p.blurb}</p>
          ${playLink}
          <div class="pcard-stats">${stats}</div>
          <div class="pcard-flip-hint">TAP TO FLIP ↻</div>
        </div>
        <div class="pcard-face pcard-back">
          <div class="pcard-type-row">${badges}</div>
          <p class="pcard-back-name">${p.name} <span style="color:var(--text-dim); font-weight:400;">— ${p.subtitle}</span></p>
          <h4>Full brief</h4>
          <p>${p.back}</p>
          ${playLink}
        </div>
      </div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.pcard').forEach(card => {
    const toggle = () => card.classList.toggle('flipped');
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });

  observeReveals();
}

// ============================================
// TABS
// ============================================
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.querySelector(`.tab-panel[data-panel="${tab.dataset.tab}"]`).classList.add('active');
    });
  });
}

// ============================================
// NAV TOGGLE
// ============================================
function initNav() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================
// TYPEWRITER
// ============================================
function initTypewriter() {
  const el = document.getElementById('typewriter');
  const phrases = [
    'Gamification Developer',
    'CEO — UniGames B.V.',
    'Team Lead — Totem Game Dev',
    'Chairman — AEWT Eindhoven'
  ];
  let phraseIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const current = phrases[phraseIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 55);
  }
  tick();
}

// ============================================
// SCROLL REVEAL
// ============================================
function observeReveals() {
  const items = document.querySelectorAll('.reveal:not(.in)');
  if (!('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));
}

function markRevealTargets() {
  document.querySelectorAll('.fact, .quest, .about-text, .panel-text').forEach(el => el.classList.add('reveal'));
}

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  markRevealTargets();
  renderCards();
  initTabs();
  initNav();
  initTypewriter();
  observeReveals();
});
