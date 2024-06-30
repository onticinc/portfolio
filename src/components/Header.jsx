import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

// Define all SVG icons here
function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavItem({ href, children }) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block p-3 hover:bg-zinc-400">
        {children}
      </Popover.Button>
    </li>
  );
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center bg-white/90 p-3 rounded-lg text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <div className="m-1">
          <ChevronDownIcon className="h-auto w-4 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        </div>
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top bg-zinc-100 p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center bg-zinc-300 p-3 justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-10 w-10 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-xl font-medium text-zinc-800 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6 bg-zinc-300">
              <ul className="divide-y-1 -my-2 divide-zinc-100 text-xl text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/software">Software</MobileNavItem>
                <MobileNavItem href="/audio">Audio</MobileNavItem>
                <MobileNavItem href="/podcast">Podcast</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function NavItem({ href, children }) {
  const { pathname } = useRouter();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-purple-500 dark:text-orange-500"
            : "hover:text-orange-500 dark:hover:text-orange-500"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 dark:from-orange-400/0 dark:via-orange-500 dark:to-indigo-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation(props) {
  return (
    <div className="relative shadow p-1 min-w-fit hidden lg:block bg-zinc-200 dark:bg-zinc-700 dark:border-zinc-700/40 -ml-1">
      <div className="dark:bg-zinc-700 rounded-sm justify-center">
        <nav {...props}>
          <ul className="flex bg-zinc-100 rounded-lg  p-3 text-sm font-medium text-zinc-800 shadow-sm shadow-zinc-800/5 backdrop-blur dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/software">Software</NavItem>
            <NavItem href="/podcast">Podcast</NavItem>
            <NavItem href="/audio">Audio</NavItem>
          </ul>
        </nav>
      </div>
      </div>
  );
}

function ModeToggle() {
  useEffect(() => {
    const disableTransitionsTemporarily = () => {
      document.documentElement.classList.add("[&_*]:!transition-none");
      window.setTimeout(() => {
        document.documentElement.classList.remove("[&_*]:!transition-none");
      }, 0);
    };

    const toggleMode = () => {
      disableTransitionsTemporarily();

      const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const isSystemDarkMode = darkModeMediaQuery.matches;
      const isDarkMode = document.documentElement.classList.toggle("dark");

      if (isDarkMode === isSystemDarkMode) {
        delete window.localStorage.isDarkMode;
      } else {
        window.localStorage.isDarkMode = isDarkMode;
      }
    };

    const button = document.getElementById('mode-toggle-button');
    button.addEventListener('click', toggleMode);

    return () => {
      button.removeEventListener('click', toggleMode);
    };
  }, []);

  return (
    <div className="p-1">
      <button
        type="button"
        id="mode-toggle-button"
        aria-label="Toggle dark mode"
        className="group rounded-lg bg-zinc-100 p-3 backdrop-blur transition dark:bg-zinc-800/90 "
      >
        <SunIcon className="h-6 w-6 animate-pulse fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-yellow-400 [@media(prefers-color-scheme:dark)]:stroke-orange-200 [@media(prefers-color-scheme:dark)]:group-hover:fill-orange-500 [@media(prefers-color-scheme:dark)]:group-hover:stroke-orange-300" />
        <MoonIcon className="hidden h-6 w-6 animate-pulse fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-orange-500" />
      </button>
    </div>
  );
}

export function Header() {
  const { pathname } = useRouter();
  const isHomePage = pathname === "/";
  const headerRef = useRef();
  const isInitial = useRef(true);

  useEffect(() => {
    isInitial.current = false;
  }, []);

  return (
    <header className="pointer-events-none relative">
      <div ref={headerRef} className="h-16 lg:-ml-3 lg:-mr-4">
        <div className="m-4 grid grid-cols-2 gap-2">
          <div className="col-span-1">
            <MobileNavigation className="pointer-events-auto md:hidden" />
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
          </div>
          <div className="pointer-events-auto col-span-1 place-self-end">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
