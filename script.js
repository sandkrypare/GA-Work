const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let particlesArray;

//Get mouse position
let mouse = {
    x:  null,
    y:  null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove', 
    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }

);

// Create particle
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    // Method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '8C5523';
        ctx.fill();
    } 
    // Check particle position, check mouse position, move the particle, draw the particle
    update() {
        //check if particle is still within the canvas
        if (this.x > canvas.width || this.x < 0 ) {
            this.directionX = -this.directionX;
        } 
        if (this.y > canvas.height || this.y < 0 ) {
            this.directionY = -this.directionY
        }

        //check collision detection - mouse position / Particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.radius + this.size){
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10){
                this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x += 10;
            }
            if (mouse.y < this.y && this.y < this.size * 10) {
                this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y += 10;
            }
        }
        
    }
}