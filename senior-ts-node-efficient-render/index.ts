import {ApiRepository} from "./libs/api.repository.js";

const apiRepository = new ApiRepository();

apiRepository.getSiteList().then((siteList) => {
   console.log(siteList);
});

apiRepository.getSite("").then((site) => {
    console.log(site);
} );

apiRepository.getSiteDetailsList().then((siteDetailsList) => {
   console.log(siteDetailsList);
});

apiRepository.getSiteDetails("").then((siteDetails) => {
    console.log(siteDetails);
});
