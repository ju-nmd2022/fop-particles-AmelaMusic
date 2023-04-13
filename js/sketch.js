import Fire from "./fire.js";
import Water from "./waterParticle.js";
import Other from "./otherParticle.js";

let particles = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
}
window.setup = setup;

function draw() {
  background(0, 0, 0);

  for (let particle of particles) {
    particle.draw();
    particle.update();
    if (particle.isDead()) {
      const particleIndex = particles.indexOf(particle);
      particles.splice(particleIndex, 1);
    }
  }
}
window.draw = draw;

function mouseClicked() {
  for (let i = 0; i < 100; i++) {
    let particle1 = new Water(mouseX, mouseY);
    let particle = new Other(mouseX, mouseY);
    // let particle = new Fire(mouseX, mouseY);
    particles.push(particle);
    particles.push(particle1);
  }
}
window.mouseClicked = mouseClicked;
