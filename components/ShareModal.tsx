import React, { useState, useEffect } from 'react';
import { Video } from '../types';
import { CloseIcon, LinkIcon } from './icons/CategoryIcons';
import { FacebookIcon, TwitterIcon, WhatsappIcon, MailIcon } from './icons/SocialIcons';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  video: Video;
}

const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, video }) => {
  const [copyButtonText, setCopyButtonText] = useState('Copy Link');
  const videoUrl = `https://www.youtube.com/watch?v=${video.id}`;

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  
  useEffect(() => {
    if (isOpen) {
        setCopyButtonText('Copy Link'); // Reset button text when modal opens
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(videoUrl).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => setCopyButtonText('Copy Link'), 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy link.');
    });
  };

  const shareTitle = `Check out this video: ${video.title}`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md m-4 relative" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Share Video</h2>
        <p className="text-gray-600 mb-4 truncate">Sharing "{video.title}"</p>

        <div className="flex items-center space-x-2 mb-6">
            <input type="text" readOnly value={videoUrl} className="flex-grow bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400" />
            <button onClick={handleCopyLink} className="bg-sky-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-sky-600 transition-all duration-200 flex items-center space-x-2">
                <LinkIcon className="h-5 w-5" />
                <span>{copyButtonText}</span>
            </button>
        </div>

        <div className="flex justify-around items-center">
            <SocialShareLink href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(videoUrl)}`} label="Facebook" icon={FacebookIcon} iconClass="text-blue-600 hover:text-blue-800" />
            <SocialShareLink href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(videoUrl)}&text=${encodeURIComponent(shareTitle)}`} label="Twitter" icon={TwitterIcon} iconClass="text-sky-500 hover:text-sky-700" />
            <SocialShareLink href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + videoUrl)}`} label="WhatsApp" icon={WhatsappIcon} iconClass="text-green-500 hover:text-green-700" />
            <SocialShareLink href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent('Watch here: ' + videoUrl)}`} label="Email" icon={MailIcon} iconClass="text-gray-600 hover:text-gray-800" />
        </div>
      </div>
    </div>
  );
};

const SocialShareLink = ({ href, label, icon: Icon, iconClass }: { href: string; label: string; icon: React.ElementType, iconClass: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${label}`} className="flex flex-col items-center space-y-1 group">
        <div className={`p-3 bg-gray-100 rounded-full transition-all duration-300 group-hover:bg-gray-200 group-hover:scale-110 ${iconClass}`}>
            <Icon className="h-8 w-8" />
        </div>
        <span className="text-xs text-gray-500 group-hover:text-gray-800">{label}</span>
    </a>
);


export default ShareModal;