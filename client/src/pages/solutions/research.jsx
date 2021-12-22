import Navbar from "../components/Navbar";
import Cta from "../components/CTA";
import Footer from "../components/Footer";
import { CheckIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Customer Segmentation',
    description: "Understanding your market is understanding who you're selling to.  We develop comprehensive customer segmentation based off statistical data of today's marketplace.",
  },
  {
    name: 'Competitor Analysis',
    description: 'Understanding your competitors, means understanding your own brand, and what it uniquely brings to market.' },
  {
    name: 'Industry Baselining',
    description: 'Understanding the baseline requirements for your product, will inform the minimum viable product (MVP) you need to develop.',
  },
  { name: 'Customer Interviews', description: 'No one knows a market better than the customers who use it.  Qualitative data from interviews can help inform the best way to build what people want.' },
  { name: 'Surveying', description: 'Any good ideas needs to be validated.  Survey your customer base to understand what features are the most desireable for your product' },
  { name: 'Service Blueprints', description: "It isn't just about the product, it's the overall experience.  Service Blueprints create a visual representation of the customer experience from end-to-end." },
  { name: 'MVP/MMP Development', description: 'Every good idea has plenty it can deliver, but understanding the difference between musts and wants is key to delivering a product with velocity.' },
  { name: 'Product Roadmaps', description: "Delivering a product isn't a single delivery - it's a journey for you and your customers.  Having a plan to return to ensures you control the direction that journey takes you." },
]

const photoFeatures = [
  {
    name: "Segmentation Analysis",
    description:
      "The first step to any business plan is understanding who your selling to.  Who are your customers?  What is the size of the opportunity?  Who are your competitors?  How does your product differentiate from theirs?  A well developed analysis of your market and customers can make or break a business.",
    imageSrc:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80",
    imageAlt: "Market Segmentation Analysis.",
  },
  {
    name: "Voice of the Customer",
    description:
      "The best people to tell you how your product should look/feel/work, are the customers who'll buy it.  Leverage CX design methods like Interviwing, Surveys, Service Blueprint development, etc to inform your designs from day 1.",
    imageSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt: "Customer Insights.",
  },
  {
    name: "Roadmap Development",
    description:
      "Fail to plan - plan to fail.  Good products have the capacity to ever changing markets, and using Agile methodologies to develop your MVP, as well as future feature deliveries, will ensure your delivering to your customers as quickly as possible, while learning and adapting to an ever-changing market along the way.",
    imageSrc:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    imageAlt:
      "Roadmap Development.",
  },
];

export default function Research() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto mt-16 mb-32 px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto text-left">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Research and Strategise
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The most important first step for any product is to understand what it's trying to accomplish.  At Wolfware, we're passionate about developing the right strategy for every business so they're on a path to succeed before the first design has been drawn.
          </p>
        </div>

        <div className="mt-4 grid items-start grid-cols-1 gap-y-16 gap-x-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {photoFeatures.map((photoFeature) => (
            <div key={photoFeature.name} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-md font-medium text-gray-900">
                  {photoFeature.name}
                </h3>
                <p className="mt-2 text-md text-gray-500">
                  {photoFeature.description}
                </p>
              </div>
              <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                <img
                  src={photoFeature.imageSrc}
                  alt={photoFeature.imageAlt}
                  className="object-center object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-24 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          What we offer
        </p>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-green-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
