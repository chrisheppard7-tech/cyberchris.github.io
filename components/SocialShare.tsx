/*
  Social Sharing Buttons Component
  - Twitter, LinkedIn, Facebook share buttons
  - Copy link functionality
*/

import { Button } from './ui/button';
import { Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';
import { toast } from 'sonner';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = description ? encodeURIComponent(description) : '';

  const shareOnTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    window.open(linkedInUrl, '_blank', 'width=600,height=400');
  };

  const shareOnFacebook = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        size="sm"
        onClick={shareOnTwitter}
        className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
      >
        <Twitter className="w-4 h-4 mr-2" />
        Twitter
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={shareOnLinkedIn}
        className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
      >
        <Linkedin className="w-4 h-4 mr-2" />
        LinkedIn
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={shareOnFacebook}
        className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
      >
        <Facebook className="w-4 h-4 mr-2" />
        Facebook
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={copyLink}
        className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
      >
        <LinkIcon className="w-4 h-4 mr-2" />
        Copy Link
      </Button>
    </div>
  );
}
