'use client'

import React from 'react'
import { useEditorStore } from '@/lib/store'
import { Palette, Type, Settings, Eye, Download } from 'lucide-react'
import ColorPicker from './ColorPicker'
import EventDetailsForm from './EventDetailsForm'
import PreviewPanel from './PreviewPanel'

export default function EditorPanel() {
  const [activeTab, setActiveTab] = React.useState<'details' | 'colors' | 'preview'>('details')
  const customizations = useEditorStore((state) => state.customizations)
  const updateCustomizations = useEditorStore((state) => state.updateCustomizations)
  const currentTemplate = useEditorStore((state) => state.currentTemplate)

  if (! currentTemplate) {
    return null
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-screen overflow-hidden">
      {/* Left Panel - Controls */}
      <div className="lg:col-span-1 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
          <h2 className="text-2xl font-bold text-dark mb-2">Edit Undangan</h2>
          <p className="text-sm text-gray-600">{currentTemplate.name}</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 sticky top-20 bg-white z-10">
          <button
            onClick={() => setActiveTab('details')}
            className={`flex-1 py-3 px-4 font-medium text-sm border-b-2 transition-all ${
              activeTab === 'details'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-dark'
            }`}
          >
            <Settings className="w-4 h-4 inline-block mr-2" />
            Detail
          </button>
          <button
            onClick={() => setActiveTab('colors')}
            className={`flex-1 py-3 px-4 font-medium text-sm border-b-2 transition-all ${
              activeTab === 'colors'
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 hover:text-dark'
            }`}
          >
            <Palette className="w-4 h-4 inline-block mr-2" />
            Warna
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`flex-1 py-3 px-4 font-medium text-sm border-b-2 transition-all ${
              activeTab === 'preview'
                ? 'border-primary text-primary'
                :  'border-transparent text-gray-600 hover:text-dark'
            }`}
          >
            <Eye className="w-4 h-4 inline-block mr-2" />
            Preview
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'details' && (
            <EventDetailsForm
              customizations={customizations}
              onUpdate={updateCustomizations}
            />
          )}

          {activeTab === 'colors' && (
            <ColorPicker
              customizations={customizations}
              onUpdate={updateCustomizations}
            />
          )}

          {activeTab === 'preview' && (
            <PreviewPanel customizations={customizations} />
          )}
        </div>
      </div>

      {/* Right Panel - Live Preview */}
      <div className="lg:col-span-2 bg-gray-100 overflow-y-auto flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center p-6">
              <h1 className="text-3xl font-serif font-bold mb-2" style={{ color: customizations.primaryColor }}>
                {customizations.eventTitle}
              </h1>
              <p className="text-gray-600 mb-4">{customizations.guestName}</p>
              <p className="text-2xl font-serif font-bold" style={{ color: customizations.secondaryColor }}>
                {customizations.eventDate}
              </p>
              <p className="text-sm text-gray-500 mt-2">{customizations.eventLocation}</p>
            </div>
          </div>

          {/* Preview Content */}
          <div className="p-8 text-center">
            <p className="text-gray-600 mb-6">Preview undangan Anda akan muncul di sini</p>
            <button className="btn-primary mx-auto">
              <Eye className="w-4 h-4 inline-block mr-2" />
              Lihat Preview Lengkap
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}