import React, { useState, useEffect, useMemo } from "react";
import { Search, AlertCircle, RefreshCw } from "lucide-react";

const rodData = [
  "Abaia’s Spite",
  "Abyssal Specter Rod",
  "Anchor n’ Chain",
  "Apollo’s Sunshot",
  "Arctic Rod",
  "Auric Rod",
  "Aurora Rod",
  "Avalanche Rod",
  "Azure of Lagoon",
  "Bellona’s Waraxe",
  "Blade of Glorp",
  "Blazebringer Rod",
  "Bloomspire",
  "Bloomspire: Blooming Splendor",
  "Bloomspire: Twisted Toxins",
  "Boreal Rod",
  "Breeze Caster",
  "Brine-Infused Rod",
  "Carbon Rod",
  "Carrot Rod",
  "Celestial Rod",
  "Cerulean Fang Rod",
  "Challenger’s Rod",
  "Champions Rod",
  "Chasm Stalker",
  "Cinder Block Rod",
  "Coral Rod",
  "Cryolash",
  "Crystallized Rod",
  "Cusk Purger",
  "Daybreaker Rod",
  "Dead Man’s Rod",
  "Decayed Rod",
  "Depthseeker Rod",
  "Destiny Rod",
  "Dreambreaker",
  "Duskwire",
  "Eidolon Rod",
  "Elder Mossripper",
  "Ethereal Prism Rod",
  "Evil Pitchfork",
  "Fabulous Rod",
  "Fallen Rod",
  "Fast Rod",
  "Firefly Rod",
  "Flimsy Rod",
  "Fortune Rod",
  "Free Spirit Rod",
  "Friendly Rod",
  "Frog Rod",
  "Fungal Rod",
  "Gardenkeeper Rod",
  "Great Dreamer Rod",
  "Great Rod of Oscar",
  "Hades’ Soul-Scythe",
  "Heaven’s Rod",
  "Ice Warpers Rod",
  "Igneous Rupturer",
  "Kings Rod",
  "Kraken Rod",
  "Leviathan’s Fang Rod",
  "Long Rod",
  "Lucid Rod",
  "Lucky Rod",
  "Luminescent Oath",
  "Luminous Rod",
  "Magma Rod",
  "Magnet Rod",
  "Marrow Rod",
  "Merlin’s Staff",
  "Meteoric Rod",
  "Midas Rod",
  "Mythical Rod",
  "Nico’s Yarncaster",
  "No-Life Rod",
  "Nocturnal Rod",
  "Olympian Godbreaker",
  "Onirifalx",
  "Phoenix Rod",
  "Pinion’s Aria",
  "Plaguereaver",
  "Plastic Rod",
  "Poseidon Rod",
  "Poseidon’s Lance",
  "Precision Rod",
  "Rainbow Cluster Rod",
  "Random Rod",
  "Rapid Rod",
  "Reinforced Rod",
  "Requiem",
  "Resourceful Rod",
  "Riptide Rod",
  "Rod of the Depths",
  "Rod of the Eternal King",
  "Rod of the Exalted One",
  "Rod of the Forgotten Fang",
  "Rod of the Singularity",
  "Rod of the Zenith",
  "Ruinous Oath",
  "Scalding Hook",
  "Scarlet Spincaster Rod",
  "Scavenger Rod",
  "Scurvy Rod",
  "Seasons Rod",
  "Seraphic Rod",
  "Spirit of the Forest",
  "Spiritbinder",
  "Splitbranch Twig",
  "Steady Rod",
  "Stellarwave Mellody",
  "Stone Rod",
  "Summit Rod",
  "Sunken Rod",
  "Sweet-Stinger",
  "Tempest Rod",
  "Terrotrapper",
  "Thalassar’s Ruin",
  "The Boom Ball",
  "The Lost Rod",
  "Tidemourner",
  "Titanium Rod",
  "Toxic Spire Rod",
  "Toxinburst Rod",
  "Training Rod",
  "Tranquility Rod",
  "Treasure Rod",
  "Trident Rod",
  "Tryhard Rod",
  "Verdant Oath",
  "Verdant Shear Rod",
  "Vineweaver Rod",
  "Volcanic Rod",
  "Voyager Rod",
  "Wicked Fang Rod",
  "Wildflower Rod",
  "Wind Elemental",
  "Wisdom Rod",
  "Zeus Rod",
  "Zeus’ Thundermaul",
];

const globalCss = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

  :root {
    --bg-color: #fafafa;
    --surface-color: #ffffff;
    --text-color: #1f2937;
    --text-muted: #6b7280;
    --border-color: #e5e7eb;
    --modal-overlay: rgba(255, 255, 255, 0.8);
    --font-family: 'Montserrat', sans-serif;
    --checkbox-bg: #ffffff;
  }

  .theme-dark {
    --bg-color: #111827;
    --surface-color: #1f2937;
    --text-color: #f9fafb;
    --text-muted: #9ca3af;
    --border-color: #374151;
    --modal-overlay: rgba(0, 0, 0, 0.75);
    --checkbox-bg: rgba(0, 0, 0, 0.8);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: var(--font-family);
    transition: background-color 0.5s ease, color 0.5s ease;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  .app-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem;
  }

  /* Header Styles */
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
  }

  .title-container {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: default;
  }

  /* Logo Ikan SVG */
  .title-logo-svg {
    width: 4.2rem;
    height: 4.2rem;
    overflow: visible;
    transform: translateY(0.5px);
  }

  .title-logo-svg .part {
    transition: fill 0.5s ease, transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
    transform-box: fill-box;
  }

  .title-logo-svg .body { transform-origin: 100% 50%; }
  .title-logo-svg .tail { transform-origin: 0% 50%; }
  .title-logo-svg .eye { transform-origin: 50% 50%; }

  /* Warna Logo saat Light Mode (Asli) */
  .theme-light .title-logo-svg .body,
  .theme-light .title-logo-svg .tail { fill: #1f2937; }
  .theme-light .title-logo-svg .eye { fill: #fafafa; }

  /* Warna Logo saat Dark Mode (Negatif) */
  .theme-dark .title-logo-svg .body,
  .theme-dark .title-logo-svg .tail { fill: #f9fafb; }
  .theme-dark .title-logo-svg .eye { fill: #111827; }

  /* Animasi Hover Logo */
  .title-container:hover .title-logo-svg .body { transform: translateX(-3px); }
  .title-container:hover .title-logo-svg .tail { transform: translateX(3px) rotate(-3deg); }

  .title {
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--text-color);
    transition: color 0.5s ease;
  }

  /* Theme Toggle Switch */
  .theme-toggle-switch {
    background-color: var(--surface-color);
    border: 1px solid var(--border-color);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .theme-toggle-switch:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  .theme-toggle-switch .input {
    display: none;
  }

  .theme-toggle-switch .icon {
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    transition: transform 500ms;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color);
  }

  .theme-toggle-switch .icon--moon {
    transition-delay: 200ms;
  }

  .theme-toggle-switch .icon--sun {
    transform: scale(0);
  }

  .theme-toggle-switch .input:checked + .icon--moon {
    transform: rotate(360deg) scale(0);
  }

  .theme-toggle-switch .input:checked ~ .icon--sun {
    transition-delay: 200ms;
    transform: scale(1) rotate(360deg);
  }

  /* Progress Section */
  .progress-section {
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
    transition: all 0.5s ease;
  }

  .progress-title {
    text-align: center;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    color: var(--text-color);
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .progress-track {
    width: 100%;
    height: 14px;
    background: var(--border-color);
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    margin-bottom: 1.5rem;
  }

  .progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #00b0ff, #00ffaa);
    border-radius: 20px;
    transition: width 1s cubic-bezier(0.22, 1, 0.36, 1);
    box-shadow: 0 0 15px rgba(0, 255, 170, 0.4);
  }

  .progress-stats {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    font-size: 0.95rem;
    color: var(--text-muted);
    font-weight: 500;
  }

  .progress-stats span {
    color: var(--text-color);
    font-weight: 700;
  }

  /* Controls Section */
  .controls-section {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
    margin-bottom: 2.5rem;
    align-items: center;
    justify-content: space-between;
  }

  .search-box {
    position: relative;
    flex: 1;
    min-width: 280px;
  }

  .search-box svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    transition: color 0.3s ease;
  }

  .search-box input {
    width: 100%;
    padding: 0.85rem 1rem 0.85rem 2.8rem;
    border-radius: 14px;
    border: 1px solid var(--border-color);
    background: var(--surface-color);
    color: var(--text-color);
    font-size: 0.95rem;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
  }

  .search-box input:focus {
    border-color: #00ffaa;
    box-shadow: 0 0 0 4px rgba(0, 255, 170, 0.1);
  }
  
  .search-box input:focus + svg {
    color: #00ffaa;
  }

  .filters {
    display: flex;
    gap: 0.6rem;
  }

 .btn {
    padding: 0.7rem 1.2rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;   
    gap: 0.5rem;
    font-family: inherit;      
  }

  .btn:hover {
    background: var(--border-color);
    color: var(--text-color);
  }

  /* Active Filter Styling */
  .btn.active.filter-all {
    border-color: #00b0ff;
    color: #00b0ff;
    background: rgba(0, 176, 255, 0.05);
    box-shadow: 0 0 12px rgba(0, 176, 255, 0.3);
  }

  .btn.active.filter-done {
    border-color: #00ffaa;
    color: #00cc88;
    background: rgba(0, 255, 170, 0.05);
    box-shadow: 0 0 15px rgba(0, 255, 170, 0.4);
  }

  .btn.active.filter-notdone {
    border-color: #ff3333;
    color: #ff3333;
    background: rgba(255, 51, 51, 0.05);
    box-shadow: 0 0 15px rgba(255, 51, 51, 0.4);
  }

  .btn-reset {
    border-color: rgba(239, 68, 68, 0.3);
    color: #ef4444;
    background: transparent;
  }

  .btn-reset:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: #ef4444;
    color: #ef4444;
    box-shadow: 0 0 15px rgba(239, 68, 68, 0.3);
  }

  /* Grid & Cards */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.2rem;
  }

  .card {
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 1.2rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.06);
  }

  .card.done {
    opacity: 0.75;
    border-color: rgba(0, 255, 170, 0.3);
    background: rgba(0, 255, 170, 0.02);
  }
  
  .card.done:hover {
    border-color: #00ffaa;
  }

  .card-title {
    font-weight: 500;
    font-size: 1rem;
    color: var(--text-color);
    transition: all 0.3s ease;
  }

  .card.done .card-title {
    color: var(--text-muted);
    text-decoration: line-through;
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    inset: 0;
    background: var(--modal-overlay);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 1rem;
    animation: fadeIn 0.3s ease;
  }

  .modal-content {
    background: var(--surface-color);
    padding: 2.5rem;
    border-radius: 24px;
    max-width: 420px;
    width: 100%;
    text-align: center;
    border: 1px solid var(--border-color);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

    .modal-icon {
    color: #ef4444;
    margin-bottom: 1.5rem;
    display: inline-block;
    animation: shake 0.6s ease-in-out 0.35s;
  }

 .modal-title {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
    font-weight: 700;
    color: var(--text-color);
  }

  .modal-text {
    color: var(--text-muted);
    margin-bottom: 2rem;
    line-height: 1.6;
    font-size: 0.95rem;
  }

  .modal-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .btn-cancel {
    background: var(--surface-color);
    border: 1px solid var(--border-color);
    color: var(--text-color);
    flex: 1;
  }

  .btn-cancel:hover {
    background: var(--border-color);
  }

  .btn-confirm {
    background: #ef4444;
    border: 1px solid #ef4444;
    color: white;
    flex: 1;
  }

  .btn-confirm:hover {
    background: #dc2626;
    box-shadow: 0 0 20px rgba(220, 38, 38, 0.4);
    color: white;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes scaleUp {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0) rotate(0); }
    15%      { transform: translateX(-6px) rotate(-10deg); }
    30%      { transform: translateX(6px) rotate(8deg); }
    45%      { transform: translateX(-5px) rotate(-6deg); }
    60%      { transform: translateX(4px) rotate(4deg); }
    75%      { transform: translateX(-2px) rotate(-2deg); }
  }

  /* ==================================================
     NEON CHECKBOX STYLES (PURE CSS)
     ================================================== */
  .neon-checkbox-wrapper {
    display: inline-block;
  }

  .neon-checkbox {
    --primary: #00ffaa;
    --primary-dark: #00cc88;
    --primary-light: #88ffdd;
    --size: 30px;
    position: relative;
    width: var(--size);
    height: var(--size);
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    display: block;
  }

  .neon-checkbox input {
    display: none;
  }

  .neon-checkbox__frame {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .neon-checkbox__box {
    position: absolute;
    inset: 0;
    background: var(--checkbox-bg);
    border-radius: 4px;
    border: 2px solid var(--primary-dark);
    transition: all 0.4s ease;
  }

  .neon-checkbox__check-container {
    position: absolute;
    inset: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .neon-checkbox__check {
    width: 80%;
    height: 80%;
    fill: none;
    stroke: var(--primary);
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 40;
    stroke-dashoffset: 40;
    transform-origin: center;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .neon-checkbox__glow {
    position: absolute;
    inset: -2px;
    border-radius: 6px;
    background: var(--primary);
    opacity: 0;
    filter: blur(8px);
    transform: scale(1.2);
    transition: all 0.4s ease;
  }

  .neon-checkbox__borders {
    position: absolute;
    inset: 0;
    border-radius: 4px;
    overflow: hidden;
  }

  .neon-checkbox__borders span {
    position: absolute;
    width: 40px;
    height: 1px;
    background: var(--primary);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  .neon-checkbox__borders span:nth-child(1) { top: 0; left: -100%; animation: borderFlow1 2s linear infinite; }
  .neon-checkbox__borders span:nth-child(2) { top: -100%; right: 0; width: 1px; height: 40px; animation: borderFlow2 2s linear infinite; }
  .neon-checkbox__borders span:nth-child(3) { bottom: 0; right: -100%; animation: borderFlow3 2s linear infinite; }
  .neon-checkbox__borders span:nth-child(4) { bottom: -100%; left: 0; width: 1px; height: 40px; animation: borderFlow4 2s linear infinite; }

  .neon-checkbox__particles span {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--primary);
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    top: 50%;
    left: 50%;
    box-shadow: 0 0 6px var(--primary);
  }

  .neon-checkbox__rings {
    position: absolute;
    inset: -20px;
    pointer-events: none;
  }

  .neon-checkbox__rings .ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 1px solid var(--primary);
    opacity: 0;
    transform: scale(0);
  }

  .neon-checkbox__sparks span {
    position: absolute;
    width: 20px;
    height: 1px;
    background: linear-gradient(90deg, var(--primary), transparent);
    opacity: 0;
  }

  /* Hover Effects */
  .neon-checkbox:hover .neon-checkbox__box {
    border-color: var(--primary);
    transform: scale(1.05);
  }

  /* Checked State */
  .neon-checkbox input:checked ~ .neon-checkbox__frame .neon-checkbox__box {
    border-color: var(--primary);
    background: rgba(0, 255, 170, 0.1);
  }

  .neon-checkbox input:checked ~ .neon-checkbox__frame .neon-checkbox__check {
    stroke-dashoffset: 0;
    transform: scale(1.1);
  }

  .neon-checkbox input:checked ~ .neon-checkbox__frame .neon-checkbox__glow {
    opacity: 0.2;
  }

  .neon-checkbox input:checked ~ .neon-checkbox__frame .neon-checkbox__borders span {
    opacity: 1;
  }

  /* Particle Animations */
  .neon-checkbox input:checked ~ .neon-checkbox__frame .neon-checkbox__particles span {
    animation: particleExplosion 0.6s ease-out forwards;
  }

  .neon-checkbox input:checked ~ .neon-checkbox__frame .neon-checkbox__rings .ring {
    animation: ringPulse 0.6s ease-out forwards;
  }

  .neon-checkbox input:checked ~ .neon-checkbox__frame .neon-checkbox__sparks span {
    animation: sparkFlash 0.6s ease-out forwards;
  }

  /* Animations */
  @keyframes borderFlow1 { 0% { transform: translateX(0); } 100% { transform: translateX(200%); } }
  @keyframes borderFlow2 { 0% { transform: translateY(0); } 100% { transform: translateY(200%); } }
  @keyframes borderFlow3 { 0% { transform: translateX(0); } 100% { transform: translateX(-200%); } }
  @keyframes borderFlow4 { 0% { transform: translateY(0); } 100% { transform: translateY(-200%); } }
  
  @keyframes particleExplosion {
    0% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
    20% { opacity: 1; }
    100% { transform: translate( calc(-50% + var(--x, 20px)), calc(-50% + var(--y, 20px)) ) scale(0); opacity: 0; }
  }
  
  @keyframes ringPulse {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(2); opacity: 0; }
  }
  
  @keyframes sparkFlash {
    0% { transform: rotate(var(--r, 0deg)) translateX(0) scale(1); opacity: 1; }
    100% { transform: rotate(var(--r, 0deg)) translateX(30px) scale(0); opacity: 0; }
  }

  /* Particle Positions */
  .neon-checkbox__particles span:nth-child(1) { --x: 25px; --y: -25px; }
  .neon-checkbox__particles span:nth-child(2) { --x: -25px; --y: -25px; }
  .neon-checkbox__particles span:nth-child(3) { --x: 25px; --y: 25px; }
  .neon-checkbox__particles span:nth-child(4) { --x: -25px; --y: 25px; }
  .neon-checkbox__particles span:nth-child(5) { --x: 35px; --y: 0px; }
  .neon-checkbox__particles span:nth-child(6) { --x: -35px; --y: 0px; }
  .neon-checkbox__particles span:nth-child(7) { --x: 0px; --y: 35px; }
  .neon-checkbox__particles span:nth-child(8) { --x: 0px; --y: -35px; }
  .neon-checkbox__particles span:nth-child(9) { --x: 20px; --y: -30px; }
  .neon-checkbox__particles span:nth-child(10) { --x: -20px; --y: 30px; }
  .neon-checkbox__particles span:nth-child(11) { --x: 30px; --y: 20px; }
  .neon-checkbox__particles span:nth-child(12) { --x: -30px; --y: -20px; }

  /* Spark Rotations */
  .neon-checkbox__sparks span:nth-child(1) { --r: 0deg; top: 50%; left: 50%; }
  .neon-checkbox__sparks span:nth-child(2) { --r: 90deg; top: 50%; left: 50%; }
  .neon-checkbox__sparks span:nth-child(3) { --r: 180deg; top: 50%; left: 50%; }
  .neon-checkbox__sparks span:nth-child(4) { --r: 270deg; top: 50%; left: 50%; }

  /* Ring Delays */
  .neon-checkbox__rings .ring:nth-child(1) { animation-delay: 0s; }
  .neon-checkbox__rings .ring:nth-child(2) { animation-delay: 0.1s; }
  .neon-checkbox__rings .ring:nth-child(3) { animation-delay: 0.2s; }

  /* Responsive Design */
  @media (max-width: 768px) {
    .app-container { padding: 1.5rem 1rem; }
    .title { font-size: 1.8rem; }
    .controls-section { flex-direction: column; align-items: stretch; }
    .search-box { min-width: 100%; }
    .filters { justify-content: space-between; overflow-x: auto; padding-bottom: 0.5rem; }
    .grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); }
  }
`;

const Checkbox = ({ checked, onChange }) => {
  return (
    <div className="neon-checkbox-wrapper" onClick={(e) => e.stopPropagation()}>
      <label className="neon-checkbox">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <div className="neon-checkbox__frame">
          <div className="neon-checkbox__box">
            <div className="neon-checkbox__check-container">
              <svg viewBox="0 0 24 24" className="neon-checkbox__check">
                <path d="M3,12.5l7,7L21,5" />
              </svg>
            </div>
            <div className="neon-checkbox__glow" />
            <div className="neon-checkbox__borders">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="neon-checkbox__effects">
            <div className="neon-checkbox__particles">
              <span />
              <span />
              <span />
              <span /> <span />
              <span />
              <span />
              <span /> <span />
              <span />
              <span />
              <span />
            </div>
            <div className="neon-checkbox__rings">
              <div className="ring" />
              <div className="ring" />
              <div className="ring" />
            </div>
            <div className="neon-checkbox__sparks">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

const ThemeToggleSwitch = ({ isDarkMode, onToggle }) => {
  return (
    <label
      htmlFor="theme-switch"
      className="theme-toggle-switch"
      aria-label="Toggle Theme"
    >
      <input
        type="checkbox"
        className="input"
        id="theme-switch"
        checked={!isDarkMode}
        onChange={onToggle}
      />
      <div className="icon icon--moon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={24}
          height={24}
        >
          <path
            fillRule="evenodd"
            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="icon icon--sun">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={26}
          height={26}
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      </div>
    </label>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [progress, setProgress] = useState({});
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem("fisch_rod_tracker_progress");
      const savedTheme = localStorage.getItem("fisch_rod_tracker_theme");

      if (savedProgress) setProgress(JSON.parse(savedProgress));
      if (savedTheme) setIsDarkMode(savedTheme === "dark");
    } catch (e) {
      console.error("Failed to load data from localStorage", e);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        "fisch_rod_tracker_progress",
        JSON.stringify(progress),
      );
      localStorage.setItem(
        "fisch_rod_tracker_theme",
        isDarkMode ? "dark" : "light",
      );

      document.body.style.backgroundColor = isDarkMode ? "#111827" : "#fafafa";
    }
  }, [progress, isDarkMode, isLoaded]);

  const toggleRod = (rodName) => {
    setProgress((prev) => ({
      ...prev,
      [rodName]: !prev[rodName],
    }));
  };

  const resetProgress = () => {
    setProgress({});
    setIsModalOpen(false);
  };

  const collectedCount = Object.values(progress).filter(Boolean).length;
  const totalCount = rodData.length;
  const remainingCount = totalCount - collectedCount;
  const progressPercentage =
    totalCount === 0 ? 0 : Math.round((collectedCount / totalCount) * 100);

  const filteredRods = useMemo(() => {
    return rodData.filter((rod) => {
      const matchesSearch = rod.toLowerCase().includes(search.toLowerCase());
      const isDone = !!progress[rod];

      if (!matchesSearch) return false;
      if (filter === "Done" && !isDone) return false;
      if (filter === "Not Done" && isDone) return false;

      return true;
    });
  }, [search, filter, progress]);

  return (
    <>
      <style>{globalCss}</style>
      <div
        className={`app-container ${isDarkMode ? "theme-dark" : "theme-light"}`}
      >
        {/* Header */}
        <header className="header">
          <div className="title-container">
            <svg
              viewBox="0 0 350 350"
              className="title-logo-svg"
              role="img"
              aria-label="Logo ikan"
            >
              <path
                className="part body"
                d="M38 172 C 78 108, 170 92, 244 150 L244 180 C 172 240, 80 236, 38 172 Z"
              />
              <path
                className="part tail"
                d="M236 156 L291 128 Q299 124 299 133 L299 203 Q299 212 291 208 L236 178 Z"
              />
              <circle className="part eye" cx="97" cy="160" r="14" />
            </svg>
            <h1 className="title">Rod Tracker</h1>
          </div>
          <ThemeToggleSwitch
            isDarkMode={isDarkMode}
            onToggle={() => setIsDarkMode(!isDarkMode)}
          />
        </header>

        {/* Progress Bar */}
        <section className="progress-section">
          <h2 className="progress-title">Bestiary Completed</h2>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="progress-stats">
            <div>
              Collected: <span>{collectedCount}</span>
            </div>
            <div>
              Total: <span>{totalCount}</span>
            </div>
            <div>
              Remaining: <span>{remainingCount}</span>
            </div>
          </div>
        </section>

        {/* Controls and Filters */}
        <section className="controls-section">
          <div className="search-box">
            <Search size={18} />
            <input
              type="text"
              placeholder="Search Rod..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filters">
            {["All", "Done", "Not Done"].map((f) => (
              <button
                key={f}
                className={`btn filter-${f.replace(" ", "").toLowerCase()} ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <button
            className="btn btn-reset"
            onClick={() => setIsModalOpen(true)}
          >
            <RefreshCw size={16} />
            Reset Progress
          </button>
        </section>

        {/* Grid of Rods */}
        <div className="grid">
          {filteredRods.map((rod) => {
            const isDone = !!progress[rod];
            return (
              <div
                key={rod}
                className={`card ${isDone ? "done" : ""}`}
                onClick={() => toggleRod(rod)}
                style={{ cursor: "pointer" }}
              >
                <span className="card-title">{rod}</span>
                <Checkbox checked={isDone} onChange={() => toggleRod(rod)} />
              </div>
            );
          })}
        </div>

        {/* Reset Confirmation Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <div className="modal-icon">
                <AlertCircle size={48} />
              </div>
              <h3 className="modal-title">Reset Progress?</h3>
              <p className="modal-text">
                Are you sure you want to reset all progress? This action cannot
                be undone.
              </p>
              <div className="modal-actions">
                <button
                  className="btn btn-cancel"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-confirm" onClick={resetProgress}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
