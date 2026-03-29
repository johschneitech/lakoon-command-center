'use server';

import { createClient } from "@/utils/supabase/client";
import { createClient as clientServer } from "@/utils/supabase/server";
import { createClient as serverClient } from "@supabase/supabase-js";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const getCurrentUser = async () => {
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

export const signOut = async (router: AppRouterInstance) => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
}

export const inviteUser = async (email: string) => {
    console.log("Inviting user with email:", email)
    const supabase = serverClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
            },
        }
    )
    // const supabase = serverClient(await cookies());
    const res = await supabase.auth.admin.inviteUserByEmail(email);
    console.log(res);
}

export async function handleSubmit(state: { message: string }, formData: FormData) {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = clientServer(await cookies())
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.error("Error signing in:", error.message);
        // return NextResponse.json({ error: error.message }, { status: 500 });
        return { ...state, message: error.message }
    } else {
        console.log("User signed in successfully");
        // return NextResponse.redirect(new URL('/dashboard', 'http://localhost:3000/login'))
        redirect('/dashboard')
    }
}