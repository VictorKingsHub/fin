import clsx from "clsx";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  reverse?: boolean;
  className ? : string;
  onButtonCLick ?: () => void;
  center? : boolean;

}

export const HeroSection : React.FC<HeroSectionProps>= ({
    title,
    subtitle,
    description,
    imageSrc,
    reverse = true,
    center = true,
    className,


}) => {


return <section
    className={clsx(
        "w-full  flex items-center  py-16 bg-amber-700",
        reverse ? "flex-row-reverse" : "flex-row",
        className
      )}
>

<div>
    {/* {title && } */}
    <div>{title}</div>
    <div >
        <div className={clsx(reverse ? "bg-amber-400" : "bg-green-500" )}


        
        >Left</div>
        <div className={clsx("bg-teal-600")}>  
            {/* Description */}
            {
            description && <div className={clsx(reverse? "text-3xl" : "text-6xl" )}> {description}</div>
            
            }</div>
    </div>
</div>


</section>;

}