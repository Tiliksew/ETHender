import { Strategy,ExtractJwt } from "passport-jwt";
import { account } from "../models/account";
const apts={
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secret:'SECRET_CODE'
}
export default (passport)=>{
passport.use(new Strategy(opts,async (payload,done)=>{
    await account.findById(payload.user_id).then(async user=>{
        if (user)
        return done(null,user)
        return done(null,false)
    }).catch(err=>{
        return done(null,false)
    })
}))
}