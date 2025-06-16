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
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react";

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
                                    <Badge className={`rounded-full ${ingrediente.disponivel ? "bg-green-500" : "bg-red-500"}`}>
                                        {ingrediente.disponivel ? <Check /> : <X />}
                                    </Badge>
                                </div>
                            </li>                            
                        ))}
                    </ul>
                    <div className="flex flex-col gap-2 py-2">
                        <h3 className="text-lg ">Observações:</h3>
                        <textarea 
                            className="w-full p-2 rounded-md border-border-slate-500 text-sm bg-slate-200 resize-none"
                            name="observacoes" 
                            id="observacoes"
                            rows="4"
                            placeholder="Ex.: Sem tomate, bem-passado, mais queijo, etc..."
                        >
                        </textarea>

                    </div>
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