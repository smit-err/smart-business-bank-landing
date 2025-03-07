function SectionHeader({
  title,
  heading,
  description,
}: {
  title: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <div className="max-w-3xl mx-auto lg:gap-5 flex flex-col items-center text-center gap-4">
        <div className="flex flex-col gap-3 items-center">
          <p className="text-sm text-violet-700 font-semibold md:text-base">
            {title}
          </p>
          <h2 className="lg:tracking-tight lg:text-4xl/11 font-semibold text-3xl/9.5 text-gray-900">
            {heading}
          </h2>
        </div>
        <p className="text-gray-500 text-lg/7 md:text-lg/7.5">{description}</p>
      </div>
    </div>
  );
}

export default SectionHeader;
