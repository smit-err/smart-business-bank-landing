import { Icons } from "./icons";

export interface PricingDataProps {
  plan_name: string;
  is_popular?: boolean;
  price: string;
  description?: string;
  highlited_text?: string;
  features_list: string[];
}

function Pricing({
  plan_name,
  is_popular,
  price,
  description,
  highlited_text,
  features_list,
}: PricingDataProps) {
  return (
    <div className="w-full bg-white border border-gray-200 shadow-xl rounded-2xl">
      <div className="pt-6 px-6 border-b border-gray-200 pb-8 flex flex-col gap-8 md:p-8">
        <div className="flex flex-col gap-4">
          {/* content */}
          <div className="flex items-center w-full gap-4">
            <p className="flex-1 font-semibold text-lg/7 text-gray-600">
              {plan_name}
            </p>
            {is_popular && (
              <span className="text-sm/5 flex items-center justify-center py-1 px-3 rounded-full border text-violet-700 border-violet-200 bg-violet-50 font-medium">
                Popular
              </span>
            )}
          </div>

          <div className="flex gap-1 items-baseline">
            <h3 className="text-5xl/12 tracking-tight text-gray-900 font-semibold lg:text-6xl/18">
              ${price}
            </h3>
            <p className="text-gray-500 font-medium">per month</p>
          </div>
          <p className="text-gray-500">{description}</p>
        </div>

        <div className="w-full flex flex-col gap-3">
          {/* button */}
          <button className="rounded-lg flex items-center  justify-center bg-violet-500 py-3 px-4.5 shadow-xs gap-1.5 font-semibold text-white border border-transparent text-nowrap">
            Get started
          </button>
          <button className="rounded-lg flex items-center  justify-center bg-white border border-gray-300 py-3 px-4.5 shadow-xs gap-1.5 font-semibold text-gray-700 text-nowrap">
            Chat to sales
          </button>
        </div>
      </div>

      <div className="pt-8 px-6 pb-10 md:px-8 flex flex-col gap-6">
        <div className="space-y-1">
          <p className="font-semibold uppercase text-gray-900">features</p>
          <p className="text-gray-500">
            Everything in{" "}
            <span className="font-semibold">{highlited_text}</span> plus....
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {/* list */}
          {features_list.map((feature) => (
            <div className="flex items-center gap-3" key={feature}>
              <Icons.CheckCircle className="text-violet-600 size-6" />
              <p className="text-gray-500">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
