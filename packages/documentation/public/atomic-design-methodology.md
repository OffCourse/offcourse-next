## Why we choose atomic design

At Offcourse, we love to do things differently. A different approach to education, a different approach to the development of the Offcourse platform. We have developed our platform in a way that everyone is able to understand it. In this way, you don't have to spend hours exploring the underlying code, but instead you can get started right away. In the upcoming paragraphs, we would like to introduce you to our approach, which is inspired by the methodology of atomic design. This will help to understand why we do things the way we do. So you will be able to contribute in the way you want to. Ready? Let's get started.

## A need for new ways of developing

Despite the relatively short history of web development, many things have changed in the way that websites are created. Initially, creating a website was a very straight-forward process, resulting in one static webpage. There was a huge lack of adaptability here, hence the step to responsive design was made. In practice however, it turned out to still be an insane amount of work to create smooth multi-device web experiences using responsive design. The next step to front-end frameworks such as Bootstrap seemed logical, yet its limitations made the approach perfect for MVP's and speedy development, yet not for in-depth web development. 

We have seen that current widespread practices fall short and a need for new approaches becomes clear. In an ideal world, a systematic way of thinking would exist that allows for web development that is extremely adaptable, consistent, easy to share and test, speedy to use and lasts for years. If only someone would have come up with such a system..

## The rational behind atomic design

Actually, a guy named Brad Frost has, inspired by the natural world, developed an interface design system called **atomic design**. This methodology, composed of five distinct stages working together, can be used to create interface design systems in a more deliberate and hierarchical way. 

The five stages of atomic design are: 1) atoms 2) molecules 3) organisms 4) templates and 5) pages. The foundations of Offcourse are based on this methodology, hence we think it is important for you to get introduced to the matter. In the next section, we will quickly take you through the basics of these stages. 

First of all, **atoms** serve as the smallest building blocks possible that comprise all of the user interfaces. In this way, atoms are the foundation of the interfaces. The atoms include basic HTML elements such as *buttons*, *inputs*, *form labels* and others that can’t be broken down any further without ceasing to be functional. In simple words, atoms are the smallest LEGO building blocks possible to start building with. 

Several atoms can be grouped into **molecules** to function as simple user interface (UI) elements in interfaces. In this way, atoms such as a *search input*, *form label* and *button* can be used to create a search form molecule. By combining atoms into molecules, suddenly the atoms have purpose. If we use the comparison of atoms as the LEGO building blocks, a molecule could be a wall, which is build up from these separate building blocks. 

Following, molecules and/or atoms can be combined into **organisms**, which are relatively complex UI components. Organisms form distinct sections of an interface. In the case of Offcourse, an organism is for example the card feature on the platform. In the LEGO case, several molecules (walls, doors and a roof) could be combined to create a complex component, namely a LEGO house. 

**Templates** are page-level objects that are used to place components into a layout. Templates structure the necessary page components and shows how they function together, providing a context for the molecules and organisms. So in a way, templates are used to structure the different bits and pieces and position them in the blank canvas of the webpage. It is important to realize that templates focus on the page’s underlying content structure rather than the page’s final content.

Finally, with the introduction of pages, representative content is introduced. **Pages** are instances of templates that demonstrates the final interface as the users will see it, using real content when displaying it. Pages can be used to test the effectiveness of the design system, but are also a useful tool to articulate variations in templates. This functionality is vital in the development of reliant and robust design systems. 

![](https://www.notion.so/file/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb72a1d9a-a9f2-44e6-8783-1541292f3883%2Finstagram-atomic.png)

```image
plain: true
src: "/assets/atomic-design.png"
description: "_*Above, Brad Frost applied his atomic design methodology to the native mobile app Instagram.*_"
```
Now that you have a basic understanding of atomic design, you will be able to understand our  documentation for development a lot better. All the features of the Offcourse platform are built according to this principle of atomic design. So when you get involved, think in bits and pieces, building blocks. Get inspired by the atoms, molecules and organisms that we have created so far. 

*The content of this page is based on our interpretation of the online version of Brad Frost's Atomic Design. The images and all other rights related to his content belong to him. Interested in reading more about the atomic design methodology? Have a look at Brad Frost's atomic design website* [*here*](http://atomicdesign.bradfrost.com/table-of-contents/).
