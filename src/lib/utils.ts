import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

export function isUrlValid(url: string): boolean {
  const urlRegex = new RegExp("^(https?://)?([a-zA-Z0-9.-]+)(:[0-9]+)?(/[a-zA-Z0-9%_.~:/?#[\\]@!$&'()*+,;=-]*)?$")
  return urlRegex.test(url)
}
