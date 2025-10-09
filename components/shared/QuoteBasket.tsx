'use client';

import { useEffect, useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface QuoteBasketProps {
  items: string[];
  onRemove: (id: string) => void;
}

export default function QuoteBasket({ items, onRemove }: QuoteBasketProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-surface border-2 border-primary rounded-lg shadow-2xl p-4 min-w-[300px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-bold text-text">Quote Basket</h3>
            <Badge className="bg-primary text-surface">{items.length}</Badge>
          </div>
        </div>
        
        {items.length === 0 ? (
          <p className="text-sm text-muted">No items in basket</p>
        ) : (
          <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
            {items.map((item) => (
              <div
                key={item}
                className="flex items-center justify-between bg-bg rounded p-2"
              >
                <span className="text-sm text-text truncate">{item}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => onRemove(item)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
        
        {items.length > 0 && (
          <Button className="w-full bg-accent hover:bg-accent/90 text-text font-semibold">
            Request Quote
          </Button>
        )}
      </div>
    </div>
  );
}



