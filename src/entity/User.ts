import { IsEmail } from "class-validator"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Release } from "./Release"

@Entity()
export class User {
    constructor(firstName: string, email: string) {
        this.firstName = firstName
        this.email = email
    }
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    @IsEmail()
    email: string

    @OneToMany(() => Release, release => release.user)
    release: Release[]
}
