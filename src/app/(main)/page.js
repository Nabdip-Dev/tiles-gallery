import Banner from "@/app/(main)/home/Banner";
import Tiles from "@/app/(main)/home/Tiles";
import { Tillana } from "next/font/google";
import Marquee from "./home/Marquee";
import { Categories } from "./home/Categories";

import { Reviews } from "./home/Reviews";
import { WhyChoose } from "./home/WhyChoose";


export default function Home() {
  return (
    <>
    <Banner/>
    <Marquee/>
    <Tiles/>
    <Categories/>
    <Reviews/>
    <WhyChoose/>
    </>
  );
}
