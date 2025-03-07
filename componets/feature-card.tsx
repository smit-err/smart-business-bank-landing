import React from "react";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="min-w-80 flex flex-col items-center gap-4 md:gap-5">
      <div className="w-fit size-fit p-2.5 aspect-square bg-violet-100 border-6 rounded-full flex items-center justify-center border-violet-50">
        {/* Icon */}
        {icon}
      </div>

      <div className="flex flex-col gap-1 md:gap-2 items-center text-center">
        {/* Content */}
        <h4 className="text-lg/4.5 md:text-xl/7.5 font-semibold text-gray-900">
          {title}
        </h4>
        <p className="text-gray-500 text-balance">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
