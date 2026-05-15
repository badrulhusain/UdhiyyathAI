"use client";

import { RefObject, useEffect } from "react";

export function useAutoScroll(
  ref: RefObject<HTMLDivElement | null>,
  deps: unknown[]
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
