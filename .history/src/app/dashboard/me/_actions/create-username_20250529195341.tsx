"use server"
import {z} from "zod";
import {auth} from '@/lib/auth'

const createUsernameSchema = z.object({
    username: z.string({message: "O username é obrigatório."}).min(4, "O username precisa ter no minimo 4 caracteres.")
})

type CreateUsernameFormData = z.infer<typeof createUsernameSchema>

export async function createUsername(data: CreateUsernameFormData){
    const session = await auth()
    if(!session?.user){
        return {
            data: null,
            error: "Usu"
        }
    }
    const schema = createUsernameSchema.safeParse(data)

    if(!schema.success){
        return {
            data: null,
            error: schema.error.issues[0].message
        }
    }    
    return {
        data: "USERNAME CRIADO",
        error: null,
    } 

}