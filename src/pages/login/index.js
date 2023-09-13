import NoFooterLayout from "@/layout/NoFooterLayout";
import { signIn } from "next-auth/react";
import { BsGithub, BsGoogle } from "react-icons/bs";
// import { LuMail } from "react-icons/lu";

function LoginPage() {
  return (
    <div className="grid h-screen w-screen place-items-center bg-slate-800 px-4 text-md font-medium">
      <div className="w-full max-w-sm rounded-lg bg-slate-700/30 shadow">
        <div className="px-4 pt-4 md:px-5 md:pt-5 lg:px-6 lg:pt-6">
          <div className="grid gap-y-3">
            <button onClick={()=> signIn("github",{callbackUrl:"http://localhost:3000"})} className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-300 transition hover:text-purple-200">
              <BsGithub />
              Sign in with Github
            </button>
            <button onClick={()=> signIn("google",{callbackUrl:"http://localhost:3000"})} className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-300 transition hover:text-purple-200">
              <BsGoogle />
              Sign in with Google
            </button>
          </div>
        </div>
        {/* <form className="p-4 md:p-5 lg:p-6">
          <div className="my-3 flex items-center px-3">
            <hr className="w-full border-slate-600" />
            <span className="mx-3 text-slate-500">or</span>
            <hr className="w-full border-slate-600" />
          </div>

          <div className="grid gap-y-3">
            <input
              className="focus:border-purple-400 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-100 outline-none transition placeholder:text-slate-400"
              placeholder="email@example.com"
            />
            <button className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 font-bold text-slate-300 transition hover:text-purple-200">
              <LuMail size={20} />
              Sign in with Email
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
}

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <NoFooterLayout>{page}</NoFooterLayout>;
};
