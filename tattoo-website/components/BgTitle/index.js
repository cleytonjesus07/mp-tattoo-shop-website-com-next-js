import { Londrina_Solid } from "next/font/google";
const londrina_solid = Londrina_Solid({ subsets: ["latin"], weight: "900" });
export default function BgTitle() {
    return <h1
        className={`${londrina_solid.className} uppercase text-[#212121] text-[400px] fixed select-none -z-10 max-md:invisible`}
    >
        Tattoo
    </h1>
}