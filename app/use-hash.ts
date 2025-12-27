import { useCallback, useSyncExternalStore } from "react";

function subscribe(callback: VoidFunction) {
  const controller = new AbortController();
  const signal = controller.signal;
  window.addEventListener("hashchange", callback, { signal });
  return () => {
    controller.abort();
  };
}

function getSnapshot() {
  return window.location.hash;
}

function getServerSnapshot() {
  return "";
}

export function useHash() {
  const hash = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setHash = useCallback(
    (newHash: string) => {
      if (newHash !== hash) {
        window.location.hash = newHash;
      }
    },
    [hash],
  );

  return [hash, setHash] as const;
}
