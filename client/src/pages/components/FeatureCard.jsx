import Card from "./Card";
const { blogPosts }  = require("../data/features");

export default function FeatureCard() {
  return (
    <div className="relative bg-white pt-16">
      <div className="text-left mx-auto max-w-md px-4 pb-8 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
          Read
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Helpful Resources
        </p>
        <p className="mt-5 mx-auto text-xl text-gray-500">
          At Wolfware, we don't just believe in building great products, we want others to be able to do so too.  That's why we take pride in sharing what we've learned with the community.
        </p>
      </div>
      <div className="relative">
        <div className="mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {blogPosts.map((post) => (
            <Card
              id={post.id}
              key={post.id}
              imageURL={post.imageUrl}
              catHref={post.category.href}
              name={post.category.name}
              href={post.href}
              autHref={post.author.href}
              autURL={post.author.imageUrl}
              autName={post.author.name}
              dateTime={post.datetime}
              date={post.date}
              length={post.readingLength}
              title={post.title}
              preview={post.preview}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
