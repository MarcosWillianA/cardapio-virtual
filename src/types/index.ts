export type TipoProduto = 'lanche' | 'bebida';

export type Ingrediente = {
    id: string;
    nome: string;
    disponivel: boolean;
};

export type Produto = {
    id: string;
    nome: string;
    tipo: TipoProduto;
    preco: number;
    imagem?: string;
    ingredientes: Ingrediente[];
    disponivel: boolean;
};

