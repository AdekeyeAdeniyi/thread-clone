import { sidebarLinks } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navigation = ({ linkClass = '', textClass = '' }) => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname == link.route;
        const { route, label, imgURL } = link;

        return (
          <Link
            href={route}
            key={label}
            className={`${linkClass} ${isActive && 'bg-primary-500'}`}
          >
            <Image src={imgURL} alt={label} width={24} height={24} />
            <p className={`${textClass} text-light-1 max-sm:hidden}`}>
              {label.split(/\s+/)[0]}
            </p>
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
