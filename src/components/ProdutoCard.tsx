'use client'

import { Produto } from '@/types';
import { Button } from "@/components/ui/button"
import {
  Card,  
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

type Props = {
    produto: Produto;
    onAdicionar?: (produto: Produto) => void;
};

export function ProdutoCard({ produto, onAdicionar }: Props) {
  return (
    <Card className={`w-full max-w-sm ${produto.tipo === 'lanche' ? 'bg-red-100' : 'bg-yellow-100'}`}>
      <CardHeader>
        <CardTitle className="p-2 bg-red-500 text-white text-center text-xl font-bold">{produto.nome}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {produto.tipo === 'lanche' && 
          <p className="text-sm">
            Ingredientes: {produto.ingredientes.map((ingrediente) => ingrediente.nome).join(', ')}
          </p>  
        }
        <p className="font-semibold">Preço: R$ {produto.preco.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button 
          type="submit" 
          className="w-full py-2 px-4 bg-green-600 hover:bg-green-500 text-white  rounded"
          onClick={() => onAdicionar?.(produto)}
        >
          Adicionar Item
        </Button>        
      </CardFooter>
    </Card>
  )
}
