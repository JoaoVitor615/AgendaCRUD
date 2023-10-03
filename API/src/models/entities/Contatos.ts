import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("contatos", { schema: "agenda" })
export class Contatos {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  Id: number;

  @Column("varchar", { name: "nome", length: 45 })
  Nome: string;

  @Column("varchar", { name: "telefone", nullable: true, length: 50 })
  Telefone: string | null;
}
