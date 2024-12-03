import BGSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";
import { FormInput } from "./components/step-one/form-input";

function App() {
  return (
    <div className="relative pt-8 px-4 h-screen">
      <div className="flex gap-4 items-center justify-center w-full mb-8">
        <div className="flex items-center justify-center rounded-full text-center font-bold w-8 h-8 bg-primary-light-blue text-primary-marine-blue">
          1
        </div>
        <div className="flex items-center justify-center rounded-full text-center font-bold w-8 h-8 border border-neutral-white text-neutral-white">
          2
        </div>
        <div className="flex items-center justify-center rounded-full text-center font-bold w-8 h-8 border border-neutral-white text-neutral-white">
          3
        </div>
        <div className="flex items-center justify-center rounded-full text-center font-bold w-8 h-8 border border-neutral-white text-neutral-white">
          4
        </div>
      </div>
      <main className="flex w-full bg-neutral-white rounded py-8 px-6">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-2xl text-primary-marine-blue">
            Personal info
          </h1>
          <h2 className="text-xl text-neutral-cool-gray">
            Please provide your name, email address, and phone number.
          </h2>
          <form className="flex flex-col gap-4" action="">
            <FormInput label="Name" placeholder="e.g. Stephen King" />
            <FormInput
              label="Email Address"
              placeholder="e.g. stephenking@lorem.com"
            />
            <FormInput label="Phone Number" placeholder="e.g. +1 234 567 890" />
          </form>
        </div>
      </main>
      <img
        className="absolute top-0 left-0 right-0 -z-10 w-full sm:hidden"
        src={BGSidebarMobile}
        alt=""
      />
      <button className="absolute bottom-4 right-4 bg-primary-marine-blue text-neutral-white px-4 py-3 rounded">
        Next Step
      </button>
    </div>
  );
}

export default App;
