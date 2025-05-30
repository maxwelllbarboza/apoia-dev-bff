"use server";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createSlug } from "@/utils/create-slug";

const createUsernameSchema = z.object({
  username: z
    .string({ message: "O username é obrigatório." })
    .min(4, "O username precisa ter no minimo 4 caracteres."),
});

type CreateUsernameFormData = z.infer<typeof createUsernameSchema>;

export async function createUsername(data: CreateUsernameFormData) {
  const session = await auth();
  if (!session?.user) {
    return {
      data: null,
      error: "Usuário não autenticado",
    };
  }
  const schema = createUsernameSchema.safeParse(data);

  if (!schema.success) {
    return {
      data: null,
      error: schema.error.issues[0].message,
    };
  }

  try {
    const userId = session.user.id;
    const slug = createSlug(data.username)

    const existSlug = await prisma.user.findFirst({
        where:{
            username: slug
        }
    })

    if(existSlug){
        
    }

    

    // await prisma.user.update({
    //   where: {
    //     id: userId,
    //   },
    //   data: {
    //     username: data.username,
    //   },
    // });

    return {
      data: "DEU CERTO.",
      error: null,
    };
  } catch (error) {
    return {
      data: null,
      error: "Falha ao atualizar username.",
    };
  }
}
