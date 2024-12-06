import IconCheckmark from "../assets/images/icon-checkmark.svg";
export function StepThree() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="font-bold text-2xl text-primary-marine-blue">
        Pick add-ons
      </h1>
      <h2 className="text-lg text-neutral-cool-gray">
        Add-ons help enhance your gaming experience.
      </h2>
      <div className="flex flex-col gap-4">
        {/* Serviço selecionado */}
        <div className="flex items-center gap-3 p-4 rounded-lg bg-neutral-alabaster border border-primary-purplish-blue">
          <div className="w-5 h-5 rounded bg-primary-purplish-blue flex items-center justify-center">
            <img src={IconCheckmark} alt="" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-primary-marine-blue">
              Online Service
            </span>
            <span className="text-neutral-cool-gray">
              Acess to multiplayer games
            </span>
          </div>
          <span className="text-primary-purplish-blue font-medium text-sm ml-auto">
            +$1/mo
          </span>
        </div>
        {/* Serviço não selecionado */}
        <div className="flex items-center gap-3 p-4 rounded-lg border border-neutral-cool-gray">
          <div className="w-5 h-5 rounded flex items-center justify-center border border-neutral-cool-gray">
            <img src={IconCheckmark} alt="" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-primary-marine-blue">
              Larger Storage
            </span>
            <span className="text-neutral-cool-gray">
              Extra 1TB of cloud save
            </span>
          </div>
          <span className="text-primary-purplish-blue font-medium text-sm ml-auto">
            +$2/mo
          </span>
        </div>
      </div>
    </div>
  );
}
