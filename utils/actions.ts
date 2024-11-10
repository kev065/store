import db from '@/utils/db';

export const fetchAllProducts = ({ search = '' }: { search: string }) => {
  return db.product.findMany({
    where: {
      OR: [
        { name: { contains: search, mode: 'insensitive' } },
        { company: { contains: search, mode: 'insensitive' } },
      ],
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

export const fetchFeaturedProducts = () => {
  return db.product.findMany({
    where: {
      featured: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};