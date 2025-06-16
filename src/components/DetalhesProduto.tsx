'use client'

import { useState } from 'react';
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
import { Check, X, Plus } from "lucide-react";

type Props = {
    produto: Produto;    
};

export function DetalhesProduto({ produto }: Props) {
    const [item, setItem] = useState({
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        observacoes: "",
        ingredientes: produto.ingredientes,
        adicionais: [],
    });

    const onAddAdicionais = (adicional) => {
        setItem({
            ...item,
            preco: produto.preco + adicional.preco,
            adicionais: [
                ...item.adicionais, {
                    id: adicional.id,
                    nome: adicional.nome,
                    preco: adicional.preco,
                }
            ],
        });
    } 

    const onRemoveAdicionais = (adicional) => {
        setItem({
            ...item,
            preco: produto.preco - adicional.preco,
            adicionais: item.adicionais.filter((item) => item.id !== adicional.id),
        });
    }

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
                    <div className="my-4 py-2">
                        <h3 className="text-lg">Adicionais:</h3>
                        <ul className="space-y-2 border-collapse">
                            {produto.adicionais.map((adicional) => (
                                adicional.disponivel && 
                                    <li key={adicional.id} className="flex flex-nowrap justify-between items-center">
                                        <p className={`text-sm ${adicional.disponivel ? "text-green-500" : "text-red-500 line-throught"}`}>
                                            {adicional.nome} - {adicional.preco.toFixed(2)}
                                        </p>
                                        <div className="flex flex-nowrap gap-2">
                                            <Button 
                                                onClick={() => onAddAdicionais(adicional)}
                                                size="icon" 
                                                className="bg-green-500 active:bg-green-400 hover:bg-green-400"
                                            >
                                                <Plus />
                                            </Button>
                                            <Button 
                                                onClick={() => onRemoveAdicionais(adicional)}
                                                size="icon" 
                                                className="bg-red-500 active:bg-red-400 hover:bg-red-400"
                                            >
                                                <X />
                                            </Button>
                                        </div> 
                                    </li>                                 
                            ))}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 py-2">
                        <h3 className="text-lg ">Observações:</h3>
                        <textarea 
                            value={item.observacoes}
                            onChange={(e) => setItem({ ...item, observacoes: e.target.value })}
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
                            Preço: {item.preco.toFixed(2)}
                        </p>
                    </div>
                </div>
                <DialogFooter>
                    <Button 
                        type="submit"
                        className="bg-green-500 active:bg-green-400 hover:bg-green-400" 
                        onClick={() => {
                            console.log(item);
                        }}
                    >
                        Adicionar aos pedidos
                    </Button>
                    <DialogClose asChild>
                        <Button 
                            onClick={() => {
                                setItem({
                                    id: '',
                                    nome: '',
                                    preco: undefined,
                                    observacoes: "",
                                    ingredientes: [],
                                    adicionais: [],
                                })}}                           
                            className="bg-red-500 active:bg-red-400 hover:bg-red-400"
                        >
                            Cancelar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
} 