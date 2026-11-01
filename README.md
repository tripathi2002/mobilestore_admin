# Mobile Store Admin

Angular admin panel for a mobile phone store. Admins manage products, categories, brands, coupons, orders and users from a sidebar dashboard backed by a REST API.

## Features

- Dashboard and statistics pages
- Product create and list
- Category and brand management (add, list, update, delete)
- Coupon create and list
- Orders, users, pages and settings sections
- Lazy-loaded feature modules (lists, coupons, products)

## Tech stack

Angular 16 · TypeScript · RxJS · SCSS · Angular CDK

## Project structure

```
src/app/dashboard/     # dashboard
src/app/products/      # product create/list + service
src/app/lists/         # brand & category CRUD
src/app/coupens/       # coupon create/list
src/app/orders/, pages/, header/, body/
src/app/data/          # shared models, constants, styles, shared.service
```

## Getting started

```bash
npm install
npm start          # http://localhost:4200
npm run build
```

The app expects a backend at `http://127.0.0.1:1000/v3/api` (set in the app's constants).

## Environment variables

None. The API base URL is hard-coded in the source.
## Screenshots

_Screenshots coming soon._

## License

No license file has been added to this repository yet.
