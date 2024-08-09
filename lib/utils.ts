import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function addCommas(X: number): string {
  return X.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}