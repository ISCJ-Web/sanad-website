'use client'

import { Calendar, Clock } from 'lucide-react'

interface ScheduleItem {
  day: string
  instructor: string
  course: string
  time: string
  instructorImage: string
  isNoClass?: boolean
}

const scheduleData: ScheduleItem[] = [
  {
    day: "MONDAYS",
    instructor: "SHAYKH ISMAIL BOWERS",
    course: "FIQH: MALIKI",
    time: "7 - 8:30 PM",
    instructorImage: ""
  },
  {
    day: "TUESDAYS",
    instructor: "SHAYKH AHMED ASHOUR",
    course: "FIQH: SHAFI",
    time: "7 - 8:30 PM",
    instructorImage: ""
  },
  {
    day: "WEDNESDAYS",
    instructor: "SHAYKH MURAD UTHMAN",
    course: "FIQH: HANAFI",
    time: "7 - 8:30 PM",
    instructorImage: ""
  },
  {
    day: "THURSDAYS",
    instructor: "DR. MOUNIA MNOUER",
    course: "ARABIC I",
    time: "7 - 8:30 PM",
    instructorImage: ""
  },
  {
    day: "THURSDAYS",
    instructor: "SHAYKH AHMED ASHOUR",
    course: "ARABIC II",
    time: "7 - 8:30 PM",
    instructorImage: ""
  },
  {
    day: "FRIDAYS",
    instructor: "",
    course: "NO CLASS",
    time: "",
    instructorImage: "",
    isNoClass: true
  },
  {
    day: "SATURDAYS",
    instructor: "SHAYKH ISMAIL BOWERS",
    course: "AQIDAH & TASAWWUF",
    time: "9 - 10:30 AM",
    instructorImage: ""
  },
  {
    day: "SUNDAYS",
    instructor: "DR. MOUNIA MNOUER",
    course: "ARABIC I",
    time: "9 - 10:30 AM",
    instructorImage: ""
  }
]

export default function ScheduleSection() {
  return (
    <section id="schedule" className="section-padding bg-cream">
      <div className="container-max">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-4 md:mb-6 tracking-tight">
            Weekly <span className="text-gradient">Schedule</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto px-4">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className={`card p-3 md:p-4 text-center ${
                item.isNoClass 
                  ? 'bg-navy text-white' 
                  : 'bg-white hover:shadow-xl'
              }`}
            >
              {/* Day */}
              <h3 className={`text-sm md:text-base font-display font-bold mb-2 ${
                item.isNoClass ? 'text-white' : 'text-navy'
              }`}>
                {item.day}
              </h3>

              {/* Instructor Name */}
              {!item.isNoClass && (
                <h4 className={`text-xs md:text-sm font-display font-semibold mb-1 ${
                  item.isNoClass ? 'text-white' : 'text-navy'
                }`}>
                  {item.instructor}
                </h4>
              )}

              {/* Course */}
              <h5 className={`text-sm md:text-base font-display font-bold mb-1 ${
                item.isNoClass ? 'text-white' : 'text-gold'
              }`}>
                {item.course}
              </h5>

                      {/* Time */}
                      {!item.isNoClass && (
                        <div className="flex items-center justify-center text-sm md:text-base text-gray-600">
                          <Clock className="mr-1" size={12} />
                          <span>{item.time}</span>
                        </div>
                      )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
