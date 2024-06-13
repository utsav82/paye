import Link from "next/link";
import { UserAuthForm } from "@/components/user-auth-form";

export const metadata = {
  title: "Authentication",
  description: "Authentication",
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r ">
          <div className="absolute inset-0 bg-zinc-900 bg-[url('/auth-bg.svg')]" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            Paye
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Personal finance is only 20% head knowledge. It’s 80%
                behavior!&rdquo;
              </p>
              <footer className="text-sm">- Dave Ramsey</footer>
            </blockquote>
          </div>
        </div>
        <div className="pt-20 md:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome to Paye
              </h1>{" "}
              <p className="text-sm text-muted-foreground">
                Sign In with Google to continue
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
