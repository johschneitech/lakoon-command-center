'use client';
import Dashboard from "@/components/NavBar";
import { getCurrentUser } from "@/lib/authentication";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { createClient } from '@/utils/supabase/server'
// import { cookies } from 'next/headers'

export default function Home() {
  // const [email, setEmail] = useState('');
  // const router = useRouter();

  // useEffect(() => {
  //   getCurrentUser().then(user => {
  //     console.log(user)

  //     if (email) {
  //       router.push('/dashboard')
  //     } else {
  //       router.push('/login')
  //     }
  //   })
  // }, [])

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        {/* {

          email ? ( <Dashboard /> ) : (  )
        } */}

      </main>
    </div>
  );
}
