let mostrandoTodo = false;

export function mostrarMas() {
    const contenedor = document.getElementById("high-scores-container");
    const boton = document.getElementById("btn-mostrar-mas");
    if (!contenedor) return;

    if (!mostrandoTodo) {
        // Insertar los elementos adicionales identificados con una clase
        const nuevosCuadros = `
            <div class="score-extra border-2 border-purple-500 bg-black p-6 rounded-lg text-white hover:border-purple-400 transition-all">
                <h3 class="pixel-text text-lg mb-4">Pac-Man</h3>
                <div class="space-y-2 text-sm">
                    <p class="flex justify-between"><span>Player:</span><span class="text-purple-400">Luis Pérez</span></p>
                    <p class="flex justify-between"><span>High Score:</span><span class="text-purple-400">55,555</span></p>
                </div>
            </div>

            <div class="score-extra border-2 border-purple-500 bg-black p-6 rounded-lg text-white hover:border-purple-400 transition-all">
                <h3 class="pixel-text text-lg mb-4">Space Invaders</h3>
                <div class="space-y-2 text-sm">
                    <p class="flex justify-between"><span>Player:</span><span class="text-purple-400">Carlos Rodríguez</span></p>
                    <p class="flex justify-between"><span>High Score:</span><span class="text-purple-400">44,444</span></p>
                </div>
            </div>

            <div class="score-extra border-2 border-purple-500 bg-black p-6 rounded-lg text-white hover:border-purple-400 transition-all">
                <h3 class="pixel-text text-lg mb-4">Donkey Kong</h3>
                <div class="space-y-2 text-sm">
                    <p class="flex justify-between"><span>Player:</span><span class="text-purple-400">Carlos Rodríguez</span></p>
                    <p class="flex justify-between"><span>High Score:</span><span class="text-purple-400">33,333</span></p>
                </div>
            </div>

            <div class="score-extra border-2 border-purple-500 bg-black p-6 rounded-lg text-white hover:border-purple-400 transition-all">
                <h3 class="pixel-text text-lg mb-4">Bomberman</h3>
                <div class="space-y-2 text-sm">
                    <p class="flex justify-between"><span>Player:</span><span class="text-purple-400">Carlos Rodríguez</span></p>
                    <p class="flex justify-between"><span>High Score:</span><span class="text-purple-400">22,222</span></p>
                </div>
            </div>
        `;
        contenedor.insertAdjacentHTML('beforeend', nuevosCuadros);
        if (boton) boton.innerText = "Ver menos";
        mostrandoTodo = true;
    } else {
        // Eliminar solo los elementos extra
        const extras = contenedor.querySelectorAll(".score-extra");
        extras.forEach(el => el.remove());
        if (boton) boton.innerText = "Ver más";
        mostrandoTodo = false;
    }
}

window.mostrarMas = mostrarMas;