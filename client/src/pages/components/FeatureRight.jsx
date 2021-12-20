import { CodeIcon } from "@heroicons/react/outline";

export default function FeatureRight() {
  return (
    <div>
      <div className="lg:mx-auto lg:max-w-7xl md:py-32 lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="flex flex-col justify-center px-4 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <span className="h-12 w-12 rounded-md flex items-center justify-center bg-white border-2 border-blue-700">
              <CodeIcon className="h-6 w-6 text-blue-700" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Optimised Development Practises
            </h2>
            <p className="my-4 text-lg text-gray-500">
              Experts in design, Wolfware crafts cutting-edge products and
              experiences for our clients to take to market.
            </p>

            <strong className="mt-4 text-lg text-gray-800">Digital</strong>
            <p className="my-4 text-lg text-gray-500">
              Focussing on cross-platform capability, Wolfware can build your
              digital products across iOS, Android and web based platforms.
            </p>

            <strong className="mt-4 text-lg text-gray-800">Physical</strong>
            <p className="mt-4 text-lg text-gray-500">
              With experience developing both online and physical storefronts,
              Wolfware can support the development of your Dropshipping or
              locally sourced products.
            </p>
          </div>
        </div>
        <div
          style={{ height: "560px" }}
          className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1"
        >
          <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://res.cloudinary.com/wolfware-digital/image/upload/v1639969756/wolfware-digital/20211203_LeWagon_0166_fqmzl4.jpg"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
