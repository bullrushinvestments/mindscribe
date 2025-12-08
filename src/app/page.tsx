import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MindScribe',
  description: 'MindScribe is an AI-driven mental health and personal finance app that helps users manage stress by providing tailored financial advice based on their mental well-being data.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">MindScribe</h1>
      <p className="mt-4 text-lg">MindScribe is an AI-driven mental health and personal finance app that helps users manage stress by providing tailored financial advice based on their mental well-being data.</p>
    </main>
  )
}
