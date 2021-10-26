type GetWindowReturnType = (Window & typeof globalThis) | null;

/**
 * Checks if window is available to support SSG/SSR builds
 */
export function getWindow(): GetWindowReturnType {
  if (typeof window !== 'undefined') {
    return window;
  }

  return null;
}
