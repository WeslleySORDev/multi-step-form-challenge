export function StepFour() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-2xl text-primary-marine-blue">
        Finishing up
      </h1>
      <h2 className="text-lg text-neutral-cool-gray">
        Double-check everything looks OK before confirming
      </h2>
      <div className="flex flex-col gap-4 px-4 py-5 rounded-lg bg-neutral-magnolia">
        {/* Selected Plan */}
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="font-medium text-primary-marine-blue">
              Arcade (Monthly)
            </span>
            <span className="text-neutral-cool-gray underline">Change</span>
          </div>
          <span className="font-bold text-primary-marine-blue ml-auto">
            $9/mo
          </span>
        </div>
        <div className="w-full h-[1px] bg-neutral-light-gray"></div>
        {/* Add-ons */}
        <div className="flex items-center">
          <span className="text-neutral-cool-gray">Online Service</span>
          <span className="font-base text-primary-marine-blue ml-auto">
            $1/mo
          </span>
        </div>
        <div className="flex items-center">
          <span className="text-neutral-cool-gray">Larger Storage</span>
          <span className="font-base text-primary-marine-blue ml-auto">
            $2/mo
          </span>
        </div>
      </div>
      {/* Total */}
      <div className="flex items-center px-4">
        <span className="text-neutral-cool-gray">Total (per month)</span>
        <span className="font-bold text-primary-purplish-blue ml-auto">
          $12/mo
        </span>
      </div>
    </div>
  );
}
