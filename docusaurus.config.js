// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SNMetamorph\'s Blog',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://snmetamorph.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SNMetamorph', // Usually your GitHub org/user name.
  projectName: 'snmetamorph-blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
            title: 'Community',
            items: [
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
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SNMetamorph. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
