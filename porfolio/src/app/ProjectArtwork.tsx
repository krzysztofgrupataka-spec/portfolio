import Image from "next/image";
import styles from "./page.module.css";

export type ProjectKind = "fabb" | "propoint" | "i4tech" | "likeat";

export default function ProjectArtwork({ project }: { project: ProjectKind }) {
  return <div className={`${styles.artwork} ${styles[`${project}Artwork`]}`} aria-hidden="true">
    {project === "fabb" && <><span className={styles.fabbName}>Fabb<span>.</span></span><div className={styles.fabricSamples}><i /><i /><i /><i /><i /></div></>}
    {project === "propoint" && <><div className={styles.propointMark}>p<span>↗︎</span></div><span className={styles.propointName}>propoint</span></>}
    {project === "i4tech" && <><div className={styles.mapFrame}><Image src="/images/i4tech/workshop-preview.jpg" alt="" fill sizes="(max-width: 767px) 85vw, 65vw" /></div><span className={styles.mapCaption}>Od pytań do struktury.</span></>}
    {project === "likeat" && <><span className={styles.likeatName}>likeat</span><span className={styles.likeatWord}>Dobry wybór<br /><em>zaczyna się tutaj.</em></span></>}
  </div>;
}
