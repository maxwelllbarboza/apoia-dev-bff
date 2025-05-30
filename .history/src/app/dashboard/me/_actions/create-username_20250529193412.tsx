"user server"
import {z} from "zod";

const createUsernameSchema = z.object({
    username: z.string
})

export async function createUsername(){

}