"use client"
import { useRouter } from "next/navigation"
const Refresh = () => {

  const router = useRouter();

  return (
    <div>
      <h1>Refresh Page</h1>
      <button onClick={() => router.refresh}>Refresh</button>
    </div>
  )
}

export default Refresh
