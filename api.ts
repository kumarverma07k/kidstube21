import { Video, WriteForUsFormData } from './types';
import * as server from './backend/server';

export const api = {
    getAllVideos: (): Promise<Video[]> => {
        return server.getAllVideos();
    },
    getLatestVideos: (): Promise<Video[]> => {
        return server.getLatestVideos();
    },
    getVideoById: (id: string): Promise<Video | undefined> => {
        return server.getVideoById(id);
    },
    getRecommendations: (videoId: string): Promise<Video[]> => {
        return server.getRecommendations(videoId);
    },
    searchVideos: (query: string): Promise<Video[]> => {
        return server.searchVideos(query);
    },
    submitArticle: (formData: WriteForUsFormData): Promise<{ success: boolean; message: string }> => {
        return server.submitArticle(formData);
    }
};