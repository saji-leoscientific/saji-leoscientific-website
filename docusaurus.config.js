const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Leo Scientific',
  tagline: 'The Product Expert!',
  url: 'https://saji-leoscientific.github.io/',
  // baseUrl: '/',
  baseUrl: '/saji-leoscientific-website/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/bgless2.png',
  //favicon: 'img/Leoscientific-logo-dark.png ',
  organizationName: 'Leoscientific-India', // Usually your GitHub org/user name.
  projectName: 'saji-leoscientific-website', // Usually your repo name.
  themeConfig: {
    /////////////////ANOUNCEMENT BAR ///////////////////////
    // announcementBar: {
    //   id: 'banner', // Any value that will identify this message.
    //   content:
    //    // 'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //    'You can now download Windows 11 original walpapers from the DOWNLOAD LINKS Dropdown below !',
    //    backgroundColor: '#091E42', // Defaults to `#fff`.
    //   textColor: '#fafbfc', // Defaults to `#000`.
    //   isCloseable: false, // Defaults to `true`.
    // },
    ////////////////////////////////////////////////////////
    hideableSidebar: true,
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '\u{26c8}',
        lightIcon: '\u{1f324}',
      },
    },
    navbar: {
      title: 'Leo Scientific',
      logo: {
        alt: 'LeoScientific Logo',
        // src: 'img/logo.svg',
        src: 'img/LeoScientific-logo-light.png',
        srcDark: 'img/Leoscientific-logo-dark.png',
      },
      items: [
        {
          // type: 'doc',
          to: '/docs/Contact Details',
          position: 'right',
          label: 'Contact-Us',
        },
        /////////////////////DROPDOWN///////////////////
        {
          label: 'MORE',
          position: 'right', // or 'left'
          items: [
             {
               label: 'Products',
               to: '/docs/Products/Products',          
             },
             {
              label: 'Contact-Us',
              to: '/docs/Contact Details', 
             },
             {
              label: 'About-Us',
              to: '/docs/About Us', 
             }, 
             {
              label: 'Others',
              to: '/docs/Products/Products', 
             },
            // ... more items
          ],
        },
        /////////////////////DROPDOWN///////////////////
        {
          href: 'https://leoscientific.in/',
          label: 'Our-Other-Page',
          position: 'right',
        },
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'right',
        //   label: 'Tutorial',
        // },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Leo Scientific, All Rights Reserved.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
