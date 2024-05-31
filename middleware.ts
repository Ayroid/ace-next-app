export { default } from "next-auth/middleware";
export const config = {
  // + - Matches one or more characters
  // * - Matches zero or more characters
  // ? - Matches zero or one character

  matcher: ["/users/:id*"],
};
