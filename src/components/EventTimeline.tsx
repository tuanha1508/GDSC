import React from 'react';
import Image from 'next/image';
import { Event } from '../types/event';

interface EventTimelineProps {
  events: Event[];
}

const EventTimeline: React.FC<EventTimelineProps> = ({ events }) => {
  // Create timeline items alternating between events and speakers
  const timelineItems = events.flatMap((event, eventIndex) => [
    { type: 'event', data: event, index: eventIndex * 2 },
    { type: 'speaker', data: event, index: eventIndex * 2 + 1 }
  ]);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Center line with gradient - hidden on mobile */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 hidden md:block"></div>
      
      {/* Timeline Items */}
      <div className="space-y-16 md:space-y-20">
        {timelineItems.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isEvent = item.type === 'event';
          
          return (
            <div
              key={`${item.data.id}-${item.type}`}
              className={`relative flex items-center ${
                isLeft ? 'md:justify-start' : 'md:justify-end'
              } justify-center`}
            >
              {/* Card */}
              <div
                className={`w-full md:w-5/12 ${
                  isLeft ? 'md:mr-12' : 'md:ml-12'
                } relative group`}
              >
                {isEvent ? (
                  // Event Card - Enhanced Google-style
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-500 hover:translate-y-[-4px] border border-gray-100 group-hover:border-gray-200">
                    {/* Event Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={item.data.image}
                        alt={item.data.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 4}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      <div className="absolute top-6 left-6">
                        <span className="text-xs font-semibold text-white bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
                          Event
                        </span>
                      </div>
                    </div>
                    
                    {/* Event Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-medium text-gray-900 mb-6 leading-tight tracking-tight">
                        {item.data.name}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          <span className="font-medium text-gray-900">Time:</span>
                          <span className="text-gray-700">{item.data.time}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          <span className="font-medium text-gray-900">Location:</span>
                          <span className="text-gray-700">{item.data.place}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                          <span className="font-medium text-gray-900">Host:</span>
                          <span className="text-gray-700">{item.data.host}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Speaker Card - Enhanced Google-style
                  <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg p-8 transition-all duration-500 hover:translate-y-[-4px] border border-gray-100 group-hover:border-gray-200">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                          <Image
                            src={item.data.speaker.image}
                            alt={item.data.speaker.name}
                            fill
                            className="rounded-full object-cover ring-4 ring-gray-50 transition-all duration-300 group-hover:ring-gray-100"
                            sizes="(max-width: 640px) 80px, 96px"
                            priority={index < 4}
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs font-semibold text-white bg-gray-900 px-4 py-2 rounded-full">
                            Speaker
                          </span>
                        </div>
                        <h4 className="text-xl font-medium text-gray-900 mb-2 tracking-tight">
                          {item.data.speaker.name}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4 font-medium">
                          {item.data.speaker.role} at {item.data.speaker.company}
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item.data.speaker.content}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Enhanced Connector Line - hidden on mobile */}
                <div
                  className={`absolute top-1/2 transform -translate-y-1/2 ${
                    isLeft ? '-right-6' : '-left-6'
                  } w-12 h-px bg-gradient-to-r ${
                    isLeft ? 'from-gray-300 to-transparent' : 'from-transparent to-gray-300'
                  } hidden md:block`}
                >
                </div>
              </div>

              {/* Enhanced Timeline Dot - hidden on mobile */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${
                isEvent ? 'bg-gray-900' : 'bg-gray-700'
              } rounded-full border-4 border-white shadow-lg z-10 hidden md:block transition-all duration-300 group-hover:scale-110`}>
              </div>

              {/* Mobile Item Number - Enhanced */}
              <div className={`absolute -top-3 -left-3 w-8 h-8 ${
                isEvent ? 'bg-gray-900' : 'bg-gray-700'
              } rounded-full flex items-center justify-center text-white font-semibold text-sm z-10 md:hidden shadow-lg`}>
                {index + 1}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </div>
  );
};

export default EventTimeline; 