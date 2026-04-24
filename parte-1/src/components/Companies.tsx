import React from 'react';
import Image from 'next/image';

export default function Companies() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-4 mt-2 mb-8 overflow-hidden">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 md:gap-6 grayscale opacity-80 select-none">

        {/* Amazon */}
        <Image src="/amazon.png" alt="Amazon" width={175} height={70} className="object-contain h-12 w-auto" />

        {/* Dribbble */}
        <Image src="/dribbble.png" alt="Dribbble" width={175} height={70} className="object-contain h-12 w-auto" />

        {/* HubSpot */}
        <Image src="/hubspot.png" alt="HubSpot" width={175} height={70} className="object-contain h-12 w-auto" />

        {/* Notion */}
        <Image src="/notion.png" alt="Notion" width={175} height={70} className="object-contain h-12 w-auto" />

        {/* Netflix */}
        <Image src="/netflix.png" alt="Netflix" width={175} height={70} className="object-contain h-12 w-auto" />

        {/* Zoom - (Fallback mantido caso não tenha sido enviado no lote de imagens) */}
        <span className="text-5xl font-black tracking-tighter">zoom</span>

      </div>
    </section>
  );
}
