import { Action } from "./components/navigation/routing/Action";
import { Button } from "./components/reusable/Button";
import { HeroSection } from "./components/reusable/HeroSection";

export default function Home() {

  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button fullWidth={false} label={"Submit"} variant={"primary"} size={"lg"}   />

      <HeroSection title="Best Selling Digital Product" buttonLabel=" Contact Us" variant="outline" size="lg"/>

      <Action />

      
    </div>
  );
}
