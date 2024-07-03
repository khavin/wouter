import { Path } from "./location-hook.js";
import { BrowserSearchHook, Primitive } from "./use-browser-location.js";

export function navigate<S = any>(to: Path, options?: { state: S }): void;

export const useLocationProperty: <S extends Primitive>(
  fn: () => S,
  ssrFn?: () => S
) => S;

export const useSearch: BrowserSearchHook;

export function useHashLocation(options?: {
  ssrPath?: Path;
}): [Path, typeof navigate];
