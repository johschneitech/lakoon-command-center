'use client'
import Link from "next/link";
import { handleSubmit } from "../actions";
import { useActionState } from "react";
import { useFormState } from "react-dom";


export default function Login() {
    const initialState = {
        message: '',
    }
    const [state, action, pending] = useActionState(handleSubmit, initialState)

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-accent uppercase dark:text-white">
                    Lakoon
                </h2>
                <h3 className="mt-2 text-center text-sm font-bold text-bermuda text-gray-400 tracking-tight dark:text-white">
                    Command Center
                </h3>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {/* <form className="space-y-6"> */}
                <form action={action} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-900 dark:text-gray-100 uppercase font-semibold">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm/6 text-gray-900 dark:text-gray-100 uppercase font-semibold">
                                Password
                            </label>

                        </div>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                            />
                        </div>
                    </div>

                    <div className="border-2 rounded-4xl text-center bg-red-400 text-white">
                        {state.message}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={pending}
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                        >
                            Sign in
                        </button>
                    </div>
                </form>

                <p className="mt-2 text-center text-sm/6 text-gray-500 dark:text-gray-400">

                    <Link
                        href="/forget-password"
                        className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                        Forgot password
                    </Link>
                </p>
            </div>
        </div>
        // </>
    )
}
