import {PrismaClient} from "@prisma/client";

async function main() {
    const prisma = new PrismaClient()
    await prisma.student.create({
        data: {
            name: "Otavio",
            email: "otavioo00@otavio.com",
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
    })
}

main()