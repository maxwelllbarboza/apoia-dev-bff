"user server"
import {z} from "zod";

const createUsernameSchema = z.object({
    username: z.string().min()
})

export async function createUsername(){

}