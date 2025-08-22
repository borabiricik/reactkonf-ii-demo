import Image from "next/image";
import Link from "next/link";

export default function Basics() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16">
      <header className="mt-[200px] flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold flex flex-col items-center gap-4">
          <span>Who you should pick</span>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={320}
            height={100}
            priority
          />
          <span>for Your Next Startup?</span>
        </h1>
        <div>-</div>
        <div>23.08.2025</div>
        <div>-</div>
        <div className="text-5xl font-bold">Basics</div>
      </header>
      <main>
        <ol className="font-mono font-medium flex flex-col gap-2 text-left w-full">
          <li>
            <Link href={"/basics/optimizations"} className="hover:underline">
              <code>1. Optimizations</code>
            </Link>
          </li>
          <Link href={"/basics/routing"} className="hover:underline">
            <li>
              <code>2. Routing</code>
            </li>
          </Link>
          <Link href={"/basics/seo"} className="hover:underline">
            <li>
              <code>3. SEO</code>
            </li>
          </Link>
          <Link href={"/basics/api-routes"} className="hover:underline">
            <li>
              <code>4. API Routes</code>
            </li>
          </Link>
        </ol>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
