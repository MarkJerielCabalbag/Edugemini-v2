'use client'
import React from 'react'

const footer = () => {
  return (
    <footer className="w-full my-8">
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
    <span className="font-semibold text-primary">EduGemini</span>
    <span className="text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} EduGemini. All rights reserved.</span>
  </div>
</footer>
  )
}

export default footer