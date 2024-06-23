
import { inter_default } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className=" fixed bottom-0 right-0 left-0 p-5 bg-[rgba(0,0,0,.2)] ">
            <div className="flex gap-2 items-center max-sm:flex-col">

                <span className="text-[#636363] text-[12px] flex">
                    Sandro Luz Tattoo Shop
                </span>

                <span className="w-1 h-1 rounded-full bg-[#FFD911]"></span>
                <span className="text-[#636363] text-[12px] flex">
                    Rua Limoeiro, 1000 - Catalão - SP
                </span>

                <span className="w-1 h-1 rounded-full bg-[#FFD911]"></span>
                <Link href={"https://wa.me//55999999999?text=Olá,%20Sandro! Tenho%20interesse%20nos%20seus%20serviços."} className="float-end">
                    <span className="text-[#636363] text-[12px] flex gap-2">
                        <Image alt="ícone do Whatsapp" src={"/images/Vector.png"} width={13} height={13} className="object-contain" />
                        (+55 11) 99999-9999
                    </span>
                </Link>

            </div>
        </footer>
    )
}