import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { NavigationOptions, PaginationOptions } from 'swiper/types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Button from '@/components/common/Button';
import EmptyList from '@/components/common/EmptyList';
import classNames from '@/utils/classNames.ts';
import type { Saramin } from '@/types/saramin.ts';
import type { Blog } from '@/types/blog.ts';
import type { GitHub } from '@/types/github.ts';
import styles from './styles.module.css';

interface Props<T extends Saramin | Blog | GitHub> {
  id: string;
  title: string;
  items: T[];
  Card: React.ComponentType<T> & { Skeleton: React.ComponentType };
  isLoading: boolean;
}

const NewsSection = <T extends Saramin | Blog | GitHub>({
  id,
  title,
  items,
  Card,
  isLoading,
}: Props<T>) => {
  const progressRef = useRef<SVGSVGElement | null>(null);
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      {!isLoading && items.length === 0 ? (
        <EmptyList />
      ) : (
        <>
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={16}
            navigation={
              {
                enabled: false,
                prevEl: `.${styles[id]} ~ .${styles.navigation} .${styles.prev}`,
                nextEl: `.${styles[id]} ~ .${styles.navigation} .${styles.next}`,
              } as NavigationOptions
            }
            pagination={
              {
                enabled: true,
                clickable: false,
                bulletClass: styles.bullet,
                bulletActiveClass: styles.active,
                el: `.${styles[id]} ~ .${styles.pagination}`,
              } as PaginationOptions
            }
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onAutoplayTimeLeft={(_, __, percentage) => {
              progressRef.current?.style.setProperty(
                '--progress',
                (1 - percentage).toString(),
              );
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className={classNames(styles.slider, styles[id])}
            breakpoints={{
              600: {
                slidesPerView: 'auto',
                centeredSlides: false,
                navigation: {
                  enabled: true,
                },
                pagination: {
                  enabled: false,
                },
              },
            }}
          >
            {isLoading
              ? Array.from({ length: 10 }).map((_, idx) => (
                  <SwiperSlide key={`${id}_sk_${idx}`} className={styles.slide}>
                    <Card.Skeleton />
                  </SwiperSlide>
                ))
              : items.map((item) => (
                  <SwiperSlide
                    key={`${id}_slide_${item.id}`}
                    className={styles.slide}
                  >
                    <Card {...item} />
                  </SwiperSlide>
                ))}
          </Swiper>
          <div className={styles.navigation}>
            <Button className={styles.prev} Icon={FiChevronLeft} />
            <Button className={styles.next} Icon={FiChevronRight} />
          </div>
          <div className={styles.pagination}></div>
          <div className={styles.progress} slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressRef}>
              <circle cx="24" cy="24" r="20" />
            </svg>
          </div>
        </>
      )}
    </section>
  );
};

export default NewsSection;
