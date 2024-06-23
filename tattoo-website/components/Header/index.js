"use client"
import { londrina_solid_900 } from "@/fonts";
import Image from "next/image";
import Link from "next/link";
import paths from "./paths";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname().replace("/", "");
    return (
        <header className="flex justify-between max-md:flex-col">
            <Link href={"/"}>
                <div className={`${londrina_solid_900.className} inline-flex flex-col leading-8 text-[32px]`}>
                    <span>Sandro <span className="text-[#FFD911]">Luz</span></span>
                    <span>Tattoo</span>
                    <span>Shop</span>
                </div>
            </Link>
            <div>
                <nav>
                    <ul className="list-none flex gap-5 text-[32px] max-md:text-[18px] max-md:mt-5">
                        {paths.map(({ id, url, title }) => (
                            <li key={id}>
                                <Link className={londrina_solid_900.className} href={`/${url}`}>{title}</Link>
                                {pathname === url && (
                                    <div className="flex justify-center">
                                        <span className="block bg-[#FFD911] h-[2px] animate-fillX"></span>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
                <Link href={"https://wa.me//55999999999?text=Olá,%20Sandro! Tenho%20interesse%20nos%20seus%20serviços."} className="float-end md:mt-5 max-md:invisible">
                    <span className="text-[#636363] text-[12px] flex gap-2">
                        <Image alt="ícone do Whatsapp" src={"/images/Vector.png"} width={13} height={13} className="object-contain" />
                        (+55 11) 99999-9999
                    </span>
                </Link>
            </div>
        </header>
    )
}