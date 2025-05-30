"user server"
import {z} from "zod";

const createUsernameSchema = z.object({
    username: z.string().min(4, "O username precisa ter no m")
})

export async function createUsername(){

}