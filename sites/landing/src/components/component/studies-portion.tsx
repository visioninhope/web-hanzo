/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/ucrevm6slhL
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Syne } from 'next/font/google'

syne({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function StudiesPortion() {
  return (
    <section className="py-16 md:py-32 lg:py-40 bg-black text-white font-inter self-center">
      <div className="container flex flex-col gap-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center h-pr-50">
          <div className="space-y-6 text-center md:text-left">
            <div className="text-3xl font-semibold tracking-tighter md:text-4xl">
              Hanzo: Powering the Launch of the Damon Motorbike
            </div>
            <p className="max-w-[600px] text-white/80 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              With the announcement of over 100 Million in Sales, Hanzo is proud to be the agency of record since launch
              of the most exciting motorbike of our lifetimes. Hanzo has been responsible for the marketing efforts
              starting with the launch at CES 2020 (we won) and into CES 2022 (we won again), and into the first units
              delivered in the upcoming year. Damon is a shining example of the power of a Hanzo Launch, with total
              average ROAS at a glorious 243 : 1. Visit DAMON.com to reserve yours today.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg bg-primary shadow-lg">
            <video
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.p4"
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:items-center h-pr-50">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-primary shadow-lg">
            <video
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.p4"
              autoPlay
              loop
              muted
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div className="text-3xl font-semibold tracking-tighter md:text-4xl">Case Study: TRILLER</div>
            <p className="max-w-[600px] text-white/80 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              Some highlights from Triller's 1st ever paid marketing launch:
              <br />
              over 169 million people reached on less than $60,000 ad spend
              <br />
              our AI engine identified India as the number 1 growth market (and it became the top app in Apple & Android
              weeks later)
              <br />
              Grew YouTube subscribers from 0 to over 100,000 in 5 days
              <br />
              Grew MAU from ~50M to 82M
              <br />
              Visit TRILLER.co to join the party.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
