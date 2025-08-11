import { useContext, useEffect } from "react";
import {
  UNSAFE_NavigationContext as NavigationContext,
  Navigator,
} from "react-router-dom";

export function usePrompt(message: string, when = true) {
  const navigator = useContext(NavigationContext).navigator as Navigator;

  useEffect(() => {
    if (!when) return;

    const originalPush = navigator.push;
    const originalReplace = navigator.replace;

    const confirmNavigation = (method: typeof navigator.push) => {
      return (...args: Parameters<typeof method>) => {
        const confirm = window.confirm(message);
        if (confirm) {
          method(...args);
        }
      };
    };

    navigator.push = confirmNavigation(originalPush);
    navigator.replace = confirmNavigation(originalReplace);

    return () => {
      navigator.push = originalPush;
      navigator.replace = originalReplace;
    };
  }, [navigator, message, when]);
}
