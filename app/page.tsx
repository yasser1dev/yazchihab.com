import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Yasser Chihab
      </h1>
      <p className="mb-4">
        {`Senior DevOps/Cloud engineer from Morocco 🇲🇦, passionate about building cloud based high available, 
          cost effective, secure and automated infrastructures ☁️. 
          Moreover I'm passionate about anything related to theoritical physics and cosmology 🌌`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
