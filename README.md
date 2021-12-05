# MLH Project - EPYG

EPYG: Every Place You Go!

## Try in link

Vercel is used to upload this repository and you can check out this project [here](https://epyg-client.vercel.app/)
(However, the api is not on the server. So some features of this service would not be available without running local api. To run local api, you need to clone [this repo](https://github.com/mlh-korean/epyg-python-api) and get it running in your local computer.)

## What feature we offer

- Search location (with Google Map AutoSearch Api)
- Retrieve Traffic condition Google Map by location input (with Google Map Api)
- Retrieve Google Search Trend results (with [custom api](https://github.com/mlh-korean/epyg-python-api))
- Retrieve instagram images with location input (with [custom api](https://github.com/mlh-korean/epyg-python-api))
- Count the number of people in images (with [custom api](https://github.com/mlh-korean/epyg-python-api) using Google Vision API)

### What have not done yet
- Image api is not done yet
Api has a feature to count number of people in image and only return images that has more than 5 people.
However, routing is not done yet. So client didn't use that feature and render static images temporarily.
- Google Map Traffic
We offer google map by location input. However showing traffic condition is not done yet.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project Stack

- NextJS
- React
- Sass
