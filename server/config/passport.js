import { Strategy as JwtStrategy } from 'passport-jwt';
import { ExtractJwt } from 'passport-jwt';
import { findById } from '../models/faculty';
import { findById as _findById } from '../models/student';
import { findById as __findById } from '../models/admin';


import { secretOrKey } from './key';

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretOrKey;

export default passport => {
    passport.use(
        new JwtStrategy(opts, async (jwt_payload, done) => {
            //console.log(jwt_payload)
            const faculty = await _findById(jwt_payload.id)
            const student = await findById(jwt_payload.id)
            const admin = await __findById(jwt_payload.id)
            if (faculty) {
                return done(null, faculty)
            }
            else if (student) {
                return done(null, student)
            }
            else if (admin) {
                return done(null, admin)
            }    
            else {
                console.log("Error")
            }
        }
        )
    )
};
