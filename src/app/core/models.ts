export class Filial {
    public id: number;
    public nome: string;
}

export class Sala {
    public id: number;
    public nome: string;
}

export class Reserva {
    public id: number;
    public filial = new Filial();
    public sala = new Sala();
    public inicio: Date;
    public fim: Date;
    public responsavel: string;
    public cafe: boolean;
    public quantidadePessoa: number;
    public descricao: string;
}
