import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'

export default function PicTok() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | New Habits</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center text-black p-48`}>
      <div className={`flex flex-row items-center justify-between w-full py-8`}>
        <h1 className={'text-5xl font-bold'}>New Habits</h1>
        <Link href="https://newhabits.vercel.app/"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>View App</button></Link>
      </div>
      <div className={'py-8 text-xl'}>
            <p>The New Habits web app was created to help those suffering from substance misuse disorder (SUD), or for concerned family/friends of those suffering.
                There is a quiz within the app that asks the users a set of questions outlining the biggest and most noticeable effects of substance misuse disorder.
            </p>
      </div>
        <Image
          className={'py-3 w-screen'}
          src='/images/NewHabits-MockupLong.png'
          width={2000}
          height={400}
          alt='Long mockup of Pictok screens'
        />
        <div className={'flex flx-row items-center gap-10 py-16'}>
            <div className={'text-right'}>
                <h1 className={'text-3xl font-semiold'}>My Role:</h1>
                <h3 className={'text-xl'}>UI/UX Designer + Front End Developer</h3>
            </div>
            <Image
                className={'py-3 hover:scale-110 transition-transform'}
                src='/images/NewHabitsLogo.png'
                width={100}
                height={100}
                alt='Newhabits Logo'
                />
            <div>
                <h1 className={'text-3xl font-Bold'}>Timeline:</h1>
                <h3 className={'text-xl'}>January 2023 - May 2023 (5 months)</h3>
            </div>
        </div>
        <div className={'flex flex-col gap-8'}>
            <h1 className={'text-3xl font-bold'}>Ideation</h1>
            <p className={'text-xl'}>Starting with an idea and creating something you can interact with is always fun and allows endless opportunities for new features
                and looks to be added. Starting with “Humphrey” the whale as a mascot was a great point, allowing the theme and feel to be formed around him. Humphrey was happy,
                fun and caring, so why not incorporate a game in the app where each person can stroll around and have fun with Humphrey </p>
            <div className={'flex -flex-row justify-between py-8'}>
                <Image
                    className={'py-3'}
                    src='/images/NewHabits-Screens/Get started.png'
                    width={200}
                    height={100}
                    alt='Gesture Screen03'
                    />
                <Image
                    className={'py-3'}
                    src='/images/NewHabits-Screens/Welcome Page.png'
                    width={200}
                    height={100}
                    alt='Gesture Screen04'
                    />
                <Image
                    className={'py-3'}
                    src='/images/NewHabits-Screens/Resources1.png'
                    width={200}
                    height={100}
                    alt='gesture Screen05'
                    />
            </div>
            <div className={'flex flex-col gap-10'}>
                <h1 className={'text-4xl font-bold'}>Challenges</h1>
                <p className={'text-xl'}>Designing and creating an app for use by the visually impaired community was going to be a challenge, with many barriers. Not only is there the
                    challenge of creating an accessible app for everyone, but the main focus is for the visually impaired, a market that encounters inaccessibility
                    for many everyday things, including many applications and websites.</p>
            </div>
            <div className={'flex flex-col gap-5 py-5'}>
                    <h1 className={'text-3xl font-semibold'}>1. Usability and Interaction</h1>
                    <h2 className={'text-2xl'}>Resolved with Usability Testing</h2>
                    <Image
                        className={'py-3'}
                        src='/images/Newhabits-UserTest2.png'
                        width={1000}
                        height={200}
                        alt='User Persona'
                    />
                    <h3 className={'text-xl'}>Usability Testing: A series of tasks and questions asked to a volunteer and while receiving feedback on the app</h3>
                </div>
                <div className={'flex flex-col gap-5 py-5'}>
                    <h1 className={'text-3xl font-semibold'}>2. Navigation and common assets missing</h1>
                    <h2 className={'text-2xl'}>Resolved during usability testing when participants would provide feedback</h2>
                    <Image
                        className={'py-3 justify-center items-center'}
                        src='/images/Newhabits-UserTest3.png'
                        width={700}
                        height={200}
                        alt='User Persona'
                    />
                    <h3 className={'text-xl'}>User Flow Chart: A map/chart showing the flow of how someone would go through an app</h3>
                </div>
            <div className={`flex flex-row items-center justify-between w-full py-8`}>
                <h1 className={'text-5xl font-bold'}>Results</h1>
                <Link href="https://pictok.vercel.app/"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald'}>View App</button></Link>
            </div>
            <div className={'flex flex-col'}>
                <p>Finishing the app is always rewarding, but it is never truly finished as there is always room for more features and constant updates. Ending with a clean, flowing app where
                    users can test themselves on their substance use and even play a game is something unique and will always be remembered, with the extra help of Humphrey the whale.</p>
                <div className={'flex flex-row items-center justify-center py-10 tablet:flex-col'}>
                    <div className={'flex flex-row'}>
                    <Image
                        className={'p-3'}
                        src='/images/NewHabits-Screens/Humphrey Intro.png'
                        width={150}
                        height={150}
                        alt='Gesture Screen03'
                        />
                    <Image
                        className={'p-3'}
                        src='/images/NewHabits-Screens/goodbye.png'
                        width={150}
                        height={100}
                        alt='Gesture Screen04'
                        />
                    <Image
                        className={'p-3'}
                        src='/images/NewHabits-Screens/Game Tutorial.png'
                        width={150}
                        height={100}
                        alt='gesture Screen05'
                        />
                        </div>
                        <div className={'flex flex-row justify-between tab'}>
                            <Image
                                className={'p-3'}
                                src='/images/NewHabits-Screens/Info Page.png'
                                width={150}
                                height={100}
                                alt='Gesture Screen03'
                                />
                            <Image
                                className={'p-3'}
                                src='/images/NewHabits-Screens/Statistics.png'
                                width={150}
                                height={100}
                                alt='Gesture Screen04'
                                />
                        </div>
                </div>
            </div>
        </div>
        <div className={'flex flex-col items-center gap-10 my-28 text-center'}>
            <h1 className={'text-5xl font-semibold'}>Hope you enjoyed PicTok!</h1>
            <h2 className={'text-3xl'}>Go back to see the rest of my projects</h2>
            <Link href="/Projects"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Projects</button></Link>
        </div>
    </main>
    <Footer />
    </>
  )
}