# API Loading Optimization Challenge

Welcome to the **API Loading Optimization Challenge**! In this exercise, you will optimize data retrieval and visualization by efficiently loading and displaying information from multiple API endpoints.

---

## Overview

The file `index.ts` imports a small repository that interacts with an API providing site and site details data. Your goal is to optimize loading behavior, ensuring a smooth user experience while displaying site information as quickly as possible.

```javascript
import { ApiRepository } from "./libs/api.repository.js";
const apiRepository = new ApiRepository();
```

### Available API Endpoints:
- `getSiteList()`: Returns a collection of sites with `name` and `displayName` properties.
- `getSite(name)`: Returns a single site by filtering with `name`.
- `getSiteDetailsList()`: Returns a collection of complex objects containing all site information.
- `getSiteDetails(name)`: Returns one complex site details object.

### Key Points

- **Multiple API Endpoints**: Data is fetched from different endpoints with varying response formats.
- **Optimized Loading**: Prioritize displaying site names and display names first, then compute additional stats asynchronously.
- **Consistent Format**: Ensure a uniform approach to handling API responses.
- **Documentation**: Briefly explain your approach, trade-offs, and improvements.

---

## Requirements

1. **Investigate the API Responses**
  - Familiarize yourself with the structure of each API response.
  - Identify potential pitfalls (e.g., missing or undefined values).

2. **Create a Function**
  - Implement a function (or multiple functions) to efficiently fetch site names, display names, and compute request totals.
  - Prioritize displaying names and display names as soon as they are available.
  - Fetch additional stats asynchronously to avoid UI blocking.

3. **Return & Display**
  - Gather data from the API and ensure a smooth user experience.
  - Return results in a consistent format (e.g., an array of objects containing name, displayName, and total requests).
  - Display the results in a browser UI if possible; otherwise, log them to the console.

4. **Document Your Decisions**
  - Explain your approach (in code comments or a separate doc).
  - Describe how API responses are handled and why certain decisions were made.
  - Outline the structure of your returned data.

---

## Setup & Execution

```bash
npm install
npm start
```

