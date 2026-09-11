import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function AosInit() {
  const routerState = useRouterState();
  const pathname = routerState?.location?.pathname ?? "";

  useEffect(() => {
    let aosInstance: any = null;

    import("aos").then((module) => {
      const AOS = module.default || module;
      aosInstance = AOS;
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: false,
        mirror: true,
        offset: 50,
        delay: 50,
      });
      AOS.refresh();
    });

    const handleLoad = () => {
      if (aosInstance) {
        aosInstance.refresh();
      }
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // When route changes, refresh AOS so new page elements animate smoothly
  useEffect(() => {
    const timer = setTimeout(() => {
      import("aos").then((module) => {
        const AOS = module.default || module;
        AOS.refresh();
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
