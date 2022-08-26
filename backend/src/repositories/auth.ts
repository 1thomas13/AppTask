import { User } from "../db/user"

export const createUser = async (newUser: object) => {

    const user = new User(newUser)
    await user.save()

    return
}

export const findUser = async (email: string) => {

    const user = await User.findOne({email: email})

    return user
}