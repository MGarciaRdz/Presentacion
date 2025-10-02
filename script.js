function escritor (element, speed = 50) {
    const text = element.innerHTML;
    element.innerHTML = '';
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#contenedor1 p").forEach(p => escritor(p, 30));
});