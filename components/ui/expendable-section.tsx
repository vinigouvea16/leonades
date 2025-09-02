'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState, type ReactNode } from 'react'

interface ExpandableSectionProps {
  children: ReactNode
  maxParagraphs?: number
}

function ExpandableSection({
  children,
  maxParagraphs = 1,
}: ExpandableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const contentArray = React.Children.toArray(children)
  const shouldShowButton = contentArray.length > maxParagraphs
  const displayedContent = isExpanded
    ? contentArray
    : contentArray.slice(0, maxParagraphs)

  return (
    <div className="flex flex-col mx-3 font-light text-leon-black space-y-4 mt-4">
      {displayedContent}
      {shouldShowButton && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-600 self-center mt-2 gap-1 items-center flex"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              Show More <ChevronDown size={16} />
            </>
          )}
        </button>
      )}
    </div>
  )
}

export default ExpandableSection
