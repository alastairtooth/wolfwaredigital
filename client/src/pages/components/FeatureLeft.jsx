import { ColorSwatchIcon, SparklesIcon } from "@heroicons/react/outline";

export default function FeatureLeft(props) {

  const htmlString = props.preview

  return (
    <div className="relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-white border-2 border-blue-600">
                {props.icon === "inbox" ? (
                  <ColorSwatchIcon
                    className="h-6 w-6 text-blue-700"
                    aria-hidden="true"
                  />
                ) : (
                  <SparklesIcon
                    className="h-6 w-6 text-blue-700"
                    aria-hidden="true"
                  />
                )}
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                {props.title}
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                <div dangerouslySetInnerHTML={{ __html: htmlString }}></div>
              </p>
            </div>
          </div>
        </div>
        <div style={{ height: "560px" }} className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src={props.imageURL}
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
