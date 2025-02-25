# Weather Data Optimization Challenge

Welcome to the **Weather Data Optimization Challenge**! In this exercise, you’ll integrate and transform weather data from two different APIs, ensuring type safety and a consistent output in TypeScript.

---

## Overview

The file `index.ts` imports a small repository that fetches weather data from two separate services. Each service has its own response format, and because the library code is JavaScript, there are no built-in TypeScript definitions. Your goal is to analyze these responses, choose which data format(s) to rely on, and produce a function (or functions) that returns a uniform, typed structure containing temperature data for a predefined list of cities.

### Key Points

- **Multiple APIs**: Each API returns weather data in a different shape.
- **TypeScript Safety**: The underlying library is not typed, so you must ensure type safety in your own code.
- **Consistent Format**: The function(s) you create should return the temperature data together with the city ID in a unified format for all requested cities.
- **Documentation**: Briefly explain your decisions (e.g., which API format you prefer, how you handle discrepancies, etc.).

---

## Requirements

1. **Investigate the API Responses**  
   - Familiarize yourself with the structure of each service’s response.
   - Identify any differences or potential pitfalls.

2. **Create a Function**  
   - Write a function (or multiple functions) to extract temperatures from the API responses.
   - Decide which API to prioritize, or if you need data from both.
   - Ensure the final data is well-typed and consistent.

3. **Return & Log**  
   - Gather temperature data for each city in the predefined `cities` array.
   - Return the results in a consistent format (e.g., an array of objects or a mapping from city to temperature).
   - Log the final output to the console.

4. **Document Your Decisions**  
   - Explain your approach (in code comments or a separate doc).
   - Why did you choose one API over the other, or how did you blend both?
   - What does your returned data structure look like?

---

## Setup & Execution

```bash
npm install
npm start
```
