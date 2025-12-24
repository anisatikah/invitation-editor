'use client'

import React from 'react'
import { useEditorStore } from '@/lib/store'
import TemplateGallery from '@/components/TemplateGallery'
import EditorPanel from '@/components/EditorPanel'

export default function Home() {
  const currentTemplate = useEditorStore((state) => state.currentTemplate)

  return (
    <main className="min-h-screen">
      {! currentTemplate ? (
        <TemplateGallery />
      ) : (
        <EditorPanel />
      )}
    </main>
  )
}