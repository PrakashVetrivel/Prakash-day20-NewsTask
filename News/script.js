document.getElementById('fetch-button').addEventListener('click', fetchNews);

function fetchNews() {
    const apiKey = '312b4b3fc60b41cb9cce3dbb0b44fc60'; 
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayNews(data.articles))
        .catch(error => console.error('Error fetching news data:', error));
}

function displayNews(articles) {
    const container = document.getElementById('news-container');
    container.innerHTML = ''; // Clear previous news

    articles.forEach(article => {
        const div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        container.appendChild(div);
    });
}
