"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./button";

export interface CarouselApi {
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  scrollTo: (index: number) => void;
  selectedScrollSnap: () => number;
  scrollSnapList: () => number[];
  on: (event: string, callback: () => void) => void;
  off: (event: string, callback: () => void) => void;
}

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  setApi?: (api: CarouselApi) => void;
  opts?: {
    align?: "start" | "center" | "end";
    dragFree?: boolean;
    loop?: boolean;
  };
  orientation?: "horizontal" | "vertical";
}

interface CarouselContextProps {
  carouselRef: React.RefObject<HTMLDivElement | null>;
  api: CarouselApi | undefined;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [canScrollPrevState, setCanScrollPrevState] = React.useState(false);
    const [canScrollNextState, setCanScrollNextState] = React.useState(true);
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const listenersRef = React.useRef<Map<string, Set<() => void>>>(new Map());

    // Mouse drag state
    const isDraggingRef = React.useRef(false);
    const startXRef = React.useRef(0);
    const scrollLeftRef = React.useRef(0);

    const triggerEvent = React.useCallback((event: string) => {
      const callbacks = listenersRef.current.get(event);
      if (callbacks) {
        callbacks.forEach((cb) => cb());
      }
    }, []);

    const updateScrollStatus = React.useCallback(() => {
      const el = containerRef.current;
      if (!el) return;
      const canPrev = el.scrollLeft > 10;
      const canNext = el.scrollLeft < el.scrollWidth - el.clientWidth - 10;
      setCanScrollPrevState(canPrev);
      setCanScrollNextState(canNext);
      triggerEvent("select");
    }, [triggerEvent]);

    const scrollPrev = React.useCallback(() => {
      const el = containerRef.current;
      if (!el) return;
      const cardWidth = el.firstElementChild?.firstElementChild
        ? (el.firstElementChild.firstElementChild as HTMLElement).offsetWidth + 24
        : 380;
      el.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }, []);

    const scrollNext = React.useCallback(() => {
      const el = containerRef.current;
      if (!el) return;
      const cardWidth = el.firstElementChild?.firstElementChild
        ? (el.firstElementChild.firstElementChild as HTMLElement).offsetWidth + 24
        : 380;
      el.scrollBy({ left: cardWidth, behavior: "smooth" });
    }, []);

    const scrollTo = React.useCallback((index: number) => {
      const el = containerRef.current;
      if (!el) return;
      const children = el.firstElementChild?.children;
      if (children && children[index]) {
        (children[index] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
      }
    }, []);

    const api: CarouselApi = React.useMemo(
      () => ({
        canScrollPrev: () => {
          const el = containerRef.current;
          return el ? el.scrollLeft > 10 : false;
        },
        canScrollNext: () => {
          const el = containerRef.current;
          return el ? el.scrollLeft < el.scrollWidth - el.clientWidth - 10 : true;
        },
        scrollPrev,
        scrollNext,
        scrollTo,
        selectedScrollSnap: () => currentIndex,
        scrollSnapList: () => [],
        on: (event: string, callback: () => void) => {
          if (!listenersRef.current.has(event)) {
            listenersRef.current.set(event, new Set());
          }
          listenersRef.current.get(event)?.add(callback);
        },
        off: (event: string, callback: () => void) => {
          listenersRef.current.get(event)?.delete(callback);
        },
      }),
      [currentIndex, scrollNext, scrollPrev, scrollTo]
    );

    React.useEffect(() => {
      if (setApi) {
        setApi(api);
      }
      triggerEvent("reInit");
    }, [api, setApi, triggerEvent]);

    // Handle scroll events
    React.useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const handleScroll = () => {
        updateScrollStatus();
      };

      el.addEventListener("scroll", handleScroll, { passive: true });
      updateScrollStatus();

      const handleResize = () => {
        updateScrollStatus();
        triggerEvent("reInit");
      };
      window.addEventListener("resize", handleResize);

      return () => {
        el.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }, [updateScrollStatus, triggerEvent]);

    // Mouse drag-to-scroll support
    const handleMouseDown = (e: React.MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      isDraggingRef.current = true;
      startXRef.current = e.pageX - el.offsetLeft;
      scrollLeftRef.current = el.scrollLeft;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDraggingRef.current) return;
      const el = containerRef.current;
      if (!el) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startXRef.current) * 1.5;
      el.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleMouseUpOrLeave = () => {
      isDraggingRef.current = false;
    };

    return (
      <CarouselContext.Provider
        value={{
          carouselRef: containerRef,
          api,
          scrollPrev,
          scrollNext,
          canScrollPrev: canScrollPrevState,
          canScrollNext: canScrollNextState,
        }}
      >
        <div
          ref={ref}
          role="region"
          aria-roledescription="carousel"
          className={`relative ${className}`}
          {...props}
        >
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className="overflow-x-auto scrollbar-none scroll-smooth select-none cursor-grab active:cursor-grabbing pb-2"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {children}
          </div>
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`flex items-stretch ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

export const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className = "", children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={`min-w-0 shrink-0 grow-0 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});
CarouselItem.displayName = "CarouselItem";

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className = "", variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={`h-10 w-10 rounded-full ${className}`}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<typeof Button>
>(({ className = "", variant = "outline", size = "icon", ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={`h-10 w-10 rounded-full ${className}`}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";
