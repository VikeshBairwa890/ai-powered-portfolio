'use client';

import { useCallback, useMemo } from 'react';
import Particles from 'react-particles';
import { loadBasic } from 'tsparticles-basic';
import type { Engine } from 'tsparticles-engine';
import { useTheme } from 'next-themes';

export default function ParticlesBackground() {
  const { theme } = useTheme();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
  }, []);

  const isDark = theme === 'dark';

  const options = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,

    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },

    particles: {
      color: {
        value: isDark ? '#ffffff' : '#0f172a', // white / slate-900
      },
      links: {
        color: isDark ? '#94a3b8' : '#334155', // slate-400 / slate-700
        distance: 150,
        enable: true,
        opacity: isDark ? 0.25 : 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.4,
        outModes: { default: 'bounce' },
      },
      number: {
        value: 50,
        density: { enable: true, area: 800 },
      },
      opacity: {
        value: isDark ? 0.5 : 0.3,
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },

    detectRetina: true,
  }), [isDark]);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="absolute inset-0 z-0"
    />
  );
}
