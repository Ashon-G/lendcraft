// Import Types
import {
	CategoryDesc,
	FAQ_PAIR,
	LinkListItem,
	SocialFollowLinkObject,
	SocialShareLinkObject,
} from '@/types';
// Import External Packages
// Import Components
// Import Functions & Actions & Hooks & State
import { capitalize } from '@/lib/utils';
// Import Data
// Import Assets & Icons
import { Icons } from '@/ui/Icons';

// START HERE WITH ANSWERING THE 20 QUESTIONS TO FULLY MAKE THIS TEMPLATE YOURS!

// Who are you?
/*
Example: {
	creatorName: 'Your Name',
	creatorHref: 'https://YourPersonalWebsite.com' or 'https://YourLinkedInProfile.com' or 'https://YourFacebookProfile.com' or 'https://YourXProfile.com',
	creatorXHandle: '@username',
};
*/

export const CREATOR_LINK = {
        creatorName: 'Vashon Gonzales',
        creatorHref: 'https://arcadekit.dev',
        creatorXHandle: '@ArcadeKit',
};

// When was your company founded?
// Example: '2024'

export const YEAR_OF_CREATION = '2024';

// What is the name of your company?
// Example: 'arcadekit'

export const COMPANY_NAME = 'ArcadeKit';

// What is the full domain of your company?
// Example: 'https://arcadekit.dev'

export const COMPANY_WEBSITE_URL = 'https://arcadekit.dev';

// What is your support email?
// Example: 'support@arcadekit.dev'

export const COMPANY_SUPPORT_EMAIL = 'support@arcadekit.dev';

// What is a short description of your company?
// (Title = max 60 characters; Description = max 160 characters; Tags = max 5)
/* Examples
	Title: 'The best Vite boilerplates and components for your next project.' 
	Description: 'The best Vite boilerplates and components for your next project. Save time and money with our solutions'
	Tags: ['vite', 'templates']
 */
export const COMPANY_META_TITLE =
        'ArcadeKit - React Native game UI components';

export const COMPANY_META_DESCRIPTION =
        'Game-inspired React Native interfaces with live Expo previews.';

export const COMPANY_TAGS = ['react-native', 'expo', 'components', 'game-ui'];

// What are the Social Media Links you want to display?

export const SOCIAL_FOLLOW_LINKS: SocialFollowLinkObject[] = [
        {
                channelName: 'X',
                channelHref: 'https://twitter.com/ArcadeKit',
                username: '@ArcadeKit',
                Icon: Icons.X,
        },
];

// Do you have a Parent Company or Holding Company under which you operate this website? If not, leave each key as "".
/* 
Example: {
	parentCompanyName: 'The Example Company',
	parentCompanyHref: 'https://example.com',
	parentCompanyAddress: 'Example Street 123, 12345 Example City, Example Country',
};
*/

export const PARENT_COMPANY_LINK = {
        parentCompanyName: 'ArcadeKit Labs',
        parentCompanyHref: 'https://arcadekit.dev',
        parentCompanyAddress: '1111B S Governors Ave, 6469, Dover, DE 19904',
};

// What Product Categories are you selling?
// Example: ['buttons']

export const CATEGORIES = ['components', 'expo-previews'] as const;

// Before you continue with the next questions, please make sure you have created a at least one product in each category you are selling.
// For starters, it is enough to create a folder in the `app/_products` folder with the name of the category, e.g. `app/_products/buttons`.

// What are the descriptions of each Product Category you are selling? The slug needs to match one categories in CATEGORIES.

export const CATEGORIES_DESC: CategoryDesc[] = [
        {
                name: 'Components',
                slug: 'components',
                description:
                        'Gamelike React Native building blocks ready to drop into your app.',
                addTextToProductPage: '',
                href: '#components',
        },
        {
                name: 'Expo Previews',
                slug: 'expo-previews',
                description:
                        'Live Expo sandboxes you can embed anywhere to demo the experience.',
                addTextToProductPage: '',
                href: '#expo-previews',
        },
];

// What are additional links you want to show in the Navbar - besides links to your Product Categories?

export const NAVBAR_ADD_LINKS = [
	{ name: 'About', 
	  slug: 'about' 
	},
];

// What are the categories and links you want to show in the Footer?

export const FOOTER_NAVIGATION_LINKS: { [key: string]: LinkListItem[] } = {
        products: CATEGORIES.map((category) => {
                return { label: capitalize(category), href: `/${category}` };
	}),
	legal: [
		{ label: 'Terms', href: '/terms' },
		{ label: 'Privacy', href: '/privacy-policy' },
		{ label: 'Cookies', href: '/cookie-policy' },
		{ label: 'License', href: '/license' },
	],
};

// What are disclaimers you want to show in the Footer?

export const FOOTER_DISCLAIMERS: string[] = [
        'Disclaimer: ArcadeKit ships React Native interface code and hosted Expo previews. You are responsible for connecting any third-party services, providing your own API keys, and testing in your target environments. All assets are provided "as-is" without warranties. Use at your own risk.',
];

// What is the slogan you want to show in the Footer?

export const FOOTER_SLOGAN: string =
        'Ship arcade-quality mobile flows with plug-and-play React Native UI.';

// What are the external links you want to show in the Footer?

export const FOOTER_EXTERNAL_LINK_LIST: LinkListItem[] = [
        {
                label: 'Design inspiration @ arcadekit.dev/blog',
                href: 'https://arcadekit.dev/blog',
        },
        {
                label: 'Join the ArcadeKit Discord (coming soon)',
                href: '#',
        },
        {
                label: 'Get Expo Router tips @ coming soon',
                href: '#',
        },
];

// What are the FAQs you want to show on the front page?

export const GENERAL_FAQS: FAQ_PAIR[] = [
        {
                question: 'What makes ArcadeKit components different?',
                answer:
                        'Every layout is tuned for touch-first, gamelike interactions and ships with Expo-ready examples. Swap in your colors, drop the component into your React Native project, and you are up and running.',
        },
        {
                question: 'Can I embed the Expo previews on my site?',
                answer:
                        'Yes. Each demo includes an embeddable Expo iframe so you can showcase interactive prototypes wherever you launch.',
        },
        {
                question: 'Do the components support further customization?',
                answer:
                        'Absolutely. The codebase is typed with TypeScript, organized for overrides, and designed to plug into your existing state management and API layers.',
        },
];

// What are the Social Media Share Options you want to provide?
// FYI: Facebook does not allow pre-filled text in the share dialog. You can only provide the URL.

export const SOCIAL_SHARE_LINKS: SocialShareLinkObject[] = [
	{
		channelName: 'facebook',
		channelHref: 'https://www.facebook.com/sharer/sharer.php?u=',
		Icon: Icons.Facebook,
		shareTextInFrontOfURL: '',
	},
	{
		channelName: 'X',
		channelHref: 'https://twitter.com/intent/tweet?text=',
		Icon: Icons.X,
                shareTextInFrontOfURL: 'I found this on ArcadeKit: ',
	},
];
