import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local";
import { UserModel, IUser } from "../schemas";

export function initializePassport(): void {
    passport.use(new LocalStrategy({
        usernameField: "user[username]",
        passwordField: "user[password]"
    }, function (username, password, done) {
        const user = UserModel.findOne((user: IUser) => user.username == username);
        if (user == null || user.verifyPassword()) {
            return done("Invalid username or password", null, {
                message: "The specified username or password is not valid"
            });
        }
        return done(null, user);
    }));
}