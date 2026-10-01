import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'highlight': 'fw600 text-[#8a6a00] dark:(text-[#fcd34d])',
    // Superscript citation marker, placed right after the claim it supports.
    'ref-mark': 'text-[0.6em] align-super text-blue-700 dark:text-blue-300 fw600 ml-0.5',
    // Numbered source list, pinned to the same position on every slide, one reference per line.
    'refs-bar': 'absolute bottom-1 left-14 right-38 text-[10px] leading-tight opacity-75 text-left flex flex-col gap-px',
  },
})
