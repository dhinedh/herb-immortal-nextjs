'use client';

import { useRouter } from 'next/navigation';
import CommunityForm from '@/components/CommunityForm';

export default function PartnerWithUsPage() {
    const router = useRouter();

    const handleClose = () => {
        router.back();
    };

    return (
        <CommunityForm isOpen={true} onClose={handleClose} />
    );
}
