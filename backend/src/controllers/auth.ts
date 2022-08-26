
import { createUser, findUser } from "../repositories/auth"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req: any, res: any) => {

    try {
        const { email, password, username } = req.body

        if (!email || !password || !username) return res.status(400).json({error: 'Complete all fields'})

        const userExist = await findUser(email)

        if (userExist) return res.status(400).json({error: 'The email already exists'})

        const hash = bcrypt.hashSync(password, 10);
        
        const newUser = { email, password: hash, username }

        await createUser(newUser)

        res.status(201).json({msg: 'User Created!'})

    } catch (error) {
        console.log(error)
    }
}
export const login = async (req: any, res: any) => {

    const { email, password } = req.body

    if (!email || !password) return res.status(400).json({error: 'Complete all fields'})

    const userExist = await findUser(email)
    console.log(userExist)
    if (!userExist) return res.status(400).json({error: 'Invalids credentials'})

    const hash = userExist.password ? userExist.password : ""

    const validatePassword = bcrypt.compareSync( password, hash )
    
    if (!validatePassword) return res.status(400).json({error: 'Invalids credentials'})

    const PASS_JWT = process.env.PASS_JWT || '12a34'

    const token = jwt.sign({email, username: userExist.username }, PASS_JWT ,{ expiresIn: '48h' })

    res.status(201).json({token, userExist})
}

    
