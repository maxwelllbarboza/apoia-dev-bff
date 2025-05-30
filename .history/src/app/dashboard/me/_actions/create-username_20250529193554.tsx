"user server"
import {z} from "zod";

const createUsernameSchema = z.object({
    username: z.string({message: "O username é obrigatório."}).min(4, "O username precisa ter no minimo 4 caracteres.")
})

type CreateUsernameFormData = z.infer<typeof>

export async function createUsername(){

}