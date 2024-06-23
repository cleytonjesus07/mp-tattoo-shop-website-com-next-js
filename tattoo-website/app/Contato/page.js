import { inter_100, inter_900 } from "@/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Contato() {
    return (
        <div className="flex mt-10">
            <div className="flex flex-col max-md:items-center ">
                <h1 className={`${inter_900.className} text-[30px]`}>Entre em <span className="text-[#FFD911]">Contato</span></h1>
                <span className={`${inter_100.className} my-10`}>
                    Clique no botão abaixo e envie uma mensagem.
                    Vamos conversar!
                </span>
                <Link href={"https://wa.me//55999999999?text=Olá,%20Sandro! Tenho%20interesse%20nos%20seus%20serviços."} className="mt-10">
                    <button className="inline-flex w-[244px] p-5 bg-[#494949] rounded-md shadow-btn-contato">
                        <div>
                            <Image alt="logo whatsapp" src={"/images/Vector_white.png"} width={30} height={30} />
                        </div>
                        <div className="flex flex-1 flex-col">
                            <span>Enviar Whatsapp</span>
                            <span className="text-[#636363] text-[12px]">(+55 11) 99999-9999</span>
                        </div>
                    </button>
                </Link>
            </div>
            <div className="relative flex-1 w-[757px] h-[504px] max-md:invisible">
                <Image alt="logo whatsapp" src={"/images/Imagem.jpg"} fill className="object-contain" />
            </div>
        </div>
    )
}