export interface Article {
  id: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
  thumbnail?: string;
  author: string;
  categories: string[];
  readTime?: string;
}

// You can replace this with your actual Medium username
const MEDIUM_USERNAME = "angshumangupta";

// Using RSS2JSON service to bypass CORS issues
const RSS_TO_JSON_API = "https://api.rss2json.com/v1/api.json";

export async function fetchMediumArticles(): Promise<Article[]> {
  try {
    const mediumRssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
    const response = await fetch(`${RSS_TO_JSON_API}?rss_url=${encodeURIComponent(mediumRssUrl)}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }
    
    const data = await response.json();
    
    if (data.status !== 'ok') {
      throw new Error('RSS feed error');
    }
    
    return data.items.map((item: any, index: number) => ({
      id: `${index}`,
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      description: item.description?.replace(/<[^>]*>/g, '').substring(0, 200) + '...' || '',
      thumbnail: item.thumbnail || extractImageFromContent(item.content),
      author: item.author,
      categories: item.categories || [],
      readTime: estimateReadTime(item.content)
    }));
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    // Return empty array if the API fails
    return [];
  }
}

function extractImageFromContent(content: string): string | undefined {
  const imgRegex = /<img[^>]+src="([^">]+)"/;
  const match = content?.match(imgRegex);
  return match ? match[1] : undefined;
}

function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const text = content?.replace(/<[^>]*>/g, '') || '';
  const wordCount = text.split(/\s+/).length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
}

 