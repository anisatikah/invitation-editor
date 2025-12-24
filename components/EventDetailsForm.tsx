'use client'

import React from 'react'
import { Customizations } from '@/lib/types'
import { Info } from 'lucide-react'

interface EventDetailsFormProps {
  customizations: Customizations
  onUpdate: (updates: Partial<Customizations>) => void
}

export default function EventDetailsForm({
  customizations,
  onUpdate,
}: EventDetailsFormProps) {
  return (
    <div className="space-y-6">
      {/* Guest Name */}
      <div>
        <label className="flex items-center gap-2 text-dark font-semibold mb-2">
          <Info className="w-4 h-4 text-primary" />
          Nama Tamu
        </label>
        <input
          type="text"
          value={customizations.guestName}
          onChange={(e) => onUpdate({ guestName: e.target.value })}
          placeholder="Masukkan nama tamu"
          className="w-full"
        />
        <p className="text-xs text-gray-500 mt-1">
          Nama ini akan ditampilkan di awal undangan
        </p>
      </div>

      {/* Event Title */}
      <div>
        <label className="block text-dark font-semibold mb-2">Judul Acara</label>
        <input
          type="text"
          value={customizations.eventTitle}
          onChange={(e) => onUpdate({ eventTitle: e.target.value })}
          placeholder="Misalnya: Pernikahan John & Jane"
          className="w-full"
        />
      </div>

      {/* Event Date */}
      <div>
        <label className="block text-dark font-semibold mb-2">Tanggal Acara</label>
        <input
          type="date"
          value={customizations.eventDate}
          onChange={(e) => onUpdate({ eventDate: e.target.value })}
          className="w-full"
        />
      </div>

      {/* Event Location */}
      <div>
        <label className="block text-dark font-semibold mb-2">Lokasi Acara</label>
        <input
          type="text"
          value={customizations.eventLocation}
          onChange={(e) => onUpdate({ eventLocation: e. target.value })}
          placeholder="Masukkan lokasi acara"
          className="w-full"
        />
        <p className="text-xs text-gray-500 mt-1">
          Misalnya: Kuala Lumpur, Malaysia
        </p>
      </div>

      {/* Preview Card */}
      <div className="card bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
        <h3 className="font-semibold text-dark mb-3">Preview Detail</h3>
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-medium">Penerima:</span> {customizations. guestName}
          </p>
          <p>
            <span className="font-medium">Acara:</span> {customizations. eventTitle}
          </p>
          <p>
            <span className="font-medium">Tanggal:</span> {customizations.eventDate}
          </p>
          <p>
            <span className="font-medium">Lokasi:</span> {customizations.eventLocation}
          </p>
        </div>
      </div>

      {/* Save Button */}
      <button className="btn-primary w-full">Simpan Perubahan</button>
    </div>
  )
}