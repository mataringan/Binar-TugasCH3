
// Parent Class
class BangunDatar {
    constructor (name) {
        this.name  = name;
    }

    introduction(){
        console.log(
            "==== Bangun Datar", this.name, '===='
            )
    }

    // Abstract Method must be implemented
    luas(){

    }

    // Abstract Method must be implemented
    keliling(){

    }
}

// child class from BangunDatar Class
class Segitiga extends BangunDatar{
    constructor(name,alas, tinggi){
        super(name);
        this.alas = alas;
        this.tinggi = tinggi;
    }

    //Override
    luas(){
        console.log(
            `Alas : ${this.alas}\nTinggi : ${this.tinggi}\nLuas = ` +
              0.5 * this.alas * this.tinggi,
          );
    }

    //Overload
    keliling(sisiA, sisiB, sisiC){
        let resKeliling = sisiA + sisiB + sisiC;
        console.log(
            `Sisi A : ${sisiA}\nSisi B : ${sisiB}\nSisi C : ${sisiC}\nKeliling = ${resKeliling}`
        )
    }
}

let luasSegitiga = new Segitiga('Segitiga', 10, 14 );
luasSegitiga.introduction();
luasSegitiga.luas();
console.log('-------');
let kelilingSegitiga = new Segitiga();
kelilingSegitiga.keliling(10,14,8);


// SegiEmpat Module/Helper
const SegiEmpat = Base => class extends Base{
    claim() {
        console.log(
            'Salah satu jenis Segi Empat'
        )
    }
}


// Child class from Bangun Datar
class Persegi extends SegiEmpat(BangunDatar){
    constructor(name,sisi){
        super(name);
        this.sisi = sisi;
    }

    introduction(){
        super.introduction(); //From Human Class
        super.claim(); //From Segi Empat Class
    }

    luas() {
        let resPersegi = this.sisi * this.sisi;
        console.log(
            `Sisi : ${this.sisi}\nLuas = ${resPersegi}`
        );
    }

    keliling() {
        let resPersegi = 4 * this.sisi;
        console.log(
            `Sisi : ${this.sisi}\nKeliling = ${resPersegi}`
        );
    }
  }

let luasPersegi = new Persegi('Persegi', 10);
console.log(" ");
luasPersegi.introduction();
luasPersegi.luas();
console.log('-------')
let kelilingPersegi = new Persegi('Persegi',10);
kelilingPersegi.keliling();

// Child Class from SegiEmpat
class PersegiPanjang extends SegiEmpat(BangunDatar){
    constructor(name, panjang, lebar){
        super(name);
        this.panjang = panjang;
        this.lebar = lebar;
    }

    introduction(){
        super.introduction(); //From Human Class
        super.claim(); //From Segi Empat Class
    }

    luas(){
        let resPersegiPanjang = this.panjang * this.lebar;
        console.log(
            `Panjang : ${this.panjang}\nLebar : ${this.lebar}\nLuas : ${resPersegiPanjang}`
        )
    }

    keliling(){
        let resPersegiPanjang = ( 2 * this.panjang) + (2 * this.lebar);
        console.log(
            `Panjang : ${this.panjang}\nLebar : ${this.lebar}\nkeliling : ${resPersegiPanjang}`
        )
    }
}



let luasPersegiPanjang = new PersegiPanjang('Persegi Panjang', 2, 4);
console.log(" ");
luasPersegiPanjang.introduction();
luasPersegiPanjang.luas();
console.log('-------')
let kelilingPersegiPanjang = new PersegiPanjang('Persegi Panjang', 2, 4);
kelilingPersegiPanjang.keliling();



// Child Class from Bangun Datar
class Lingkaran extends BangunDatar{
    // private property
    static #phi = 3.14;

    constructor(name,radius){
        super(name);
        this.radius = radius;
    }

    luas(){
        console.log(
            `Radius : ${this.radius}\nLuas = ` +  Lingkaran.#phi * (this.radius * this.radius)
        )
    }

    keliling() {
        console.log(
            `Radius : ${this.radius}\nKeliling = ` + Lingkaran.#phi * 2 * this.radius
        )
    }
}

let luasLingkaran = new Lingkaran('Lingkaran', 14)
console.log("")
luasLingkaran.introduction();
luasLingkaran.luas();
console.log('-------')
let kelilingLingkaran = new Lingkaran('Lingkaran', 14)
kelilingLingkaran.keliling()
