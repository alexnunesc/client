"use client";
import { useTheme } from '@/context/ThemeContext';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton } from '@headlessui/react';
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navigation = [
  { name: 'Home', href: '#header', current: false },
  { name: 'About', href: '#about', current: false },
  { name: 'Projects', href: '#project', current: false },
  { name: 'Contacts', href: '#contact', current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  

  return (
    <Disclosure id='header' as="nav" className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Image
              alt="Your Company"
              width={50}
              height={50}
              src="/images/logo01dark.png"
              className="h-8 w-auto"
            />
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 ' : 'hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              onClick={toggleTheme}
              className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Toggle theme</span>
              {theme === "dark" ? (
                <SunIcon aria-hidden="false" className="h-6 w-6 text-yellow-500" />
              ) : (
                <MoonIcon aria-hidden="false" className="h-6 w-6 text-gray-800" />
              )}
            </button>
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white">
                  <Image
                    alt="Profile"
                    width={50}
                    height={50}
                    src="/images/profile.jpeg"
                    className="h-8 w-8 rounded-full"
                  />
                </MenuButton>
              </div>
            </Menu>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current ? 'bg-gray-900 ' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
