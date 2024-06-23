import { inter_100, inter_900 } from "@/fonts";

export default function Servicos() {
    return (
        <div className="max-md:mb-40">
            <h1 className={`${inter_900.className} text-[#FFD911] text-[30px] my-10`}>Serviços</h1>
            <div>
                <ul className="list-none flex gap-10 max-md:flex-col max-md:text-center">
                    <li className="space-y-10">
                        <h2 className={`${inter_900.className} text-[18px]`}>Tatuagens Personalizadas</h2>
                        <p className={`${inter_100.className}`}>
                            Oferecemos a criação de tatuagens personalizadas, onde cada design é desenvolvido em colaboração direta com o cliente. A partir de uma ideia inicial, trabalhamos juntos para criar uma obra de arte única que reflete sua personalidade e sentimentos.
                        </p>
                    </li>
                    <li className="space-y-10">
                        <h2 className={`${inter_900.className} text-[18px]`}>Cover-Up</h2>
                        <p className={`${inter_100.className}`}>
                            Especializamo-nos em transformar tatuagens antigas ou indesejadas em novas obras de arte. Se você tem uma tatuagem que não representa mais quem você é, nós podemos ajudá-lo a reformulá-la com um design criativo e original.
                        </p>
                    </li>
                    <li className="space-y-10">
                        <h2 className={`${inter_900.className} text-[18px]`}>Restauração</h2>
                        <p className={`${inter_100.className}`}>
                            Com o tempo, algumas tatuagens podem desbotar ou perder a definição. Oferecemos serviços de restauração para revitalizar sua tatuagem antiga, realçando as cores e contornos para que ela volte a ter a aparência de quando foi feita pela primeira vez.
                        </p>
                    </li>
                    <li className="space-y-10">
                        <h2 className={`${inter_900.className} text-[18px]`}>Henna</h2>
                        <p className={`${inter_100.className}`}>
                            Para aqueles que não estão prontos para um compromisso permanente ou desejam testar um design antes de tatuá-lo definitivamente, oferecemos tatuagens temporárias de alta qualidade que duram de algumas semanas a alguns meses.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}