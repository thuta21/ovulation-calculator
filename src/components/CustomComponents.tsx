import React, { useState, useRef, useEffect } from 'react'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  className = '',
  ...props
}) => {
  return (
    <input
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      {...props}
    />
  )
}

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <label
      className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}

interface PopoverProps {
  trigger: React.ReactNode
  content: React.ReactNode
}

export const Popover: React.FC<PopoverProps> = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false)
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="relative" ref={popoverRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className="absolute z-10 w-64 p-4 mt-2 bg-white rounded-md shadow-lg">
          {content}
        </div>
      )}
    </div>
  )
}

