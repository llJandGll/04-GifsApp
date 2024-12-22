export interface GifData {
  alt_text: string;
  analytics: {
    onload: object;
    onclick: object;
    onsent: object;
  };
  analytics_response_payload: string;
  bitly_gif_url: string;
  bitly_url: string;
  content_url: string;
  embed_url: string;
  id: string;
  images: {
    original: object;
    downsized: object;
    downsized_large: object;
    downsized_medium: {
      url : string
    };
    downsized_small: object;
  };
  import_datetime: string;
  is_sticker: number;
  rating: string;
  slug: string;
  source: string;
  source_post_url: string;
  source_tld: string;
  title: string;
  trending_datetime: string;
  type: string;
  url: string;
}