import siteList from "./data/site_list.json";
import siteDetails from "./data/site_details.json";

type Site = {
    name: string
    displayName: string
}

type SiteFullData = {
    name: string;
    url: string;
    logo: string;
    displayName: string;
    publisher: string;
    creationDate: string;
    moduleConfig: object;
    inventoryConfig: object;
    presets: string[];
    stats: {
        requests: Record<string, number | undefined>;
    };
    loaderConfig: object;
};


export class ApiRepository {
    public getSiteList = async (): Promise<Site[]> => {
        await new Promise(resolve => setTimeout(resolve, 100))
        return siteList
    }

    public getSite = async (name: string): Promise<Site> => {
        await new Promise(resolve => setTimeout(resolve, 1))
        return siteList.filter((site: { name: string }) => site.name === name)[0]
    }

    public getSiteDetailsList = async (): Promise<SiteFullData[]> => {
        await new Promise(resolve => setTimeout(resolve, siteDetails.length * 50))
        return siteDetails
    }

    public getSiteDetails = async (name: string): Promise<SiteFullData> => {
        await new Promise(resolve => setTimeout(resolve, 200))
        return siteDetails.filter((site: { name: string }) => site.name === name)[0]
    }
}
