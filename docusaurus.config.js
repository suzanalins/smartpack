// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smart Pack',
  tagline: 'Inteligência Artificial para Análise Técnica de Embalagens',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://smartpack.com',
  baseUrl: '/',

  organizationName: 'smartpack',
  projectName: 'SMARTPACK.AI',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'SMARTPACK.AI',
      logo: {
        alt: 'Smart Pack Logo',
        src: 'img/logo.svg',
        href: '/', 
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'Documentação',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Smart Pack',
          items: [
            {
              label: 'Documentação',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Equipe',
          items: [
            { label: 'Lorenzo Lopes', href: '#' },
            { label: 'Mateus Salustiano', href: '#' },
            { label: 'Suzana Lins', href: '#' },
            { label: 'Victor Pires', href: '#' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} SMARTPACK.AI`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
