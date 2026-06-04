import React from 'react'

const Portfolio = () => {
  return (
    <div className="min-h-screen pt-24 px-8 text-white relative">
      <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* اینجا می‌تونی کارت‌های پروژه‌هات رو قرار بدی */}
        <div className="bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-2">Project 1</h3>
          <p className="text-gray-400 text-sm">Description of the project goes here.</p>
        </div>
      </div>
      
      {/* پس زمینه برای حفظ یکپارچگی ظاهری */}
      <img className='fixed -z-20 bg-cover min-w-full min-h-screen top-0 left-0' src="src/assets/background.png" alt="bg-img" />
    </div>
)
}

export default Portfolio