export class Stats {
  str: number;
  agi: number;
  end: number;
  int: number;
  spi: number;
  wil: number;
  per: number;

  constructor(str: number, agi: number, end: number, int: number, spi: number, wil: number, per: number) {
    this.str = str;
    this.agi = agi;
    this.end = end;
    this.int = int;
    this.spi = spi;
    this.wil = wil;
    this.per = per;
  }

  setStats(str, agi, end, int, spi, wil, per) {
    this.str = str;
    this.agi = agi;
    this.end = end;
    this.int = int;
    this.spi = spi;
    this.wil = wil;
    this.per = per;
  }

  getStat(val: number) {
    switch (val) {
      case 0:
        return this.str;
      case 1:
        return this.agi;
      case 2:
        return this.end;
      case 3:
        return this.int;
      case 4:
        return this.spi;
      case 5:
        return this.wil;
      case 6:
        return this.per;
    }
  }

  getStats() {
    return {'strength': this.str, 'agility': this.agi, 'end': this.end,
     'intelligence': this.int, 'spirit': this.spi, 'will': this.wil, 'perception': this.per};
  }

}
