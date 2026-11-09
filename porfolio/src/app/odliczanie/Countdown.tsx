"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./odliczanie.module.css";

const VACATION_DATE = new Date("2026-08-06T16:00:00+02:00").getTime();
const FAREWELL_DATE = new Date("2026-08-24T00:00:00+02:00").getTime();
const GT_END_DATE = new Date("2026-08-26T00:00:00+02:00").getTime();
const START_DATE = new Date("2026-09-01T00:00:00+02:00").getTime();
const JOURNEY_START = VACATION_DATE;

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(target: number, now: number): TimeLeft {
  const distance = Math.max(0, target - now);
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance / 3_600_000) % 24),
    minutes: Math.floor((distance / 60_000) % 60),
    seconds: Math.floor((distance / 1_000) % 60),
  };
}

function formatValue(value: number) {
  return value.toString().padStart(2, "0");
}

const confetti = ["✨", "💜", "⚡", "🚀", "✨", "🥳", "⚡", "💜", "🚀", "✨", "🥳", "⚡"];

export default function Countdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const phase = now < VACATION_DATE
    ? "leaving"
    : now < FAREWELL_DATE
      ? "vacation"
      : now < GT_END_DATE
        ? "farewell"
        : now < START_DATE
          ? "waiting"
          : "started";
  const target = phase === "leaving"
    ? VACATION_DATE
    : phase === "vacation"
      ? FAREWELL_DATE
      : phase === "farewell"
        ? GT_END_DATE
        : START_DATE;
  const timeLeft = getTimeLeft(target, now);
  const progress = useMemo(() => {
    const total = START_DATE - JOURNEY_START;
    return Math.min(100, Math.max(0, ((now - JOURNEY_START) / total) * 100));
  }, [now]);

  const content = {
    leaving: {
      kicker: "AKT I · OSTATNIE GODZINY",
      title: "Do końca pracy przed urlopem",
      note: "O 16:00 zamykasz komputer. Potem góry, słońce, nowe widoki i wielka bałkańska przygoda!",
      badge: "6 SIERPNIA · 16:00 · START URLOPU",
    },
    vacation: {
      kicker: "AKT II · MACEDOŃSKA PRZYGODA",
      title: "Macedonia czeka! ⛰️",
      note: "Odkrywaj Bałkany, kolekcjonuj widoki i ładuj baterie. Do GT wracasz już tylko na piękne pożegnanie.",
      badge: "24–25 SIERPNIA · OSTATNIE DNI W GT",
    },
    farewell: {
      kicker: "AKT III · PIĘKNY FINAŁ",
      title: "Czas pożegnać GT 👋",
      note: "Ostatnie wspólne chwile, dobre słowa i zamknięcie ważnego rozdziału.",
      badge: "24–25 SIERPNIA · POŻEGNANIE",
    },
    waiting: {
      kicker: "AKT IV · ŁADOWANIE NOWEGO",
      title: "Do pierwszego dnia w WHEN 🚀",
      note: "Stary rozdział zamknięty. Teraz złap oddech — nowa energia już się ładuje.",
      badge: "1 WRZEŚNIA · START W WHEN",
    },
    started: {
      kicker: "AKT V · NOWY ROZDZIAŁ",
      title: "To właśnie dziś!",
      note: "Nowe miejsce, nowi ludzie, nowe pomysły. Działaj — będzie świetnie. 🚀",
      badge: "#WHENWEWIN 💜",
    },
  }[phase];

  const units = [
    [timeLeft.days, "DNI"],
    [timeLeft.hours, "GODZIN"],
    [timeLeft.minutes, "MINUT"],
    [timeLeft.seconds, "SEKUND"],
  ] as const;

  return (
    <main className={`${styles.page} ${styles[phase]}`}>
      <div className={styles.noise} aria-hidden="true" />
      {confetti.map((symbol, index) => (
        <span
          className={styles.confetti}
          style={{ "--i": index } as React.CSSProperties}
          key={index}
          aria-hidden="true"
        >
          {symbol}
        </span>
      ))}

      <header className={styles.header}>
        <a className={styles.takaLogo} href="https://grupataka.pl/" target="_blank" rel="noreferrer">
          <span>GRUPA</span><strong>TAKA</strong>
        </a>
        <p className={styles.headerLabel}>ZMIANA W TOKU</p>
        <a className={styles.whenLogo} href="https://when.pl/" target="_blank" rel="noreferrer">
          when<span>®</span>
        </a>
      </header>

      <section className={styles.hero}>
        <div className={styles.congrats}>🥳 Brawo Justyna! 💜</div>
        <p className={styles.kicker}>{content.kicker}</p>
        <h1>{content.title}</h1>

        {phase !== "started" ? (
          <div className={styles.timer} aria-label={`${timeLeft.days} dni, ${timeLeft.hours} godzin, ${timeLeft.minutes} minut i ${timeLeft.seconds} sekund`}>
            {units.map(([value, label], index) => (
              <div className={styles.timeGroup} key={label}>
                <strong>{formatValue(value)}</strong>
                <span>{label}</span>
                {index < units.length - 1 && <i aria-hidden="true">:</i>}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.launch}>🚀</div>
        )}

        <p className={styles.note}><span className={styles.noteEmoji}>{phase === "leaving" ? "⏰" : phase === "vacation" ? "😎" : phase === "farewell" ? "👋" : phase === "waiting" ? "🔋" : "🥳"}</span>{content.note}</p>
        <div className={styles.badge}>{content.badge}<span>↗</span></div>
      </section>

      <section className={styles.journey} aria-label="Droga do nowej pracy">
        <div className={styles.journeyLabels}>
          <div><span>06.08 · 16:00</span><strong>Koniec pracy 🎉</strong></div>
          <div><span>07–23.08</span><strong>Urlop w Macedonii ☀️</strong></div>
          <div><span>24–25.08</span><strong>Pożegnanie z GT 👋</strong></div>
          <div><span>01.09</span><strong>Let’s go, WHEN 🚀</strong></div>
        </div>
        <div className={styles.track}>
          <div className={styles.progress} style={{ width: `${progress}%` }} />
          <span className={styles.marker} style={{ left: `${progress}%` }}>✦</span>
          <i className={styles.stopVacation} /><i className={styles.stopOne} /><i className={styles.stopTwo} />
        </div>
      </section>

      <footer className={styles.footer}>
        <span>NOWY ROZDZIAŁ</span>
        <p>Od napędzania zmian do wygrywania razem.</p>
        <span>2026</span>
      </footer>
    </main>
  );
}
