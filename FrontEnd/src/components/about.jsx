import React from 'react';
export default function About(){
    return (
        <div className="bg-green-100">
        <div className="container mx-auto py-12">
          <div className="rounded-lg shadow-lg bg-white px-8 py-12 flex items-center justify-center">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold text-green-800 mb-6">Welcome to Our Juice Company!</h1>
              <p className="text-lg text-green-800 mb-8">
                We are a team of passionate juice enthusiasts dedicated to providing you with the freshest and most invigorating blends.
              </p>
              <p className="text-lg text-green-800 mb-8">
                Our mission is to inspire a healthy lifestyle by crafting delicious juices that are bursting with nutrients and flavor.
              </p>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-800 mb-8">
                <li className="mb-2">Nature's Finest Ingredients</li>
                <li className="mb-2">Revitalizing and Nutritious Blends</li>
                <li className="mb-2">Sustainable and Environmentally Conscious Practices</li>
                <li className="mb-2">Customer Satisfaction and Well-being</li>
              </ul>
              <p className="text-lg text-green-800">
                At Our Juice Company, we are committed to your health and the planet's well-being. Join us in savoring the goodness of nature, one sip at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
