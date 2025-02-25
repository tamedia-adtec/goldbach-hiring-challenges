// index.ts
// --------------------
// 1. TIMEOUT + MOCK DATA
// --------------------
const TIMEOUT = 100;

interface Ad {
  id: number;
  impressionId: number;
}

interface Impression {
  id: number;
  impressions: number;
}

const ads: Ad[] = [
  { id: 1, impressionId: 1 },
  { id: 2, impressionId: 2 },
  { id: 3, impressionId: 3 },
  { id: 4, impressionId: 4 },
];

const impressions: Impression[] = [
  { id: 1, impressions: 1000 },
  { id: 2, impressions: 2000 },
  { id: 3, impressions: 3000 },
  { id: 4, impressions: 4000 },
];

// --------------------
// 2. MOCK ASYNC FUNCTIONS
// --------------------
export const getAllAdsIds = (): Promise<number[]> =>
  new Promise((resolve) =>
    setTimeout(() => resolve(ads.map((a) => a.id)), TIMEOUT)
  );

export const getAdById = (adId: number): Promise<Ad | undefined> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(ads.find((ad) => ad.id === adId));
    }, TIMEOUT * 2)
  );

export const getAdImpression = (
  impressionId: number
): Promise<Impression | undefined> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(impressions.find((imp) => imp.id === impressionId));
    }, TIMEOUT)
  );

// --------------------
// 3. TASK: getAllImpressions
// --------------------
export const getAllImpressions = async (): Promise<void> => {
  const adIds = await getAllAdsIds();
  const startTime = Date.now();

  for (let adId of adIds) {
    const ad = await getAdById(adId);
    console.log("ad: ", ad);
    const adImpressions = await getAdImpression(ad?.impressionId ?? 0);
    console.log("adImpressions: ", adImpressions);
  }

  const endTime = Date.now();
  console.log("execution time: ", endTime - startTime);
};

// Run to test:
getAllImpressions()
  .then((res) => console.log("Done:", res))
  .catch((err) => console.error("Error: ", err));
