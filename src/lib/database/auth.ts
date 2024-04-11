// import Credentials from "next-auth/providers/credentials"
// import { DrizzleAdapter } from "@auth/drizzle-adapter"
// import { db } from "./db"
// import { eq } from 'drizzle-orm';
// import * as bcrypt  from "bcryptjs";
// import NextAuth from "next-auth"
// import { JWT } from "@auth/core/jwt";
// import { Session } from "@auth/core/types";

//   interface Creds {
//       username: string;   
//       password: string;
//    }

//    const AUTH_SECRET ="6qdkm8rQyxsXqKTfuX4YEbYqacQLmQjUzDBnrVVfbQw="
 
// export const { handlers, auth ,signIn , signOut } = NextAuth({
//   secret: AUTH_SECRET,
//   session:{
//     strategy:"jwt"
//   },
//   adapter: DrizzleAdapter(db),
//   providers: [
//     Credentials({
//       credentials: {
//              username: { label: "username", type: "text", placeholder: "username" },
//              password: {  label: "Password", type: "password", placeholder: "password" }
//       },
//       authorize: async (credentials:Creds) => {
//             const user = await db.query.Users.findFirst({
//               where:(table)=>eq(table.username,credentials.username),
//          })

//              if (!user) {
//                     console.error("User not found");
//                      throw new Error("User not found")
//                  }
 
//             const passmatch = await bcrypt.compare(credentials.password, user.password)

//             if (!passmatch) {
//                     console.log("password incorrect");
//                     throw new Error("password incorrect")
//                               }
//             const { password, ...userDataWithoutPassword } = user;
//             console.log(userDataWithoutPassword);
//             return userDataWithoutPassword
 
//       },
//     }),
//   ],
//   callbacks: {
//     jwt(): JWT { 
//       return { foo: "bar" }
//     },
//   }
//  }
// )