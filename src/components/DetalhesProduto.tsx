'use client'

import { Produto } from "@/types";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, X } from "lucide-react";

type Props = {
    produto: Produto;
};

export function DetalhesProduto({ produto }: Props) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="w-full bg-green-500 active:bg-400">Detalhes</Button>
            </DialogTrigger>            
            <DialogContent className="overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                    <DialogTitle>{produto.nome}</DialogTitle>
                    {produto.tipo === "lanche" && (
                        <DialogDescription>
                            Você pode fazer mudanças neste lanche
                        </DialogDescription>
                    )}
                </DialogHeader>
                <div>
                    <ul className="space-y-2 border-collapse">
                        {produto.ingredientes.map((ingrediente) => (
                            <li 
                                key={ingrediente.id}
                                className="flex flex-nowrap justify-between items-center "
                            >
                                <p className={`text-sm ${ingrediente.disponivel ? "text-green-500" : "text-red-500 line-throught"}`}>
                                    {ingrediente.nome}
                                </p>
                                <div className="flex gap-2">
                                    <Button className="bg-green-500 active:bg-green-400">
                                        <Plus />
                                    </Button>
                                    <Button className="bg-red-500 active:bg-red-400">
                                        <X />
                                    </Button>
                                </div>
                            </li>                            
                        ))}
                    </ul>
                    <div className="py-2">
                        <p className="text-md font-bold">
                            Preço: {produto.preco.toFixed(2)}
                        </p>
                    </div>
                </div>
                <DialogFooter>
                    <Button className="bg-green-500 active:bg-green-400" type="submit">
                        Adicionar aos pedidos
                    </Button>
                    <DialogClose asChild>
                        <Button className="bg-red-500 active:bg-red-400">
                            Cancelar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
} 