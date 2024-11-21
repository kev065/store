import BreadCrumbs from '@/components/single-product/BreadCrumbs';
import { fetchSingleProduct, findExistingReview } from '@/utils/actions';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import { formatCurrency } from '@/utils/format';
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton';
import AddToCart from '@/components/single-product/AddToCart';
import ProductRating from '@/components/single-product/ProductRating';
import ShareButton from '@/components/single-product/ShareButton';
import SubmitReview from '@/components/reviews/SubmitReview';
import ProductReviews from '@/components/reviews/ProductReviews';

async function SingleProductPage({ params }: { params: { id: string } }) {
  try {
    // Fetch product data using the provided ID
    const product = await fetchSingleProduct(params.id);

    if (!product) {
      throw new Error('Product not found');
    }

    const { name, image, company, description, price } = product;
    const dollarsAmount = formatCurrency(price);

    // Fetch user authentication details
    const { userId } = auth();

    // Check if the user has already submitted a review
    const reviewDoesNotExist =
      userId && !(await findExistingReview(userId, product.id));

    return (
      <section>
        <BreadCrumbs name={name} />
        <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
          {/* IMAGE COLUMN */}
          <div className="relative h-full">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
              priority
              className="w-full rounded-md object-cover"
            />
          </div>
          {/* PRODUCT INFO COLUMN */}
          <div>
            <div className="flex gap-x-8 items-center">
              <h1 className="capitalize text-3xl font-bold">{name}</h1>
              <div className="flex items-center gap-x-2">
                <FavoriteToggleButton productId={params.id} />
                <ShareButton name={name} productId={params.id} />
              </div>
            </div>
            <ProductRating productId={params.id} />
            <h4 className="text-xl mt-2">{company}</h4>
            <p className="mt-3 text-md bg-muted inline-block p-2 rounded-md">
              {dollarsAmount}
            </p>
            <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
            <AddToCart productId={params.id} />
          </div>
        </div>
        <ProductReviews productId={params.id} />
        {reviewDoesNotExist && <SubmitReview productId={params.id} />}
      </section>
    );
  } catch (error) {
    console.error('Error in SingleProductPage:', error);

    // Render a fallback UI if an error occurs
    return (
      <section>
        <h1>Error loading product</h1>
        <p>Please try again later or contact support.</p>
      </section>
    );
  }
}

export default SingleProductPage;