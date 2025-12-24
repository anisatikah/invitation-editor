'use client'

import React from 'react'
import { Customizations } from '@/lib/types'
import { Download, Share2 } from 'lucide-react'

interface PreviewPanelProps {
  customizations:  Customizations
}

export default function PreviewPanel({ customizations }:  PreviewPanelProps) {
  return (
    <div className="space-y-4">
      {/* Export Options */}
      <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
        <h3 className="font-semibold text-dark mb-4">Ekspor Undangan</h3>
        <div className="space-y-3">
          <button className="w-full flex items-center gap-3 btn-primary">
            <Download className="w-4 h-4" />
            Download as PDF
          </button>
          <button className="w-full flex items-center gap-3 btn-secondary">
            <Share2 className="w-4 h-4" />
            Bagikan Link
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="card bg-gray-50 text-sm text-gray-600">
        <p>
          💡 <span className="font-medium">Tips:</span> Undangan Anda dapat dibagikan melalui
          WhatsApp, Email, atau media sosial lainnya. 
        </p>
      </div>

      {/* QR Code Placeholder */}
      <div className="card text-center">
        <h4 className="font-semibold text-dark mb-3">QR Code Undangan</h4>
        <div className="w-32 h-32 mx-auto bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-600 text-sm">QR Code akan muncul di sini</p>
        </div>
      </div>
    </div>
  )
}