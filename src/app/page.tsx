import EventTimeline from '../components/EventTimeline';
import { eventsData } from '../data/events';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Google-style */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 text-gray-900">
              Welcome to 
              <span className="text-blue-500"> D</span>
              <span className="text-red-500">e</span>
              <span className="text-yellow-500">v</span>
              <span className="text-green-500">f</span>
              <span className="text-blue-500">e</span>
              <span className="text-red-500">s</span>
              <span className="text-yellow-500">t</span>
              <span className="text-gray-900"> 2025</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover our upcoming events and meet the amazing speakers who will share their expertise with our community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-sm font-medium transition-colors shadow-sm">
                View All Events
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-md text-sm font-medium transition-colors bg-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Timeline Section */}
      <div className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Event Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us for an exciting journey through our upcoming tech events and workshops
            </p>
          </div>
        </div>
        <EventTimeline events={eventsData} />
      </div>

      {/* Call to Action Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Join Our Community
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Be part of the{' '}
              <span className="font-medium">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
                <span className="text-gray-900"> Developer Student Club</span>
              </span>
              {' '}family and connect with fellow developers, learn new technologies, and build amazing projects together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md text-sm font-medium transition-colors shadow-sm">
                Join Now
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-md text-sm font-medium transition-colors bg-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsor Section */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
              Our Sponsors
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Proudly supported by industry leaders who believe in fostering the next generation of developers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Sponsor placeholders with Google-style design */}
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-24 w-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-sm mb-2 mx-auto"></div>
                  <div className="text-xs text-gray-500 font-medium">SPONSOR</div>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-24 w-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded-sm mb-2 mx-auto"></div>
                  <div className="text-xs text-gray-500 font-medium">SPONSOR</div>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-24 w-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-sm mb-2 mx-auto"></div>
                  <div className="text-xs text-gray-500 font-medium">SPONSOR</div>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-24 w-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-sm mb-2 mx-auto"></div>
                  <div className="text-xs text-gray-500 font-medium">SPONSOR</div>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-24 w-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-sm mb-2 mx-auto"></div>
                  <div className="text-xs text-gray-500 font-medium">SPONSOR</div>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow h-24 w-32 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-8 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-sm mb-2 mx-auto"></div>
                  <div className="text-xs text-gray-500 font-medium">SPONSOR</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 mb-4">
              Interested in becoming a sponsor?
            </p>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors border-b border-blue-600 hover:border-blue-700 pb-1">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 