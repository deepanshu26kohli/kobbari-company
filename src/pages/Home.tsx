
import HeroSection from '../components/landing/HeroSection';
import FoundationSection from '../components/landing/FoundationSection';
import StatsSection from '../components/landing/StatsSection';
import ArsikereAdvantage from '../components/landing/ArsikereAdvantage';
import GlobalOpportunity from '../components/landing/GlobalOpportunity';
import TransformationStepper from '../components/landing/TransformationStepper';
import MarketPositioning from '../components/landing/MarketPositioning';
import CompetitiveDifferentiation from '../components/landing/CompetitiveDifferentiation';
import PartnerWithUs from '../components/landing/PartnerWithUs';

interface HomeProps {
  onOpenInquiry: () => void;
}

export default function Home({ onOpenInquiry }: HomeProps) {


  return (
    <div className="flex flex-col w-full">
      <HeroSection onOpenInquiry={onOpenInquiry} />
      <FoundationSection />
      <StatsSection />
      <ArsikereAdvantage />
      <div className="bg-gray-50 h-px w-full" />
      <TransformationStepper />
      <GlobalOpportunity />
      <MarketPositioning />
      <CompetitiveDifferentiation />
      <PartnerWithUs onOpenInquiry={onOpenInquiry} />
    </div>
  );
}

