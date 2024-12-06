import BGSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";
import { StepFour } from "./components/step-four";

import { StepOne } from "./components/step-one";
import { StepThree } from "./components/step-three";
import { StepTwo } from "./components/step-two";

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
        {/* <StepOne /> */}
        {/* <StepTwo /> */}
        {/* <StepThree /> */}
        <StepFour />
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
