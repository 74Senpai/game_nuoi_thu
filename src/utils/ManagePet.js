export class Pet {
  constructor(energy = 100, happiness = 100, health = 100) {
    this.energy = energy;
    this.happiness = happiness;
    this.health = health;
  }

  updateEnergyPet(change) {
    this.energy = Math.max(0, Math.min(100, this.energy + change));
    return this.getPet();
  }

  updateHappinessPet(change) {
    this.happiness = Math.max(0, Math.min(100, this.happiness + change));
    return this.getPet();
  }

  updateHealthPet(change) {
    this.health = Math.max(0, Math.min(100, this.health + change));
    return this.getPet();
  }

  getPet() {
    return {
      energy: this.energy,
      happiness: this.happiness,
      health: this.health,
    };
  }
}