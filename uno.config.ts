import {
  defineConfig,
  presetUno,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno({ dark: 'class' }),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography({
      cssExtend: {
        'a': {
          'color': 'inherit',
          'text-decoration': 'none',
          'border-bottom': '1px dashed rgba(125,125,125,0.5)',
          'transition': 'border-color 0.2s',
        },
        'a:hover': {
          'border-bottom-color': 'currentColor',
        },
        'pre': {
          'background-color': 'rgba(30,30,30,0.8) !important',
          'border-radius': '0.5rem',
        },
        'code': {
          'background-color': 'rgba(125,125,125,0.1)',
          'padding': '0.2em 0.4em',
          'border-radius': '0.25rem',
        },
        'blockquote': {
          'border-left-color': 'rgba(125,125,125,0.3)',
          'font-style': 'normal',
          'opacity': '0.8',
        },
      },
    }),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,500,600',
        mono: 'JetBrains Mono:400',
      },
    }),
  ],
  transformers: [transformerDirectives()],
  shortcuts: {
    // 布局
    'flex-center': 'flex items-center justify-center',
    'flex-between': 'flex items-center justify-between',
    // 容器 - 更宽松的 padding
    'container-base': 'max-w-3xl mx-auto px-6 md:px-8',
    // 导航按钮 - 极简风格
    'nav-link': 'text-sm opacity-60 hover:opacity-100 transition-opacity',
    'nav-icon': 'opacity-50 hover:opacity-100 transition-opacity cursor-pointer',
    // 卡片 - 极简边框风格
    'card-minimal': 'border border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors',
    // 链接卡片
    'link-card': 'flex items-center gap-3 border border-gray-800 rounded-lg px-4 py-3 hover:border-gray-600 hover:bg-gray-900/50 transition-all cursor-pointer',
    // 标签
    'tag': 'text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-400',
    // 动画
    'op-transition': 'transition-opacity duration-200',
    // 文字样式
    'text-dim': 'opacity-60',
    'text-dimmer': 'opacity-40',
  },
  theme: {
    colors: {
      // 自定义暗色主题
      dark: {
        bg: '#0a0a0a',
        card: '#111111',
        border: '#222222',
      },
    },
  },
  safelist: [
    // 确保图标类被包含
    'i-lucide-newspaper',
    'i-lucide-folder-git-2',
    'i-lucide-users',
    'i-lucide-pen-line',
    'i-lucide-heart',
    'i-lucide-code-2',
    'i-lucide-calendar',
    'i-lucide-camera',
    'i-lucide-image',
  ],
});
