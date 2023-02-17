import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'





export default function Speaking() {
  return (
    <>
      <Head>
        <title>Music - Jacopo</title>
        <meta
          name="description"
          content="I used to sing but then I got a job."
        />
      </Head>
      <SimpleLayout
        title="A snapshot of a parallel universe where I became a professional musician"
        intro="I started playing guitar when I was a teenager, with a band named Control Rum. Then when I moved to Thailand I started singing in hotels, restaurant, bars and events. This is the other side of me."
      >
        <div className="space-y-20">
          
        </div>
      </SimpleLayout>
    </>
  )
}
