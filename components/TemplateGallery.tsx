import React from 'react'
import Image from 'next/image'
import { TEMPLATES } from '@/lib/templates'
import { useEditorStore } from '@/lib/store'
import { Sparkles } from 'lucide-react'

type CategoryFilter = 'all' | 'modern' | 'classic' | 'minimalist' | 'romantic' | 'traditional'

export default function TemplateGallery() {
  const [filter, setFilter] = React.useState<CategoryFilter>('all')
  const setTemplate = useEditorStore((state) => state.setTemplate)

  const filteredTemplates =
    filter === 'all' ? TEMPLATES : TEMPLATES.filter((t) => t.category === filter)

  const categories:  { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: 'Semua' },
    { value: 'modern', label: 'Modern' },
    { value: 'romantic', label: 'Romantis' },
    { value:  'minimalist', label: 'Minimalis' },
    { value:  'traditional', label: 'Tradisional' },
  ]

  return (
    <div className="w-full bg-gradient-to-br from-light to-gray-50 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-dark">Pilih Template</h1>
            <Sparkles className="w-8 h-8 text-secondary" />
          </div>
          <p className="text-gray-600 text-lg">
            Pilih desain undangan yang paling sesuai dengan gaya Anda
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 animate-slide-up">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat. value
                  ? 'btn-primary shadow-lg'
                  : 'btn-outline hover:scale-105'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template, index) => (
            <div
              key={template.id}
              className="card-interactive animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Thumbnail */}
              <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-sm opacity-75">Preview Template</p>
                    <p className="font-serif text-2xl font-bold">{template.name}</p>
                  </div>
                </div>
              </div>

              {/* Template Info */}
              <h3 className="text-xl font-bold text-dark mb-2">{template.name}</h3>
              <p className="text-gray-600 text-sm mb-4">
                Kategori: <span className="font-medium capitalize">{template.category}</span>
              </p>

              {/* Color Preview */}
              <div className="flex gap-2 mb-6">
                {template.colors. map((color, idx) => (
                  <div
                    key={idx}
                    className="w-8 h-8 rounded-full shadow-md"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              {/* Select Button */}
              <button
                onClick={() => setTemplate(template)}
                className="btn-primary w-full hover:shadow-xl"
              >
                Pilih Template
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Tidak ada template untuk kategori ini</p>
          </div>
        )}
      </div>
    </div>
  )
}