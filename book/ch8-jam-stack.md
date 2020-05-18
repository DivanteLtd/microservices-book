# Static sites and the JAM Stack 

**Developers are very often the early adopters for new tools and practices. When it comes to content management, especially text content, they have a lot to say. They manage heavy code-bases on a daily basis.**

Static page generators. The concept sounds weird, at least at first glance. Kind of like deja-vu. Didn’t we have them before? I mean editing static HTML, uploading it to FTP servers and manually managing the hyperlinks. Well — yes and no. Kind of.

> The human-oriented formats have gradually replaced the old XML, RSS and ATOM formats. 

## Separation of concerns

Developers hate WYSIWYG editors. They generate pretty messy HTML. Say “WYSIWYG editor” and developers immediately see the MS Word generated HTML from 2003. It’s improving over time — but still — a visual editor equals a lot of additional work. The reason for that, I guess, is that visual content editing does not separate roles enough. 

Front-end developers don’t like to take care of the content details. They like to have full control over how it renders, optimized for the user’s device. The editors, on the other hand, use all the tools the WYSIWYG editor gives them — including styling and formatting. That can cause a lot of trouble.

Modern static page generators start with a **Separation of concerns** in order to provide the content in the form of **semantically meaningful documents**. The Edit process is separated from the Render process by some kind of intermediate format which is easy for a human to edit and still easy to process. 

We can name just a few of the most popular intermediate content formats:
 - **MarkDown** language — popularized by Github. MarkDown looks pretty OK even in its plain form, and can look really cool when rendered. It’s used for example by VuePress (vuepress.org), Jekyll (jekyllrb.com),
 - **WikiText** — it got started with Wikipedia, now it’s being used by the popular Confluence (Atlassian.com) and GitBook projects (github.com/GitbookIO/gitbook),
 - **JSON** — generated from a WYSWIYG editor (like ProseMirror — prosemirror.net) or Headless CMS (like Prismic — prismic.io).

These, let’s say, human-oriented formats have gradually replaced the old XML, RSS and ATOM formats.

## Data sources

The static part of “static” page generator can be a little bit misleading. The page is static in its final form: the generated HTML markup. It can be served from anywhere (which is one of its key benefits). But the data used for the page generation is subject to all kinds of changes. The data itself doesn’t have to be static. In reality, sites — even single pages that change — can be dynamically regenerated whenever the data has changed. It’s usually used as a kind of file-based output cache for dynamic data.

Apps currently do 90% of their job on the client’s side — using dynamic REST or GraphQL data sources and services. You can find plenty of such ready-to-use services, starting with low-level image-thumbnail services like Cloudinary (Cloudinary.com), ending with pretty sophisticated ones like Snipcart (snipcart.com), which lets you include a fully functional checkout right into your site. 

Just because a page has been generated, doesn’t mean it can’t be dynamic. Usually, the pages include a lot of dynamic JavaScript (React, Vue, Angular, etc.). The static page form is mostly used to improve SEO in this configuration, to provide the browser with not just an empty HTML shell (like most Single Page Applications still do) but with something the crawler can really index.

Does it still sound so .. static? This combination of JavaScript, an API and Markup is called the JAM Stack, and the growing community around this concept is pretty impressive. You can read more or join some local community events via jamstack.org.

## Object based model

For most rendering frameworks, the rendering process is based on components/widgets that are fed with the structural content. There is usually a JSON config file or feed making up the page of a particular component (written, for example, in React or Vue.js). The provided data is injected and the components take care of the proper rendering process.

## Frameworks

The frameworks — or generators – are here to help, providing the basic scaffolding and infrastructure for rendering the content to the final form, and sometimes also deploying it.

Some of the static site generators are less dynamic (e.g. GitBook — designed for software projects documentation). 

Some of them are domain-oriented — Vue Storefront (vuestorefront.io) has a static site generator included; it’s based on the eCommerce domain (products, categories, etc.). The page is updated whenever the price / products change.

Some of them are framework oriented — NuxtJS (nuxtjs.org) is a pretty cool example of a very opinionated and popular static page generator dedicated to Vue.js. Fully customized page structure, extensions and custom routing makes it one of the best options if you’re using the Vue.js framework.

There are also very general solutions offering a full range of integrations. A good example of this approach is GatsbyJS (gatsbyjs.org). The number of supported data sources is amazing, and it includes GraphQL adaptors, as well as popular CMS and eCommerce platforms. 

If you’d like to check out all the available page generators, please do check the Awesome Static Generators list (github.com/myles/awesome-static-generators#wikis). You’ll find the tools for any programming language you can name (including Golang, Kotlin, Electron, Python and JS).

## Distribution

Besides the improved developer-editor cooperation that comes with static pages, there are other benefits, and easy deployment is clearly one of them. With a wide set of hosting providers like Amazon AWS, Netlify, Heroku, Zeit — even Github itself — deployment is usually one-click, or one `git push`, away.

It’s so easy because the results are just the static HTML files + JS/media assets. 

Git source control gives the editors and devs even more common ground. They can tag changes, compare and merge edits, and use branches for content staging. It doesn’t mean the editors need to use the command line tools; Gitlab or GitHub Enterprise are probably the best tools to start with.

Easy distribution usually also means easy Geo-Distribution as the files can be uploaded into different AWS/Azure availability zones and then users will just be redirected to the closest location by a dynamic DNS Service like Amazon Route 53 or by a CDN service like Cloudflare.

## Speed and scalability

A static site means you don’t have to scale out the application and database layer as there is hardly any dynamic application or database to serve dynamic requests. There is no J2E container, Node.js server or PHP application. All markup was generated and is now hosted by a super-fast HTTP server like nginx, varnish or even a more specialized CDN service.

Most application scaling headaches are simply gone — including avoiding memory leaks, race conditions and other problems that might occur at scale.

## Safety

As there’s no intermediary, i.e. the database, involved, the threat of code injection is minimal for a static website. No plugins and dynamic software to host the website. 

Static websites are a safe bet compared to dynamic ones when it comes to security as they don’t rely on CMS plugins. APIs and JavaScript are used to handle the dynamic functions of static websites, eliminating the risk of getting hacked.

### Read full story
<table>
<tr>
   <td><a href="https://divante.com/the-new-architecture"><img alt="The Cover" src="https://divante.com/books/books%20mockups/the_new_architecture_1.png" width="280"/></a></td>
   <td>
      <h4><a href="https://divante.com/the-new-architecture">Read full story...</a></h4>
         <p>You can download PDF version of this book - including all case studies + extra materials from it's <a href="https://divante.com/the-new-architecture">official landing page</a></p>
   </td>
</tr>
</table>



