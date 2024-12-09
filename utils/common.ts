import type { CxReturn } from 'class-variance-authority'
import { cx } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: CxReturn[]) {
	return twMerge(cx(inputs))
}