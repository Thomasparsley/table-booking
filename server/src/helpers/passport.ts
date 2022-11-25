import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local";
import { IUserService } from "../services";
import { verifyPassword } from "./";

export function initializePassport(
    userService: IUserService
): void {
    passport.use(new LocalStrategy({
        usernameField: "user[email]",
        passwordField: "user[password]"
    }, async (email, password, done) => {
        const user = await userService.getByEmail(email);
        if (user == null || !(await verifyPassword(password, user))) {
            return done("Invalid email or password", null, {
                message: "The specified email or password is not valid"
            });
        }
        return done(null, user);
    }));
}