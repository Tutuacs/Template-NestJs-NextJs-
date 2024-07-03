import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    profile: {
      id: number;
      email: string;
      role: number;
      name: string;
    };

    tokens: {
      access: string;
      refresh: string;
      expiresIn: number;
    };
  }
}

import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
  interface JWT {
    profile: {
      id: number;
      email: string;
      role: number;
      name: string;
    };

    tokens: {
      access: string;
      refresh: string;
      expiresIn: number;
    };
  }
}
