const toggleBtn = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });

        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
            });
        });

        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const whatsapp = document.getElementById('whatsapp').value.trim();
            const procedimento = document.getElementById('procedimento').value || 'não especificado';
            const mensagem = document.getElementById('mensagem').value.trim();
            const texto = `Olá Dra. Larissa, gostaria de agendar uma avaliação.%0A
Nome: ${nome}%0A
WhatsApp: ${whatsapp}%0A
Procedimento de interesse: ${procedimento}%0A
Mensagem: ${mensagem || 'sem mensagem adicional'}`;
            const url = `https://wa.me/5511999999999?text=${encodeURIComponent(texto.replace(/%0A/g, '\n'))}`;
            window.open(url, '_blank');
        });

        document.querySelectorAll('.card-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const proc = link.getAttribute('data-procedimento') || link.innerText.trim();
                const msg = `Olá, gostaria de saber os valores para ${proc}.`;
                window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(msg)}`, '_blank');
            });
        });