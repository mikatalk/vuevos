<template>
  <svg class="egg-svg-filters" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      <filter id="blur-filter">
        <feTurbulence type="fractalNoise" baseFrequency=".02"/>
        <feDisplacementMap in="SourceGraphic" scale="25"/>
        <feComposite in="SourceGraphic" operator="atop"/>
      </filter>
    </defs>
    <rect width="100%" height="100%" fill="hotpink"/>
    <circle cx="50" cy="50" r="40" stroke-width="3" stroke="whitesmoke" 
      fill="white" filter="url(#blur-filter)"/>
    <circle cx="50" cy="50" r="15" stroke-width="3" stroke="#fad300" fill="gold"/>
  </svg>
</template>