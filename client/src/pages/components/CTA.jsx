import Modal from "react-bootstrap/Modal";
import ModalForm from "./ModalForm";
import React, { useState } from "react";

export default function CTA() {
  const [lgShow, setLgShow] = useState(false);
  return (
    <div className="mt-16 bg-gray-100">
      <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to get started?</span>
          <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Get in touch.
          </span>
        </h2>
        <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <button
            onClick={() => setLgShow(true)}
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
          >
            Contact Us
          </button>
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
  );
}
