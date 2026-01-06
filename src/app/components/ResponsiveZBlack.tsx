import ZBlack from "../../imports/ZBlack";

export default function ResponsiveZBlack() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <style>{`
        /* Mobile responsive overrides */
        @media (max-width: 768px) {
          /* Scale down fixed widths */
          [data-name="Nav bar"] {
            width: 100% !important;
            max-width: 100% !important;
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          
          /* Hide navigation items on mobile */
          [data-name="Nav - Main"] {
            display: none !important;
          }
          
          /* Main header responsive */
          [data-name="Main header"] {
            width: 100% !important;
            max-width: calc(100vw - 32px) !important;
            padding: 0 16px !important;
          }
          
          /* Hero heading responsive */
          [data-name="Main header"] > div:nth-child(2) {
            font-size: 32px !important;
            line-height: 1.2 !important;
            width: 100% !important;
          }
          
          [data-name="Main header"] > div:nth-child(2) p span {
            font-size: 32px !important;
          }
          
          [data-name="Main header"] > div:nth-child(2) p span:nth-child(2) {
            font-size: 24px !important;
          }
          
          /* Description text */
          [data-name="Main header"] > div:nth-child(3) {
            width: 100% !important;
            font-size: 14px !important;
          }
          
          /* Form responsive */
          [data-name="Form"] {
            flex-direction: column !important;
            width: 100% !important;
          }
          
          [data-name="Form"] [data-name="Input"] {
            width: 100% !important;
          }
          
          [data-name="Form"] [data-name="Button"] {
            width: 100% !important;
          }
          
          /* Asset/Images responsive */
          [data-name="Asset"] {
            width: calc(100vw - 32px) !important;
            height: auto !important;
            aspect-ratio: 3/2 !important;
          }
          
          /* Landing page container */
          [data-name="Landing page"] {
            height: auto !important;
            min-height: 100vh !important;
          }
          
          /* Code Index section */
          [data-name="Code Index"] {
            flex-direction: column !important;
            height: auto !important;
          }
          
          [data-name="Code Index"] > div {
            width: 100% !important;
          }
          
          /* Feature grids */
          div[class*="flex gap-[32px]"]:has([data-name="Features"]) {
            flex-direction: column !important;
            gap: 16px !important;
          }
          
          [data-name="Features"],
          [data-name="Features"] ~ div {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          /* Images responsive */
          img {
            max-width: 100% !important;
            height: auto !important;
          }
          
          /* Section containers */
          section,
          [data-name*="Section"] {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          
          /* Question boxes */
          [data-name="Question"],
          [data-name="Question 1"],
          [data-name="Question 2"],
          [data-name="Question 3"],
          [data-name="Question 4"],
          [data-name="Question 5"] {
            width: 100% !important;
            max-width: 100% !important;
          }
          
          /* Footer responsive */
          [data-name="Footer"] {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          
          [data-name="Footer"] > div {
            flex-direction: column !important;
          }
          
          /* Card grids */
          [data-name*="Frame"] > div:has([data-name*="image"]) {
            width: 100% !important;
          }
          
          /* Statistic boxes */
          div:has(> div > div[class*="text-[40px]"]) {
            width: 100% !important;
          }
          
          /* General width constraints */
          div[class*="w-[1160px]"],
          div[class*="w-[1248px]"],
          div[class*="w-[1024px]"],
          div[class*="w-[870px]"],
          div[class*="w-[580px]"] {
            width: 100% !important;
            max-width: calc(100vw - 32px) !important;
          }
          
          /* Padding adjustments */
          div[class*="px-[64px]"] {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          
          div[class*="py-[64px]"] {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }
          
          /* Gap adjustments */
          div[class*="gap-[64px]"] {
            gap: 32px !important;
          }
          
          /* Hide decorative elements */
          div[class*="absolute"]:has(svg[class*="rotate"]) {
            display: none !important;
          }
        }
        
        @media (max-width: 480px) {
          /* Extra small devices */
          [data-name="Main header"] > div:nth-child(2) {
            font-size: 24px !important;
          }
          
          [data-name="Main header"] > div:nth-child(2) p span {
            font-size: 24px !important;
          }
          
          [data-name="Main header"] > div:nth-child(2) p span:nth-child(2) {
            font-size: 18px !important;
          }
          
          [data-name="Main header"] > div:nth-child(3) {
            font-size: 12px !important;
          }
        }
      `}</style>
      <ZBlack />
    </div>
  );
}
