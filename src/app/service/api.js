import axios from "axios";
import {
    backendUrl,
    socialMediaUrl,
    rapidApiKey,
    rapidApiHost,
} from "./Config";

export const getSocialMedia = async (url, productUrl, productDescription) => {
    const options = {
        method: "GET",
        url: socialMediaUrl,
        params: {
            url: url,
            filename: "video",
        },
        headers: {
            "X-RapidAPI-Key": rapidApiKey,
            "X-RapidAPI-Host": rapidApiHost,
        },
    };
    const response = await axios.request(options);
    const videoLink = response.data.links[0].link;
    await downloadVideo(videoLink);
    const responseTransscript = await axios.get(`${backendUrl}/transcript`, {
        params: {
            openAiKey: localStorage.getItem("openAiKey"),
            productUrl: productUrl,
            productDescription: productDescription,
        },
    });
    return responseTransscript.data.transcription;
};

export const downloadVideo = async (url) => {
    const response = await axios.get(`${backendUrl}/download`, {
        params: { url },
    });
    return response.data;
};
