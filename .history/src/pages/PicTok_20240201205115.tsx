import Image from 'next/image'
import NavBar from '@/components/navBar'
import Footer from '@/components/footer'
import Head from 'next/head'
import Link from 'next/link'
import PictokStyleguide from '@/components/pictokStyleguide'

export default function PicTok() {
  return (
    <>
    <Head>
        <title>Sierra Laurent | PicTok</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <NavBar /> 
    <main className={`flex min-h-screen flex-col items-center text-black`}>
        <Image
            className={'py-8 hover:scale-110 transition-transform'}
            src='/images/PicTok/PicTokLogo.png'
            width={150}
            height={150}
            alt='Hops and Pigs Logo'
        />
        <Image
            className={' w-full'}
            src='/images/PicTok/PicTok-MockUpLong.png'
            width={600}
            height={600}
            alt='Can Mock Up'
        />
        <div className={'flex flex-col max-w-6xl p-12 gap-10 items-center m-20 mx-48'}>
            <div className={'flex flex-col gap-5 text-center'}>
                <h1 className={'text-5xl font-bold'}>PicTok</h1>
                <h2 className={'text-2xl'}>Photosharing app for the visually impaired community.</h2>
                <Link href="https://pictok.vercel.app/"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>View App</button></Link>
            </div>
            <div className={'flex flex-row gap-8 items-center m-8'}>
                <div className={'text-right '}>
                    <h1 className={'text-3xl font-semibold'}>Role</h1>
                    <h1>Graphic Designer / Accessibility Researcher</h1>
                </div>
                <div>
                    <h1 className={'text-3xl font-semibold'}>Timeline</h1>
                    <h1>September 2023 - December 2023 (5 months)</h1>
                </div>
            </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Summary</h1>
        </div>
        <p className={'text-lg'}>PicTok is an app designed for individuals with visual impairments, enabling them to share and experience photos through
        the conversion of images into sound using advanced AI systems for object recognition. This project for school challenged our teams to integrate artificial intelligence (AI)  into a web app that can help bring insight or benefits to under-represented or disadvantaged communities/societies. 
        To bring value to the designated community of visually impaired individuals, the web app has many standards to meet, including but not limited to accessibility, inclusiveness, and uniqueness.</p>
        
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Ideation</h1>
        </div>
        <p className={'text-lg'}>Starting at the very beginning, the idea of PikTok, was overall too broad and too vague, starting with: 
            “an app for blind people that can share photos with other blind people”
            But it was something. After a session of deliberation, all 8 team members were able to put their ideas together to create a good, solid idea for an app. Nothing too broad, as it was inclusive and descriptive: “A photo sharing app that targets blind users by utilizing image recognition 
            technology to enhance the experience of photo sharing for visually impaired users with sound cues and text to speech.”</p>
            <div className={'flex flex-row items-center gap-20 tablet:flex-col tablet:gap-10'}>
            <Image
                className={'py-3 shadow-2xl '}
                src='/images/PicTok/PicTok-Screens/ideation01.png'
                width={100}
                height={100}
                alt='Ideation of PicTok'
            />
            <Image
                className={'py-3 shadow-2xl'}
                src='/images/PicTok/PicTok-Screens/ideation02.png'
                width={100}
                height={100}
                alt='Ideation of PicTok'
            />
            <Image
                className={'py-3 shadow-2xl'}
                src='/images/PicTok/PicTok-Screens/ideation03.png'
                width={100}
                height={100}
                alt='Ideation of PicTok'
            />
        </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Process</h1>
            <h2 className={'text-2xl'}>Styleguide</h2>
        </div>
        <p className={'text-lg'}>A styleguide is a type of template file consisting of font and layout settings to give a standardized look to certain documents. Starting with a style guide helps begin the project and establish a feel for the design of the app. For PicTok, having a target 
        audience of the visually impaired, establishing a design that works for those with limited vision, and also looks good for those who can see the app was difficult, but not impossible. Making buttons large, and having strong contrast with text and colours was one of the main ways to improve usability.</p>
        <PictokStyleguide />
        <div className={'flex flex-col w-full items-start '}>
            <h2 className={'text-2xl '}>Low Fidelity Mock-Up (LoFi)</h2>
            </div>
            <div className={'flex flex-row items-center gap-20 tablet:flex-col tablet:gap-10'}>
            <Image
                className={'shadow-2xl '}
                src='/images/PicTok/PicTok-Screens/lofi01.png'
                width={100}
                height={100}
                alt='Ideation of PicTok'
            />
            <Image
                className={'shadow-2xl'}
                src='/images/PicTok/PicTok-Screens/lofi02.png'
                width={100}
                height={100}
                alt='Ideation of PicTok'
            />
            <Image
                className={'shadow-2xl'}
                src='/images/PicTok/PicTok-Screens/lofi03.png'
                width={100}
                height={100}
                alt='Ideation of PicTok'
            />
        </div>
        <p className={'text-lg'}>Creating the LoFi mockup was one of the first major steps in the journey of designing the app. Outlining and creating the layout of the app is important so you can focus on the major aspects and not so much on the intricate details.</p>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-2xl'}>High-Fidelity Mock-Up (HiFi)</h1>
        </div>
        <div className={'flex flex-row items-center gap-20 tablet:flex-col tablet:gap-10'}>
            <Image
                className={'shadow-2xl '}
                src='/images/PicTok/PicTok-Screens/Home.png'
                width={100}
                height={100}
                alt='Ideation of PicTok'
            />
            <Image
                className={'shadow-2xl'}
                src='/images/PicTok/PicTok-Screens/FriendsList.png'
                width={100}
                height={100}
                alt='Ideation of PicTok'
            />
            <Image
                className={'shadow-2xl'}
                src='/images/PicTok/PicTok-Screens/Camera-Send.png'
                width={100}
                height={100}
                alt='Ideation of PicTok'
            />
        </div>
        <p className={'text-lg'}>After the LoFi is finished, it is then transformed into the HiFi, a detailed, workable version. Adding images, colours, the appropriate fonts and such adds to the mock-up and allows the developer to accurately create the vision for the app. It will also be prototyped out, so it works as the real app would with buttons being pressable and animations popping up.</p>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Challenges</h1>
        </div>
        <p className={'text-lg'}>Designing and creating an app for use by the visually impaired community was going to be a challenge, with many barriers. Not only is there the challenge of creating an accessible app for everyone, but the main focus is for the visually impaired, a market that encounters inaccessibility for many everyday things, including many applications and websites.</p>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-2xl font-semibold'}>01. Understanding the Target Audience</h1>
            <p className={'text-lg'}>Resolved with a User Persona</p>
        </div>
        <p className={'text-lg'}>Primary User Persona</p>
        <Image
        className={'shadow-2xl'}
        src='/images/PicTok/userPersona01.png'
        width={800}
        height={400}
        alt='PicTok Styleguide'
            />
        <p className={'text-lg'}>Secondary User Persona</p>
        <Image
        className={'shadow-2xl'}
        src='/images/PicTok/userPersona02.png'
        width={800}
        height={400}
        alt='PicTok Styleguide'
            />
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-2xl font-semibold'}>02. Creating a Simple Navigation/Flow</h1>
            <p className={'text-lg'}>Resolved with a User Flow</p>
        </div>
        <Image
        className={'shadow-2xl'}
        src='/images/PicTok/userFlow.png'
        width={800} 
        height={400}
        alt='PicTok Styleguide'
            />
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Results</h1>
        </div>
        <h1 className={'font-bold text-3xl'}>Try it Yourself!</h1>
        <Link href="https://pictok.vercel.app/"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg  hover:scale-110 transition-transform'}>View App</button></Link>
        <p className={'text-lg'}>Getting a wonderful, simple app that can bring the experience of photos to those who may not be familiar with it was a fun journey, with many lessons learned. PicTok is a movement towards inclusivity, with the mission to provide a platform where every image tells a story meant for everyone.</p>
        <div className={'flex flex-row items-center gap-20'}>
            <Image
                className={'shadow-2xl rounded-2xl'}
                src='/images/PicTok/PicTok-Screens/Home.png'
                width={200}
                height={200}
                alt='Ideation of PicTok'
            />
        </div>
        <div className={'flex flex-col w-full items-start gap-6'}>
            <h1 className={'text-3xl font-semibold'}>Extras</h1>
        </div>
        <div className={'flex flex-row items-center gap-20'}>
            <Image
                className={'shadow-2xl'}
                src='/images/PicTok/pictok-cards.png'
                width={400}
                height={400}
                alt='pictok business cards'
            />
        </div>
        </div>
        <div className={'flex flex-col items-center gap-10 mb-28 text-center'}>
            <h1 className={'font-bold text-3xl'}>Hope you enjoyed PicTok!</h1>
            <h2 className={'font-semibold text-3xl'}>Be sure to check out the rest of my projects</h2>
            
            
            <div className={'flex flex-row gap-12 items-center'}>
                <Link href="/Projects"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Back to Projects</button></Link>
                <Link href="/NewHabits"><button className={'bg-Sage text-white p-3 text-2xl rounded-lg hover:bg-Emerald hover:scale-110 transition-transform'}>Next Project</button></Link>
            </div>
      </div>
    </main>
    <Footer />
    </>
  )
}