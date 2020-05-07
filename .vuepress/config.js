module.exports = {
    base: '/',
    port: 8080,
    dest: 'public',
    markdown: {
      toc: {
        includeLevel: [2]
      }
    },
    head: [
      ['link', { rel: 'icon', href: '/favicon.png' }],
    ],
    themeConfig: {
      repo: 'DivanteLtd/microservices-book',
      editLinks: true,
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
            text: 'More eBooks',
            link: 'http://divante.com/knowledge',
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
        ['ch8-microservices-and-unicycling', 'Appendinx 1: Microservices and unicycling'],        
        ['ch9-blogs-and-resources', 'Appendinx 2: Blogs and resources']
    ]
    },
    title: 'Microservices Architecture for eCommerce',
    description: 'Headless PWA for eCommerce',
  };
  