document.querySelectorAll('.link').forEach(link => {
    const p = link.children;
    link.addEventListener('click', () => {
        window.location = p[0].childNodes[0].href;  
    });
});