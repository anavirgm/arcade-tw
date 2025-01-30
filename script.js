document.addEventListener("DOMContentLoaded", () => {
    const starsContainer = document.getElementById("stars")
    const starCount = 50
  
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.classList.add("star")
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.width = `${Math.random() * 2 + 1}px`
      star.style.height = star.style.width
      star.style.opacity = Math.random() * 0.5 + 0.5
      starsContainer.appendChild(star)
    }
  })
  
  