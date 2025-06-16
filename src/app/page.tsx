import { produtos } from '@/constants/produtos';
import { ProdutoCard } from "../components/ProdutoCard";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; 

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Hamburger, CupSoda } from 'lucide-react';


export default function Home() {
  return (
    <div className="w-full min-h-screen max-w-6xl mx-auto p-2">
      <h1 className="text-center text-3xl font-bold">Cardápio</h1>
      <Tabs defaultValue="lanche" className="w-full my-6 mx-auto">
        <TabsList className="m-auto">
          <TabsTrigger value="lanche">Lanches <Hamburger /></TabsTrigger>
          <TabsTrigger value="bebida">Bebidas <CupSoda /></TabsTrigger>
        </TabsList>
        <TabsContent value="lanche">
          <Card>
            <CardHeader>
              <CardTitle>Lanches</CardTitle>
              <CardDescription>
                Escolha aqui os melhores lanches da cidade
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 m-auto">
              {produtos.filter((produto) => produto.tipo === "lanche").map((produto) => (
                <ProdutoCard key={produto.id} produto={produto} />
              ))}
            </CardContent>            
          </Card>
        </TabsContent>
        <TabsContent value="bebida">
          <Card>
            <CardHeader>
              <CardTitle>Bebidas</CardTitle>
              <CardDescription>
                Escolha aqui as bebidas mais refrescantes da cidade
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mx-auto">
              {produtos.filter((produto) => produto.tipo === 'bebida').map((produto) => (
                <ProdutoCard key={produto.id} produto={produto} />
              ))}
            </CardContent>            
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}