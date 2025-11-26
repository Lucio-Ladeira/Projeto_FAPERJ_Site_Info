# FAETEC Santa Cruz – Curso Técnico em Informática

## 📋 Descrição do Projeto

Site institucional moderno e responsivo para o Curso Técnico em Informática da FAETEC Santa Cruz. Este projeto foi desenvolvido com **HTML, CSS e JavaScript puro** (sem frameworks), servindo como modelo base para que alunos possam editar, expandir e aprender com a estrutura.

## 🎨 Paleta de Cores

O site utiliza uma paleta de cores profissional e moderna:

- **#101527** — Azul quase preto (fundo principal, header e footer)
- **#233652** — Azul escuro (elementos secundários e hover)
- **#83ACBD** — Azul claro (botões e destaques)
- **#E6E6E6** — Cinza claro (texto e fundo de seções claras)

## 📁 Estrutura de Pastas

```
faetec-site/
├── index.html              # Arquivo HTML principal
├── README.md               # Este arquivo
├── css/
│   ├── reset.css          # Normalização de estilos do navegador
│   └── styles.css         # Estilos principais do site
├── js/
│   └── main.js            # Funcionalidades JavaScript
├── img/
│   ├── professor-placeholder.jpg
│   └── projeto-placeholder.jpg
└── assets/                # Pasta para futuros assets
```

## 🚀 Como Usar

### 1. Abrir o Site Localmente

Simplesmente abra o arquivo `index.html` em um navegador web:

```bash
# Linux/Mac
open index.html

# Windows
start index.html
```

Ou use um servidor local (recomendado):

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (com http-server)
npx http-server
```

Depois acesse: `http://localhost:8000`

### 2. Estrutura do HTML

O arquivo `index.html` está organizado em seções semânticas:

- **Header** — Navegação fixa com menu responsivo
- **Hero** — Banner principal com chamada para ação
- **Sobre** — Informações do curso com diferenciais
- **Professores** — Cards com dados dos professores
- **Projetos** — Galeria de projetos dos alunos
- **Contato** — Formulário de contato e informações
- **Footer** — Rodapé com links e redes sociais

### 3. Personalizar o Conteúdo

#### Editar Texto
Abra `index.html` em um editor de texto e procure pelos textos que deseja alterar:

```html
<h1 class="hero-title">Curso Técnico em Informática</h1>
<p class="hero-subtitle">FAETEC Santa Cruz – Formação Prática e Profissional</p>
```

#### Adicionar Professores
Localize a seção "Professores" e copie um card existente:

```html
<div class="professor-card">
    <div class="professor-image">
        <img src="img/professor-placeholder.jpg" alt="Nome do Professor">
    </div>
    <h3>Nome do Professor</h3>
    <p class="professor-title">Especialidade</p>
    <p class="professor-bio">Descrição...</p>
</div>
```

#### Adicionar Projetos
Localize a seção "Projetos" e copie um card:

```html
<div class="projeto-card">
    <div class="projeto-image">
        <img src="img/projeto-placeholder.jpg" alt="Nome do Projeto">
    </div>
    <h3>Nome do Projeto</h3>
    <p>Descrição do projeto...</p>
    <a href="#" class="btn btn-secondary">Ver Projeto</a>
</div>
```

### 4. Personalizar Estilos

Abra `css/styles.css` para modificar cores, fontes e layouts:

```css
/* Alterar cores */
:root {
    --color-accent: #83ACBD; /* Mude este valor */
}

/* Alterar tamanho de fonte */
.hero-title {
    font-size: 3.5rem; /* Mude este valor */
}
```

### 5. Adicionar Funcionalidades JavaScript

Abra `js/main.js` para adicionar ou modificar funcionalidades:

- Menu mobile toggle
- Validação de formulário
- Scroll suave
- Animações ao scroll
- Armazenamento de dados (localStorage)

## 📱 Responsividade

O site é totalmente responsivo e se adapta a diferentes tamanhos de tela:

- **Desktop** — Layout completo com navegação horizontal
- **Tablet** — Ajustes de espaçamento e grid
- **Mobile** — Menu hamburger, layout single-column

Breakpoints principais:
- `768px` — Transição para layout mobile
- `480px` — Ajustes adicionais para telas pequenas

## 🎯 Funcionalidades Implementadas

### ✅ Navegação
- Menu fixo no topo
- Menu hamburger responsivo para mobile
- Links de navegação com efeito hover
- Scroll suave para seções

### ✅ Formulário de Contato
- Validação de campos obrigatórios
- Validação de email
- Feedback ao usuário
- Armazenamento de dados no localStorage

### ✅ Animações
- Fade-in ao carregar página
- Efeito de elevação (lift) nos cards ao hover
- Animação de elementos ao entrar na viewport
- Transições suaves em todos os elementos interativos

### ✅ Acessibilidade
- Estrutura semântica HTML5
- Labels em formulários
- Atributos aria-label em elementos interativos
- Contraste adequado de cores

## 🔧 Customizações Recomendadas

1. **Adicionar Logo Real**
   - Substitua o emoji "⚙️" por uma imagem SVG ou PNG
   - Crie uma pasta `/img/logo/` e adicione o arquivo

2. **Adicionar Imagens Reais**
   - Substitua as imagens placeholder por fotos reais
   - Mantenha os nomes de arquivo para não quebrar links

3. **Integrar com Backend**
   - Modifique o `js/main.js` para enviar dados do formulário via API
   - Use Fetch API ou XMLHttpRequest

4. **Adicionar Google Analytics**
   - Insira o código de rastreamento no `<head>` do HTML

5. **Otimizar para SEO**
   - Adicione meta tags descritivas
   - Crie um `sitemap.xml`
   - Configure `robots.txt`

## 📚 Tecnologias Utilizadas

- **HTML5** — Estrutura semântica
- **CSS3** — Estilos modernos com variáveis CSS
- **JavaScript ES6+** — Funcionalidades interativas
- **Google Fonts** — Tipografia (Poppins e Inter)
- **Responsive Design** — Mobile-first approach

## 🌐 Fontes Utilizadas

- **Poppins** — Títulos e destaques (Google Fonts)
- **Inter** — Corpo de texto (Google Fonts)

## 📖 Guia de Edição para Alunos

### Modificar Cores
1. Abra `css/styles.css`
2. Localize a seção `:root`
3. Altere os valores das variáveis CSS

### Adicionar Nova Seção
1. Abra `index.html`
2. Copie uma seção existente (ex: `<section id="sobre">`)
3. Adapte o HTML e CSS conforme necessário
4. Adicione o link no menu de navegação

### Debugar Problemas
1. Abra o navegador (F12 ou Ctrl+Shift+I)
2. Verifique o console para erros
3. Use o inspetor de elementos para verificar estilos
4. Teste a responsividade com o modo device (Ctrl+Shift+M)

## 🐛 Troubleshooting

### Imagens não aparecem
- Verifique se o caminho está correto: `img/nome-arquivo.jpg`
- Certifique-se de que o arquivo existe na pasta `/img`

### Menu não funciona em mobile
- Verifique se `js/main.js` está sendo carregado
- Abra o console (F12) e procure por erros

### Formulário não valida
- Verifique se os IDs dos campos correspondem ao JavaScript
- Teste a validação no console do navegador

### Cores não aparecem corretas
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se os valores hex estão corretos

## 📞 Contato e Suporte

Para dúvidas sobre o site ou sugestões de melhorias, entre em contato através do formulário no site ou envie um email para:

**contato@faetec-santacruz.edu.br**

## 📄 Licença

Este projeto é fornecido como material educacional para o Curso Técnico em Informática da FAETEC Santa Cruz. Sinta-se livre para usar, modificar e expandir conforme necessário.

## 🎓 Objetivos Educacionais

Este projeto foi desenvolvido para que os alunos aprendam e pratiquem:

- Estrutura semântica HTML5
- Estilização com CSS3 moderno
- Responsividade e mobile-first design
- Interatividade com JavaScript puro
- Boas práticas de organização de código
- Versionamento com Git (opcional)

---

**Versão:** 1.0  
**Última atualização:** Novembro de 2025  
**Desenvolvido para:** FAETEC Santa Cruz – Curso Técnico em Informática
