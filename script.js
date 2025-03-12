document.addEventListener('DOMContentLoaded', () => {
    const noticias = [
        {
            titulo: 'Primeira Notícia',
            data: '12/03/2025',
            descricao: 'Resumo da primeira notícia...',
            link: '#'
        },
        {
            titulo: 'Segunda Notícia',
            data: '12/03/2025',
            descricao: 'Resumo da segunda notícia...',
            link: '#'
        }
        // Mais notícias podem ser adicionadas aqui
    ];

    const noticiasContainer = document.getElementById('noticias');

    noticias.forEach(noticia => {
        const artigo = document.createElement('article');
        artigo.classList.add('noticia');
        artigo.innerHTML = `
            <h2>${noticia.titulo}</h2>
            <p class="data">${noticia.data}</p>
            <p class="descricao">${noticia.descricao}</p>
            <a href="${noticia.link}">Leia mais</a>
        `;
        noticiasContainer.appendChild(artigo);
    });
});
