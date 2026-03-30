"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { guidesList } from "./guides-list";
import css from "./guide-sidebar.module.scss";

export const GuideSidebar: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className={css.sidebar}>
      <p className={css.title}>Guides</p>
      <nav className={css.nav}>
        {guidesList.map((guide) => {
          const isActive = pathname === guide.href;
          return (
            <Link
              key={guide.href}
              href={guide.href}
              className={clsx(css.item, isActive && css.active)}
            >
              <span className={css.itemTitle}>{guide.title}</span>
              <span className={css.itemDesc}>{guide.description}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
