import Navbar from "../components/Navbar";
import Cta from "../components/CTA";
import Footer from "../components/Footer";

const designs = [
  {
    href: "https://www.figma.com/",
    icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    text: "Figma",
  },
  {
    href: "https://www.sketch.com/",
    icon: "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg",
    text: "sketch",
  },
  {
    href: "https://www.invisionapp.com/",
    icon: "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
    text: "InVision",
  },
  {
    href: "https://www.photoshop.com/en",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
    text: "photoshop",
  },
]

const databases = [
  {
    href: "https://www.postgresql.org",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    text: "PostGreSQL",
  },
  {
    href: "https://www.sqlite.org/",
    icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
    text: "sqlite",
  },
  {
    href: "https://firebase.google.com/",
    icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    text: "Firebase",
  },
];

const tools = [
  {
    href: "https://www.jenkins.io",
    icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
    text: "Jenkins",
  },
  {
    href: "https://git-scm.com/",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
    text: "Git",
  },
  {
    href: "https://webpack.js.org",
    icon: "https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg",
    text: "webpack",
  },
  {
    href: "https://heroku.com",
    icon: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
    text: "Heroku",
  }
];

const languages = [
  {
    href: "https://www.w3.org/html/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    text: "HTML5",
  },
  {
    href: "https://www.w3schools.com/css/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    text: "CSS3",
  },
  {
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    text: "Javascript",
  },
  {
    href: "https://reactjs.org/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    text: "React",
  },
  {
    href: "https://www.ruby-lang.org/en/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg",
    text: "Ruby",
  },
  {
    href: "https://rubyonrails.org",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
    text: "Rails",
  },
  {
    href: "https://tailwindcss.com/",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    text: "Tailwind",
  },
  {
    href: "https://getbootstrap.com",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    text: "Bootstrap",
  },
  {
    href: "https://developer.apple.com/swift/",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
    text: "Swift",
  },
  {
    href: "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
    icon: "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
    text: "Objective-c",
  },
];



export default function Develop() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-16 mb-32 px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto text-left">
          <h2 className="text-4xl font-extrabold text-gray-900">Development</h2>
          <p className="my-4 text-lg text-gray-500">
            At Wolfware Digital we specialise in the development of multiple
            forms of digital application and web development. Below are just
            some of the Design & Development tools and languages we have
            experience developing with:
          </p>
        </div>
        <h2 className="text-2xl mt-16 mb-6 font-extrabold text-gray-900">
          Languages
        </h2>
        <div className="mt-8 grid grid-cols-4 gap-y-12 lg:grid-cols-6 lg:gap-x-12 text-center content-center">
          {languages.map((data) => (
            <div>
              <a
                href={data.href}
                class="flex flex-col items-center bg-blue-50 hover:bg-blue-100 transition duration-500 rounded-md py-4"
                rel="noreferrer"
                target="_blank"
              >
                <img src={data.icon} alt={data.text} width="80" height="80" />
              </a>
              <p class="my-2 text-md text-gray-500">{data.text}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl mt-16 mb-6 font-extrabold text-gray-900">
          Databases
        </h2>
        <div className="mt-8 grid grid-cols-4 gap-y-12 lg:grid-cols-6 lg:gap-x-12 text-center content-center">
          {databases.map((data) => (
            <div>
              <a
                href={data.href}
                class="flex flex-col items-center bg-blue-50 hover:bg-blue-100 transition duration-500 rounded-md py-4"
                rel="noreferrer"
                target="_blank"
              >
                <img src={data.icon} alt={data.text} width="80" height="80" />
              </a>
              <p class="my-2 text-md text-gray-500">{data.text}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl mt-16 mb-6 font-extrabold text-gray-900">
          Designs
        </h2>
        <div className="mt-8 grid grid-cols-4 gap-y-12 lg:grid-cols-6 lg:gap-x-12 text-center content-center">
          {designs.map((data) => (
            <div>
              <a
                href={data.href}
                class="flex flex-col items-center bg-blue-50 hover:bg-blue-100 transition duration-500 rounded-md py-4"
                rel="noreferrer"
                target="_blank"
              >
                <img src={data.icon} alt={data.text} width="80" height="80" />
              </a>
              <p class="my-2 text-md text-gray-500">{data.text}</p>
            </div>
          ))}
        </div>
        <h2 className="text-2xl mt-16 mb-6 font-extrabold text-gray-900">
          Supporting Tools
        </h2>
        <div className="mt-8 grid grid-cols-4 gap-y-12 lg:grid-cols-6 lg:gap-x-12 text-center content-center">
          {tools.map((data) => (
            <div>
              <a
                href={data.href}
                class="flex flex-col items-center bg-blue-50 hover:bg-blue-100 transition duration-500 rounded-md py-4"
                rel="noreferrer"
                target="_blank"
              >
                <img src={data.icon} alt={data.text} width="80" height="80" />
              </a>
              <p class="my-2 text-md text-gray-500">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
