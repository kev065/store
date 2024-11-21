import { LuUser2 } from 'react-icons/lu';
import { currentUser } from '@clerk/nextjs/server';
import Image from 'next/image';

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <Image
        src={profileImage}
        alt="User profile image"
        width={24} // Match your 'w-6' class (6 x 4px)
        height={24} // Match your 'h-6' class
        className="rounded-full object-cover"
      />
    );
  }

  return <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />;
}

export default UserIcon;