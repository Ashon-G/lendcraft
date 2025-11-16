// About Page for Open Source Fintech Platform

// Import Types
// Import External Packages
// Import Components
import DiscordWidget from '@/app/_components/DiscordWidget';
import GitHubWidget from '@/app/_components/GitHubWidget';
import CardStack from '@/app/_components/_ui/CardStack';
import Breadcrumps from '@/ui/Breadcrumps';
import {
  SectionOuterContainer,
  SectionTitle,
  SectionDescription,
  SubSectionOuterContainer,
  SubSectionInnerContainer,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

export default async function AboutPage() {
  return (
    <SectionOuterContainer className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumps />
      <SectionTitle>About Us</SectionTitle>
      <SectionDescription>
        Empowering developers and designers to craft game-inspired React Native experiences with live Expo previews.
      </SectionDescription>
      
      <SubSectionOuterContainer>
        <SubSectionInnerContainer className="space-y-8">
          
          {/* Our Mission Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">Our Mission</h2>
              <p className="py-2 dark:text-white">
                At ArcadeKit, we deliver a comprehensive suite of tools and resources to help you ship gamelike React Native flows in days, not months. Whether you are a developer, designer, or both, our platform pairs polished code snippets with Expo previews so you can test interactions instantly.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
			<CardStack />
            </div>
          </div>
          
          {/* What We Offer Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
			 <GitHubWidget username="Paygeon" repoName="loanapp" />            
			</div>
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">What We Offer</h2>
              <ul className="py-2 dark:text-white list-disc list-inside">
                <li>Ready-to-use React Native components inspired by arcade game UI.</li>
                <li>Live Expo previews you can embed in docs, pitches, and dashboards.</li>
                <li>Customizable widgets that plug into your authentication, rewards, and data systems.</li>
              </ul>
            </div>
          </div>
          
          {/* Join Our Community Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">Join Our Community</h2>
              <p className="py-2 dark:text-white">
                Join our growing community of builders who remix ArcadeKit components into onboarding flows, quest systems, and live leaderboards. Contribute previews, share motion ideas, and collaborate with like-minded creators.
              </p>
              <p className="py-2 dark:text-white">
                Get started today and see how ArcadeKit can transform your development workflow.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
			  <DiscordWidget />
            </div>
          </div>
          
        </SubSectionInnerContainer>
      </SubSectionOuterContainer>
    </SectionOuterContainer>
  );
}
