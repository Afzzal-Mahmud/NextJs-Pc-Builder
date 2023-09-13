const { default: config } = require("@/config");
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    /* Github logIn */ 
    GithubProvider({
      clientId: config.auth_provider.GITHUB_ID,
      clientSecret: config.auth_provider.GITHUB_SECRET,
    }),
    /* Google logIn */ 
    GoogleProvider({
      clientId: config.auth_provider.GOOGLE_CLIENT_ID,
      clientSecret: config.auth_provider.GOOGLE_CLIENT_SECRET
    })
  ],
  pages:{
    signIn : "/login"
  }
}

export default NextAuth(authOptions)