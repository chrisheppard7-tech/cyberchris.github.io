/*
  SEO Metadata Component
  - Open Graph tags for social sharing
  - Twitter Card tags
  - JSON-LD structured data
*/

import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  tags?: string[];
}

export default function SEOHead({
  title,
  description,
  image,
  url,
  type = 'article',
  publishedTime,
  modifiedTime,
  author,
  tags,
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = `${title} | CyberSolutionsOhio`;

    // Create or update meta tags
    const setMetaTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.querySelector(`meta[name="${property}"]`) as HTMLMetaElement;
      }
      if (!element) {
        element = document.createElement('meta');
        if (property.startsWith('og:') || property.startsWith('article:')) {
          element.setAttribute('property', property);
        } else {
          element.setAttribute('name', property);
        }
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic meta tags
    setMetaTag('description', description);

    // Open Graph tags
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:url', url);
    setMetaTag('og:type', type);
    if (image) {
      setMetaTag('og:image', image);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    if (image) {
      setMetaTag('twitter:image', image);
    }

    // Article-specific tags
    if (type === 'article') {
      if (publishedTime) {
        setMetaTag('article:published_time', publishedTime);
      }
      if (modifiedTime) {
        setMetaTag('article:modified_time', modifiedTime);
      }
      if (author) {
        setMetaTag('article:author', author);
      }
      if (tags) {
        tags.forEach(tag => {
          const tagElement = document.createElement('meta');
          tagElement.setAttribute('property', 'article:tag');
          tagElement.content = tag.trim();
          document.head.appendChild(tagElement);
        });
      }
    }

    // JSON-LD structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'BlogPosting' : 'WebPage',
      headline: title,
      description: description,
      url: url,
      ...(image && { image: image }),
      ...(publishedTime && { datePublished: publishedTime }),
      ...(modifiedTime && { dateModified: modifiedTime }),
      ...(author && {
        author: {
          '@type': 'Person',
          name: author,
        },
      }),
      publisher: {
        '@type': 'Organization',
        name: 'CyberSolutionsOhio',
        logo: {
          '@type': 'ImageObject',
          url: 'https://cybersolutions-ohio.manus.space/logo.png',
        },
      },
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);

    // Cleanup function to remove article tags when component unmounts
    return () => {
      if (type === 'article' && tags) {
        document.querySelectorAll('meta[property="article:tag"]').forEach(el => el.remove());
      }
    };
  }, [title, description, image, url, type, publishedTime, modifiedTime, author, tags]);

  return null;
}
