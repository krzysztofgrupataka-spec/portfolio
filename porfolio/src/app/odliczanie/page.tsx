import type { Metadata } from "next";
import Countdown from "./Countdown";

export const metadata: Metadata = {
  title: "Nowy rozdział — odliczanie",
  description: "Odliczanie do końca pracy w GrupaTAKA i startu w WHEN.",
};

export default function CountdownPage() {
  return <Countdown />;
}
