# 🍩 Heleninha Donuts

Site de pedidos online para a doceria **Heleninha Donuts**, desenvolvido com React, TypeScript, Tailwind CSS e Vite.

## ✨ Funcionalidades

- **Cardápio interativo** com grade bento de 12 colunas — card destaque ocupa 6 colunas
- **Filtros por categoria**: Todos / Gourmet / Tradicionais
- **Carrinho lateral** (drawer deslizante da direita) com contador de itens
- **Seleção de pagamento**: PIX, Dinheiro ou Cartão
- **Checkout via WhatsApp** com mensagem de pedido formatada automaticamente
- **Navbar fixa** com scroll suave entre seções
- **Hero assimétrico** — layout split 55/45 com vídeo de fundo
- **Animações de scroll** via `IntersectionObserver`
- **Nav mobile** fixada no rodapé (Home, Menu, Carrinho)
- **Design totalmente responsivo** — mobile-first

## 🛍️ Produtos

| Categoria     | Produto                    | Preço   |
|---------------|----------------------------|---------|
| Gourmet       | Ninho com Nutella          | R$13,50 |
| Gourmet       | Morango com Nutella        | R$13,50 |
| Gourmet       | Prestígio                  | R$13,50 |
| Gourmet       | Oreo                       | R$13,50 |
| Gourmet       | Limão                      | R$13,50 |
| Gourmet       | Red Velvet                 | R$13,50 |
| Gourmet       | Churros                    | R$13,50 |
| Tradicional   | Chocolate                  | R$8,50  |
| Tradicional   | Baunilha                   | R$8,50  |

## 🛠️ Stack

| Tecnologia     | Versão  | Uso                          |
|----------------|---------|------------------------------|
| React          | 18.3    | UI components                |
| TypeScript     | 5.5     | Tipagem estática             |
| Tailwind CSS   | 3.4     | Estilização utilitária       |
| Vite           | 5.4     | Build tool / dev server      |
| PostCSS        | 8.4     | Processamento de CSS         |

## 📁 Estrutura do Projeto

```
heleninha-donuts/
├── src/
│   ├── assets/              # Imagens, logo e vídeo
│   │   ├── logo.png
│   │   ├── heleninha.png
│   │   ├── heleninha-off-background.png
│   │   ├── logoAba.png
│   │   └── donnuts.mp4
│   ├── components/          # Componentes React
│   │   ├── Navbar.tsx       # Navegação fixa com scroll spy
│   │   ├── Hero.tsx         # Seção hero assimétrica com vídeo
│   │   ├── MenuSection.tsx  # Grade bento + filtros de categoria
│   │   ├── ProductCard.tsx  # Card individual de produto
│   │   ├── CartDrawer.tsx   # Carrinho lateral + checkout WhatsApp
│   │   ├── MobileNav.tsx    # Navegação bottom bar mobile
│   │   ├── AboutSection.tsx # Seção sobre a loja
│   │   ├── Footer.tsx       # Rodapé
│   │   └── Icons.tsx        # Ícones SVG inline
│   ├── data/
│   │   └── products.ts      # Catálogo de produtos
│   ├── hooks/
│   │   └── useCart.ts       # Hook de estado do carrinho
│   ├── types.ts             # Tipos TypeScript compartilhados
│   ├── App.tsx              # Componente raiz
│   ├── main.tsx             # Entry point
│   └── index.css            # Estilos globais + diretivas Tailwind
├── index.html               # HTML base
├── vite.config.ts           # Configuração Vite
├── tailwind.config.js       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
└── package.json
```

## 🚀 Como rodar localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Pré-visualizar build de produção
npm run preview
```

## 📱 Fluxo de pedido

1. Cliente navega pelo cardápio e escolhe os produtos
2. Adiciona ao carrinho (botão **+** no card)
3. Abre o carrinho lateral e seleciona a forma de pagamento
4. Clica em **Finalizar Pedido** → abre o WhatsApp com a mensagem já formatada

---

Desenvolvido com 💜 para a Heleninha Donuts.
