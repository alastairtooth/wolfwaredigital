import Modal from "react-bootstrap/Modal";
import ModalForm from "./ModalForm"
import React, { useState } from "react";

export default function Hero() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="relative mt-8">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-sky-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="block text-white">Build the Product</span>
              <span className="block text-yellow-300">of your dreams</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
              It takes a lot of skill, knowledge, and experience to make a
              brilliant idea a reality. Luckily here at Wolfware Digital, it's
              our specialty.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                <button
                  onClick={() => setLgShow(true)}
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-800 bg-white hover:bg-cyan-600 sm:px-8"
                >
                  Get in Contact
                </button>
              </div>
              <Modal
                className
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
              >
              <ModalForm />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
