"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const Navigation = () => {

    const pathname = usePathname();
const NavLinks = [
    { id: 1, name: "Home", path: "/" },
    {id: 2,  name: "Services", path: "/services" },    
    {id: 3,  name: "About", path: "/about" },
    {id: 4,  name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" },
];

    return (
        <nav className="flex flex-row justify-between py-5 px-10">  
        
        <h1>Navigation Component</h1>
        <h1>
            <ul className="flex flex-row gap-4">
                <li className="cursor-pointer hover:border-bottom "> 
                    {NavLinks.map((link) =>{
                        return (
                            <Link key={link.id} href={link.path} className={clsx(pathname === link.path ? "text-yellow-500": " ", "mx-3 hover:border-bottom") }>  {link.name} </Link>
                        )
                    })}
                     </li>
            </ul>
        </h1>
         </nav>
        )}
