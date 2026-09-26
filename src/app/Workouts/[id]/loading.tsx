import React from 'react';

const LoadingDetailsPage = () => {
    return (
        <div>
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
                <span className="loading loading-spinner loading-lg text-[#C2F800]"></span>
                <p className="[font-family:var(--font-oswald)] text-sm font-semibold uppercase tracking-wide text-gray-400">Loading details...</p>
            </div>
        </div>
    );
};

export default LoadingDetailsPage;