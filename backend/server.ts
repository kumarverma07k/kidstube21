import { Video, WriteForUsFormData } from '../types';
import { VIDEOS } from './data';

const SIMULATED_DELAY = 500; // ms

// Helper to wrap functions with a delay to simulate network latency
const withDelay = <T>(data: T): Promise<T> => {
    return new Promise(resolve => setTimeout(() => resolve(data), SIMULATED_DELAY));
};

export const getAllVideos = (): Promise<Video[]> => {
    return withDelay(VIDEOS);
};

export const getLatestVideos = (): Promise<Video[]> => {
    const latest = VIDEOS.slice(0, 3);
    return withDelay(latest);
};

export const getVideoById = (id: string): Promise<Video | undefined> => {
    const video = VIDEOS.find(v => v.id === id);
    return withDelay(video);
};

export const getRecommendations = (videoId: string): Promise<Video[]> => {
    const recommended = VIDEOS
        .filter(v => v.id !== videoId)
        .sort(() => 0.5 - Math.random()) // Simple shuffle for recommendations
        .slice(0, 4);
    return withDelay(recommended);
};

export const searchVideos = (query: string): Promise<Video[]> => {
    if (!query) return withDelay([]);
    const results = VIDEOS.filter(video => 
        video.title.toLowerCase().includes(query.toLowerCase())
    );
    return withDelay(results);
};

export const submitArticle = (formData: WriteForUsFormData): Promise<{ success: boolean; message: string }> => {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("--- New Article Submission Received ---");
            console.log("From:", formData.fullName, `(${formData.email})`);
            console.log("Article:", formData.article);
            console.log("---------------------------------------");
            resolve({ success: true, message: 'Thank you! Your article has been submitted successfully. We have received it on our backend.' });
        }, SIMULATED_DELAY);
    });
};