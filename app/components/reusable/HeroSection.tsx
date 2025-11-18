import Image from "next/image";
import React from "react";
import clsx from "clsx";

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  title: string;
  subtitle?: string;
  description?: string;
  imgurl?: string;
  sectionStyles?: string;
  Heroimageurl?: string;
  button?: boolean;
  size?: "sm" | "md" | "lg";
  buttonLabel?: string;
  variant?: "primary" | "outline" | "ghost" | "destructive";
}
export const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Welcome to Our Website",
  subtitle = "Your Success Starts Here",
  description = "Discover innovative solutions and expert insights to help you achieve your goals. Join us on a journey to success and excellence.",
  buttonLabel = "Learn More",
  Heroimageurl = "/me.jpg",
  button = true,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const sectionBaseStyles =
    "h-1/2 w-full bg-teal-800 px-7 py-7 flex flex-row justify-between gap-7 items-center ";

  const leftTextStyles = " w-1/2 h-full";

  const rightImgStyles = "bg-green-600 w-1/2 h-full";

  const titleStyles = "text-yellow-600 font-semibold text-4xl pt-2 ";
  const buttonStyles =
    "mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition";

  const buttonVariantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-white text-white hover:bg-white hover:text-black bg-none",
    ghost: "text-gray-700 hover:bg-gray-200 bg-none",
    destructive: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <section className={clsx(sectionBaseStyles, className)} {...props}>
      {/* Left Text */}
      <div className={leftTextStyles}>
        {/* title */}
        {title && <h1 className={titleStyles}> {title} </h1>}
        {/* subtitle */}
        <h3 className="text-gray-900 font-medium text-2xl  pt-2">
          {" "}
          Sure Plug for all digital innovations
        </h3>

        {/* description */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum magni
          laborum rerum animi id perferendis repellendus. Voluptatem modi
          explicabo tenetur odit atque, omnis est reiciendis incidunt laborum
          distinctio! Officiis, eligendi!
        </p>

        {/* button with react-icons arrow */}

        {button && (
          <button
            className={clsx(
              buttonStyles,
              buttonVariantStyles[variant],
              sizeStyles[size]
            )}
          >
            {" "}
            {buttonLabel}{" "}
          </button>
        )}
      </div>

      {/* Right Img */}
      <div className={rightImgStyles}>
        Left
        <Image src={Heroimageurl} width={400} height={500} alt="Hero Image" />
      </div>
    </section>
  );
};
