import { produtos } from '@/constants/produtos';
import { ProdutoCard } from "../components/ProdutoCard";


export default function Home() {
  return (
    <div className="p-2">
      <h1 className="text-center text-3xl font-bold">Cardápio</h1>
      <div className="flex flex-wrap justify-center gap-2">
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  )
}