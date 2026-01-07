import * as React from "react"
import { withPrefix } from "gatsby"

interface DownloadMaterialButtonProps {
  title: string
  fileName: string
}

export default function DownloadMaterialButton({ title, fileName }: DownloadMaterialButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = withPrefix(`/pdfs/${fileName}`)
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={handleDownload}
      className="w-full bg-usa-blue hover:bg-blue-900 dark:bg-blue-600 dark:hover:bg-blue-700 text-usa-white font-bold py-3 px-6 rounded-lg transition-colors transform hover:scale-105 shadow-lg"
    >
      {title}
    </button>
  )
}
