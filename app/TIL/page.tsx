import { TILPosts } from 'app/components/posts'

export const metadata = {
  title: 'TIL',
  description: 'Today I Learned',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Today I Learned 💡</h1>
      <TILPosts />
    </section>
  )
}
