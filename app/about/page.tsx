'use client'
import { Button } from '../components/reusable/Button'
import { useRouter } from 'next/navigation'

const About = () => {

    const router = useRouter();

  return (
    <div>
      <h1>Welcome to about page</h1>
      <Button fullWidth={false} label={"Back"} variant={"outline"} size={"md"} onClick={router.back} />
      <Button fullWidth={false} label={"Refresh"} variant={"outline"} size={"md"} onClick={() => router.refresh} />
    </div>
  )
}

export default About
