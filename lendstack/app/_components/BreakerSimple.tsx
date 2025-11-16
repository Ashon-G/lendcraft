// Import Types
// Import External Packages
import Link from 'next/link';
// Import Components
import { buttonVariants } from '@/ui/Button';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons

type SectionBreakerProps = {
	title?: string;
	description?: string;
	linkHref?: string;
	linkCTA?: string;
	className?: string;
};

/**
 * Renders a section breaker component, with a title, a description, and optionally a button link.
 *
 * @param title - The title of the section breaker.
 * @param description - The description of the section breaker.
 * @param linkHref - The link href of the section breaker.
 * @param linkCTA The link CTA (call-to-action) of the section breaker.
 * @param className - The additional CSS class name for the section breaker.
 * @returns The rendered section breaker component.
 */
export default function BreakerSimple({
	linkHref,
	linkCTA,
	className,
}: SectionBreakerProps) {
	return (
						<div className="mt-10 flex items-center justify-center gap-x-6">
                                                        <iframe
                                                                title="ARCADEKIT checkout widget"
                                                                src="https://nas.io/checkout-widget?communityCode=ARCADEKIT.DEV&communitySlug=%2Farcadekit.dev&buttonText=Join+the+Arcade&buttonTextColorHex=%23000&buttonBgColorHex=%23fccb1d&widgetTheme=dark&backgroundColorHex=%23000"
								width="1750"
								height="330"
								frameBorder="0"
								referrerPolicy="no-referrer"
							></iframe>
						</div>
					)}