# Code Challenge: Optimized Loading with API Calls

## Overview

In this challenge, you will implement an efficient loading behavior using the provided API. The goal is to display a list of site names and their display names as quickly as possible while also calculating the sum of requests from the site details API. The sum of requests should be displayed with minimal delay, ensuring a smooth user experience.

## API Methods

You will interact with the API using the following methods provided by the `ApiRepository` class:

```javascript
import { ApiRepository } from "./libs/api.repository.js";
const apiRepository = new ApiRepository();
```

### Available API Endpoints:
- `getSiteList()`: Returns a collection of sites with `name` and `displayName` properties.
- `getSite(name)`: Returns a single site by filtering with `name`.
- `getSiteDetailsList()`: Returns a collection of complex objects containing all site information.
- `getSiteDetails(name)`: Returns one complex site details object.

## Challenge Requirements

### 1. Implement Efficient Loading
- **Load site names and display names as quickly as possible.**
- **Compute the sum of all requests from the site details API:**
    - Each site detail object contains a `stats.requests` property.
    - Requests may be `undefined`, so handle this case properly.
    - The total sum of requests should be displayed once fully computed.
- **Optimize for a smooth user experience:**
    - Names and display names should be shown as soon as they are available.
    - The total sum of requests can be displayed slightly later without blocking.

### 2. Visualize the Loading Behavior
- Display the retrieved data in a frontend UI.
- Indicate loading states appropriately.
- Ensure the site list and total request count appear as soon as possible, with smooth UI updates.

## Evaluation Criteria
- **Performance**: Efficiently fetching and displaying data without unnecessary delays.
- **User Experience**: Providing a smooth and non-blocking UI.
- **Code Quality**: Clean and maintainable implementation.
- **Correctness**: Ensuring all data is properly retrieved and displayed.

## Getting Started
1. Clone this repository.
2. Install any dependencies (if needed).
3. Implement the solution.
4. Run the project and verify that names appear quickly, and total requests update smoothly.

Happy coding!

