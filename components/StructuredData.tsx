import { VEHICLES, PHONE_NUMBER, LocaleCode } from "@/lib/data/vehicles";

interface StructuredDataProps {
  locale: LocaleCode;
}

export function StructuredData({ locale }: StructuredDataProps) {
  const baseUrl = "https://infinitycars.sy";

  const autoRentalSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "INFINITY CARS",
    "alternateName": "إنفينيتي كارز",
    "description":
      "Premium car rental and luxury vehicle hire company operating in Syria.",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "telephone": `+${PHONE_NUMBER}`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Damascus",
      "addressCountry": "SY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5138,
      "longitude": 36.2765
    },
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  const carSchemas = VEHICLES.map((vehicle) => ({
    "@context": "https://schema.org",
    "@type": "Car",
    "name": vehicle.name[locale] || vehicle.name.ar,
    "description": vehicle.tagline[locale] || vehicle.tagline.ar,
    "image": vehicle.images,
    "brand": {
      "@type": "Brand",
      "name": vehicle.name.en.split(" ")[0]
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "seller": {
        "@type": "AutoRental",
        "name": "INFINITY CARS"
      }
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(autoRentalSchema),
        }}
      />
      {carSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
