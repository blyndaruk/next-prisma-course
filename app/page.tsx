import Image from 'next/image';
import { prisma } from '@/db';

export default async function Home() {
  const res = await fetch(`${process.env.API_URL}/${process.env.TEST_DATA_ENDPOINT_URL}`);
  const json = await res.json();
  const { sneakers } = json.data || {};

  const snippets = await prisma.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return (
      <div key={snippet.id} className="border-2 rounded-xl p-3 gap-4">
        <h4 className="text-center mb-2 font-semibold">{snippet.title}</h4>
        <div>{snippet.code}</div>
      </div>
    );
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="mb-6 text-3xl font-bold">Code Snippets</h2>
      <div className="grid grid-cols-3 gap-6 mb-40">{renderedSnippets}</div>

      <h2 className="mb-6 text-3xl font-bold">Products</h2>
      <div className="grid grid-cols-6 gap-6">
        {sneakers.map(({ id, model_name, image_url, ask_price }: any) => {
          return (
            <div
              key={id}
              className="cursor-pointer text-center font-bold h-full flex flex-col border-2 rounded-2xl p-3"
            >
              <h3 className="text-sm">{model_name}</h3>
              <Image src={image_url} alt={model_name} width={180} height={180} priority />
              <div className="mt-auto">${ask_price / 100}</div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
      {/*<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">*/}
      {/*  <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">*/}
      {/*    Get started by editing&nbsp;*/}
      {/*    <code className="font-mono font-bold">app/page.tsx</code>*/}
      {/*  </p>*/}
      {/*  <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">*/}
      {/*    <a*/}
      {/*      className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"*/}
      {/*      href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"*/}
      {/*      target="_blank"*/}
      {/*      rel="noopener noreferrer"*/}
      {/*    >*/}
      {/*      By{' '}*/}
      {/*      <Image*/}
      {/*        src="/vercel.svg"*/}
      {/*        alt="Vercel Logo"*/}
      {/*        className="dark:invert"*/}
      {/*        width={100}*/}
      {/*        height={24}*/}
      {/*        priority*/}
      {/*      />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="mt-52 relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
