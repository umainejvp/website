# UMaine Jewish Voice for Peace

This is a static informational website for the University of Maine chapter of Jewish Voice for Peace.  
It is hosted with GitHub pages.

## Setup instructions for development

1. Ensure that [bun](https://bun.sh/) is installed (it's a fast JavaScript runtime).
2. Clone or pull from the repository.
3. Run `bun i` to ensure all dependencies are installed/up to date.

### Run a local development server

- Simply do `bun run dev`!

### Update the production site on GitHub Pages

- Ensure that all your desired changes are present in the current working repo.
- Do `bun run deploy`.
- Wait a few minutes for the site to update...
- Then you're off to the races!

#### Getting a permission denied error?

If you try and use the `gh-pages` npm package (which `bun run deploy` invokes) to deploy a website from the Windows terminal and have a password-protected SSH key, you will not be prompted to enter your password and the deploy will fail. Using git bash will allow you to enter your password in a pop-up window!