
'use client';
import { signOut } from "@/lib/authentication"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowRightEndOnRectangleIcon, EnvelopeIcon, PlusIcon } from "@heroicons/react/20/solid"
import { Bars3Icon, BellIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from "next/navigation";
import ModalInvite from "./ModalInvite";
import { useState } from "react";
import ModalNewBoard from "./ModalNewBoard";
// import { useRouter } from "next/dist/client/components/navigation";

export default function NavBar() {
    const router = useRouter();
    const [openInvite, setOpenInvite] = useState<boolean>(false);
    const [openNewBoard, setOpenNewBoard] = useState<boolean>(false);

    return (
        <>
            <ModalInvite open={openInvite} setOpen={setOpenInvite} />
            <ModalNewBoard open={openNewBoard} setOpen={setOpenNewBoard} />

            <Disclosure
                as="nav"
                className="relative bg-white shadow-sm dark:bg-gray-800/50 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10"
            >
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <h2 className="text-center text-sm font-bold tracking-tight text-accent uppercase dark:text-white">
                                        Lakoon
                                    </h2>
                                    <h3 className="text-center text-xs font-bold text-bermuda text-gray-400 tracking-tight dark:text-white">
                                        Command Center
                                    </h3>
                                </div>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-20 w-100">
                                {/* Current: "border-indigo-600 text-gray-900 dark:border-indigo-500 dark:text-white", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:text-white" */}
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Search cards across all boards"
                                        className="w-120 rounded-full bg-white px-4 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-gray-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-5">
                            <button
                                type="button"
                                className="inline-flex cursor-pointer items-center gap-x-1.5 rounded-full bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                                onClick={() => setOpenInvite(true)}
                            >
                                Invite
                                <EnvelopeIcon aria-hidden="true" className="-mr-0.5 size-5" />
                            </button>
                            <button
                                type="button"
                                className="inline-flex cursor-pointer items-center gap-x-1.5 rounded-full bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                                onClick={() => setOpenNewBoard(true)}
                            >
                                New Board
                                <PlusIcon aria-hidden="true" className="-mr-0.5 size-5" />
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-1.5 rounded-full bg-red-400 px-2.5 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500 cursor-pointer"
                                onClick={() => signOut(router)}
                            >
                                Sign out
                                <ArrowRightEndOnRectangleIcon aria-hidden="true" className="-mr-0.5 size-5" />
                            </button>
                        </div>
                        <div className="-mr-2 flex items-center sm:hidden">
                            {/* Mobile menu button */}
                            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-600 dark:hover:bg-white/5 dark:hover:text-white dark:focus:outline-indigo-500">
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                            </DisclosureButton>
                        </div>
                    </div>
                </div>
                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 pt-2 pb-3">
                        {/* Current: "bg-indigo-50 border-indigo-600 text-indigo-700 dark:border-indigo-500 dark:bg-indigo-600/10 dark:text-indigo-400", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white" */}
                        {/* <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-indigo-600 bg-indigo-50 py-2 pr-4 pl-3 text-base font-medium text-indigo-700 dark:border-indigo-500 dark:bg-indigo-600/10 dark:text-indigo-400"
                    >
                        Dashboard
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
                    >
                        Team
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
                    >
                        Projects
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="#"
                        className="block border-l-4 border-transparent py-2 pr-4 pl-3 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 dark:text-gray-300 dark:hover:border-white/20 dark:hover:bg-white/5 dark:hover:text-white"
                    >
                        Calendar
                    </DisclosureButton> */}
                    </div>
                    <div className="border-t border-gray-200 pt-4 pb-3 dark:border-white/10">
                        <div className="flex items-center px-4">
                            {/* <div className="shrink-0">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="size-10 rounded-full bg-gray-100 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10"
                                />
                            </div> */}
                            {/* <div className="ml-3">
                                <div className="text-base font-medium text-gray-800 dark:text-white">Tom Cook</div>
                                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">tom@example.com</div>
                            </div> */}
                            {/* <button
                                type="button"
                                className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 dark:hover:text-white dark:focus:outline-indigo-500"
                            >
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">View notifications</span>
                                <BellIcon aria-hidden="true" className="size-6" />
                            </button> */}
                        </div>
                        {/* <div className="mt-3 space-y-1">
                            <DisclosureButton
                                as="a"
                                href="#"
                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                            >
                                Your profile
                            </DisclosureButton>
                            <DisclosureButton
                                as="a"
                                href="#"
                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                            >
                                Settings
                            </DisclosureButton>
                            <DisclosureButton
                                as="a"
                                href="#"
                                className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white"
                            >
                                Sign out
                            </DisclosureButton>
                        </div> */}
                    </div>
                </DisclosurePanel>
            </Disclosure >
        </>
    )
}
