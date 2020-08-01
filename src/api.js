import {NEWS_API_KEY} from "./config";

/**
 * This method fetches latest news from API
 * @returns {Promise<any>}
 */
export const getLatestNews = async () => {
    const response = await fetch(
        `https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
    );
    const responseJson = await response.json();
    return responseJson;
};