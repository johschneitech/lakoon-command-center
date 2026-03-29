import { createClient } from "@/utils/supabase/client";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const getCurrentUser = async () => {
    const supabase = createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    return user;
}

export const signOut = async (router: AppRouterInstance) => {
    console.log("Signing out...")
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/login');
}

export const inviteUser = async (email: string) => {
    console.log("Inviting user with email:", email)
    const supabase = createClient();
    const res = await supabase.auth.admin.inviteUserByEmail(email);
    console.log(res);
}