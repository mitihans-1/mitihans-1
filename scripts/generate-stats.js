const fs = require('fs');
const path = require('path');

const statsDir = path.resolve('assets/stats');
if (!fs.existsSync(statsDir)) {
  fs.mkdirSync(statsDir, { recursive: true });
}

// 1. Generate 3D Trophy Showcase SVG
function generateTrophiesSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 180" width="100%" height="180">
  <defs>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE082"/>
      <stop offset="50%" stop-color="#FFB300"/>
      <stop offset="100%" stop-color="#FF6F00"/>
    </linearGradient>
    <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E2E8F0"/>
      <stop offset="50%" stop-color="#94A3B8"/>
      <stop offset="100%" stop-color="#475569"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7DD3FC"/>
      <stop offset="50%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#161B22"/>
      <stop offset="100%" stop-color="#0D1117"/>
    </linearGradient>
    <filter id="trophyGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <style>
    .trophy-text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 11px; fill: #94A3B8; text-anchor: middle; font-weight: 600; }
    .trophy-title { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; fill: #F1F5F9; text-anchor: middle; font-weight: 700; }
    .trophy-rank { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 10px; font-weight: 800; text-anchor: middle; }
    .card { rx: 12px; fill: url(#cardBg); stroke: #30363D; stroke-width: 1.5; }
  </style>

  <!-- Trophy 1: Full-Stack Architect -->
  <g transform="translate(10, 10)">
    <rect class="card" width="156" height="155"/>
    <g transform="translate(78, 55)" filter="url(#trophyGlow)">
      <!-- 3D Pedestal -->
      <polygon points="-28,26 28,26 36,36 -36,36" fill="#334155"/>
      <rect x="-24" y="20" width="48" height="7" rx="2" fill="url(#cyanGrad)"/>
      <!-- Cup Base & Stem -->
      <path d="M-6,12 L6,12 L8,20 L-8,20 Z" fill="url(#cyanGrad)"/>
      <!-- Cup Body -->
      <path d="M-22,-20 C-22,6 22,6 22,-20 Z" fill="url(#cyanGrad)"/>
      <!-- Handles -->
      <path d="M-22,-14 C-32,-14 -32,-2 -20,2" fill="none" stroke="url(#cyanGrad)" stroke-width="3" stroke-linecap="round"/>
      <path d="M22,-14 C32,-14 32,-2 20,2" fill="none" stroke="url(#cyanGrad)" stroke-width="3" stroke-linecap="round"/>
      <!-- Star on Cup -->
      <polygon points="0,-12 3,-4 10,-4 5,1 7,8 0,3 -7,8 -5,1 -10,-4 -3,-4" fill="#FFFFFF"/>
    </g>
    <text class="trophy-title" x="78" y="118">Full-Stack</text>
    <text class="trophy-text" x="78" y="135">Web Architect</text>
    <rect x="58" y="140" width="40" height="12" rx="4" fill="#0284C7" fill-opacity="0.3"/>
    <text class="trophy-rank" x="78" y="149" fill="#38BDF8">RANK A</text>
  </g>

  <!-- Trophy 2: Multi-Language Master (Gold) -->
  <g transform="translate(176, 10)">
    <rect class="card" width="156" height="155" stroke="#FFB300" stroke-opacity="0.4"/>
    <g transform="translate(78, 55)" filter="url(#trophyGlow)">
      <polygon points="-30,26 30,26 38,36 -38,36" fill="#422006"/>
      <rect x="-26" y="20" width="52" height="7" rx="2" fill="url(#goldGrad)"/>
      <path d="M-7,12 L7,12 L10,20 L-10,20 Z" fill="url(#goldGrad)"/>
      <path d="M-24,-22 C-24,8 24,8 24,-22 Z" fill="url(#goldGrad)"/>
      <path d="M-24,-16 C-36,-16 -36,-2 -22,2" fill="none" stroke="url(#goldGrad)" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M24,-16 C36,-16 36,-2 22,2" fill="none" stroke="url(#goldGrad)" stroke-width="3.5" stroke-linecap="round"/>
      <circle cx="0" cy="-6" r="8" fill="#FFF" fill-opacity="0.3"/>
      <text x="0" y="-2" fill="#FFFFFF" font-size="11" font-weight="900" text-anchor="middle" font-family="sans-serif">★</text>
    </g>
    <text class="trophy-title" x="78" y="118">Polyglot</text>
    <text class="trophy-text" x="78" y="135">TS • JS • SQL</text>
    <rect x="58" y="140" width="40" height="12" rx="4" fill="#FFB300" fill-opacity="0.3"/>
    <text class="trophy-rank" x="78" y="149" fill="#FFC107">GOLD S</text>
  </g>

  <!-- Trophy 3: Active Commits & Streak (Gold) -->
  <g transform="translate(342, 10)">
    <rect class="card" width="156" height="155" stroke="#FFB300" stroke-opacity="0.4"/>
    <g transform="translate(78, 55)" filter="url(#trophyGlow)">
      <polygon points="-30,26 30,26 38,36 -38,36" fill="#422006"/>
      <rect x="-26" y="20" width="52" height="7" rx="2" fill="url(#goldGrad)"/>
      <path d="M-7,12 L7,12 L10,20 L-10,20 Z" fill="url(#goldGrad)"/>
      <path d="M-24,-22 C-24,8 24,8 24,-22 Z" fill="url(#goldGrad)"/>
      <path d="M-24,-16 C-36,-16 -36,-2 -22,2" fill="none" stroke="url(#goldGrad)" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M24,-16 C36,-16 36,-2 22,2" fill="none" stroke="url(#goldGrad)" stroke-width="3.5" stroke-linecap="round"/>
      <!-- Lightning bolt -->
      <polygon points="1,-16 -6,-6 -1,-6 -3,4 5,-4 0,-4" fill="#FFFFFF"/>
    </g>
    <text class="trophy-title" x="78" y="118">Committed</text>
    <text class="trophy-text" x="78" y="135">Active Builder</text>
    <rect x="58" y="140" width="40" height="12" rx="4" fill="#FFB300" fill-opacity="0.3"/>
    <text class="trophy-rank" x="78" y="149" fill="#FFC107">GOLD S</text>
  </g>

  <!-- Trophy 4: Production Projects (Silver) -->
  <g transform="translate(508, 10)">
    <rect class="card" width="156" height="155"/>
    <g transform="translate(78, 55)" filter="url(#trophyGlow)">
      <polygon points="-28,26 28,26 36,36 -36,36" fill="#334155"/>
      <rect x="-24" y="20" width="48" height="7" rx="2" fill="url(#silverGrad)"/>
      <path d="M-6,12 L6,12 L8,20 L-8,20 Z" fill="url(#silverGrad)"/>
      <path d="M-22,-20 C-22,6 22,6 22,-20 Z" fill="url(#silverGrad)"/>
      <path d="M-22,-14 C-32,-14 -32,-2 -20,2" fill="none" stroke="url(#silverGrad)" stroke-width="3" stroke-linecap="round"/>
      <path d="M22,-14 C32,-14 32,-2 20,2" fill="none" stroke="url(#silverGrad)" stroke-width="3" stroke-linecap="round"/>
      <!-- Diamond on Cup -->
      <polygon points="0,-14 7,-6 0,2 -7,-6" fill="#FFFFFF"/>
    </g>
    <text class="trophy-title" x="78" y="118">Repositories</text>
    <text class="trophy-text" x="78" y="135">Modern Full-Stack</text>
    <rect x="58" y="140" width="40" height="12" rx="4" fill="#94A3B8" fill-opacity="0.25"/>
    <text class="trophy-rank" x="78" y="149" fill="#CBD5E1">SILVER A</text>
  </g>

  <!-- Trophy 5: UI & DX Craft (Cyan) -->
  <g transform="translate(674, 10)">
    <rect class="card" width="156" height="155"/>
    <g transform="translate(78, 55)" filter="url(#trophyGlow)">
      <polygon points="-28,26 28,26 36,36 -36,36" fill="#1E293B"/>
      <rect x="-24" y="20" width="48" height="7" rx="2" fill="url(#cyanGrad)"/>
      <path d="M-6,12 L6,12 L8,20 L-8,20 Z" fill="url(#cyanGrad)"/>
      <path d="M-22,-20 C-22,6 22,6 22,-20 Z" fill="url(#cyanGrad)"/>
      <path d="M-22,-14 C-32,-14 -32,-2 -20,2" fill="none" stroke="url(#cyanGrad)" stroke-width="3" stroke-linecap="round"/>
      <path d="M22,-14 C32,-14 32,-2 20,2" fill="none" stroke="url(#cyanGrad)" stroke-width="3" stroke-linecap="round"/>
      <!-- Sparkle on Cup -->
      <polygon points="0,-14 2,-8 8,-6 2,-4 0,2 -2,-4 -8,-6 -2,-8" fill="#FFFFFF"/>
    </g>
    <text class="trophy-title" x="78" y="118">UI / UX Craft</text>
    <text class="trophy-text" x="78" y="135">Next.js & Tailwind</text>
    <rect x="58" y="140" width="40" height="12" rx="4" fill="#0284C7" fill-opacity="0.3"/>
    <text class="trophy-rank" x="78" y="149" fill="#38BDF8">RANK A</text>
  </g>
</svg>`;
}

// 2. Generate GitHub Stats SVG
function generateStatsSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 195" width="450" height="195">
  <defs>
    <linearGradient id="statsBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#161B22"/>
      <stop offset="100%" stop-color="#0D1117"/>
    </linearGradient>
    <linearGradient id="rankCircle" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#A78BFA"/>
    </linearGradient>
  </defs>

  <style>
    .header { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; font-weight: 700; fill: #38BDF8; }
    .label { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 500; fill: #94A3B8; }
    .value { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; font-weight: 700; fill: #F1F5F9; }
    .rank-text { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 24px; font-weight: 800; fill: #38BDF8; text-anchor: middle; }
    .card-border { rx: 12px; fill: url(#statsBg); stroke: #30363D; stroke-width: 1.5; }
  </style>

  <rect class="card-border" width="448" height="193" x="1" y="1"/>

  <!-- Title -->
  <g transform="translate(25, 32)">
    <svg viewBox="0 0 16 16" width="18" height="18" fill="#38BDF8" y="-14">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
    </svg>
    <text class="header" x="26" y="0">Mitiku Etafa's GitHub Stats</text>
  </g>

  <!-- Metric Rows -->
  <g transform="translate(25, 62)">
    <!-- Stars -->
    <g transform="translate(0, 0)">
      <text class="label">⭐ Total Stars Earned:</text>
      <text class="value" x="180">Active</text>
    </g>
    <!-- Total Commits -->
    <g transform="translate(0, 26)">
      <text class="label">📦 Total Commits (2026):</text>
      <text class="value" x="180">Consistent</text>
    </g>
    <!-- Repositories -->
    <g transform="translate(0, 52)">
      <text class="label">📁 Public Repositories:</text>
      <text class="value" x="180">Active Projects</text>
    </g>
    <!-- Contributions -->
    <g transform="translate(0, 78)">
      <text class="label">🔥 Continuous Learning:</text>
      <text class="value" x="180">Every Day</text>
    </g>
    <!-- Profile Status -->
    <g transform="translate(0, 104)">
      <text class="label">🌍 Global Availability:</text>
      <text class="value" x="180" fill="#38BDF8">Open to Work ✅</text>
    </g>
  </g>

  <!-- Rank Badge Circle -->
  <g transform="translate(370, 110)">
    <circle cx="0" cy="0" r="42" fill="none" stroke="#30363D" stroke-width="5"/>
    <circle cx="0" cy="0" r="42" fill="none" stroke="url(#rankCircle)" stroke-width="5" stroke-dasharray="210 50" stroke-linecap="round"/>
    <text class="rank-text" x="0" y="8">A+</text>
  </g>
</svg>`;
}

// 3. Generate Top Languages SVG
function generateLanguagesSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 195" width="350" height="195">
  <defs>
    <linearGradient id="langBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#161B22"/>
      <stop offset="100%" stop-color="#0D1117"/>
    </linearGradient>
  </defs>

  <style>
    .header { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; font-weight: 700; fill: #38BDF8; }
    .lang-name { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 600; fill: #F1F5F9; }
    .lang-pct { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 12px; font-weight: 500; fill: #94A3B8; text-anchor: end; }
    .card-border { rx: 12px; fill: url(#langBg); stroke: #30363D; stroke-width: 1.5; }
  </style>

  <rect class="card-border" width="348" height="193" x="1" y="1"/>

  <!-- Title -->
  <g transform="translate(25, 32)">
    <text class="header">Most Used Languages</text>
  </g>

  <!-- Stack Bar Progress Line -->
  <g transform="translate(25, 48)">
    <rect x="0" y="0" width="300" height="10" rx="5" fill="#30363D"/>
    <!-- TypeScript 38% -->
    <rect x="0" y="0" width="114" height="10" rx="5" fill="#3178C6"/>
    <!-- JavaScript 27% -->
    <rect x="115" y="0" width="81" height="10" fill="#F7DF1E"/>
    <!-- React / HTML 18% -->
    <rect x="197" y="0" width="54" height="10" fill="#61DAFB"/>
    <!-- CSS / Tailwind 11% -->
    <rect x="252" y="0" width="33" height="10" fill="#06B6D4"/>
    <!-- SQL / Prisma 6% -->
    <rect x="286" y="0" width="14" height="10" rx="5" fill="#2D3748"/>
  </g>

  <!-- Language Details List -->
  <g transform="translate(25, 78)">
    <!-- TypeScript -->
    <g transform="translate(0, 0)">
      <circle cx="5" cy="5" r="5" fill="#3178C6"/>
      <text class="lang-name" x="18" y="9">TypeScript</text>
      <text class="lang-pct" x="300" y="9">38.0%</text>
    </g>
    <!-- JavaScript -->
    <g transform="translate(0, 22)">
      <circle cx="5" cy="5" r="5" fill="#F7DF1E"/>
      <text class="lang-name" x="18" y="9">JavaScript</text>
      <text class="lang-pct" x="300" y="9">27.0%</text>
    </g>
    <!-- React & Next.js -->
    <g transform="translate(0, 44)">
      <circle cx="5" cy="5" r="5" fill="#61DAFB"/>
      <text class="lang-name" x="18" y="9">React / Next.js</text>
      <text class="lang-pct" x="300" y="9">18.0%</text>
    </g>
    <!-- Tailwind & CSS -->
    <g transform="translate(0, 66)">
      <circle cx="5" cy="5" r="5" fill="#06B6D4"/>
      <text class="lang-name" x="18" y="9">Tailwind CSS</text>
      <text class="lang-pct" x="300" y="9">11.0%</text>
    </g>
    <!-- SQL & Databases -->
    <g transform="translate(0, 88)">
      <circle cx="5" cy="5" r="5" fill="#2D3748"/>
      <text class="lang-name" x="18" y="9">MySQL & Prisma</text>
      <text class="lang-pct" x="300" y="9">6.0%</text>
    </g>
  </g>
</svg>`;
}

// Write the files
fs.writeFileSync(path.join(statsDir, 'trophies.svg'), generateTrophiesSvg());
fs.writeFileSync(path.join(statsDir, 'github-stats.svg'), generateStatsSvg());
fs.writeFileSync(path.join(statsDir, 'top-langs.svg'), generateLanguagesSvg());

console.log('Successfully generated trophies.svg, github-stats.svg, and top-langs.svg in assets/stats/');

