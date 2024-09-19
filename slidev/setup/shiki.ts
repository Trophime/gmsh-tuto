/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'
import customTheme from './catppuccin-frappe.json'
import gmshGrammar from './gmsh.tmLanguage.json'
import bashGrammar from './shell-unix-bash.tmLanguage.json'
import cppGrammar from './cpp.tmLanguage.json'

export default defineShikiSetup(() => {
    return {
        themes: {
            dark: customTheme,
            light: 'min-light',
        },
        langs: [
            {
                name: 'cpp',
                ...cppGrammar
            },
            {
                name: 'bash',
                ...bashGrammar
            },
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
