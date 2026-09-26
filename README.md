# Playwright QA Portfolio

[![Playwright Tests](https://github.com/zhamiila824/playwright-qa-portfolio/actions/workflows/playwright.yml/badge.svg)](https://github.com/zhamiila824/playwright-qa-portfolio/actions/workflows/playwright.yml)

A compact QA automation portfolio project built with **Playwright** and **TypeScript**.

The goal of this repository is to demonstrate practical test automation skills: UI testing, API testing, Page Object Model, reusable test data, CI, and failure artifacts.

## Tech stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions

## What is covered

### UI tests

The UI examples use the public SauceDemo test application.

- Successful login
- Negative login scenario for a locked user
- Adding a product to the shopping cart
- Assertions for navigation, messages, cart state, and product data

### API tests

The API examples use JSONPlaceholder.

- `GET` request with status and response-body validation
- `POST` request with payload and response validation

## Project structure

```text
.
├── .github/workflows/
│   └── playwright.yml
├── fixtures/
│   └── testData.ts
├── pages/
│   ├── CartPage.ts
│   ├── InventoryPage.ts
│   └── LoginPage.ts
├── tests/
│   ├── api/
│   │   └── posts.spec.ts
│   └── ui/
│       ├── cart.spec.ts
│       └── login.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## Running locally

Requirements: Node.js 20+.

```bash
npm install
npx playwright install chromium
npm test
```

Run only UI tests:

```bash
npm run test:ui
```

Run only API tests:

```bash
npm run test:api
```

Run tests in headed mode:

```bash
npm run test:headed
```

Open the HTML report:

```bash
npm run report
```

## Test design

The UI layer follows a simple **Page Object Model** so that selectors and page actions are separated from test scenarios. Test data is kept in a separate fixture file to avoid duplication and make scenarios easier to maintain.

The Playwright configuration also captures traces, screenshots, and videos on failures, which helps with debugging failed CI runs.

## CI

GitHub Actions runs the Playwright suite automatically on pushes and pull requests to `main`. The HTML Playwright report is uploaded as a workflow artifact after every run.

## Notes

This repository contains only demo automation created for portfolio purposes. It does not contain code, test data, or other intellectual property from previous employers.
