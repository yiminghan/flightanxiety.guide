import { causesOfDeath, faaSource, planeAccidentOdds } from "@/lib/data";
import DotPattern from "~/components/ui/dot-pattern";
import { cn } from "~/lib/utils";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto bg-transparent px-4 py-8">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          )}
        />
        <div className="z-10 flex min-h-screen flex-col items-center justify-center">
          <h1 className="mb-8 flex flex-col text-center text-4xl font-bold">
            <span>Put Your Flight Anxiety in Perspective</span>
          </h1>
          <p className="mb-8 text-center text-xl">
            The odds of dying in a plane crash are approximately{" "}
            <span className="font-bold">{planeAccidentOdds}</span>
            <a
              className="inline-flex align-top text-sm"
              href={faaSource}
              target="_blank"
              aria-label="FAA Reference"
            >
              [*]
            </a>
            .
          </p>
          <p className="mb-8 text-center text-xl">
            you are more likely to die from:
          </p>
          <div className="items-top grid grid-cols-3 justify-center gap-1 text-center text-xl">
            {causesOfDeath
              .sort((a, b) => a.oneIn - b.oneIn)
              .map((c) => {
                return (
                  <>
                    <div />
                    <p className="col-span-1 mb-8" key={c.title}>
                      <b>
                        <u>{c.title}</u>
                      </b>{" "}
                    </p>
                    <span className="text-right text-sm">
                      {" "}
                      ({(20_000_000 / c.oneIn).toFixed(0).toLocaleString()}x
                      more likely
                      <a
                        className="inline-flex align-top text-xs"
                        href={c.source}
                        target="_blank"
                        aria-label="FAA Reference"
                      >
                        [*]
                      </a>
                      )
                    </span>
                  </>
                );
              })}
          </div>

          {/* <div className="z-10 mt-12">
            <RandomFactButton />
          </div> */}
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform p-4">
          <p>
            Contribute on{" "}
            <a
              href="https://github.com/yiminghan/flightanxiety.guide"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
