# Team Structure

> Any organization that designs a system (defined more broadly here than just information systems) will inevitably produce a design whose structure is a copy of the organization's communication structure -- [Melvin Conway, April 1968](http://www.melconway.com/research/committees.html)

I'd risk the statement - that a successful migration towards Microservices architecture depends more on the proper organization structure than any other factor. In my [recent interview with Kelly Goetsch](https://divante.com/webinars/headless-architecture-and-microservices-in-ecommerce-platforms) we concluded, that one of the key factors for changing the architecture is to have the **project sponsor with a budget and vision** and then the **proper team structure**. Only those factors - combined - will let you achieve the full speed.

We can add on top of this, that the successful architecture stands on three legs: **a proper Domain Model**, **People** and **Operating Model**.

The structure of the people, divided into the teams and their operating model differs from company to company, product to product, project to project. However, I really liked the observation done by Sam Newman in his [Monolith to microservices](https://samnewman.io/books/monolith-to-microservices/), that the best structure is the one which gives the team a full ownership. Usually the ownership means the **independent deployability** of the services the teams are working on. 

> Adding more people will only continue to improve how quickly you can deliver, if the work itself can be partitioned into separate pieces of work with limited interactions between them. -- [Sam Newman, Monolith to Microservices - after the "Mythical Man Month"](https://books.google.pl/books?id=ota_DwAAQBAJ&pg=PT50&lpg=PT50&dq=Adding+more+people+will+only+continue+to+improve+how+quickly+you+can+deliver,+if+the+work+itself+can+be+partitioned+into+separate+pieces+of+work+with+limited+interactions+between+them&source=bl&ots=OYM4Rzrxxz&sig=ACfU3U3rQOqI3U6s8-NSdw3L1q60Y33k7A&hl=en&sa=X&ved=2ahUKEwj84siOv7_pAhXKvosKHfhQDIAQ6AEwAHoECAYQAQ#v=onepage&q=Adding%20more%20people%20will%20only%20continue%20to%20improve%20how%20quickly%20you%20can%20deliver%2C%20if%20the%20work%20itself%20can%20be%20partitioned%20into%20separate%20pieces%20of%20work%20with%20limited%20interactions%20between%20them&f=false)

This means to achieve the performance, the team has to had full competences: developers, design, devops to build and ship new features to the production. Not needing to communicate with different structures. Of course, they need to fulfill the API service contracts and interfaces. Other than that they should be able to experiment and ship new features solely on their own.

Easier said than done.

When a company operates at a certain scale there is no golden rule how you structure the services. Therefore the teams. No wonder, there is a lot of experimentation. Let me share just two interesting cases on dealing with this problem.

## ASOS Team Structure

They made a distinction between the Enterprise domain in which they usually try to "Buy" the solution on the market and the Digital Domain, where they predominantly "Build" Building is fulfilling the customer's need as the Digital domain is very much product and client-centric. 

ASOS Structure is divided into Digital Domains and Platforms. They've got 9 Digital Domains, 19 Platforms, and 35 Dev Teams. Domains are the organizational structure for managing the *Platform teams*. The *Platform Teams* are maintaining and building the collections of aligned services; being 100% responsible for the full lifecycle of those services.

Each Platform team is led by the *Product manager* supported by the *Platform lead* and the team of *Product designers*, *Architects* and *Business Analysts*. They're creating the product vision, designs and maintaining the backlog that is then executed (implemented) by development teams. Development teams at ASOS consist of BAs, Data Analysts, developers and QA so they can ship the new features solely on their own.

*Source: [Micorservices architecture at ASOS](https://www.slideshare.net/AliKheyrollahi/microservice-architecture-at-asos)*

If your company isn't ASOS size - including 19 platforms and 35 devops teams - you can still apply some of the lessons. I guess the two most important ones are: to have the product/business link/person within the team working on the particular microservice. To make the quick decisions. There is a lot of decisions to made on daily basis. Then to have the development teams including everything required for your business domain to ship new features (usually devs, BA, QA and UX).

## MOVE structure by AboutYou

AboutYou is a pretty unique company. The unicorn e-commerce originated from Germany and - which is not less interesting - a headless, API First eCommerce platform. With more than 130 developers the question on the right-fit structure came to the surface. They introduced the MOVE operating model.

> We believe in small and fast teams. The number of people working cooperatively on the same project at the same time should not exceed 8. This makes the communication and development process more quick and efficient

*Source: [Introducing MOVE](https://medium.com/about-developer-blog/introducing-move-69f6794c573f)*

They resigned from having the traditional business units - rather focusing on the business / product domain. Each unit is a standalone product which is led by the technical and a business lead to balance the requirements. These units are representing a specific domain like „Checkout & Order handling“, „Core Processes“, or „Mobile App“. The teams manage to work using SCRUM or Kanban to improve transparency and ensure continuous improvement of teamwork and processes.

Within the teams there are one or more **Circles** with two predefined roles of **Circle manager** (who's in charge of gathering the business requirements) and the **Lead developer** (who manage to be a go-to tech person within the circle). What's interesting: the circle structure and roles can be *re-defined* every 9 months and even going further: developers can migrate between the circles (they should however stay within a single circle for 6 months or until the individual skill-set is better fir for another Circle).

## Wrap-up

The ability for the team to ship new features without (or with minimal) contact to the outside world seems like a good pattern for designing the team structure for the microservices-based project. I guess it's important to avoid any form of over-engineering. It's easy to forget, but most of the successful microservices projects [started as Monolith](ch2-evolutionary-approach.md). One of the key reasons are simplicity and performance.