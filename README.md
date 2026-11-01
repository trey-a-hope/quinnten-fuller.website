# Intercom Marketing Website

The website for Intercom, a digital marketing consulting company in Miami, Florida, founded by Quinnten Fuller. It presents the company's services (SEO, paid search and more), the team, a clientele portfolio and a blog, with a free SEO audit request and a contact form with a Google Map. A signed-in admin can add and edit blog posts and clientele entries. It's an AngularJS 1.4 app written in TypeScript on top of the Start Bootstrap "Agency" theme, with Firebase as the content store.

## Sections

The site is mostly one page. The sections are in `app/Pages/`:

| Section | What it shows |
| --- | --- |
| About | who Intercom is and what it does |
| Services | SEO, paid search (PPC) and other services, plus a **Free SEO Audit** request form |
| Reach More | how Intercom uses email, search, social and content |
| Clientele | portfolio entries with date, category and links |
| Team | team bios, starting with CEO Quinnten Fuller |
| Blogs | blog list, and a full post view at `/blog/{path}` |
| Contact | office address, Google Map and contact form |

## How it works

- Routing uses Angular UI Router (`app/Routing/Routing.ts`): `/` for the main page and `/blog/{path}` for a single post.
- Blog posts, clientele entries and team members are stored in the Firebase Realtime Database under `Blogs`, `Clientele` and `Team` (`app/Services/`). The Firebase JS SDK 3.9 is loaded from the CDN in `index.html`.
- When an admin is signed in (`loginService.isLoggedIn()`), add, edit and delete controls appear for blogs and clientele (`app/Pages/Blogs/AddEditBlogModalTemplate.html`, `app/Modal/NewClienteleModalTemplate.html`).
- The contact and SEO audit forms send email through the PHP scripts in `mail/contact_me.php` and `php/sendEmail.php`, so the site needs a PHP host.

## Tech stack

- AngularJS 1.4.8 (+ animate, sanitize) and Angular UI Router, written in TypeScript (compiled `.js` files are committed next to the `.ts` sources)
- Firebase Realtime Database
- Start Bootstrap Agency theme: Bootstrap 3, Font Awesome, LESS and Sass
- Google Maps JavaScript API for the contact map
- Gulp for LESS/Sass compilation, minification and a BrowserSync dev server

## Getting started

```sh
npm install
npx gulp dev       # BrowserSync dev server with live reload
npx gulp           # build CSS/JS and copy vendor files
```

Recompile TypeScript changes with `npx tsc`.

## Notes

- The repo also contains a `.hg` folder and a `.DS_Store` from an earlier Mercurial/Sourcetree setup. Neither is needed.
- The Agency theme is MIT licensed by Blackrock Digital LLC (see `LICENSE`).
