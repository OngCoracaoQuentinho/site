/* ============================================
   TEMPLATE SITE ONG
   Placeholder genérico — troque os dados fake
   ============================================ */

/* --- Peças surgem ao entrar no viewport --- */
const pecas = document.querySelectorAll('[data-peca]');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReduced) {
    pecas.forEach(p => p.classList.add('visivel'));
} else {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visivel');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    pecas.forEach(p => observer.observe(p));
}

/* --- Contadores animados --- */
const nums = document.querySelectorAll('[data-count]');
if (nums.length) {
    const numObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarNumero(entry.target);
                numObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    nums.forEach(n => numObs.observe(n));
}

function animarNumero(el) {
    const alvo = parseInt(el.dataset.count, 10);
    const prefix = el.dataset.prefix || '';
    if (prefersReduced) {
        el.textContent = prefix + alvo.toLocaleString('pt-BR');
        return;
    }
    const dur = 1600;
    const inicio = performance.now();
    function ease(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
    function tick(agora) {
        const p = Math.min((agora - inicio) / dur, 1);
        el.textContent = prefix + Math.floor(ease(p) * alvo).toLocaleString('pt-BR');
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + alvo.toLocaleString('pt-BR');
    }
    requestAnimationFrame(tick);
}

/* --- Modal (padrão ongasis) --- */
document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.modal;
        const fundo = document.getElementById(id);
        if (fundo) {
            fundo.classList.add('aberto');
            document.body.style.overflow = 'hidden';
        }
    });
});

document.querySelectorAll('.modal-fechar').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('.modal-fundo').classList.remove('aberto');
        document.body.style.overflow = '';
    });
});

document.querySelectorAll('.modal-fundo').forEach(fundo => {
    fundo.addEventListener('click', (e) => {
        if (e.target === fundo) {
            fundo.classList.remove('aberto');
            document.body.style.overflow = '';
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-fundo.aberto').forEach(f => {
            f.classList.remove('aberto');
            document.body.style.overflow = '';
        });
    }
});

/* --- Copiar chave PIX --- */
document.querySelectorAll('.copiar-pix').forEach(btn => {
    btn.addEventListener('click', () => {
        const chave = btn.dataset.chave;
        navigator.clipboard.writeText(chave).then(() => {
            btn.classList.add('copiado');
            const txt = btn.querySelector('.chave-texto');
            if (txt) txt.textContent = 'Copiado!';
            setTimeout(() => {
                btn.classList.remove('copiado');
                if (txt) txt.textContent = 'Copiar chave PIX';
            }, 2000);
        });
    });
});

/* --- Play/Pause vídeo do celular --- */
document.querySelectorAll('.celular-play').forEach(btn => {
    btn.addEventListener('click', () => {
        const celular = btn.closest('.celular');
        const video = celular.querySelector('video');
        if (video.paused) {
            video.play();
            btn.innerHTML = '<i class="nf nf-md-pause"></i>';
        } else {
            video.pause();
            btn.innerHTML = '<i class="nf nf-md-play"></i>';
        }
    });
});
