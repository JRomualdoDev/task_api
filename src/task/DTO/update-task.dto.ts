export class UpdateTaskDto {
    nome: string;
    inicio: Date;
    fim: Date | null;
    tag: string;
    totalTime: number;
}