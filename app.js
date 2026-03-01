window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 40);
});

document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('open');
});

const dg = document.getElementById('dotGrid');
for (let i = 0; i < 42; i++) { const s = document.createElement('span'); dg.appendChild(s); }

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

let counted = false;
const counterObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !counted) {
        counted = true;
        let n = 0;
        const el = document.getElementById('counterPatients');
        const interval = setInterval(() => {
            n += 47;
            if (n >= 2500) { n = 2500; clearInterval(interval); el.textContent = '+2.500'; return; }
            el.textContent = '+' + n.toLocaleString('pt-BR');
        }, 25);
    }
}, { threshold: 0.5 });
counterObs.observe(document.getElementById('counterPatients'));

document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
        const item = q.parentElement;
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        if (!wasActive) item.classList.add('active');
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const whatsapp = document.getElementById('whatsapp').value.trim();
    const proc = document.getElementById('procedimento').value || 'não especificado';
    const msg = document.getElementById('mensagem').value.trim();
    const texto = `Olá Dra. Larissa, gostaria de agendar uma avaliação.\nNome: ${nome}\nWhatsApp: ${whatsapp}\nProcedimento: ${proc}\nMensagem: ${msg || 'sem mensagem adicional'}`;
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(texto)}`, '_blank');
});

document.querySelectorAll('.spec-link[data-procedimento]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const proc = link.getAttribute('data-procedimento');
        window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(`Olá, gostaria de saber os valores para ${proc}.`)}`, '_blank');
    });
});

document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => document.getElementById('navMenu').classList.remove('open'));
});