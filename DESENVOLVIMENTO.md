# Guia de Desenvolvimento – FAETEC Santa Cruz

## 📖 Documentação Técnica

Este documento fornece informações técnicas detalhadas sobre a estrutura e implementação do site.

## 🏗️ Arquitetura do Projeto

### Separação de Responsabilidades

O projeto segue o padrão de separação clara entre camadas:

```
HTML (Estrutura)
    ↓
CSS (Apresentação)
    ↓
JavaScript (Comportamento)
```

### Organização de Arquivos

```
faetec-site/
├── index.html              # Única página HTML (SPA simplificado)
├── css/
│   ├── reset.css          # Normalização de estilos
│   └── styles.css         # Estilos principais (1000+ linhas)
├── js/
│   └── main.js            # Toda lógica JavaScript
└── img/
    ├── professor-placeholder.jpg
    └── projeto-placeholder.jpg
```

## 🎨 Sistema de Design

### Variáveis CSS

Todas as cores, espaçamentos e transições são definidas como variáveis CSS no `:root`:

```css
:root {
    --color-dark: #101527;
    --color-dark-secondary: #233652;
    --color-accent: #83ACBD;
    --color-light: #E6E6E6;
    
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    --spacing-2xl: 4rem;
    
    --transition: all 0.3s ease;
}
```

**Benefício:** Mudanças globais podem ser feitas em um único lugar.

### Padrões de Nomenclatura CSS

Utilizamos **BEM (Block Element Modifier)** para nomes de classes:

```css
/* Bloco */
.professor-card { }

/* Elemento */
.professor-card__image { }
.professor-card__title { }

/* Modificador */
.professor-card--featured { }
.btn--primary { }
.btn--secondary { }
```

**Nota:** O projeto utiliza uma variação simplificada com hífens para melhor legibilidade.

## 📱 Responsividade

### Mobile-First Approach

Os estilos base são para mobile, e media queries adicionam estilos para telas maiores:

```css
/* Estilos base (mobile) */
.nav-list {
    flex-direction: column;
}

/* Tablet e acima */
@media (min-width: 768px) {
    .nav-list {
        flex-direction: row;
    }
}
```

### Breakpoints

| Breakpoint | Uso |
|-----------|-----|
| `480px` | Ajustes para telas muito pequenas |
| `768px` | Transição para tablet/desktop |
| `1200px` | Largura máxima do container |

## 🔤 Tipografia

### Fontes

- **Poppins** (Google Fonts) — Títulos, destaques
  - Pesos: 300, 400, 500, 600, 700
  
- **Inter** (Google Fonts) — Corpo de texto
  - Pesos: 300, 400, 500, 600, 700

### Hierarquia de Tamanhos

```
h1 (hero-title)     → 3.5rem
h2 (section-title)  → 2.5rem
h3 (card titles)    → 1.2-1.3rem
p (body)            → 1rem
small               → 0.9rem
```

## 🎯 Componentes Reutilizáveis

### Botões

```html
<!-- Primário -->
<a href="#" class="btn btn-primary">Saiba Mais</a>

<!-- Secundário -->
<a href="#" class="btn btn-secondary">Ver Projeto</a>
```

### Cards

Três tipos de cards são utilizados:

1. **Diferencial Card** — Ícone + título + descrição
2. **Professor Card** — Imagem + nome + especialidade + bio
3. **Projeto Card** — Imagem + título + descrição + botão

Todos compartilham estilos base:
- Sombra suave
- Transição de elevação ao hover
- Border-radius de 12px

### Formulário

```html
<form class="contato-form">
    <div class="form-group">
        <label for="campo">Rótulo</label>
        <input type="text" id="campo" name="campo">
    </div>
</form>
```

## 🔧 Funcionalidades JavaScript

### 1. Menu Mobile Toggle

```javascript
// Alternar classe 'active' no menu
menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});
```

**Efeito CSS:**
- Ícone hamburger anima para X
- Menu desliza para baixo

### 2. Validação de Formulário

```javascript
// Validação de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert('E-mail inválido');
}
```

### 3. Scroll Suave

```javascript
// Scroll suave para seções
window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
});
```

### 4. Intersection Observer

```javascript
// Animar elementos ao entrar na viewport
const observer = new IntersectionObserver(callback, options);
cards.forEach(card => observer.observe(card));
```

### 5. LocalStorage

```javascript
// Armazenar dados de contato
localStorage.setItem('contacts', JSON.stringify(contactsArray));
const contacts = JSON.parse(localStorage.getItem('contacts'));
```

## 🎨 Efeitos e Animações

### Transições CSS

Todas as transições usam a variável `--transition`:

```css
a {
    transition: var(--transition); /* all 0.3s ease */
}
```

### Animações Implementadas

| Efeito | Elemento | Duração |
|--------|----------|---------|
| Hover color | Links | 0.3s |
| Underline animation | Nav links | 0.3s |
| Lift on hover | Cards | 0.3s |
| Fade in on scroll | Cards | 0.6s |
| Menu toggle | Hamburger | 0.3s |

## 🔐 Validação e Segurança

### Validação de Formulário

```javascript
// Campos obrigatórios
if (!nome || !email || !mensagem) {
    alert('Por favor, preencha todos os campos.');
    return;
}

// Validação de email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert('E-mail inválido');
    return;
}
```

### Proteção contra XSS

- Todos os dados de entrada são validados
- Nenhum `innerHTML` é usado com dados do usuário
- Usar `textContent` ao invés de `innerHTML` quando possível

## 📊 Performance

### Otimizações Implementadas

1. **CSS Minificado** — Remover espaços em branco (opcional)
2. **JavaScript Otimizado** — Usar event delegation quando possível
3. **Imagens Otimizadas** — Usar formatos modernos (WebP)
4. **Lazy Loading** — Carregar imagens sob demanda (futuro)

### Métricas Recomendadas

- Lighthouse Score: > 90
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## 🧪 Testes

### Testes Manuais

```bash
# Testar responsividade
1. Abrir DevTools (F12)
2. Ativar modo device (Ctrl+Shift+M)
3. Testar em diferentes resoluções

# Testar funcionalidades
1. Menu mobile
2. Scroll suave
3. Validação de formulário
4. Animações
```

### Testes de Navegador

- Chrome/Chromium ✓
- Firefox ✓
- Safari ✓
- Edge ✓

## 🚀 Deploy

### Opções de Hospedagem

1. **GitHub Pages** (Gratuito)
   ```bash
   git push origin main
   ```

2. **Netlify** (Gratuito com domínio personalizado)
   - Drag & drop pasta do projeto

3. **Vercel** (Gratuito)
   - Integração com Git

4. **Servidor Tradicional**
   - Upload via FTP/SFTP

### Checklist de Deploy

- [ ] Testar em produção
- [ ] Verificar links externos
- [ ] Testar formulário
- [ ] Verificar imagens
- [ ] Testar em múltiplos navegadores
- [ ] Verificar SEO meta tags
- [ ] Adicionar Google Analytics

## 📈 Melhorias Futuras

### Curto Prazo
- [ ] Adicionar página de galeria de projetos
- [ ] Implementar blog/notícias
- [ ] Adicionar mapa de localização
- [ ] Integrar com redes sociais

### Médio Prazo
- [ ] Painel administrativo para gerenciar conteúdo
- [ ] Sistema de login para alunos
- [ ] Integração com banco de dados
- [ ] API REST para dados dinâmicos

### Longo Prazo
- [ ] Aplicativo mobile
- [ ] Plataforma de e-learning
- [ ] Sistema de agendamento de aulas
- [ ] Portal do aluno

## 🔄 Versionamento

### Git Workflow

```bash
# Criar branch para feature
git checkout -b feature/nova-secao

# Fazer commits
git commit -m "feat: adicionar seção de notícias"

# Merge para main
git checkout main
git merge feature/nova-secao
```

### Convenção de Commits

```
feat: adicionar nova funcionalidade
fix: corrigir bug
docs: atualizar documentação
style: formatar código
refactor: refatorar código
test: adicionar testes
chore: tarefas de manutenção
```

## 📚 Recursos Úteis

### Documentação
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### Ferramentas
- [VS Code](https://code.visualstudio.com/) — Editor
- [DevTools](https://developer.chrome.com/docs/devtools/) — Debugging
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) — Performance

### Design
- [Google Fonts](https://fonts.google.com/)
- [Color Hunt](https://colorhunt.co/)
- [Unsplash](https://unsplash.com/) — Imagens livres

## 🤝 Contribuindo

Para adicionar melhorias:

1. Crie um fork do projeto
2. Crie uma branch para sua feature
3. Faça commits descritivos
4. Envie um pull request

## 📝 Notas Importantes

- **Não use frameworks** — O objetivo é aprender HTML, CSS e JS puro
- **Mantenha a estrutura** — Facilita manutenção futura
- **Documente mudanças** — Deixe comentários no código
- **Teste sempre** — Antes de fazer push

---

**Última atualização:** Novembro de 2025
