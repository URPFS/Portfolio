function getRandomDirection() {
    const angle = Math.random() * 2 * Math.PI; // Ángulo aleatorio entre 0 y 2π radianes
    const speed = 0.5 + Math.random() * 2; // Velocidad aleatoria entre 0.5 y 2 px por frame
    return {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed
    };
}

function moveImage(image) {
    const moveZone = image.parentElement;
    const position = {
        x: image.offsetLeft,
        y: image.offsetTop
    };
    let direction = getRandomDirection();

    function updatePosition() {
        position.x += direction.x;
        position.y += direction.y;

        if (position.x <= 0 || position.x >= moveZone.clientWidth - image.clientWidth) {
            direction.x *= -1;
        }
        if (position.y <= 0 || position.y >= moveZone.clientHeight - image.clientHeight) {
            direction.y *= -1;
        }

        image.style.transform = `translate(${position.x}px, ${position.y}px)`;

        requestAnimationFrame(updatePosition);
    }

    setInterval(() => {
        direction = getRandomDirection(); 
    }, 2000 + Math.random() * 3000);

    updatePosition(); 
}

document.querySelectorAll('.movable-image').forEach(moveImage);
