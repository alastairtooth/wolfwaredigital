import { features } from "../data/features"

export default function FeatureSection() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-600">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Inbox support built for efficiency
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-blue-200">
          Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna
          sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                  <feature.icon className="h-6 w-6 text-yellow-300" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-blue-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
