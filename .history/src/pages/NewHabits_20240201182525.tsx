import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'
import PictokStyleguide from '@/components/pictokStyleguide'

export default function NewHabits() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | New Habits</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center text-black`}>
        <Image
            className={'py-8 hover:scale-110 transition-transform'}
            src='/images/NewHabits/NewHabitsLogo.png'
            width={150}
            height={150}
            alt='Hops and Pigs Logo'
        />
        <Image
            className={' w-full'}
            src='/images/NewHabits/NewHabits-MockupLong.png'
            width={600}
            height={600}
            alt='Can Mock Up'
        />
        <div className={'flex flex-col max-w-6xl p-12 gap-10 items-center m-20 mx-48 tablet:mx-6 tablet-m-5'}>
            <div className={'flex flex-col gap-5 items-center text-center'}>
                <h1 className={'text-5xl font-bold'}>New Habits</h1>
                <h2 className={'text-2xl'}>Substance Use Disorder (SUD) App</h2>
                <Link href="https://newhabits.vercel.app/"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>View App</button></Link>
            </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Summary</h1>
        </div>
        <p className={'text-lg'}>The New Habits web app was created to help those suffering from substance misuse disorder (SUD), or for concerned family/friends of those suffering. There is a quiz within the app that asks the users a set of questions outlining the biggest and most noticeable effects of substance misuse disorder.</p>
        <div className={'flex flex-row w-full items-center justify-between tablet:flex-col tablet:gap-10'}>
            <Image
                className={'shadow-2xl'}
                src='/images/NewHabits/NewHabits-Screens/Ask-Humphrey.png'
                width={100}
                height={100}
                alt='Pantone Swatch'
            />
            <Image
                className={'shadow-2xl'}
                src='/images/NewHabits/NewHabits-Screens/Welcome-Page.png'
                width={100}
                height={100}
                alt='Pantone Swatch'
            />
            <Image
                className={'shadow-2xl'}
                src='/images/NewHabits/NewHabits-Screens/goodbye.png'
                width={100}
                height={100}
                alt='Pantone Swatch'
            />
        </div>
        <div className={'flex flex-col w-full items-start gap-6 '}>
            <h1 className={'text-3xl font-semibold'}>Mascot</h1>
        </div>
        <p className={'text-lg'}>Since the topic of the app could be perceived as harsh, and difficult to talk about, a gentle, caring mascot was needed to make the viewer feel at ease. Humphrey the whale was created, a purple, round cartoon-style whale that would guide the user through the app and always be happy for the viewer's sake. Humphrey would also be accompanied by a few other animations, such as waves, seaweed/kelp and flowers</p>
        <div className={'flex flex-row w-full items-center justify-between tablet:flex-col tablet:gap-5 '}>
            <Image
                className={''}
                src='/images/NewHabits/coral01.png'
                width={100}
                height={100}
                alt='Pantone Swatch'
            />
            <Image
                className={''}
                src='/images/NewHabits/flower01.png'
                width={40}
                height={40}
                alt='Pantone Swatch'
            />
            <Image
                className={''}
                src='/images/NewHabits/humphrey-happy.png'
                width={200}
                height={200}
                alt='Pantone Swatch'
            />
            <Image
                className={''}
                src='/images/NewHabits/flower02.png'
                width={40}
                height={40}
                alt='Pantone Swatch'
            />
            <Image
                className={''}
                src='/images/NewHabits/coral02.png'
                width={100}
                height={100}
                alt='Pantone Swatch'
            />
        </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Results</h1>
        </div>
        <p className={'text-lg'}>Finishing the app is always rewarding, but it is never truly finished as there is always room for more features and constant updates. Ending with a clean, flowing app where users can test themselves on their substance use and even play a game is something unique and will always be remembered, with the extra help of Humphrey the whale.</p>
        <div className={'flex flex-row items-center gap-20'}>
            <Image
                className={'shadow-2xl rounded-2xl'}
                src='/images/NewHabits/NewHabits-Screens/Welcome-Page.png'
                width={200}
                height={200}
                alt='Ideation of PicTok'
            />
        </div>
        </div>
        <div className={'flex flex-col items-center gap-10 mb-28 text-center tablet:mx-3'}>
            <h1 className={'font-bold text-3xl'}>Hope you enjoyed New Habits!</h1>
            <h2 className={'font-semibold text-3xl'}>Be sure to check out the rest of my projects</h2>
            <div className={'flex flex-row gap-12 items-center'}>
                <Link href="/Projects"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Back to Projects</button></Link>
                <Link href="/MAS"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Next Project</button></Link>
            </div>
      </div>
    </main>
    <Footer />
    </>
  )
}