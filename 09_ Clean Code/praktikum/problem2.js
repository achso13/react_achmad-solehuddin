class Kendaraan {
    constructor() {
        this.totalRoda = 0;
        this.kecepatanPerJam = 0;
    }
}

class Mobil extends Kendaraan {
    constructor() {
        super();
    }

    berjalan() {
        return this.tambahKecepatan(10);
    }

    tambahKecepatan(kecepatanBaru) {
        return this.kecepatanPerJam += kecepatanBaru;
    }
}

function main() {
    const mobilCepat = new Mobil();
    mobilCepat.berjalan();
    mobilCepat.berjalan();
    mobilCepat.berjalan();
    console.log(mobilCepat.kecepatanPerJam);

    const mobilLamban = new Mobil();
    mobilLamban.berjalan();
    console.log(mobilLamban.kecepatanPerJam);
};

main();