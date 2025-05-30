"user server"
import {z} from "zod";

const createUsernameSchema = z.object({
    username: z.string({message: "O username "}).min(4, "O username precisa ter no minimo 4 caracteres.")
})

export async function createUsername(){

}