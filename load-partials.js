function includeHTML(id, url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => {
      console.error(`Ошибка загрузки ${url}:`, err);
    });
}

window.addEventListener('DOMContentLoaded', () => {
  includeHTML("header-placeholder", "/header.html");
  includeHTML("footer-placeholder", "/footer.html");
});
