import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./authconfig"
import connectToDB from "./lib/utlis"
import { user } from "./lib/models"
import bcrypt from "bcrypt";
const login = async (cridentials) => {
  try {
    connectToDB()
    const User = await user.findOne({ username: cridentials.username })

    if (!User) throw new Error("Wrong credentials")
    const ispasswordCorrect = await bcrypt.compare(cridentials.password, User.password)

    if (!ispasswordCorrect) throw new Error("Wrong credentials")

    return User();
  } catch (err) {
    console.log(err)
    throw new Error("Failed To Login")
  }

}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {

          return null;

        }

      },
    }),
  ],
})