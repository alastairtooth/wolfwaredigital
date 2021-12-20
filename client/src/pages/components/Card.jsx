export default function Card(props) {
  return (
    <div
      key={props.id}
      className="flex flex-col rounded-lg shadow-lg overflow-hidden"
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={props.imageURL} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-cyan-600">
            <a
              href={props.catHref}
              className="hover:underline"
              rel="noreferrer"
              target="_blank"
            >
              {props.name}
            </a>
          </p>
          <a
            href={props.href}
            className="block mt-2"
            rel="noreferrer"
            target="_blank"
          >
            <p className="text-xl font-semibold text-gray-900">{props.title}</p>
            <p className="mt-3 text-base text-gray-500">{props.preview}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a href={props.autHref} rel="noreferrer" target="_blank">
              <img
                className="h-10 w-10 object-cover rounded-full"
                src={props.autURL}
                alt={props.autName}
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a
                href={props.autHref}
                className="hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                {props.autName}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={props.dateTime}>{props.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{props.length} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
