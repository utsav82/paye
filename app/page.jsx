import { HeroTabs } from "@/components/hero-tabs"
import { WavyBackground } from "@/components/ui/wavy-background"
import Link from "next/link"

export default function page() {
    return (
        <div >
            <main >
                <WavyBackground className=" h-screen text-white w-full py-16 sm:py-24 md:py-32 lg:py-40 xl:py-48 relative">
                    <header className="absolute -top-5 w-full px-4 lg:px-8 h-14 flex items-center pt-10">
                        <Link href="/" className="flex items-center justify-center" prefetch={false}>
                            <DollarSignIcon className="h-6 w-6" />
                            <span className="sr-only">Expense Splitter</span>
                        </Link>
                        <nav className="ml-auto flex gap-4 sm:gap-6">
                            <Link href="/auth" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
                                Sign up
                            </Link>
                        </nav>
                    </header>
                    <div className="flex-1 container px-4 md:px-6 text-center">
                        <div className="max-w-3xl mx-auto space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                Split Expenses, Simplified
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl">
                                Easily track and split bills with your friends, family, or roommates. No more awkward conversations or
                                forgotten payments.
                            </p>
                            <div className="flex justify-center mt-6">
                                <Link
                                    href="/auth"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                    prefetch={false}
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                    <section className="w-full py-12 sm:py-24 md:py-24">
                        <div className="container px-4 md:px-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                <div className="flex flex-col items-center text-center">
                                    <WatchIcon className="h-12 w-12 text-primary" />
                                    <h3 className="text-2xl font-bold mt-4">Expense Tracking</h3>

                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <SplitIcon className="h-12 w-12 text-primary" />
                                    <h3 className="text-2xl font-bold mt-4">Bill Splitting</h3>

                                </div>
                                <div className="flex flex-col items-center text-center">
                                    <CheckIcon className="h-12 w-12 text-primary" />
                                    <h3 className="text-2xl font-bold mt-4">Reporting & Analytics</h3>

                                </div>
                            </div>
                        </div>
                    </section>
                </WavyBackground>


                <HeroTabs />
            </main>
            <section className="w-full py-24 md:py-32 lg:py-40">
                <div className="container px-4 md:px-6 text-center">
                    <div className="max-w-3xl mx-auto space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Start Splitting Expenses Today
                        </h2>
                        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
                            Sign up online to start managing your shared expenses
                        </p>
                        <div className="flex justify-center mt-6 space-x-4">
                            <Link
                                href="/auth"
                                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                                prefetch={false}
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-muted-foreground">&copy; 2024 Expense Splitter. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}

function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function DollarSignIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    )
}


function SplitIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 3h5v5" />
            <path d="M8 3H3v5" />
            <path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3" />
            <path d="m15 9 6-6" />
        </svg>
    )
}


function WatchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="6" />
            <polyline points="12 10 12 12 13 13" />
            <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
            <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
        </svg>
    )
}