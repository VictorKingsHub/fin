"use client"
import { useRouter } from "next/navigation"
import { Button } from "../../reusable/Button";


export const Action = () =>{

    const router = useRouter();
    return (
<section className="flex flex-col items-center justify-center space-y-4 mt-8"> 

<Button onClick={() => router.push("/about")} label="Click Me" variant={"primary"} size={"md"} fullWidth={false}/>

</section>
    )
}