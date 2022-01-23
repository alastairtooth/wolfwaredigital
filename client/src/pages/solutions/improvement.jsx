import Navbar from "../components/Navbar";
import Cta from "../components/CTA";
import Footer from "../components/Footer";

export default function Improvement() {
  return (
    <div>
      <Navbar />
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0 mt-8 -ml-10">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full rounded-lg"
              src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Continuous Improvement"
            />
          </div>
        </div>
        <div className="relative pb-16 pt-8 px-4 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-700 sm:text-4xl">
                Continuous Improvement
              </h3>
              <p className="mt-8 text-md text-gray-500">
                The creation of a product or business is only the beginning.
                Ongoing analysis & refinement to the product you provide and how
                you provide it is required to innovate what you offer to your
                customers, and improve your profit margins.
              </p>
              <p className="mt-8 text-md text-gray-500">
                At Wolfware, we are experienced in both using, and training
                staff in the following methodologies.
              </p>
              <div className="mt-5 prose prose-indigo text-gray-500">
                <h2 className="mt-5 text-xl text-gray-700">LEAN / Six Sigma</h2>
                <p className="mt-2 text-md text-gray-500">
                  Lean / Six Sigma are two separate philosophies, focussing on
                  improving how business provide products and services to their
                  customers. Lean is a data-driven philosophy of improvement,
                  that drives customer satisfaction and bottom-line results. Six
                  Sigma focusses on the reduction of process/product variation
                  and business risk. The power of utilising the philosophies is
                  in their ability to:
                </p>
                <ul>
                  <li>Reduce the cost of production</li>
                  <li>
                    Improve the quality of your product, and how quickly
                    customers can access it
                  </li>
                  <li>Remove non value-add processes from the business</li>
                  <li>Reduce risks and improve risk controls</li>
                </ul>
                <h2 className="mt-5 text-xl text-gray-700">Agile</h2>
                <p className="mt-2 text-md text-gray-500">
                  While Six / Sigma focusses on improving the ongoing
                  operations, Agile methodologies focus on improving how
                  products and product features are developed and delivered.
                  Agile's iterative approach to project management and software
                  development helps teams deliver value to their customers
                  faster and with fewer headaches. Common elements to Agile best
                  practices are:
                </p>
                <ul>
                  <li>Iterative feature development</li>
                  <li>Delivery of the most valuable innovations first</li>
                  <li>Use of Scrum to efficiently deliver projects</li>
                  <li>
                    Grooming and management of the Product feature backlog
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
