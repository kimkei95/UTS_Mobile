export interface GPU{
    id: string;
    merek: string;
    model: string;
    harga: string;
    foto: string;
    stok: string;
}
export interface Processor{
    id: string;
    merek: string;
    model: string;
    harga: string;
    baseclock: string;
    boostclock: string;
    foto: string;
    stok: string;
    core: string;
    thread: string;

}

export interface RAM{
    id: string;
    merek: string;
    model: string;
    harga: string;
    foto: string;
    stok: string;
    speed: string;
    ukuran: string;
}
export interface Motherboard{
    id: string;
    merek: string;
    model: string;
    harga: string;
    foto: string;
    stok: string;
    chipset: string;
    untukmerekapa: string;

}
