import React from 'react';
export default function Contact(){
  const handleSubmit = (event) => {
    event.preventDefault();
    

  };
    return(
      <div className="bg-green-100">
      <div className="container mx-auto py-12">
        <div className="rounded-lg shadow-lg bg-white px-8 py-12 flex items-center justify-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-green-800 mb-6">Contact Us</h1>
            <p className="text-lg text-green-800 mb-8">
              We would love to hear from you. If you have any questions or inquiries, please feel free to get in touch with us.
            </p>
            <form className="mb-8" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="text-lg text-green-800">Name</label>
                <input type="text" id="name" className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="text-lg text-green-800">Email</label>
                <input type="email" id="email" className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="text-lg text-green-800">Message</label>
                <textarea id="message" rows="4" className="w-full rounded-lg border-gray-300 focus:border-green-500 focus:ring-green-500"></textarea>
              </div>
              <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">Submit</button>
            </form>
            <p className="text-lg text-green-800">
              We appreciate your feedback and look forward to assisting you. Our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
        
    
}