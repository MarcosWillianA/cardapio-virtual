
import { HamburgerIcon } from "lucide-react";
import Link from "next/link";

export default function Cabecalho() {
    return (
        <div className="flex justify-between p-2 bg-red-500 text-white">
            <p className="w-full text-center">
                Pedidos
            </p>
            <Link href="/">
                <HamburgerIcon />
            </Link>
        </div>
    )
}