'use client';

import { FaHeart } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { useAuth } from '@clerk/nextjs';
import { CardSignInButton } from '../form/Buttons';
import { fetchFavoriteId } from '@/utils/actions';
import FavoriteToggleForm from './FavoriteToggleForm';
import { useState, useEffect } from 'react';

function FavoriteToggleButton({ productId }: { productId: string }) {
  const { userId } = useAuth();
  const [favoriteId, setFavoriteId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;
    const getFavoriteId = async () => {
      setLoading(true);
      const id = await fetchFavoriteId({ productId });
      setFavoriteId(id);
      setLoading(false);
    };
    getFavoriteId();
  }, [userId, productId]);

  if (!userId) return <CardSignInButton />;
  if (loading) return <Button disabled>Loading...</Button>;

  return <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />;
}

export default FavoriteToggleButton;