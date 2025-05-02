'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { comments } from '@/data/comments';
import CommentCard from './CommentCard';

const Customers = () => {
  return (
    <div className="flex flex-col">
      <span className="container mx-auto mb-6 text-center text-5xl font-extrabold">
        OUR HAPPY CUSTOMERS
      </span>
      <div className="md:hidden">
        <Swiper slidesPerView={1.1}>
          {comments.map((comment) => (
            <SwiperSlide key={comment.id} className="px-4">
              <CommentCard comment={comment} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div
        className="container mx-auto hidden gap-4 px-4 md:grid"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        }}
      >
        {comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Customers;
