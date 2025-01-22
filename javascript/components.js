async function loadComponent(component, elementId) {
    const response = await fetch(`components/${component}.html`);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent('header', 'header');
    loadComponent('footer', 'footer');
});