export type TipoProduto = 'lanche' | 'bebida';

export type Ingrediente = {
    id: string;
    nome: string;
    disponivel: boolean;
};

export type Adicional = {
    id: string;
    nome: string;
    preco: number;
    disponivel: boolean;
};

// Tipo para Produtos do tipo 'lanche'
type ProdutoLanche = {
    id: string;
    nome: string;
    tipo: 'lanche'; // Literal 'lanche'
    preco: number;
    imagem?: string;
    ingredientes: Ingrediente[]; // Ingredientes são obrigatórios para lanches
    adicionais: Adicional[];     // Adicionais são obrigatórios para lanches
    disponivel: boolean;
};

// Tipo para Produtos do tipo 'bebida'
type ProdutoBebida = {
    id: string;
    nome: string;
    tipo: 'bebida'; // Literal 'bebida'
    preco: number;
    imagem?: string;
    // Note que 'ingredientes' e 'adicionais' não são definidos aqui,
    // ou se forem, devem ser opcionais (ex: ingredientes?: Ingrediente[];)
    disponivel: boolean;
};

export type Produto = ProdutoLanche | ProdutoBebida;