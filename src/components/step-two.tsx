import IconArcade from "../assets/images/icon-arcade.svg";
import IconAdvanced from "../assets/images/icon-advanced.svg";
import IconPro from "../assets/images/icon-pro.svg";
export function StepTwo() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-2xl text-primary-marine-blue">
        Select your plan
      </h1>
      <h2 className="text-lg text-neutral-cool-gray">
        You have the option of monthly or yearly billing.
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-3 p-4 rounded-lg bg-neutral-alabaster border border-primary-purplish-blue">
          <img src={IconArcade} alt="" />
          <div className="flex flex-col">
            <span className="font-bold text-primary-marine-blue">Arcade</span>
            <span className="text-neutral-cool-gray">$9/mo</span>
          </div>
        </div>
        <div className="flex gap-3 p-4 rounded-lg border border-neutral-cool-gray">
          <img src={IconAdvanced} alt="" />
          <div className="flex flex-col">
            <span className="font-bold text-primary-marine-blue">Advanced</span>
            <span className="text-neutral-cool-gray">$12/mo</span>
          </div>
        </div>
        <div className="flex gap-3 p-4 rounded-lg border border-neutral-cool-gray">
          <img src={IconPro} alt="" />
          <div className="flex flex-col">
            <span className="font-bold text-primary-marine-blue">Pro</span>
            <span className="text-neutral-cool-gray">$15/mo</span>
          </div>
        </div>
        <div className="w-full flex items-center justify-center rounded-lg gap-6 py-4 bg-neutral-alabaster">
            <span className="text-primary-marine-blue font-bold">Monthly</span>
            <div className="w-[38px] h-[18px] rounded-lg bg-primary-marine-blue relative">
              <div className="h-3 w-3 rounded-full bg-neutral-white absolute top-1/2 -translate-y-1/2 left-1"></div>
            </div>
            <span className="text-neutral-cool-gray font-semibold">Yearly</span>
        </div>
      </div>
    </div>
  );
}
