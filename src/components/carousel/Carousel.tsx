import { createSignal, For, onMount, Show } from "solid-js";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// init Swiper:

import "./Carousel.css";

export default function Carousel(props: any) {
  const [items, setItems] = createSignal([]);

  onMount(() => {
    setItems(props.children.children);
    new Swiper(".swiper", {
      a11y: {
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
      },
      // configure Swiper to use modules
      modules: [Navigation, Pagination],
      // Optional parameters
      loop: true,

      // If we need pagination
      pagination: {
        el: ".swiper-pagination",
      },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      spaceBetween: 50,
      cssMode: true,
      width: 150,
    });
  });

  return (
    <>
      <div class="swiper">
        <div class="swiper-wrapper">
          <For each={items() as Element[]}>
            {(item) => <div class="swiper-slide">{item}</div>}
          </For>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </>
  );
}
