document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("pacmanCanvas");
  const ctx = canvas.getContext("2d");
  const scoreDisplay = document.getElementById("score");
  
  const width = 28;
  const height = 31;
  const cellSize = 20; // Tamaño de cada celda en el laberinto
  let score = 0;
  let pacManX = 14; // Posición inicial de Pac-Man
  let pacManY = 14;
  let pacManDirection = 'right';
  
  const layout = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
      1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
      1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
      1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
      1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1
  ];

  const pacMan = { x: pacManX, y: pacManY, direction: pacManDirection };

  function drawGrid() {
      for (let i = 0; i < layout.length; i++) {
          const x = (i % width) * cellSize;
          const y = Math.floor(i / width) * cellSize;
          switch (layout[i]) {
              case 1: ctx.fillStyle = "blue"; break; // Wall
              case 0: ctx.fillStyle = "black"; break; // Empty space
              case 3: ctx.fillStyle = "yellow"; break; // Dot
              default: ctx.fillStyle = "black";
          }
          ctx.fillRect(x, y, cellSize, cellSize);
      }
  }

  function drawPacMan() {
      ctx.beginPath();
      ctx.arc(pacMan.x * cellSize + cellSize / 2, pacMan.y * cellSize + cellSize / 2, cellSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();
  }

  function movePacMan() {
      if (pacMan.direction === 'right') pacMan.x++;
      if (pacMan.direction === 'left') pacMan.x--;
      if (pacMan.direction === 'up') pacMan.y--;
      if (pacMan.direction === 'down') pacMan.y++;
      if (pacMan.x < 0) pacMan.x = width - 1;
      if (pacMan.x >= width) pacMan.x = 0;
      if (pacMan.y < 0) pacMan.y = height - 1;
      if (pacMan.y >= height) pacMan.y = 0;
  }

  function startGame() {
      console.log("Juego iniciado");
      score = 0;
      pacMan.x = 14;
      pacMan.y = 14;
      pacMan.direction = 'right';
      gameLoop();
  }
  

  function gameLoop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawPacMan();
      movePacMan();
      scoreDisplay.textContent = score;
      requestAnimationFrame(gameLoop);
  }

  document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") pacMan.direction = 'right';
      if (e.key === "ArrowLeft") pacMan.direction = 'left';
      if (e.key === "ArrowUp") pacMan.direction = 'up';
      if (e.key === "ArrowDown") pacMan.direction = 'down';
  });
});
