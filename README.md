# Moustache Republic Frontend Developer Technical Test

### By Ryan Orense

### rkorense@gmail.com

## Link to deployed website using Vercel Pages

    https://mr-test.vercel.app/

## Tech Stacks / Packages Used

- React using Vite: React is my preferred tech stack for web development. For this test I have used Vite with JavaScript for the project environment.

- Axios: Axios makes fetching data a lot easier. It's being used in the useFetch hook, used to collect data from from the provided JSON file in the AWS environment.

- Tailwind CSS: Prefered way of applying CSS styling. Inline styling declutters file structure and easy to see the effects. Tailwind makes responsive design a lot easier to manage.

- Redux: Redux was used for the storing global state. Used primarily for the shopping cart feature. Redux persist, allows the state to persist even after refreshing the page.

- React Hot Toast: Toast used to inform the user if the adding products, removing products, and to ensure user selects a size before adding to card.

- Spinner: Spinner component for loading state.

## Note

- Global styling of p and h1 tags have been done on index.css file, as per the design requirements.
- Responsive design was achieved through use of media queries in Tailwind. Cart icon is only visible when used in small screens.

## Improvements for next time

Due to the limited time, only the MVP was created. Though there were some features that I would implement if time was not a restricting factor:

- Use TypeScript instead of JavaScript for type checking.
- Introduce automated unit tests using Vitest.
- Include more features such as fetching multiple items instead of one item.
- Quantity selector in the product page for adding multiple number of the same item.
- Hook up a payment API (such as Stripe) to the 'Proceed to checkout' button.
