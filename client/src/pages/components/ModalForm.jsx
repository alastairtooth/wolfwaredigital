import React, { useState } from "react";

export default function ModalForm() {

  const [contact, setContact] = useState({
    First_Name: "",
    Last_Name: "",
  });

    function handleChange(event) {
      const { name, value } = event.target;

      console.log(contact)

      setContact((prevValue) => {
        if (name === "First_Name") {
          return {
            First_Name: value,
            Last_Name: prevValue.Last_Name,
          };
        } else if (name === "Last_Name") {
          return {
            First_Name: prevValue.First_Name,
            Last_Name: value,
          };
        }
      });
      console.log(contact)
    }


  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact us</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden py-10 px-6 bg-gray-800 sm:px-10 xl:p-12">
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-yellow-400">
                Ready to take the next step on your journey?
              </h3>
              <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                Well we're excited to help you!
              </p>
              <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                Submit your details via the form below and one of the team will
                be in touch as soon as possible.
              </p>
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-gray-900">
                Send us a message
              </h3>
              <form
                action="https://formsubmit.co/first@wwdigital.anonaddy.com"
                method="POST"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: "none" }} />
                <input
                  type="hidden"
                  name="_next"
                  value="https://www.wolfwaredigital.com/confirmation"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value={
                    "New contact request from: " +
                    contact.First_Name +
                    " " +
                    contact.Last_Name
                  }
                />

                <div>
                  <label
                    htmlFor="First_Name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    First Name
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="First_Name"
                      id="First_Name"
                      autoComplete="given-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="Last_Name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Last Name
                  </label>
                  <div className="mt-1">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="Last_Name"
                      id="Last_Name"
                      autoComplete="family-name"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="Company"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Company
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="Company"
                      id="Company"
                      autoComplete="organization"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="Email"
                      name="Email"
                      type="email"
                      autoComplete="email"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="Phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <span id="phone-optional" className="text-sm text-gray-500">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="Phone"
                      id="Phone"
                      autoComplete="tel"
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      aria-describedby="phone-optional"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="Contents"
                      className="block text-sm font-medium text-gray-900"
                    >
                      How can we help?
                    </label>
                    <span id="contents-max" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="Contents"
                      name="Contents"
                      rows={4}
                      className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
                      aria-describedby="contents-max"
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white  bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
