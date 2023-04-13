import Particle from "./particle.js";

export default class Other extends Particle {
  constructor(x, y) {
    super(x, y);
    this.x = this.x + Math.random() * 30 - 5;
    this.velocity = 0.8 + Math.random() * 2.2;
    this.life = 10;
    this.maxLife = 30 + Math.floor(Math.random() * 15);
  }

  update() {
    this.y = this.y - this.velocity * 1.0;
    this.x = this.x - 8;
    this.velocity = this.velocity * 1.1;
    this.life = this.life + 1;
  }

  draw() {
    push();
    translate(this.x, this.y);
    noStroke();
    if (this.life >= 18 && this.life <= 22) {
      fill(0, 255, 0);
      triangle(-20, 20, 0, -20, 20, 20);
    } else if (this.life >= 22 && this.life <= 28) {
      fill(255, 255, 102);
      ellipse(0, 0, 6);
    } else {
      fill(255, 51, 153);
      triangle(-10, 10, 0, -10, 10, 10);
      this.y = this.y + this.velocity;
    }

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
