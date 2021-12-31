import Navbar from "../components/Navbar";
import Cta from "../components/CTA";
import Footer from "../components/Footer";


const info = [
  {
    title: "Branding",
    text: "What does a silhouette of an apple, a big golden M, and the 'swoosh' have in common?  They're all part of brilliant branding strategies.  You don't just want your customers to see your product, you want them to remember it.  Investing in branding, is investing in a product that will stand the test of time.",
    ImageURL:
      "https://images.unsplash.com/photo-1632062549850-44a0a6eede16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    title: "Experience Design (UX)",
    text: "A mark of a well designed UX is when it guides customers through your products experience with the most minimal friction as possible.  Well designed UX will pull customers through your checkout faster, reduct application drop out rates, and improve your overall customer experience.  If your UX is poor then it'll be the first thing customers speak about, and if it's good it'll be so seamless customers won't even notice.",
    ImageURL:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80",
  },
  {
    title: "Interface Design (UI)",
    text: "User Interface design is the application of design and branding choices over the agreed UX. Well designed UI's will not only be visually pleasing, but will guide users on the desired path of your product.",
    ImageURL:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
  },
  {
    title: "Customer Testing",
    text: "A brilliant design isn't defined by how much the designers love it, or the business.  Design brilliance is defined by how much your customers love it.  Performing A/B testing, walkthroughs, and testing desired paths will ensure the way users interact with your product is as intended.",
    ImageURL:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

export default function Design() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-left text-left">
            <h2
              id="details-heading"
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              Design
            </h2>
            <p className="mt-3 max-w-7xl text-lg text-gray-600">
              A great design differentiates you from your competitors. It
              invokes emotion in your customer and brings them on your desired
              journey - it influences perceived value, accepted price, & sales
              volumes.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            {info.map((data) => (
              <div>
                <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                  <img
                    src={data.ImageURL}
                    alt="Drawstring top with elastic loop closure and textured interior padding."
                    className="w-full h-96 object-center object-cover"
                  />
                </div>
                <p className="mt-8 text-lg text-black font-medium">
                  {data.title}
                </p>
                <p className="mt-3 text-base text-gray-500">{data.text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
