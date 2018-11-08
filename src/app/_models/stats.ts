export class Stats {
  fue: number;
  agi: number;
  agu: number;
  int: number;
  esp: number;
  vol: number;
  per: number;

  constructor(fue: number, agi: number, agu: number, int: number, esp: number, vol: number, per: number) {
    this.fue = fue;
    this.agi = agi;
    this.agu = agu;
    this.int = int;
    this.esp = esp;
    this.vol = vol;
    this.per = per;
  }

  setStats(fue, agi, agu, int, esp, vol, per) {
    this.fue = fue;
    this.agi = agi;
    this.agu = agu;
    this.int = int;
    this.esp = esp;
    this.vol = vol;
    this.per = per;
  }

  getStat(val: number) {
    switch (val) {
      case 0:
        return this.fue;
      case 1:
        return this.agi;
      case 2:
        return this.agu;
      case 3:
        return this.int;
      case 4:
        return this.esp;
      case 5:
        return this.vol;
      case 6:
        return this.per;
    }
  }

  getStats() {
    return {'fueength': this.fue, 'agility': this.agi, 'agu': this.agu,
     'intelligence': this.int, 'esprit': this.esp, 'voll': this.vol, 'perception': this.per};
  }

}
