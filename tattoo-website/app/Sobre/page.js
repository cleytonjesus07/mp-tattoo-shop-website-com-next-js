import { inter_100, inter_900, island_moments_default } from "@/fonts";
import Image from "next/image";

export default function Sobre() {
    return (
        <div className="flex max-md:flex-col max-md:items-center">
            <div className="flex-1 pt-5 ">
                <h1 className={`${inter_900.className} text-[30px] py-10 max-md:text-center`}>Prazer, sou <span className="text-[#FFD911]">Sandro Luz</span></h1>
                <div className={`${inter_100.className} space-y-5`}>
                    <p>
                        Olá! Sou Sandro Luz, apaixonado pela arte que transcende o tempo e se imprime na pele. Com mais de 10 anos de experiência no mundo da tatuagem, dedico-me a transformar visões e emoções em arte corporal que expressa quem você é e o que você ama.
                    </p>

                    <p>
                        Cada tatuagem em meu estúdio é um trabalho de colaboração; ouço atentamente os desejos e as histórias de meus clientes para que cada peça seja única e pessoal. Especializo-me em vários estilos, desde o delicado traço fino até composições mais robustas e coloridas, garantindo que cada design não só atenda, mas supere as expectativas.
                    </p>

                    <p>
                        Além da dedicação à arte, a segurança e o conforto são prioridades no meu estúdio. Utilizo apenas equipamentos esterilizados e de alta qualidade, e sou rigoroso quanto aos protocolos de higiene e segurança, garantindo uma experiência segura e confortável para todos.
                    </p>

                    <p>
                        Visite meu estúdio e veja como a arte pode se manifestar em sua pele. Estou aqui para ajudá-lo a contar sua história de uma maneira única e eterna. Agende sua consulta e vamos juntos criar algo extraordinário!
                    </p>
                </div>
                <div className={`${island_moments_default.className} text-[35px] inline-block mt-10`}>Sandro Luz</div>
            </div>
            <div className="relative w-[365px] h-[699px] max-md:h-[500px]">
                <Image alt="Foto do tatuador Sandro Luz" src={"/images/Portrait_color.png"} fill className="object-contain max-md:object-cover max-md:object-top" />
            </div>
        </div>
    )
}