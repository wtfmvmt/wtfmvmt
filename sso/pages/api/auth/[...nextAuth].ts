import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {

    providers: [
        CredentialsProvider({
            id: "credentials",
            type: 'credentials',
            name: 'Credentials',
            credentials: {
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                return { id: 1, name: 'J Smith', email: '' }
            },

        },)
    ],
    pages: {
        signIn: "/",
    },
}

export default NextAuth(authOptions)