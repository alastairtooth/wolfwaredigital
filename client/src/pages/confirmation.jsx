import React from 'react'

class App extends React.Component {
  render() {
    return (
      <main
        className="min-h-screen bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594300157693-a741f98738c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1675&q=80')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <h1 className="mt-2 text-4xl font-extrabold text-blue-500 tracking-tight sm:text-5xl">
            Thanks!
          </h1>
          <p className="mt-2 text-lg font-medium text-black text-opacity-60">
            We've received your request, and will in touch with you shortly.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="block relative w-34 inline-flex items-center px-16 py-3 text-base no-underline font-medium rounded-md text-white hover:text-white bg-blue-500 hover:bg-blue-600"
            >
              Home
            </a>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
