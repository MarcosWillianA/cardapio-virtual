
import { HamburgerIcon } from "lucide-react";
import Link from "next/link";

export default function Cabecalho() {
    return (
        <section>
            <div className="flex justify-between p-2 bg-red-500 text-white">
                <p className="w-full text-center">
                    Pedidos
                </p>
                <Link href="/">
                    <HamburgerIcon />
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full p-4 bg-yellow-300">
                <div className="flex justify-center items-center">
                    <h1 className="text-3xl text-red-500 font-bold text-center">Morte Lenta Lanches</h1>
                </div>
                <div className="justify-self-end flex items-center justify-center w-30 h-30 p-2 border border-white rounded-md ">
                    <p className="text-center">Aqui terá uma imagem de logo</p>
                </div>
            </div>
        </section>
    )
}