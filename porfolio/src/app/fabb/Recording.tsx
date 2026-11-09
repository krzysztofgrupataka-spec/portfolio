"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./narrative.module.css";

export default function Recording({ file, caption }: { file: string; caption: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let disposed = false;
    const sync = () => {
      if (visible && !document.hidden && !motion.matches) {
        void video.play().then(() => {
          if (disposed || !visible || document.hidden || motion.matches) video.pause();
        }).catch(() => { /* Native controls remain available if autoplay is blocked. */ });
      } else video.pause();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.35;
      sync();
    }, { threshold: [0, 0.35] });
    observer.observe(video);
    document.addEventListener("visibilitychange", sync);
    motion.addEventListener("change", sync);
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      motion.removeEventListener("change", sync);
      video.pause();
    };
  }, []);

  return <figure className={styles.recording}>
    <video ref={ref} className={styles.ambientVideo} data-playing={playing} controls muted loop playsInline preload="metadata" aria-label={caption} onPlaying={() => setPlaying(true)} onPause={() => setPlaying(false)}>
      <source src={`/images/fabb/${file}`} type="video/webm" />
      Twoja przeglądarka nie obsługuje nagrania. <a href={`/images/fabb/${file}`}>Pobierz nagranie</a>
    </video>
    <figcaption>{caption}</figcaption>
  </figure>;
}
