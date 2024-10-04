import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { NavigationOptions, PaginationOptions } from 'swiper/types';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Button from '@/components/common/Button';
import classNames from '@/utils/classNames.ts';
import type { Saramin } from '@/types/saramin.ts';
import type { Blog } from '@/types/blog.ts';
import type { GitHub } from '@/types/github.ts';
import styles from './styles.module.css';

interface Props<T extends Saramin | Blog | GitHub> {
  id: string;
  title: string;
  items: T[];
  Card: React.ComponentType<T>;
}

const NewsSection = <T extends Saramin | Blog | GitHub>({
  id,
  title,
  items,
  Card,
}: Props<T>) => {
  return (
    <section className={styles.section}>
      <h3>{title}</h3>
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
        {items.map((item) => (
          <SwiperSlide key={`${id}_slide_${item.id}`} className={styles.slide}>
            <Card {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.navigation}>
        <Button className={styles.prev} Icon={FiChevronLeft} />
        <Button className={styles.next} Icon={FiChevronRight} />
      </div>
      <div className={styles.pagination}></div>
    </section>
  );
};

export default NewsSection;
