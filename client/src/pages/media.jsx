import React from 'react'
import Navbar from "./components/Navbar";
import Cta from "./components/CTA";
import Footer from "./components/Footer";

const posts = [
  {
    title: "Product development, and managing scope",
    href: "https://medium.com/@alastairtooth/product-development-and-managing-scope-79e27ccfffa2",
    category: {
      name: "Article",
      href: "https://medium.com/@alastairtooth/product-development-and-managing-scope-79e27ccfffa2",
    },
    description:
      "How developing products for a living can help you grow as an Entrepreneur",
    date: "Dec 14 2021",
    datetime: "2021-12-14",
    imageUrl: "https://miro.medium.com/max/1540/1*oXzLU4zmRfGB9v_I-W8wFQ.jpeg",
    readingTime: "9 min",
    author: {
      name: "Alastair Tooth",
      href: "https://medium.com/@alastairtooth",
      imageUrl:
        "https://res.cloudinary.com/wolfware-digital/image/upload/v1639966869/wolfware-digital/20211203_LeWagon_0092_pivkor.jpg",
    },
  },
  {
    title: "Keeping your customer in your design",
    href: "https://medium.com/@alastairtooth/keeping-your-customer-in-your-design-c69a78919587",
    category: {
      name: "Article",
      href: "https://medium.com/@alastairtooth/keeping-your-customer-in-your-design-c69a78919587",
    },
    description:
      "The first step to creating a good product/service is understanding the customers that will use it.  Utilise CX interview techniques and enhance your products.",
    date: "Apr 10 2021",
    datetime: "2021-04-10",
    imageUrl: "https://miro.medium.com/max/1540/0*870j8Wake3xgfc-R",
    readingTime: "12 min",
    author: {
      name: "Alastair Tooth",
      href: "https://medium.com/@alastairtooth",
      imageUrl:
        "https://res.cloudinary.com/wolfware-digital/image/upload/v1639966869/wolfware-digital/20211203_LeWagon_0092_pivkor.jpg",
    },
  },
  {
    title: "Product development, and managing scope",
    href: "https://medium.com/@alastairtooth/product-development-and-managing-scope-79e27ccfffa2",
    category: {
      name: "Article",
      href: "https://medium.com/@alastairtooth/product-development-and-managing-scope-79e27ccfffa2",
    },
    description:
      "In Product Development — it’s one thing delivering a product to market, it’s whole other thing making it succesful.",
    date: "Sep 12, 2021",
    datetime: "2021-09-12",
    imageUrl: "https://miro.medium.com/max/1540/0*UsTZJBA1H0e0PVgi",
    readingTime: "4 min",
    author: {
      name: "Alastair Tooth",
      href: "https://medium.com/@alastairtooth",
      imageUrl:
        "https://res.cloudinary.com/wolfware-digital/image/upload/v1639966869/wolfware-digital/20211203_LeWagon_0092_pivkor.jpg",
    },
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="bg-white">
        <Navbar />
        <div className="relative mx-auto  max-w-2xl lg:max-w-7xl pt-8 pb-16 px-4 sm:px-6 lg:px-8 lg:pt-16 lg:pb-16">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="text-left">
              <h2 className="text-3xl tracking-tight font-extrabold text-blue-700 sm:text-4xl">
                Media
              </h2>
              <p className="mt-3 mx-auto text-xl text-gray-500 sm:mt-4">
                Read some of the articles written by our team.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {posts.map((post) => (
                <div
                  key={post.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-700">
                        <a
                          href={post.category.href}
                          className="hover:underline"
                        >
                          {post.category.name}
                        </a>
                      </p>
                      <a href={post.href} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">
                          {post.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={post.author.href}>
                          <span className="sr-only">{post.author.name}</span>
                          <img
                            className="h-10 w-10 object-cover rounded-full"
                            src={post.author.imageUrl}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a
                            href={post.author.href}
                            className="hover:underline"
                          >
                            {post.author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.datetime}>{post.date}</time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.readingTime} read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Cta />
        <Footer />
      </div>
    );
  }
}

export default App;
