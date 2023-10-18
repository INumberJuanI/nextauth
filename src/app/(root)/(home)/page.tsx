import SkeletonDemo from '@/components/ui/SkeletonDemo'
import React from 'react'

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SkeletonDemo />
        </main>
    )
}

export default Page