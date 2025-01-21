import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {myStructure} from './myStructure'
import {MCBLogo} from './components/MCBLogo'

export default defineConfig({
  name: 'default',
  title: 'MCB Website',
  icon: MCBLogo,

  projectId: 'gtluhvlm',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: myStructure,
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
