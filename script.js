document.addEventListener('mousemove', (event) => {
    const trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${event.pageX}px`;
    trail.style.top = `${event.pageY}px`;

    document.getElementById('cursor-trail').appendChild(trail);

    setTimeout(() => {
        trail.remove();
    }, 1000);
});
