"user server"
import {z} from "zod";

const createUsernameSchema = z.object({
    username: z.string({message}).min(4, "O username precisa ter no minimo 4 caracteres.")
})

export async function createUsername(){

}