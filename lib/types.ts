export interface Template {
  id: string
  name: string
  category: 'modern' | 'classic' | 'minimalist' | 'romantic' | 'traditional'
  thumbnail: string
  colors: string[]
  fonts: {
    heading: string
    body: string
  }
  sections: Section[]
}

export interface Section {
  id: string
  type: 'header' | 'content' | 'gallery' | 'rsvp' | 'countdown' | 'music' | 'footer'
  content: Record<string, any>
  position: number
  visible: boolean
}

export interface EditorState {
  currentTemplate: Template | null
  selectedSection: string | null
  customizations:  Customizations
  preview: boolean
}

export interface Customizations {
  primaryColor: string
  secondaryColor: string
  fontFamily: string
  guestName: string
  eventTitle: string
  eventDate: string
  eventLocation: string
  customImages: Record<string, string>
  musicUrl?:  string
  showCountdown:  boolean
  showRsvp:  boolean
}

export interface EditorStore extends EditorState {
  setTemplate: (template: Template) => void
  selectSection: (sectionId: string | null) => void
  updateCustomizations: (updates: Partial<Customizations>) => void
  togglePreview: () => void
  reset: () => void
}