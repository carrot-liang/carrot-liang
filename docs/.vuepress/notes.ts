import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const fassetNote = defineNoteConfig({
  dir: 'fasset',
  link: '/fasset',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [fassetNote],
})
