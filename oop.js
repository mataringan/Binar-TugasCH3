class Segitiga {
  constructor(alas, tinggi, rumus) {
    this.alas = alas;
    this.tinggi = tinggi;
  }

  luas() {
    console.log(
      `Luas segitiga yang mempunyai alas : ${this.alas} dan tinggi ${this.tinggi} adalah ` +
        0.5 * this.alas * this.tinggi
    );
  }
  keliling(sisiA, sisiB, sisiC) {
    let resKeliling = sisiA + sisiB + sisiC;
    console.log(
      `Keliling segitiga ABC yang memiliki sisi a : ${sisiA}, sisi b : ${sisiB}, sisi c : ${sisiC} adalah ${resKeliling}`
    );
  }
}

let luasSegitiga = new Segitiga(5, 10);
luasSegitiga.luas();
let kelilingSegitiga = new Segitiga();
kelilingSegitiga.keliling(2, 3, 2);

class Segiempat {
  constructor(sisi) {
    this.sisi = sisi;
  }
  luas() {
    let resSegiempat = this.sisi * this.sisi;
    console.log(
      `Luas segiempat yang memiliki sisi ${this.sisi} adalah ${resSegiempat} `
    );
  }
  keliling() {
    let resSegiempat = 4 * this.sisi;
    console.log(
      `Keliling segiempat yang memiliki sisi ${this.sisi} adalah ${resSegiempat}`
    );
  }
}

let luasSegiempat = new Segiempat(4);
luasSegiempat.luas();
let kelilingSegiempat = new Segiempat(3);
kelilingSegiempat.keliling();

class Lingkaran {
  constructor(phi, r) {
    this.phi = phi;
    this.r = r;
  }
  luas() {
    let resLingkaran = this.phi * (this.r * this.r);
    console.log(
      `Luas lingkaran yang memiliki jari-jari ${this.r} adalah ${resLingkaran}`
    );
  }
  keliling() {
    let resLingkaran = this.phi * 2 * this.r;
    console.log(
      `Keliling lingkaran yang memiliki jari-jari ${this.r} adalah ${resLingkaran}`
    );
  }
}

let luasLingkaran = new Lingkaran(22 / 7, 7);
luasLingkaran.luas();
let kelilingLingkaran = new Lingkaran(22 / 7, 7);
kelilingLingkaran.keliling();
