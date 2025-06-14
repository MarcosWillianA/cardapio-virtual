import type { Produto } from '@/types';

export const produtos: Produto[] = [
    {
      id: 'xsalada',
      nome: 'X-Salada',
      tipo: 'lanche',
      preco: 20.00,
      imagem: '/imagens/xsalada.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'hamburguerCarne', nome: 'Hambúrguer de carne', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
        { id: 'milho', nome: 'Milho', disponivel: true },
        { id: 'batataPalha', nome: 'Batata palha', disponivel: true },
      ],
    },
    {
      id: 'xbacon',
      nome: 'X-Bacon',
      tipo: 'lanche',
      preco: 23.00,
      imagem: '/imagens/xbacon.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'hamburguerCarne', nome: 'Hambúrguer de carne', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'bacon', nome: 'Bacon', disponivel: true },
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
      ],
    },
    {
      id: 'xegg',
      nome: 'X-Egg',
      tipo: 'lanche',
      preco: 21.00,
      imagem: '/imagens/xegg.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'hamburguerCarne', nome: 'Hambúrguer de carne', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'ovo', nome: 'Ovo', disponivel: true },
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
      ],
    },
    {
      id: 'xtudo',
      nome: 'X-Tudo',
      tipo: 'lanche',
      preco: 30.00,
      imagem: '/imagens/xtudo.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'hamburguerCarne', nome: 'Hambúrguer de carne', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'bacon', nome: 'Bacon', disponivel: true },
        { id: 'ovo', nome: 'Ovo', disponivel: true },
        { id: 'presunto', nome: 'Presunto', disponivel: true },
        { id: 'salsicha', nome: 'Salsicha', disponivel: true },
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
        { id: 'milho', nome: 'Milho', disponivel: true },
        { id: 'batataPalha', nome: 'Batata palha', disponivel: true },
      ],
    },
    {
      id: 'hamburguerSimples',
      nome: 'Hambúrguer Simples',
      tipo: 'lanche',
      preco: 15.00,
      imagem: '/imagens/hamburguersimples.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'hamburguerCarne', nome: 'Hambúrguer de carne', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
      ],
    },
    {
      id: 'sanduicheFrangoNatural',
      nome: 'Sanduíche Natural de Frango',
      tipo: 'lanche',
      preco: 19.00,
      imagem: '/imagens/sanduichefrangonatural.webp',
      disponivel: true,
      ingredientes: [
        { id: 'paoIntegral', nome: 'Pão integral', disponivel: true },
        { id: 'frangoDesfiado', nome: 'Frango desfiado', disponivel: true },
        { id: 'maionese', nome: 'Maionese', disponivel: true },
        { id: 'cenouraRalada', nome: 'Cenoura ralada', disponivel: true },
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
      ],
    },
    {
      id: 'sanduicheVegetariano',
      nome: 'Sanduíche Vegetariano',
      tipo: 'lanche',
      preco: 18.00,
      imagem: '/imagens/sanduichevegetariano.webp',
      disponivel: true,
      ingredientes: [
        { id: 'paoForma', nome: 'Pão de forma', disponivel: true },
        { id: 'queijoMinas', nome: 'Queijo Minas', disponivel: true },
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
        { id: 'rucula', nome: 'Rúcula', disponivel: true },
        { id: 'cenoura', nome: 'Cenoura', disponivel: true },
        { id: 'pepino', nome: 'Pepino', disponivel: true },
      ],
    },
    {
      id: 'xbagunca',
      nome: 'X-Bagunça',
      tipo: 'lanche',
      preco: 28.00,
      imagem: '/imagens/xbagunca.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'hamburguerCarne', nome: 'Hambúrguer de carne', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'ovo', nome: 'Ovo', disponivel: true },
        { id: 'bacon', nome: 'Bacon', disponivel: true },
        { id: 'salsicha', nome: 'Salsicha', disponivel: true },
        { id: 'presunto', nome: 'Presunto', disponivel: true },
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
        { id: 'cebola', nome: 'Cebola', disponivel: true },
        { id: 'azeitona', nome: 'Azeitona', disponivel: true },
      ],
    },
    {
      id: 'xfrango',
      nome: 'X-Frango',
      tipo: 'lanche',
      preco: 22.00,
      imagem: '/imagens/xfrango.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'hamburguerFrango', nome: 'Hambúrguer de frango', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
      ],
    },
    {
      id: 'xpeixe',
      nome: 'X-Peixe',
      tipo: 'lanche',
      preco: 24.00,
      imagem: '/imagens/xpeixe.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'hamburguerPeixe', nome: 'Hambúrguer de peixe', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
      ],
    },
    {
      id: 'xtropical',
      nome: 'X-Tropical',
      tipo: 'lanche',
      preco: 25.00,
      imagem: '/imagens/xtropical.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'hamburguerCarne', nome: 'Hambúrguer de carne', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'abacaxi', nome: 'Fatia de abacaxi', disponivel: true },
        { id: 'banana', nome: 'Rodelas de banana', disponivel: true },
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
      ],
    },
    {
      id: 'xduplo',
      nome: 'X-Duplo',
      tipo: 'lanche',
      preco: 26.00,
      imagem: '/imagens/xduplo.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'hamburguerCarne', nome: 'Hambúrguer de carne', disponivel: true },
        { id: 'hamburguerCarne', nome: 'Hambúrguer de carne', disponivel: true }, // Duplicado para representar o "duplo"
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true }, // Duplicado para representar o "duplo"
        { id: 'alface', nome: 'Alface', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
      ],
    },
    {
      id: 'mistoSimples',
      nome: 'Misto Simples',
      tipo: 'lanche',
      preco: 10.00,
      imagem: '/imagens/misto.webp',
      disponivel: true,
      ingredientes: [
        { id: 'paoForma', nome: 'Pão de forma', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'presunto', nome: 'Presunto', disponivel: true },
      ],
    },
    {
      id: 'xbauru',
      nome: 'X-Bauru',
      tipo: 'lanche',
      preco: 22.00,
      imagem: '/imagens/xbauru.webp',
      disponivel: true,
      ingredientes: [
        { id: 'paoFrances', nome: 'Pão francês', disponivel: true },
        { id: 'rosbife', nome: 'Rosbife', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
        { id: 'tomate', nome: 'Tomate', disponivel: true },
        { id: 'picles', nome: 'Picles', disponivel: true },
      ],
    },
    {
      id: 'xcalabresa',
      nome: 'X-Calabresa',
      tipo: 'lanche',
      preco: 20.00,
      imagem: '/imagens/xcalabresa.webp',
      disponivel: true,
      ingredientes: [
        { id: 'pao', nome: 'Pão', disponivel: true },
        { id: 'linguicaCalabresa', nome: 'Linguiça calabresa', disponivel: true },
        { id: 'queijoMussarela', nome: 'Queijo mussarela', disponivel: true },
      ],
    },
    {
        id: 'batataFrita',
        nome: 'Batata Frita',
        tipo: 'lanche',
        preco: 10.00,
        imagem: '/imagens/batatafrita.webp',
        disponivel: true,
        ingredientes: [
          { id: 'batata', nome: 'Batata', disponivel: true },
        ],
    },
    {
      id: 'coca200ml',
      nome: 'Coca-Cola 200ml',
      tipo: 'bebida',
      preco: 5.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'coca350ml',
      nome: 'Coca-Cola 350ml',
      tipo: 'bebida',
      preco: 6.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'coca600ml',
      nome: 'Coca-Cola 600ml',
      tipo: 'bebida',
      preco: 8.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'coca1l',
      nome: 'Coca-Cola 1L',
      tipo: 'bebida',
      preco: 10.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'coca1_5l',
      nome: 'Coca-Cola 1.5L',
      tipo: 'bebida',
      preco: 12.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'coca2l',
      nome: 'Coca-Cola 2L',
      tipo: 'bebida',
      preco: 14.00,
      disponivel: true,
      ingredientes: [],
    },    
    {
      id: 'guarana350ml',
      nome: 'Guaraná Antárctica 350ml',
      tipo: 'bebida',
      preco: 6.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'guarana600ml',
      nome: 'Guaraná Antárctica 600ml',
      tipo: 'bebida',
      preco: 8.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'guarana1l',
      nome: 'Guaraná Antárctica 1L',
      tipo: 'bebida',
      preco: 10.00,
      disponivel: true,
      ingredientes: [],
    },    
    {
      id: 'guarana2l',
      nome: 'Guaraná Antárctica 2L',
      tipo: 'bebida',
      preco: 14.00,
      disponivel: true,
      ingredientes: [],
    },    
    {
      id: 'soda600ml',
      nome: 'Soda Limonada 600ml',
      tipo: 'bebida',
      preco: 7.50,
      disponivel: true,
      ingredientes: [],
    },        
    {
      id: 'fantaLaranja350ml',
      nome: 'Fanta Laranja 350ml',
      tipo: 'bebida',
      preco: 6.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'fantaUva350ml',
      nome: 'Fanta Uva 350ml',
      tipo: 'bebida',
      preco: 6.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoLaranja300ml',
      nome: 'Suco de Laranja 300ml',
      tipo: 'bebida',
      preco: 7.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoLaranja500ml',
      nome: 'Suco de Laranja 500ml',
      tipo: 'bebida',
      preco: 9.00,
      disponivel: true,
      ingredientes: [],
    },      
    {
      id: 'sucoMaracuja300ml',
      nome: 'Suco de Maracujá 300ml',
      tipo: 'bebida',
      preco: 7.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoMaracuja500ml',
      nome: 'Suco de Maracujá 500ml',
      tipo: 'bebida',
      preco: 9.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoAcerola300ml',
      nome: 'Suco de Acerola 300ml',
      tipo: 'bebida',
      preco: 7.50,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoAcerola500ml',
      nome: 'Suco de Acerola 500ml',
      tipo: 'bebida',
      preco: 9.50,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoGraviola300ml',
      nome: 'Suco de Graviola 300ml',
      tipo: 'bebida',
      preco: 8.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoGraviola500ml',
      nome: 'Suco de Graviola 500ml',
      tipo: 'bebida',
      preco: 10.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoCupuacu300ml',
      nome: 'Suco de Cupuaçu 300ml',
      tipo: 'bebida',
      preco: 8.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoCupuacu500ml',
      nome: 'Suco de Cupuaçu 500ml',
      tipo: 'bebida',
      preco: 10.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoAbacaxiMenta300ml',
      nome: 'Suco de Abacaxi com Menta 300ml',
      tipo: 'bebida',
      preco: 8.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoAbacaxiMenta500ml',
      nome: 'Suco de Abacaxi com Menta 500ml',
      tipo: 'bebida',
      preco: 10.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoMaracujaLeite300ml',
      nome: 'Suco de Maracujá com Leite 300ml',
      tipo: 'bebida',
      preco: 8.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'sucoMaracujaLeite500ml',
      nome: 'Suco de Maracujá com Leite 500ml',
      tipo: 'bebida',
      preco: 10.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'aguaSemGas',
      nome: 'Água Mineral sem Gás',
      tipo: 'bebida',
      preco: 4.00,
      disponivel: true,
      ingredientes: [],
    },
    {
      id: 'aguaComGas',
      nome: 'Água Mineral com Gás',
      tipo: 'bebida',
      preco: 4.50,
      disponivel: true,
      ingredientes: [],
    },
  ];