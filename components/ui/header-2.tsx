

'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'Home', href: '/' },
		{ label: 'Services', href: '/services' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' },
		{ label: 'Project Wellness', href: '/project-wellness' },
	];

	React.useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
	className={cn(
		'sticky top-1 z-50 mx-auto w-full max-w-6xl rounded-full border border-transparent transition-all duration-300 ease-out',
		'backdrop-blur-md bg-transparent supports-[backdrop-filter]:bg-black/10 shadow-lg',
		{
			'md:top-4 md:shadow-xl md:border-border bg-black/10': scrolled && !open,
			'bg-transparent backdrop-blur-2xl shadow-2xl': open,
		},
	)}
>

			<nav
				className={cn(
					'flex h-14 w-full items-center justify-between px-4 md:h-14 md:px-6 transition-all duration-300 ease-out',
					{
						'md:px-4': scrolled,
					},
				)}
			>
				<span className="font-bold text-xl tracking-tight">OnlineAdwise</span>

				{/* Desktop Menu */}
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link, i) => (
						<a key={i} className={buttonVariants({ variant: 'ghost' })} href={link.href}>
							{link.label}
						</a>
					))}
				</div>

				{/* Mobile Menu Button */}
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden rounded-full"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>

			{/* Mobile Menu */}
			<div
				className={cn(
					'fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col border-y md:hidden backdrop-blur-xl bg-background/70 transition-all duration-300',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95',
						'data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-4 p-4',
					)}
				>
					<div className="grid gap-y-2">
						{links.map((link) => (
							<a
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-lg py-3 rounded-xl',
								})}
								href={link.href}
							>
								{link.label}
							</a>
						))}
					</div>

					
				</div>
			</div>
		</header>
	);
}
