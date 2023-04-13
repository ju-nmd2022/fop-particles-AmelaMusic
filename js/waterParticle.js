import Particle from "./particle.js";

export default class Water extends Particle {
  constructor(x, y) {
    super(x, y);
    this.x = this.x + (Math.random() * 6 - 1);
    this.velocity = 0.2 + Math.random() * 10;
    this.life = 5;
    this.maxLife = 60 + Math.floor(Math.random() * 60);
  }

  update() {
    this.y = this.y + this.velocity;
    this.x = this.x + 3;
    this.velocity = this.velocity * 1.1;
    this.life = this.life + 1;
  }

  draw() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(0, 0, 255, 40);
    rect(5, 5, 5, 5);
    pop();
  }

  isDead() {
    if (this.life > this.maxLife) {
      return true;
    } else {
      return false;
    }
  }
}
