import User from "./User.model.js"

export const login = async (req, res) => {
    const { username, password } = req.body // juantix  asdasd

    const user = await User.findOne( {username}, {password: 1, enable: 1} )
        //Si el username no existe -> undefined
        //Si sí existe -> {.....}
    if( !user || user?.password !== password ){
        res.status(403).json({error: true, errorMsg: "Credenciales incorrectas"})
        return
    }

    if( !user.enable ){
        res.status(403).json({error: true, errorMsg: "Cuenta desactivada"})
        return
    }

    res.json({ username, password })
}











// await User.create({
//     name: "Juan Gomez",
//     username: "juantix",
//     email: "juangomez@gmail.com",
//     password: "asdasd"
// })

// const user = new User
// user.name = "Juan Gomez"
// user.username = "juantix"
// user.email = "juangomez@gmail.com"
// user.password = "asdasd"
// user.save()