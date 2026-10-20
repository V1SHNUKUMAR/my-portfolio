import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const SWIPER_PROPS = {
  web: { modules: [Navigation], navigation: true },
  app: {
    modules: [EffectCoverflow, Pagination],
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true },
    pagination: true,
  },
}

/**
 * "More images" slider. On the live site this block is hidden (display: none),
 * so it is rendered hidden here too, with lazy images so nothing is downloaded.
 */
export default function ProjectGallery({ gallery }) {
  const isWeb = gallery.kind === 'web'

  return (
    <div className="hidden px-0 py-[2em]">
      <h2 className="my-[0.5em] text-center text-[3em]">More images</h2>
      <Swiper
        {...SWIPER_PROPS[gallery.kind]}
        className={`flex! flex-wrap items-center justify-evenly gap-[2em] py-[50px] ${
          isWeb ? 'h-auto max-w-full' : 'h-full max-w-[70em]'
        }`}
      >
        {gallery.images.map((image) => (
          <SwiperSlide key={image.src} className="flex! w-[200px]! items-center justify-center bg-cover bg-center">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`rounded-[0.5em] [filter:drop-shadow(0em_2em_1em_rgba(0,36,70,0.15))] ${
                isWeb ? 'w-[70%] lte-500:w-[95%]' : 'w-full'
              }`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
