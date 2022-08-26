import jwt from "jsonwebtoken"

export const isLogged = (req: any, res: any, next: any) => {

    let token = req.headers.authorization

    if(!token) {
        return res.status(401).json({msg: 'you must log in'})
    }

    token = token.replace('Bearer ', '')

    const PASS_JWT = process.env.PASS_JWT || '12a34'

    jwt.verify(token, PASS_JWT, (err: any) => {
        if(err) return res.status(401).json({msg: 'Invalid Token'})

        const decoded = jwt.decode(token);
        req.data = decoded

        next()
    });

    
}