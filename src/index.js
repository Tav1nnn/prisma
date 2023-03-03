import {PrismaClient} from "@prisma/client";

async function main() {
    const prisma = new PrismaClient()

    

    /*const teste = await prisma.student.findMany({
       
    })
    console.log(teste);*/

    /*await prisma.student.create({
        data: {
            name: "hiyuiti",
            email: "Riyuiti@gmail.com",
            enrollements: {
                create: {
                    Trail: {
                        connect: {
                            slug: 'trilha-react'
                        }
                    }
                }
            }
        }
    })*/
}

main()