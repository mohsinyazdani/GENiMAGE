export interface EditResponse {
  images?: Array<{ url: string }>;
  image?: { url: string };
}

export interface ApiError {
  error: string;
  details?: string;
  timestamp?: string;
}

export type Mode = 'edit' | 'generate';

export type ModelId = 'nano' | 'pro';

export interface EditImageParams {
  image: Blob;
  prompt: string;
  negativePrompt?: string;
  model?: ModelId;
}

export interface InpaintImageParams {
  image: Blob | string;
  mask: Blob | string;
  prompt: string;
}

export interface GenerateImageParams {
  prompt: string;
  negativePrompt?: string;
  width?: number;
  height?: number;
  model?: ModelId;
}
