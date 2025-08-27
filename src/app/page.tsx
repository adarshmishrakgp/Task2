"use client";

import { Send, Mic, MicOff } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const [message, setMessage] = useState('')
  const [listening, setListening] = useState(false)

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessage('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  const toggleMic = () => {
    setListening(l => !l)
    // TODO: integrate voice capture (Web Speech / MediaRecorder)
  }

  return (
    <div className="flex flex-col h-screen bg-[#f2f5fa] text-gray-800">
      {/* Top Header */}
      <header className="flex items-center justify-between px-6 h-14 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-sm">ISB</div>
            <div className="leading-tight">
              <h1 className="text-base font-semibold text-blue-900">I-Venture Assistant</h1>
              <p className="text-[11px] text-gray-500">Your entrepreneurial journey companion</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <span className="inline-flex items-center text-green-600 font-medium">● Live Assistant</span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden px-4 py-4">
        <div className="h-full grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_420px] gap-4">
          {/* Left Resources Card (refined) */}
            <div className="flex flex-col bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
              {/* Section Header */}
              <div className="px-6 py-3 border-b border-gray-200 bg-[#eef4fd]">
                <h2 className="text-[13px] font-semibold text-gray-800 tracking-wide">Startup Resources & Information</h2>
                <p className="text-[11px] text-gray-500 mt-0.5">Explore programs, events, and opportunities for your venture</p>
              </div>
              {/* Inner Panel */}
              <div className="flex-1 overflow-auto p-6" style={{minHeight:'0'}}>
                <div className="h-full w-full bg-white border border-gray-200 rounded-md shadow-sm flex flex-col xl:flex-row relative">
                  {/* Text Column */}
                  <div className="xl:w-[44%] p-10 pr-12 text-[13px] leading-relaxed text-gray-700 flex flex-col space-y-5">
                    <p className="text-justify">
                      I-Venture @ ISB fosters entrepreneurship and nurtures start-ups. It administers business incubators that provide &apos;Start-to-Scale&apos; support for entrepreneurship and facilitates the conversion of start-ups into profitable entrepreneurial ventures, apart from multidisciplinary research initiatives and academic programs that creates and strengthens entrepreneurial mindset and rigour.
                    </p>
                    <p className="text-justify">
                      We have very specific programs that will cater to entrepreneurs and ventures of all stages. I-Venture @ ISB is constantly working towards creating a strong ecosystem of mentors, VC&apos;s and Academicians to ensure startup&apos;s reach to market and their growth.
                    </p>
                    <a href="#" className="text-[11px] font-semibold text-blue-800 hover:text-blue-900 tracking-wide">MORE ABOUT I-VENTURE @ ISB →</a>
                  </div>
                  {/* Metrics Column */}
                  <div className="flex-1 flex items-center justify-center px-10 py-14">
                    <div className="grid grid-cols-2 gap-x-20 gap-y-16">
                      <div className="text-center space-y-1">
                        <div className="text-6xl font-bold text-[#063863] tracking-tight">650+</div>
                        <div className="text-[11px] uppercase tracking-wide text-gray-500">Startups Supported</div>
                      </div>
                      <div className="text-center space-y-1">
                        <div className="text-6xl font-bold text-[#063863] tracking-tight">95+</div>
                        <div className="text-[11px] uppercase tracking-wide text-gray-500">Startup Raised Funding</div>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="flex flex-col items-center leading-none">
                          <span className="text-6xl font-bold text-[#063863] tracking-tight">3.2k</span>
                          <span className="text-3xl font-bold text-[#063863] -mt-2">cr+</span>
                        </div>
                        <div className="text-[11px] uppercase tracking-wide text-gray-500 -mt-1">Funding Raised</div>
                      </div>
                      <div className="text-center space-y-1">
                        <div className="text-6xl font-bold text-[#063863] tracking-tight">3k+</div>
                        <div className="text-[11px] uppercase tracking-wide text-gray-500">Jobs Created</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          {/* Right Chat Assistant */}
          <div className="flex flex-col bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <div className="px-4 pt-4 pb-3 bg-gradient-to-r from-blue-900 to-blue-600 text-white relative">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-sm tracking-wide">I-Venture Assistant</div>
                  <div className="text-[11px] opacity-80">Your entrepreneurial companion</div>
                </div>
                <div className="text-[10px] bg-white/20 rounded-full px-2 py-1 backdrop-blur-sm">Speaking...</div>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4 space-y-4 bg-white" style={{minHeight:'0'}}>
              {/* User bubble */}
              <div className="flex justify-end">
                <div className="bg-blue-700 text-white rounded-lg px-4 py-2 max-w-xs shadow-sm text-sm">
                  <p>Tell me about your incubation programs</p>
                  <p className="text-[10px] text-blue-200 mt-1">01:07 AM</p>
                </div>
              </div>
              {/* Assistant bubble */}
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 max-w-sm shadow-sm text-[13px] leading-relaxed">
                  <p className="mb-3">We have several incubation programs designed to support startups at various stages. These programs offer mentorship, resources, and networking opportunities to help you succeed. Here are a few options:</p>
                  <ul className="list-disc pl-4 space-y-2 text-gray-700">
                    <li>
                      <span className="font-semibold">Pre-Incubation Program:</span>
                      <ul className="list-disc pl-4 mt-1 text-gray-600 space-y-1">
                        <li><span className="font-semibold">ISPROUTE 4.0:</span> A flagship program for aspiring entrepreneurs, exclusive for ISB PGP Co &apos;25.</li>
                        <li><a href="#" className="text-blue-700 hover:underline text-xs">Learn more</a></li>
                      </ul>
                    </li>
                    <li>
                      <span className="font-semibold">Incubation Programs:</span>
                      <ul className="list-disc pl-4 mt-1 text-gray-600 space-y-1">
                        <li>Sector-Agnostic Incubation Program: Offers...</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-200 p-3 bg-white">
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMic}
                  aria-pressed={listening}
                  className={`shrink-0 w-9 h-9 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white text-gray-500 hover:text-blue-700 hover:border-blue-400 transition-colors ${listening ? 'ring-2 ring-blue-500 text-blue-700 border-blue-500' : ''}`}
                  title={listening ? 'Stop voice input' : 'Start voice input'}
                >
                  {listening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="w-full text-sm px-3 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <p className="text-[10px] text-gray-500 mt-1">Press Enter to send • Voice input {listening ? 'on' : 'off'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
