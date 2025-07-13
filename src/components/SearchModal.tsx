import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, FileText, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    // Mock search results
    const mockResults = [
      {
        type: 'case',
        title: 'Operation Digital Shield',
        description: 'Multi-state cryptocurrency investment platform fraud',
        url: '/case-studies/OP-2024-001',
        icon: FileText
      },
      {
        type: 'page',
        title: 'Cryptocurrency Scams',
        description: 'Information about cryptocurrency fraud prevention',
        url: '/cryptocurrency-scams',
        icon: FileText
      },
      {
        type: 'team',
        title: 'Research Team',
        description: 'Meet our cybercrime investigation experts',
        url: '/lionsgate-network-research-team',
        icon: Users
      }
    ].filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults(mockResults);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Search
          </DialogTitle>
          <DialogDescription>
            Search case studies, services, and resources
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            placeholder="Search for cases, services, or information..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full"
            autoFocus
          />

          {searchResults.length > 0 && (
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {searchResults.map((result, index) => (
                <Link
                  key={index}
                  to={result.url}
                  onClick={onClose}
                  className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <result.icon className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm">{result.title}</div>
                      <div className="text-xs text-muted-foreground">{result.description}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {searchQuery.length >= 2 && searchResults.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
              <p>No results found for "{searchQuery}"</p>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;