// ===== MENU MOBILE TOGGLE =====
// Controla a abertura e fechamento do menu em dispositivos móveis

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle do menu ao clicar no botão hamburger
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        if (navMenu && menuToggle) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickInsideToggle = menuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickInsideToggle && navMenu.classList.contains('active')) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        }
    });

    // ===== FORMULÁRIO DE CONTATO =====
    // Valida e processa o envio do formulário

    const contatoForm = document.getElementById('contatoForm');

    if (contatoForm) {
        contatoForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Obter valores do formulário
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação básica
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos.');
                return;
            }

            // Validação de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            // Simulação de envio (em produção, seria feito via AJAX/Fetch)
            console.log('Formulário enviado:', {
                nome: nome,
                email: email,
                mensagem: mensagem,
                data: new Date().toLocaleString('pt-BR')
            });

            // Feedback ao usuário
            alert(`Obrigado, ${nome}! Sua mensagem foi recebida. Entraremos em contato em breve.`);

            // Limpar formulário
            contatoForm.reset();

            // Salvar dados localmente
            saveContactData(nome, email);
        });
    }

    // ===== ANIMAÇÃO DE ELEMENTOS AO SCROLL =====
    // Adiciona efeitos visuais quando elementos entram na viewport

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cards e seções
    const cards = document.querySelectorAll('.diferencial-card, .professor-card, .projeto-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // ===== EFEITO DE HOVER NOS CARDS =====
    // Adiciona efeito visual ao passar o mouse sobre os cards

    const allCards = document.querySelectorAll('.diferencial-card, .professor-card, .projeto-card');

    allCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 12px 32px rgba(131, 172, 189, 0.3)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        });
    });

    // ===== FUNÇÃO AUXILIAR PARA VALIDAÇÃO DE EMAIL =====
    // Pode ser reutilizada em outros contextos

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ===== FUNÇÃO PARA SCROLL PARA O TOPO =====
    // Útil para adicionar um botão "Voltar ao Topo" no futuro

    window.scrollToTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // ===== INICIALIZAÇÃO DE DADOS LOCAIS =====
    // Armazena dados de contato no localStorage (opcional)

    function saveContactData(nome, email) {
        const contactData = {
            nome: nome,
            email: email,
            timestamp: new Date().toISOString()
        };

        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push(contactData);
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }

    // ===== FUNÇÃO PARA RECUPERAR DADOS DE CONTATO =====
    // Útil para gerenciamento de dados em painel administrativo

    window.getContactData = function() {
        return JSON.parse(localStorage.getItem('contacts')) || [];
    };

    // ===== ANIMAÇÃO DE CARREGAMENTO =====
    // Adiciona efeito de fade-in ao carregar a página

    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
    });

    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';

    // ===== DEFINIR PÁGINA ATIVA NO MENU =====
    // Marca o link do menu correspondente à página atual como ativo

    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            
            // Comparar o href com a página atual
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }

    // Chamar a função ao carregar a página
    setActiveNavLink();

    console.log('Site FAETEC Santa Cruz carregado com sucesso!');
});
