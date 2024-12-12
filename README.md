# Developing a Web Application Using Vue 3 and Nuxt 3

A web application built with **Vue 3** using the **Nuxt 3** framework.

## Application Description
The application consists of:
- A **catalog page** with search functionality and a list of items.

### Data Source

[Google Books API](https://developers.google.com/books)

---

## Requirements

### Core Technologies:
- **Flexbox/Grid** for layout
- **SCSS** preprocessor
- **TypeScript** for data typing (no `any` type allowed)
- **Vue Composition API** and composables (hooks)
- **Pinia** for state management

### Restrictions:
- No use of UI libraries (e.g., Vuetify, Bootstrap).

---

## Functional Requirements

1. **Deep Search by Item Properties.**
   - Each item may have properties such as title, author, etc.
   - When entering text into the search bar, filter the list to display only matching items.

2. **Change Item Display Format.**
   - Implement two display formats:
      - Grid view
      - Horizontal list view

3. **Pagination.**
   - Implement any form of pagination.

4. **Item Details Page.**
   - When clicking on an item, navigate to a separate page with detailed information about the selected item.
