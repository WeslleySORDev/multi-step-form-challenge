import IconThankyou from "../assets/images/icon-thank-you.svg";
export function LastStep() {
  return (
    <div className="flex flex-col gap-3 items-center py-12">
      <img src={IconThankyou} alt="" />
      <h1 className="font-bold text-2xl text-primary-marine-blue">
        Thank you!
      </h1>
      <h2 className="text-lg text-center text-neutral-cool-gray">
        Thanks for confirming your subscription!
        <br />
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loremgaming.com
      </h2>
    </div>
  );
}
