👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to the further development of the Offcourse platform, which is hosted on the [Offcourse-Next GitHub repo](https://github.com/OffCourse/offcourse-next). All fundamentals for design, coding and the work ethos of the Offcourse community can be found seperately at ...

## Table Of Contents

- Code of Conduct
- What should I know before I get started?
- How Can I Contribute?
  - Reporting Bugs
  - Suggesting Enhancements
  - Contributing changes (Bug fixes, Code Contribution and Pull Requests)

## Code of Conduct

This project and everyone participating in it is governed by the Offcourse Code of Conduct. By participating, you are expected to uphold this code. Please read our Code of Conduct document carefully and in case of unacceptable behavior report to [contact@offcourse.io](mailto:contact@offcourse.io)

## What should I know before I get started?

For the last two years, our project has been mainly coded in ClojureScript. ClojureScript was superior from a technical perspective, and had a small but very dedicated community. However, we re-assed this decision as it turned out that onboarding new people is difficult, both because of an unfamiliar language and difficult tooling around the language.

JavaScript, on the other hand, has moved in the opposite direction. There is an incredible amount of tools and libraries available, while a lot of the initial shortcomings of the language are continuously being fixed. We therefore recently decided to use **JavaScript as the main language for our project**. This means we will move our frontend code to JavaScript and write new libraries and new backend services in JavaScript. Our existing backend services and libraries will be gradually moved to JavaScript in the near future.

## How can I contribute?

If you are interested in contributing to our open source project, you can make a contribution by one of the following:

- Reporting Bugs
- Suggesting Enhancements
- Contributing changes (Bug fixes, Code Contributions and Pull Requests)

## Reporting Bugs

The Offcourse platform is under continuous development. Bugs are a natural part of this process and so, when you spot one, please file a bug report (a GitHub issue) back to the community. If you know how to fix it yourself: great! We invite you to do so. Read the section 'contributing changes' below how it works. If not, we'd like you to give the needed info through the GitHub issue to us, so someone else can help fix it.

## **What to put in your bug report**

Make sure your report gets the attention it deserves: bug reports with missing information may be ignored or punted back to you, delaying a fix. The below constitutes a bare minimum; more info is almost always better:

- **A detailed description of the bug**. Describe how the bug occurred, what action you took when it happened. Also, include print screens.
- **What version of the core programming language interpreter/compiler you are using.**
- **What operating system you are on.** Windows? (Vista? 7? 32-bit? 64-bit?) Mac OS X? (10.7.4? 10.9.0?) Linux? (Which distro? Which version of that distro? 32 or 64 bits?) Again, more detail is better.
- **Which version or versions of the software you are using.** Ideally, you followed the advice above and have ruled out (or verified that the problem exists in) a few different versions.

## Suggesting enhancements

Feature requests and Design Change Requests (DCRs) are an important part of the lifecycle of any software project. Please log these as Issues in the GitHub repository. Again, please provide us with the necessary information so we, and other community members, understand the value of the request. This includes:

- Detailed scenarios enabled by the feature or DCR.
- Information about your use case or additional value you / your business will see from the feature.
- Any design tips or estimation ideas you may have considered already.
- Make note of whether you are opening an issue you would like the Offcourse team or another community member to work on *or* if you are looking to design & develop the feature yourself.
- Any potential caveats or concerns you may have already thought about.
- A miniature test plan or list of test scenarios is always helpful.

## Contributing changes

This constitutes bug fixing as well as the contribution to a new feature from our roadmap and code contribution in general. You will find our bug database and roadmap soon to see what contributions can be made here. The following are guidelines for working on such changes.

Before you start working on a feature or substantial code contribution that is not in our bug database or on our roadmap, please discuss it with the team and ensure it is an appropriate addition to the core product. You can do this by sending an email to [contact@offcourse.io](contact@offcourse.io)

## How to use the feature roadmap

Curious to know what features you can help us develop?

You will see on our feature roadmap that there are a lot of opportunities to expand the functionalities of the platform, both the functionality of the course cards as well as navigation on the platform for example. We continuously update our roadmap with new features.

We are also open to discuss features you would like to work on that are not on our roadmap. You can get in touch via [email](mailto:contact@offcourse.io) to discuss the possibilities.

## **Version control branching**

- Always **make a new branch** for your work, no matter how small. This makes it easy for others to take just that one set of changes from your repository, in case you have multiple unrelated changes floating around.

  > A corollary: don’t submit unrelated changes in the same branch/pull request! The maintainer shouldn’t have to reject your awesome bugfix because the feature you put in with it needs more review.

- **Base your new branch off of the appropriate branch** on the main repository:

  Bug fixes should be based on the branch named after the oldest supported release line the bug affects.

  E.g. if a feature was introduced in 1.1, the latest release line is 1.3, and a bug is found in that feature - make your branch based on 1.1. The maintainer will then forward-port it to 1.3 and master.Bug fixes requiring large changes to the code or which have a chance of being otherwise disruptive, may need to base off of master instead. This is a judgement call – ask the devs!New features should branch off of the ‘master’ branch.Note that depending on how long it takes for the dev team to merge your patch, the copy of master you worked off of may get out of date! If you find yourself ‘bumping’ a pull request that’s been sidelined for a while, make sure you rebase or merge to latest master to ensure a speedier resolution.

  **Code formatting**

Follow the style you see used in the primary repository\*\*! Consistency with the rest of the project always trumps other considerations. It doesn’t matter if you have your own style or if the rest of the code breaks with the greater community - just follow along.

## Test!

Any bugfix that doesn’t include a test proving the existence of the bug being fixed, may be suspect. Ditto for new features that can’t prove they actually work.

We’ve found that test-first development really helps make features better architected and identifies potential edge cases earlier instead of later. Writing tests before the implementation is strongly encouraged.

After testing you can commit your changes and create a pull request. In the description field of your pull request, write down the issue number (if submitting code fixing an existing issue) or describe the issue + your fix (if submitting a wholly new bugfix). Hit ‘submit’! And please be patient - the maintainers will get to you when they can.

👍We wish you fun and a great learning experience in contributing to the Offcourse open source project!👍
