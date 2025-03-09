import SignIn from "@/components/sign-in";

export default function Home() {
  return (
    <div className="bg-gray-800 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="text-white flex flex-col gap-8 row-start-2 items-center">
        <span className="text-5xl">
          Chatting with Friends
        </span>
        <SignIn />
        {/* <button
          className="inline-block items-center bg-gray-700 px-5 py-3 rounded-lg"
        >Login with KeyCloak</button> */}
      </main>
    </div>
  );
}
