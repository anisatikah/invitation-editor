import { Template } from './types'

export const TEMPLATES: Template[] = [
  {
    id: 'modern-1',
    name: 'Modern Elegance',
    category: 'modern',
    thumbnail: '/templates/modern-1.jpg',
    colors: ['#8B5CF6', '#EC4899', '#F59E0B'],
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
    },
    sections: [
      {
        id: 'header',
        type: 'header',
        content: { title: 'You are Invited', subtitle: 'To celebrate our special day' },
        position: 1,
        visible: true,
      },
      {
        id: 'content',
        type: 'content',
        content: { brideName: 'John', groomName: 'Jane', date: '15. 06.2024' },
        position: 2,
        visible:  true,
      },
      {
        id: 'countdown',
        type: 'countdown',
        content: {},
        position: 3,
        visible: true,
      },
      {
        id: 'rsvp',
        type: 'rsvp',
        content: { buttonText: 'RSVP Now' },
        position: 4,
        visible: true,
      },
    ],
  },
  {
    id: 'romantic-1',
    name: 'Romantic Rose',
    category: 'romantic',
    thumbnail: '/templates/romantic-1.jpg',
    colors: ['#EC4899', '#FDF2F8', '#BE185D'],
    fonts: {
      heading: 'Playfair Display',
      body: 'Georgia',
    },
    sections:  [
      {
        id:  'header',
        type:  'header',
        content:  { title: 'With Love', subtitle: 'We invite you to witness our love' },
        position: 1,
        visible: true,
      },
      {
        id:  'content',
        type:  'content',
        content:  { brideName: 'Bride', groomName: 'Groom', date: '15.06.2024' },
        position: 2,
        visible: true,
      },
      {
        id: 'gallery',
        type: 'gallery',
        content: { images: [] },
        position: 3,
        visible: true,
      },
    ],
  },
  {
    id: 'minimalist-1',
    name:  'Minimalist Clean',
    category: 'minimalist',
    thumbnail: '/templates/minimalist-1.jpg',
    colors: ['#1F2937', '#F9FAFB', '#6B7280'],
    fonts:  {
      heading: 'Helvetica',
      body: 'Inter',
    },
    sections: [
      {
        id: 'header',
        type: 'header',
        content: { title: 'Wedding', subtitle: '' },
        position: 1,
        visible: true,
      },
      {
        id:  'content',
        type:  'content',
        content:  { brideName: 'Couple', groomName: '', date: '2024' },
        position: 2,
        visible: true,
      },
    ],
  },
  {
    id: 'traditional-1',
    name: 'Traditional Gold',
    category: 'traditional',
    thumbnail: '/templates/traditional-1.jpg',
    colors: ['#D97706', '#FFFBEB', '#78350F'],
    fonts: {
      heading: 'Playfair Display',
      body: 'Georgia',
    },
    sections:  [
      {
        id:  'header',
        type:  'header',
        content:  { title: 'Dengan Hormatnya', subtitle: 'Kami undang Anda' },
        position: 1,
        visible: true,
      },
      {
        id: 'content',
        type: 'content',
        content: { brideName: 'Pengantin Perempuan', groomName: 'Pengantin Lelaki' },
        position: 2,
        visible: true,
      },
    ],
  },
]