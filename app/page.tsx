"use client";
import Image from "next/image";
import Panel from "./Panel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-5 sm:p-5 sm:pt-16 lg:p-32 lg:pt-16">
      <div className="mb-4 max-w-[600px] lg:max-w-[900px] xl:max-w-[1200px] w-full">
        <div className="flex items-center overflow-hidden">
          <Image
            className="z-20 absolute translate-y-[5.5ch] sm:static sm:translate-y-0 mb-2 ml-5 sm:ml-10 mr-4 rounded-[36px] border-2 border-black/10 dark:border-white/60 p-0.5 bg-gray-100 dark:bg-black sm:bg-transparent sm:dark:bg-transparent"
            src="/photo.png"
            alt="NextGPT.live"
            width={72}
            height={72}
            priority
          />
          <p className="mx-4 min-w-[388px] text-center sm:text-start font-sans max-w-[56ch] sm:max-w-none">
            Hello! I'm{" "}
            <span className="font-semibold font-serif text-2xl">
              Mike Hyatt
            </span>
            . Please feel free to converse with my AI assistant.
            <span className="hidden sm:inline"> It's here to help!</span>
          </p>
        </div>
        <div className="sm:mx-4 sm:rounded-lg border border-transparent my-4 px-5 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30">
          <Panel />
        </div>
      </div>
      <div className="z-10 w-full">
        <p className="text-center font-semibold text-2xl font-serif">
          Projects
        </p>
      </div>
      <div className="grid text-left sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <a
          href=""
          className="group rounded-lg border border-transparent max-w-[268px] mx-4 my-4 px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold group-hover:text-blue-500 group-hover:dark:text-blue-400`}
          >
            NextGPT<span className="font-mono font-normal">.live</span>{" "}
          </h2>
          <Image
            className="mb-2 rounded dark:invert transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            src="/nextgpt.png"
            alt="NextGPT.live"
            width={150}
            height={150}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            An all-encompassing chatbot hosted on AWS.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent max-w-[268px] mx-4 my-4 px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold group-hover:text-blue-500 group-hover:dark:text-blue-400`}
          >
            Doorman{" "}
          </h2>
          <div className="mb-2 flex w-[150px] h-[150px] justify-center items-center">
            <Image
              className="mb-2 rounded transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
              src="/doorman.png"
              alt="Doorman"
              width={50}
              height={50}
              priority
            />
          </div>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A voice assistant app for elderly tech coaching.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent max-w-[268px] mx-4 my-4 px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold group-hover:text-blue-500 group-hover:dark:text-blue-400`}
          >
            UAV Simulation{" "}
          </h2>
          <Image
            className="mb-2 rounded transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            src="/uav.png"
            alt="UAV Simulation"
            width={150}
            height={150}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            A software-in-the-loop simulation for autonomous drone navigation.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent max-w-[268px] mx-4 my-4 px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2
            className={`mb-3 text-2xl font-semibold group-hover:text-blue-500 group-hover:dark:text-blue-400`}
          >
            NTsolver{" "}
          </h2>
          <Image
            className="mb-2 rounded transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
            src="/extension.png"
            alt="NTs extension"
            width={150}
            height={150}
            priority
          />
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            A learning-based differential equation solver with enhanced
            accuracy.
          </p>
        </a>
      </div>
      <div className="xl:fixed xl:bottom-0 pt-9 text-sm">
        <span className="mr-2">LinkedIn</span>
        <a
          className="text-blue-500 dark:text-blue-400"
          href="https://www.linkedin.com/in/whe1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://www.linkedin.com/in/whe1/
        </a>
      </div>
    </main>
  );
}
