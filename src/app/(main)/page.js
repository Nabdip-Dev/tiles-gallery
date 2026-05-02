import Banner from "@/app/(main)/home/Banner";
import Tiles from "@/app/(main)/home/Tiles";
import { Tillana } from "next/font/google";
import Marquee from "./home/Marquee";


export default function Home() {
  return (
    <>
    <Banner/>
    <Marquee/>
    <Tiles/>
    </>
  );
}
