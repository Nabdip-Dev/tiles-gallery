import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {

    const pathname = usePathname();
    console.log(pathname, 'PathName')
    const isActive = href === pathname;
    return (
        <Link href={href} className={`${isActive ? "border-1 text-[#fb5c00] border-[#fb5c00]" : " text-[#331300b6] bg-[#f5d7c57d] hover:bg-[#fb5c009d]"}`}>
            {children}
        </Link>
    );
};

export default NavLink;