import Image from "next/image";
const navigation = [
];

/*

        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="mx-auto flex items-center gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </header>

        */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative isolate">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="flex mx-auto items-center justify-center text-4xl py-9">
            <Image src="/logo.svg" alt="logo" width={500} height={200} className="dark:drop-shadow-[0_0_0.2rem_#0f0f0fa0]"></Image>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-6xl">
              AI for Everyone.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Automate everyday business processes with artificial intelligence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://tally.so/r/wAdkjl"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Waitlist
              </a>

              <a href="mailto:careers@hellu.ai" className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300">
                Careers <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
