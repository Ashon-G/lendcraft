// Import Types
// Import External Packages
// Import Components
import {
	SubSectionOuterContainer,
	SubSectionInnerContainer,
	SubSectionTitle,
	SubSectionDescription,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
import { cn } from '@/lib/utils';
// Import Data
// Import Assets & Icons
import {
	BarChart3Icon,
	Code2Icon,
	CodeIcon,
	ComponentIcon,
	DatabaseIcon,
	DatabaseZapIcon,
	DollarSignIcon,
	FileLockIcon,
	FingerprintIcon,
	Heading1Icon,
	LucideIcon,
	MailIcon,
	PyramidIcon,
	SwatchBookIcon,
	UploadCloudIcon,
} from 'lucide-react';

type Feature = {
	name: string;
	description: string;
	icon: LucideIcon;
};

const exampleFeatures: Feature[] = [
        {
                name: 'Expo Router',
                description:
                        'Navigate quests and screens with nested routes that feel native on every platform.',
                icon: Code2Icon,
        },
        {
                name: 'React Native + TypeScript',
                description:
                        'Strong typing keeps your gamelike interactions predictable while you move fast.',
                icon: CodeIcon,
        },
        {
                name: 'Arcade Animations',
                description:
                        'Powered by Reanimated and Moti for buttery transitions, parallax cards, and celebratory moments.',
                icon: ComponentIcon,
        },
        {
                name: 'Nativewind Styling',
                description:
                        'Utility-first styling that works across iOS, Android, and the web with theme tokens.',
                icon: SwatchBookIcon,
        },
        {
                name: 'Expo Modules',
                description:
                        'Drop in haptics, audio cues, and sensors to make every interaction feel like a win.',
                icon: FileLockIcon,
        },
        {
                name: 'Live Preview Ready',
                description:
                        'Each kit ships with an embeddable Expo sandbox so your team can iterate in real time.',
                icon: DatabaseZapIcon,
        },
];

/**
 * Renders a component that displays a breaker with icons.
 *
 * @param features - An array of features to display.
 * @param className - The CSS class name for the component.
 * @param title - The title of the breaker.
 * @param description - The description of the breaker.
 * @param iconCols - The number of columns for the icons grid.
 * @returns The rendered breaker component.
 */
export default function BreakerWithIcons({
	features = exampleFeatures,
	className,
        title = 'What powers ArcadeKit',
        description = 'Our components lean on proven React Native tools so your product feels as polished as your favorite games.',
	iconCols = 3,
}: {
	features?: Feature[];
	className?: string;
	title?: string;
	description?: string;
	iconCols?: number;
}) {
	return (
		<SubSectionOuterContainer id={title} className={className}>
			<SubSectionTitle>{title}</SubSectionTitle>
			<SubSectionDescription>{description}</SubSectionDescription>
			<SubSectionInnerContainer>
				<div
					className={cn(
						'mx-auto mt-4 grid grid-cols-1 sm:grid-cols-2 gap-16 text-base px-4',
						iconCols && `lg:grid-cols-${iconCols}`
					)}
				>
					{features.map((feature) => (
						<div key={feature.name} className="relative pl-9 text-justify">
							<div className="dark:text-white font-semibold">
								<feature.icon
									className="absolute left-1 top-1 h-5 w-5 text-primary"
									aria-hidden="true"
								/>
								{feature.name}
							</div>
							<div className="text-muted-foreground">{feature.description}</div>
						</div>
					))}
				</div>
			</SubSectionInnerContainer>
		</SubSectionOuterContainer>
	);
}
