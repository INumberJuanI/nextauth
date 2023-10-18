import React from 'react'
import { NavigationMenuLink } from '../ui/navigation-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils';

type Props = {
    children: React.ReactNode;
    className?: string;
    title: string;
    href: string;
};
const NavItem = ({ children, className, title, href }: Props) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default NavItem