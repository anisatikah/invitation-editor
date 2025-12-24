'use client'

import React from 'react'
import { Customizations } from '@/lib/types'
import { Palette } from 'lucide-react'

interface ColorPickerProps {
  customizations: Customizations
  onUpdate: (updates: Partial<Customizations>) => void
}

export default function ColorPicker({ customizations, onUpdate }: ColorPickerProps) {
  const presetColors = [
    '#8B5CF6',
    '#EC4899',
    '#F59E0B',
    '#10B981',
    '#3B82F6',
    '#EF4444',
    '#1F2937',
    '#F9FAFB',
  ]

  return (
    <div className="space-y-8">
      {/* Primary Color */}
      <div>
        <label className="flex items-center gap-2 text-dark font-semibold mb-4">
          <Palette className="w-5 h-5 text-primary" />
          Warna Utama
        </label>
        <div className="flex gap-3 flex-wrap mb-4">
          {presetColors.map((color) => (
            <button
              key={color}
              onClick={() => onUpdate({ primaryColor: color })}
              className={`w-12 h-12 rounded-full transition-all duration-300 ${
                customizations.primaryColor === color
                  ? 'ring-2 ring-offset-2 ring-primary scale-110'
                  : 'hover:scale-110'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <input
          type="color"
          value={customizations.primaryColor}
          onChange={(e) => onUpdate({ primaryColor: e.target.value })}
          className="w-full h-12 rounded-lg cursor-pointer"
        />
      </div>

      {/* Secondary Color */}
      <div>
        <label className="flex items-center gap-2 text-dark font-semibold mb-4">
          <Palette className="w-5 h-5 text-secondary" />
          Warna Sekunder
        </label>
        <div className="flex gap-3 flex-wrap mb-4">
          {presetColors.map((color) => (
            <button
              key={color}
              onClick={() => onUpdate({ secondaryColor: color })}
              className={`w-12 h-12 rounded-full transition-all duration-300 ${
                customizations.secondaryColor === color
                  ? 'ring-2 ring-offset-2 ring-secondary scale-110'
                  : 'hover:scale-110'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <input
          type="color"
          value={customizations.secondaryColor}
          onChange={(e) => onUpdate({ secondaryColor: e.target.value })}
          className="w-full h-12 rounded-lg cursor-pointer"
        />
      </div>

      {/* Font Selection */}
      <div>
        <label className="block text-dark font-semibold mb-4">Font Keluarga</label>
        <select
          value={customizations.fontFamily}
          onChange={(e) => onUpdate({ fontFamily: e.target.value })}
          className="w-full"
        >
          <option value="Inter">Inter</option>
          <option value="Georgia">Georgia</option>
          <option value="Playfair Display">Playfair Display</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </div>

      {/* Preview */}
      <div className="card bg-gradient-to-br from-gray-50 to-gray-100">
        <h3 className="font-semibold text-dark mb-4">Preview</h3>
        <div className="space-y-4">
          <div
            className="p-4 rounded-lg text-white text-center font-bold"
            style={{ backgroundColor: customizations.primaryColor }}
          >
            Warna Utama
          </div>
          <div
            className="p-4 rounded-lg text-white text-center font-bold"
            style={{ backgroundColor: customizations. secondaryColor }}
          >
            Warna Sekunder
          </div>
        </div>
      </div>
    </div>
  )
}