import React from 'react'
import Navbar from "./components/Navbar";
import Cta from "./components/CTA";
import Footer from "./components/Footer";
// import { render } from '@headlessui/react/dist/utils/render';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto mt-16 mb-32 px-4 sm:px-6 lg:px-8">
          <div className=" mx-auto text-left">
            <h2 className="text-4xl font-extrabold text-gray-900">Media</h2>
            <p className="my-4 text-lg text-gray-500">
              At WolfWare Digital, it's not just about creating great products - it's about empowering others to do the same!  Here are some of the articles we've written on the topics we're most passionate about.
            </p>
          </div>
          <div id="medium-widget"></div>
        </div>
        <Cta />
        <Footer />
      </div>
    );
  }
}

export default App;
