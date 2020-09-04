const autometa_options = {
  site: {
    name   : 'Divante',
    twitter: 'https://twitter.com/DivanteLTD',
  },
  canonical_base: 'https://microservicesbook.org',
};

module.exports = {
    base: '/',
    port: 8080,
    dest: 'book/public',
    markdown: {
      toc: {
        includeLevel: [2]
      }
    },
    head: [
      ['link', { rel: 'icon', href: '/favicon.png' }],
    ],
    plugins: [
      ['@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }],      
      ['autometa', autometa_options],
      [
        'vuepress-plugin-google-tag-manager',
        {
          'gtm': 'GTM-MN7LQ59'
        }
      ]
    ],    
    themeConfig: {
      repo: 'DivanteLtd/microservices-book',
      editLinks: true,
      docsDir: 'book',
      logo: 'gfx/divante_logopack.png',
      sidebarDepth: 3,
      nav: [
        {
          text: 'Divante Innovation Lab',
          link: 'https://divante.com/services/innovation-lab',
        },
        {
          text: 'Blog',
          link: 'http://divante.com/blog',
        },
        {
          text: 'Books',
          link: 'http://divante.com/knowledge',
        },
        {
          text: 'Webinars',
          link: 'https://divante.com/webinars'
        },
        {
          text: 'Contact',
          link: 'https://divante.com/contact-us'
        }
      ],
      sidebar: [
          ['', 'Introduction'],
          ['ch1-microservices', 'Chapter 1: Microservices'],
          ['ch2-evolutionary-approach', 'Chapter 2: Evolutionary approach'],
          ['ch3-best-practices', 'Chapter 3: Best practices'],        
          ['ch4-case-studies', 'Chapter 4: Case Studies: Re-architecting the monolith'],        
          ['ch5-related-techniques', 'Chapter 5: Related techniques and patterns'],        
          ['ch6-related-technologies', 'Chapter 6: Related technologies'],        
          ['ch7-enterprise-graphql', 'Chapter 7: Enterprise GraphQL'],
          ['ch8-jam-stack', 'Chapter 8: JAM Stack'],
          ['ch9-serverless', 'Chapter 9: Serverless'],
          ['ch10-team-structure', 'Chapter 10: Team Structure'],
          ['extra-cto-community', 'CTO Community: Interviews, Case Studies and more'],
          ['extra-microservices-and-unicycling', 'Appendix 1: Microservices and unicycling'],
          ['extra-blogs-and-resources', 'Appendix 2: Blogs and resources'],
          ['extra-hidden-costs', 'Appendix 3: The hidden cost of microservices: complexity']
        ]
    },
    title: 'Microservices Architecture for eCommerce',
    description: 'Open Source book on implementing Microservices architecture for eCommerce. Case Studies, Organization structure you need to apply, Strangler pattern, BFF, Headless eCommerce platforms and much more!',
  };
  