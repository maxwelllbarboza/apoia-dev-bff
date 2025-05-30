"user server"
import {z} from "zod";

const createUsernameSchema = z.object({
    username: z.string().min(4, )
})

export async function createUsername(){

}