import React, { useState, useMemo, useEffect, useRef } from 'react';
import { PROMPT_CATEGORIES } from '../constants';
import { Copy, Check, ChevronDown, Layers, Filter, ArrowDownAZ, Clock, Star, Search, X, GripVertical, Share2, Sparkles, SearchX, FolderOpen } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { Tooltip } from './ui/Tooltip';

interface PromptCardProps {
  prompt: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  draggable?: boolean;
}

const PromptCard: React.FC<PromptCardProps> = ({ prompt, isFavorite, onToggleFavorite, draggable }) => {
  const [copied, setCopied] = useState(false);
  const [shareFeedback, setShareFeedback] = useState<'idle' | 'success' | 'error'>('idle');
  const [isFavAnimating, setIsFavAnimating] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleToggleFav = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavAnimating(true);
    onToggleFavorite();
    setTimeout(() => setIsFavAnimating(false), 400);
  };

  const handleShare = async () => {
    setShareFeedback('idle');
    const isPreview = window.location.protocol === 'blob:' || window.location.protocol === 'file:';
    let shareUrl = '';

    try {
      if (isPreview) {
        const url = new URL('https://master-ai-prompting.vercel.app');
        url.searchParams.set('q', prompt);
        shareUrl = url.toString();
      } else {
        const url = new URL(window.location.href);
        url.searchParams.set('q', prompt);
        shareUrl = url.toString();
      }
    } catch (e) {
      console.error("Error constructing URL:", e);
      setShareFeedback('error');
      setTimeout(() => setShareFeedback('idle'), 3000);
      return;
    }

    const shareData = {
      title: 'Master AI Prompting',
      text: `Check out this AI prompt: "${prompt.substring(0, 50)}..."`,
      url: shareUrl,
    };

    let nativeShareSuccess = false;
    if (!isPreview && navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        nativeShareSuccess = true;
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.warn('Native share failed, falling back to clipboard', err);
        } else {
           return;
        }
      }
    }

    if (nativeShareSuccess) return;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setShareFeedback('success');
      setTimeout(() => setShareFeedback('idle'), 2000);
      
      if (isPreview) {
        alert("Preview Mode: A demo link was copied to your clipboard.\n\nSince you are viewing a temporary preview (blob URL), we generated a placeholder link for you to test the format. Deploy the app to generate real, shareable links!");
      }
    } catch (err) {
      console.error('Failed to copy link', err);
      setShareFeedback('error');
      setTimeout(() => setShareFeedback('idle'), 3000);
    }
  };

  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-brand-200 dark:hover:border-brand-600 hover:shadow-lg transition-all duration-300 group relative ${draggable ? 'cursor-move' : ''}`}>
      {draggable && (
        <div className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-300 dark:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
          <GripVertical size={20} />
        </div>
      )}
      
      <p className={`text-gray-700 dark:text-gray-200 leading-relaxed mb-12 italic pr-8 text-base font-medium ${draggable ? 'pl-6' : ''}`}>"{prompt}"</p>
      
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <Tooltip text={isFavorite ? "Remove from favorites" : "Add to favorites"} position="left">
          <button
            onClick={handleToggleFav}
            className={`p-2 rounded-full transition-all duration-300 ${
              isFavorite 
                ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-500' 
                : 'text-gray-300 dark:text-gray-600 hover:text-yellow-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Star 
              size={20} 
              className={`transition-all duration-300 ${isFavorite ? 'fill-yellow-500' : 'fill-transparent'} ${isFavAnimating ? 'scale-125 rotate-12' : 'scale-100'}`} 
            />
          </button>
        </Tooltip>
      </div>

      <div className="absolute bottom-5 right-5 flex items-center gap-3">
        <Tooltip text="Share this prompt" position="left">
          <button 
            onClick={handleShare}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 shadow-sm group/btn ${
              shareFeedback === 'success' 
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' 
                : shareFeedback === 'error'
                  ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/50 dark:hover:text-blue-200 hover:shadow-md'
            }`}
          >
            {shareFeedback === 'success' ? (
              <span className="flex items-center gap-1.5 animate-in fade-in zoom-in duration-200">
                <Check size={14} /> Link Copied
              </span>
            ) : shareFeedback === 'error' ? (
              <span className="flex items-center gap-1.5 animate-in fade-in zoom-in duration-200">
                <X size={14} /> Error
              </span>
            ) : (
              <span className="flex items-center gap-1.5 group-hover/btn:scale-105 transition-transform">
                <Share2 size={14} /> Share
              </span>
            )}
          </button>
        </Tooltip>

        <Tooltip text="Copy to clipboard" position="left">
          <button 
            onClick={handleCopy}
            className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full transition-all duration-200 shadow-sm group/btn ${
              copied ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200' : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-brand-100 hover:text-brand-700 dark:hover:bg-brand-900/50 dark:hover:text-brand-200 hover:shadow-md'
            }`}
          >
            {copied ? (
              <span className="flex items-center gap-1.5 animate-in fade-in zoom-in duration-200">
                <Check size={14} /> Copied
              </span>
            ) : (
              <span className="flex items-center gap-1.5 group-hover/btn:scale-105 transition-transform">
                <Copy size={14} /> Copy
              </span>
            )}
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

interface CategoryGroupProps {
  category: { title: string; prompts: string[] };
  isOpen: boolean;
  onToggle: () => void;
  favorites: string[];
  onToggleFavorite: (prompt: string) => void;
  isDraggable: boolean;
  onReorder: (newOrder: string[]) => void;
}

const CategoryGroup: React.FC<CategoryGroupProps> = ({ 
  category, isOpen, onToggle, favorites, onToggleFavorite, isDraggable, onReorder 
}) => {
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragItem.current = position;
    e.currentTarget.classList.add('opacity-50');
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragOverItem.current = position;
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('opacity-50');
    if (dragItem.current !== null && dragOverItem.current !== null && dragItem.current !== dragOverItem.current) {
      const copyListItems = [...category.prompts];
      const dragItemContent = copyListItems[dragItem.current];
      copyListItems.splice(dragItem.current, 1);
      copyListItems.splice(dragOverItem.current, 0, dragItemContent);
      dragItem.current = null;
      dragOverItem.current = null;
      onReorder(copyListItems);
    }
  };

  return (
    <div 
      className={`bg-white dark:bg-gray-900 rounded-2xl shadow-sm border overflow-hidden h-fit transition-all duration-300 ${
        isOpen 
          ? 'border-brand-200 dark:border-brand-800 shadow-xl ring-1 ring-brand-100 dark:ring-brand-900' 
          : 'border-gray-200 dark:border-gray-800 hover:shadow-md hover:border-brand-200 dark:hover:border-brand-800'
      }`}
    >
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-white dark:bg-gray-900 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-5">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
            isOpen 
              ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30 rotate-3 scale-110' 
              : 'bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 group-hover:bg-brand-100 dark:group-hover:bg-brand-900/50 group-hover:scale-105'
          }`}>
            <Layers size={20} className={`transition-transform duration-500 ${isOpen ? '' : 'group-hover:animate-bounce'}`} />
          </div>
          <h3 className={`text-xl font-bold transition-colors duration-300 ${
            isOpen ? 'text-brand-700 dark:text-brand-400' : 'text-gray-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-400'
          }`}>
            {category.title}
          </h3>
        </div>
        <div className={`transform transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'rotate-180 text-brand-600 dark:text-brand-400' : 'text-gray-300 dark:text-gray-600 group-hover:text-brand-500 dark:group-hover:text-brand-400'
        } shrink-0 ml-4`}>
          <ChevronDown size={24} />
        </div>
      </button>
      
      <div 
        className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-6 pt-0 grid gap-6">
            <div className={`h-px w-full bg-gradient-to-r from-transparent via-brand-100 dark:via-gray-700 to-transparent mb-2 transition-opacity duration-300 delay-100 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`} />
            
            {category.prompts.map((prompt, idx) => (
              <div
                key={prompt}
                draggable={isDraggable}
                onDragStart={(e) => handleDragStart(e, idx)}
                onDragEnter={(e) => handleDragEnter(e, idx)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => e.preventDefault()}
              >
                <PromptCard 
                  prompt={prompt} 
                  isFavorite={favorites.includes(prompt)}
                  onToggleFavorite={() => onToggleFavorite(prompt)}
                  draggable={isDraggable}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PromptLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [sortOption, setSortOption] = useState<'newest' | 'alphabetical'>('newest');
  
  const [searchQuery, setSearchQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('q') || '';
  });
  
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('favoritePrompts');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [promptOrders, setPromptOrders] = useState<Record<string, string[]>>(() => {
    try {
      const saved = localStorage.getItem('promptOrder');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCategoryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('favoritePrompts', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('promptOrder', JSON.stringify(promptOrders));
  }, [promptOrders]);

  useEffect(() => {
    if (window.location.search.includes('q=')) {
      const element = document.getElementById('practice-samples');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const handleToggleFavorite = (prompt: string) => {
    setFavorites(prev => {
      if (prev.includes(prompt)) {
        return prev.filter(p => p !== prompt);
      } else {
        return [...prev, prompt];
      }
    });
  };

  const handleReorder = (categoryTitle: string, newOrder: string[]) => {
    setPromptOrders(prev => ({
      ...prev,
      [categoryTitle]: newOrder
    }));
  };

  useEffect(() => {
    if (selectedCategory !== 'All' && selectedCategory !== 'Favorites') {
      setExpandedCategory(selectedCategory);
    } else if (searchQuery.trim().length > 0) {
       setExpandedCategory(null);
    } else {
      setExpandedCategory(null);
    }
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    const query = searchQuery.toLowerCase().trim();
    if (query) {
      const matchingCats = PROMPT_CATEGORIES.filter(cat => {
         const matches = cat.prompts.some(p => p.toLowerCase().includes(query)) || cat.title.toLowerCase().includes(query);
         return matches;
      });
      if (matchingCats.length === 1) {
        setExpandedCategory(matchingCats[0].title);
      }
    }
  }, [searchQuery]);

  const displayedCategories = useMemo(() => {
    let baseCategories = PROMPT_CATEGORIES;

    if (selectedCategory === 'Favorites') {
      baseCategories = PROMPT_CATEGORIES.map(cat => ({
        ...cat,
        prompts: cat.prompts.filter(p => favorites.includes(p))
      }));
    } else if (selectedCategory !== 'All') {
      baseCategories = PROMPT_CATEGORIES.filter(cat => cat.title === selectedCategory);
    }

    const query = searchQuery.toLowerCase().trim();
    let result = baseCategories.map(cat => {
      let prompts = [...cat.prompts];
      if (sortOption === 'newest' && promptOrders[cat.title]) {
        const order = promptOrders[cat.title];
        const orderedPrompts = [];
        const remainingPrompts = new Set(prompts);
        
        for (const p of order) {
          if (remainingPrompts.has(p)) {
            orderedPrompts.push(p);
            remainingPrompts.delete(p);
          }
        }
        orderedPrompts.push(...Array.from(remainingPrompts));
        prompts = orderedPrompts;
      }

      if (!query) return { ...cat, prompts };

      const matchesSearch = prompts.filter(p => 
        p.toLowerCase().includes(query) || 
        cat.title.toLowerCase().includes(query)
      );
      
      return { ...cat, prompts: matchesSearch };
    });

    result = result.filter(cat => cat.prompts.length > 0);

    if (sortOption === 'alphabetical') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [selectedCategory, sortOption, favorites, searchQuery, promptOrders]);


  const handleToggle = (title: string) => {
    setExpandedCategory(prev => prev === title ? null : title);
  };

  const leftColumnCategories = displayedCategories.filter((_, i) => i % 2 === 0);
  const rightColumnCategories = displayedCategories.filter((_, i) => i % 2 === 1);
  
  const isDraggable = searchQuery === '' && selectedCategory !== 'Favorites' && sortOption === 'newest';

  return (
    <section id="practice-samples" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300 scroll-mt-20">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 text-sm font-bold uppercase tracking-wider mb-4 shadow-sm animate-float">
              <Sparkles size={16} /> Practice Library
            </div>
            <h2 className="text-3xl lg:text-[4rem] font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Prompt Practice Samples</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Use these prompts as ready-made practice. Copy, tweak, and test them in multiple AI tools to see how they respond.
            </p>
          </div>
        </Reveal>

        {/* Filter and Sort Controls */}
        <div className="max-w-7xl mx-auto mb-16 sticky top-20 z-30">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl shadow-gray-900/10 dark:shadow-black/20 border border-white/50 dark:border-gray-800 ring-1 ring-gray-900/5 transition-all">
            <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
              
              {/* Search Bar */}
              <div className="w-full lg:flex-[1.5] relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none text-gray-400 dark:text-gray-500 group-focus-within:text-brand-600 dark:group-focus-within:text-brand-400 transition-colors group-focus-within:scale-110 duration-200">
                  <Search size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="Find a prompt (e.g., 'resume', 'react', 'budget')..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3 bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white text-base rounded-2xl focus:ring-4 focus:ring-brand-500/10 focus:border-brand-500 outline-none transition-all shadow-sm group-hover:shadow-md hover:border-gray-300 dark:hover:border-gray-700 placeholder-gray-400"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-400 hover:text-red-500 cursor-pointer transition-colors hover:scale-110 transform duration-200"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>

              <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4 items-center">
                {/* Custom Category Dropdown */}
                <div className="relative w-full sm:w-72" ref={dropdownRef}>
                  <button
                    onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                    className="w-full flex items-center justify-between bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 px-5 py-3 rounded-2xl hover:border-brand-500/50 focus:ring-4 focus:ring-brand-500/10 transition-all shadow-sm cursor-pointer group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                       <Filter size={18} className="text-brand-500 shrink-0 group-hover:rotate-180 transition-transform duration-500" />
                       <span className="font-medium truncate">
                         {selectedCategory === 'All' ? 'All Categories' : selectedCategory === 'Favorites' ? 'My Favorites' : selectedCategory}
                       </span>
                    </div>
                    <ChevronDown size={18} className={`text-gray-400 transition-transform duration-300 ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown Menu */}
                  <div className={`absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-200 origin-top z-50 ${isCategoryDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-200 dark:scrollbar-thumb-gray-700">
                      <button
                         onClick={() => { setSelectedCategory('All'); setIsCategoryDropdownOpen(false); }}
                         className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-colors group ${selectedCategory === 'All' ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                      >
                        <Layers size={18} className="group-hover:scale-110 transition-transform" />
                        <span className="font-medium">All Categories</span>
                        {selectedCategory === 'All' && <Check size={16} className="ml-auto" />}
                      </button>

                      <button
                         onClick={() => { setSelectedCategory('Favorites'); setIsCategoryDropdownOpen(false); }}
                         className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-colors mt-1 group ${selectedCategory === 'Favorites' ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                      >
                        <Star size={18} className={`group-hover:rotate-12 transition-transform ${selectedCategory === 'Favorites' ? "fill-yellow-500 text-yellow-500" : ""}`} />
                        <span className="font-medium">My Favorites</span>
                        {selectedCategory === 'Favorites' && <Check size={16} className="ml-auto" />}
                      </button>

                      <div className="h-px bg-gray-100 dark:bg-gray-800 my-2 mx-2"></div>
                      
                      {PROMPT_CATEGORIES.map((cat) => (
                         <button
                           key={cat.title}
                           onClick={() => { setSelectedCategory(cat.title); setIsCategoryDropdownOpen(false); }}
                           className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-left transition-colors ${selectedCategory === cat.title ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
                         >
                           <span className="font-medium truncate">{cat.title}</span>
                           {selectedCategory === cat.title && <Check size={16} className="ml-auto" />}
                         </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sort Toggle (Segmented Control) */}
                <div className="bg-gray-100 dark:bg-gray-900 p-1.5 rounded-2xl flex relative w-full sm:w-auto border border-gray-200 dark:border-gray-800">
                  <button 
                    onClick={() => setSortOption('newest')}
                    className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative z-10 group ${
                      sortOption === 'newest' 
                        ? 'bg-white dark:bg-gray-700 text-brand-700 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                  >
                    <Clock size={16} className={`${sortOption === 'newest' ? 'text-brand-500 dark:text-brand-400' : ''} group-hover:rotate-12 transition-transform`} />
                    <span>Newest</span>
                  </button>
                  <button 
                    onClick={() => setSortOption('alphabetical')}
                    className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 relative z-10 group ${
                      sortOption === 'alphabetical' 
                        ? 'bg-white dark:bg-gray-700 text-brand-700 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10' 
                        : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                    }`}
                  >
                    <ArrowDownAZ size={16} className={`${sortOption === 'alphabetical' ? 'text-brand-500 dark:text-brand-400' : ''} group-hover:scale-110 transition-transform`} />
                    <span>A-Z</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto min-h-[400px]">
          {displayedCategories.length > 0 ? (
            <>
              <div className="flex flex-col gap-8 lg:hidden">
                {displayedCategories.map((category, idx) => (
                  <Reveal key={category.title} delay={idx * 50}>
                    <CategoryGroup 
                      category={category} 
                      isOpen={expandedCategory === category.title}
                      onToggle={() => handleToggle(category.title)}
                      favorites={favorites}
                      onToggleFavorite={handleToggleFavorite}
                      isDraggable={isDraggable}
                      onReorder={(newOrder) => handleReorder(category.title, newOrder)}
                    />
                  </Reveal>
                ))}
              </div>

              <div className="hidden lg:flex flex-row gap-8 items-start">
                <div className="flex-1 flex flex-col gap-8 w-1/2">
                  {leftColumnCategories.map((category, idx) => (
                    <Reveal key={category.title} delay={idx * 100}>
                      <CategoryGroup 
                        category={category} 
                        isOpen={expandedCategory === category.title}
                        onToggle={() => handleToggle(category.title)}
                        favorites={favorites}
                        onToggleFavorite={handleToggleFavorite}
                        isDraggable={isDraggable}
                        onReorder={(newOrder) => handleReorder(category.title, newOrder)}
                      />
                    </Reveal>
                  ))}
                </div>

                <div className="flex-1 flex flex-col gap-8 w-1/2">
                  {rightColumnCategories.map((category, idx) => (
                    <Reveal key={category.title} delay={idx * 100 + 50}>
                      <CategoryGroup 
                        category={category} 
                        isOpen={expandedCategory === category.title}
                        onToggle={() => handleToggle(category.title)}
                        favorites={favorites}
                        onToggleFavorite={handleToggleFavorite}
                        isDraggable={isDraggable}
                        onReorder={(newOrder) => handleReorder(category.title, newOrder)}
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center max-w-2xl mx-auto">
              {searchQuery ? (
                <Reveal>
                  <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-8 mx-auto relative group">
                     <div className="absolute inset-0 bg-brand-200 dark:bg-brand-900/40 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                     <SearchX size={64} className="text-gray-400 dark:text-gray-500 relative z-10 animate-pulse" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">No matching prompts found</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                    We couldn't find anything matching "<span className="text-brand-600 dark:text-brand-400 font-semibold">{searchQuery}</span>". 
                    Try using broader keywords or checking for typos.
                  </p>
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="px-8 py-4 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-all font-bold shadow-lg shadow-brand-500/20 hover:-translate-y-1"
                  >
                    Clear Search & Browse All
                  </button>
                </Reveal>
              ) : selectedCategory === 'Favorites' ? (
                <Reveal>
                  <div className="w-32 h-32 bg-yellow-50 dark:bg-yellow-900/10 rounded-full flex items-center justify-center mb-8 mx-auto relative group">
                    <div className="absolute inset-0 bg-yellow-200 dark:bg-yellow-900/30 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    <Star size={64} className="text-yellow-400 relative z-10 animate-bounce" />
                    <div className="absolute top-0 right-0 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
                       <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">No favorites saved yet</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-md mx-auto">
                    Start building your personal collection! Click the <Star size={16} className="inline text-yellow-400 fill-current mx-1" /> icon on any prompt card to save it here.
                  </p>
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className="px-8 py-4 bg-brand-600 text-white rounded-xl hover:bg-brand-700 transition-all font-bold shadow-lg shadow-brand-500/20 hover:-translate-y-1 flex items-center gap-2 mx-auto"
                  >
                    <Sparkles size={18} />
                    Explore Prompts
                  </button>
                </Reveal>
              ) : (
                <Reveal>
                  <div className="w-32 h-32 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-8 mx-auto group">
                    <FolderOpen size={64} className="text-gray-400 dark:text-gray-500 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Category is empty</h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                    It looks like there are no prompts in this category yet.
                  </p>
                  <button 
                    onClick={() => setSelectedCategory('All')}
                    className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl hover:opacity-90 transition-all font-bold shadow-lg"
                  >
                    View All Categories
                  </button>
                </Reveal>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PromptLibrary;