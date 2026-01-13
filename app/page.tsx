import { WritingPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <Image
        src="/images/main.jpeg"
        alt="Yasser Chihab"
        className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0 transition-all duration-2000 ease-out"
        unoptimized
        width={160}
        height={160}
        priority
      />
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Yasser Chihab
      </h1>
      <p className="mb-4">
        {`Senior DevOps/Cloud engineer from Morocco 🇲🇦, passionate about building cloud based high available, 
          cost effective, secure and automated infrastructures ☁️. 
          Moreover I'm passionate about anything related to theoritical physics and cosmology 🌌`}
      </p>
      <div className="my-8">
        <WritingPosts />
      </div>
    </section>
  )
}
