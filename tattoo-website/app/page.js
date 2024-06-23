import { inter_900 } from "@/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between items-center max-md:justify-center">
      <div className="flex flex-col leading-tight max-md:mt-40 max-md:items-center max-md:text-center">
        <span className={`${inter_900.className} text-[#636363] text-[80px] max-sm:text-[30px]`}>INSPIRE-SE</span>
        <span className={`${inter_900.className} text-[#636363] text-[80px] max-sm:text-[30px]`}>EXPRESSE-SE</span>
        <span className={`${inter_900.className} text-[#FFD911] text-[80px] max-sm:text-[50px]`}>TATUE-SE</span>
      </div>
      <div className="relative max-md:absolute max-md:-z-10 md:w-[365px] md:h-[699px] max-sm:min-w-[365px] max-sm:min-h-[490px] max-md:min-w-[365px] max-md:min-h-[600px] max-md:-bottom-10 max-md:opacity-80">
        <Image alt="Foto do tatuador Sandro Luz" src={"/images/Portrait.png"} fill className="object-contain max-md:object-cover max-md:object-top" />
      </div>
    </div>
  );
}
