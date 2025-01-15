import { Router } from "express"
import { db } from "../../db/index"
import { createUserSchema, updateUserSchema, usersTable, loginUserSchema } from '../../db/schema/user';
import bcrypt from "bcryptjs"
import { eq } from "drizzle-orm"
import { validateData } from "../../middlewares/validationMiddlewares"
const router = Router()

router.post("/register", validateData(createUserSchema), async (req, res) => {
    try {
        const data = req.cleanBody
        console.log(data, "data")
        data.password = await bcrypt.hash(data.password, 10)
        const [user] = await db.insert(usersTable).values(data).returning()
        res.status(201).json(user)
    } catch (e) {
        console.log(e, "e")
        res.status(500).send("Something Went wrong")
    }
})

router.post("/login", validateData(loginUserSchema), async (req, res) => {
    try {
        const { email, password } = req.cleanBody
        const [user] = await db.select().from(usersTable).where(eq(usersTable.email, email))
        if (!user) {
            res.status(401).json({ error: "Authentication Failed" })
        }
        console.log(user.password, "pass")
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            res.status(401).json({ error: "Authentication Failed" })
        }
        const { password: _, ...userWithoutPassword } = user;
        res.status(200).json({ messsage: "Login Successfull", data: { user: userWithoutPassword } })
    } catch (e) {
        res.status(500).json({ error: "Internal Server Error" })
    }
})


export default router