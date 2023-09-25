// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SNMetamorph\'s Blog',
  tagline: 'Personal technical blog. Writing about different stuff like programming, electronics, reverse-engineering, etc.',
  favicon: 'img/favicon.ico',
  url: 'https://snmetamorph.github.io',
  baseUrl: '/',
  organizationName: 'SNMetamorph', // Usually your GitHub org/user name.
  projectName: 'snmetamorph-blog', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [
    require.resolve("docusaurus-plugin-image-zoom")
  ],
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        indexDocs: false,
        indexPages: true,
        hashed: true, // `hashed` is recommended as long-term-cache of index file is possible.
        language: ["en", "ru"],
      }),
    ],
  ],
  
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: '/posts',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-BHY0818ZGZ',
          anonymizeIP: false,
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SNMetamorph\'s Blog',
        items: [
          { to: '/posts', label: 'Posts', position: 'right' },
          { to: '/projects', label: 'Projects', position: 'right' },
          { to: '/contributions', label: 'Contributions', position: 'right' },
        ],
      },
      footer: {
        links: [
          {
            label: 'Dev.to',
            href: 'https://dev.to/snmetamorph',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/SNMetamorph',
          },
          {
            label: 'Telegram',
            href: 'https://t.me/SNMetamorph',
          },
          {
            label: 'YouTube',
            href: 'https://www.youtube.com/@snmetamorph_yt',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SNMetamorph. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      metadata: [
        { name: 'keywords', content: 'hlsdk, gamedev, programming, open source, half-life, xash3d, fwgs, goldsrc, primext, mdl-flip, goldsrc-monitor, opengl, modding, snmetamorph, c++' }
      ]
    }),
};

module.exports = config;
