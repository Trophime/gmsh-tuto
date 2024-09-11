/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customTheme from './catppuccin-frappe.json'
import gmshGrammar from './gmsh.tmLanguage.json'

export default defineShikiSetup(() => {
    return {
        themes: {
            dark: customTheme,
            light: 'min-light',
        },
        langs: [
            {
                name: 'gmsh',
                ...gmshGrammar
            },
            'js',
            'typescript',
            'cpp',
            'python',
            'html',
            'vue',
        ],
    }
})
