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
            <DialogTrigger>
                <Button className="bg-green-500 active:bg-400">Detalhes</Button>
            </DialogTrigger>            
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{produto.nome}</DialogTitle>
                    {produto.tipo === "lanche" && (
                        <DialogDescription>
                            Você pode fazer mudanças neste lanche
                        </DialogDescription>
                    )}
                </DialogHeader>
                <div>
                    <ul>
                        {produto.ingredientes.map((ingrediente) => (
                            <li key={ingrediente.id}>
                                <p className={`${ingrediente.disponivel ? "text-green-500" : "text-red-500 line-throught"}`}>
                                    {ingrediente.nome}
                                </p>
                                <div>
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