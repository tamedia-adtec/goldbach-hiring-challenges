# Task: Optimize on weather API

## Description

The index.ts file imports a repository that fetches weather data from two different services. Since the library code is not parsed to TypeScript, the code is not type-safe. Investigate the responses from the two different weather APIs and create a function (or multiple functions) that safely extracts the weather data from the responses. Both services guarantee responses, but their response format might differ, choose which one to use preferably. Ensure that the function returns the temperature for each city from the preset array of cities in a consistent format. Log the return value of the function to the console and document your decisions.

## Run

```bash
npm install
npm start
```
