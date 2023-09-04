import { useRouter } from "next/router";

function Footer() {
    const router = useRouter()
    const redirectRegister = () => {
        router.push("/login")
    }
  return (
    <footer
      className="flex flex-col items-center text-center text-white bg-[#884E85]"
    >
      <div className="container p-6">
        <div className="">
          <p className="flex items-center justify-center">
            <span className="mr-4">Register for free</span>
            <button
              onClick={redirectRegister}
              type="button"
              className="shadow-none inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-[#764373]"
            >
              Sign up!
            </button>
          </p>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div
        className="w-full p-4 text-center"
        style={{backgroundColor:"#00000033"}}
      >
        © 2023 Copyright:
        <a className="text-white" href="#">
          Pc Builder Bangladesh
        </a>
      </div>
    </footer>
  );
}

export default Footer;
