'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid"

interface ModalNewBoardProps {
    open: boolean
    setOpen: (open: boolean) => void
    // Define any props you want to pass to the modal here
}

export default function ModalNewBoard({ open, setOpen }: ModalNewBoardProps) {
    // const [open, setOpen] = useState(true)

    return (
        <div>
            {/* <button
                onClick={() => setOpen(true)}
                className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10 dark:bg-white/10 dark:text-white dark:inset-ring dark:inset-ring-white/5 dark:hover:bg-white/20"
            >
                Open dialog
            </button> */}
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in dark:bg-gray-900/50"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-sm sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95 dark:bg-gray-800 dark:outline dark:-outline-offset-1 dark:outline-white/10"
                        >
                            <div>
                                <div className="mx-auto flex rounded-full justify-between  dark:bg-green-500/10">
                                    <div className="flex space-x-2">
                                        <PlusIcon aria-hidden="true" className="size-6 text-gray-600 dark:text-green-400" />
                                        <h2 className="font-semibold">Create New Board</h2>
                                    </div>
                                    <button className="self-end cursor-pointer" onClick={() => setOpen(false)}>
                                        <XMarkIcon aria-hidden="true" className="size-6 text-gray-600 dark:text-green-400" />
                                    </button>
                                </div>
                                <div className="mt-3 sm:mt-5">
                                    {/* <DialogTitle as="h3" className="text-base font-semibold text-gray-900 dark:text-white">
                                        Payment successful
                                    </DialogTitle> */}
                                    {/* <div className="mt-2">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.
                                        </p>
                                    </div> */}

                                    <div className="mt-2">
                                        <label htmlFor="board-name" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                                            Board Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="board-name"
                                                name="board-name"
                                                type="text"
                                                placeholder="e.g. Marketing Campaign"
                                                className="block w-full rounded-md bg-white px-3 py-1.5 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:outline-gray-200 sm:text-sm/6 dark:bg-white/5 dark:text-gray-300 dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500 dark:disabled:bg-white/10 dark:disabled:text-gray-500 dark:disabled:outline-white/5"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-6">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                                >
                                    Create Board
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
