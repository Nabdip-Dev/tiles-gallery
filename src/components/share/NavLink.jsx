import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {

    const pathname = usePathname();
    console.log(pathname, 'PathName')
    const isActive = href === pathname;
    return (
        <Link href={href} className={`${isActive ? "border-1 border-red-400" : "  "}`}>
            {children}
        </Link>
    );
};

export default NavLink;