import { Comment } from '@/types';
import { StarIcon } from 'lucide-react';
import React from 'react';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps) => {
  const { customerName, commentText } = comment;
  return (
    <div className="flex h-[150px] flex-col rounded-lg border p-4 shadow">
      <div className="mb-2 flex items-center gap-2">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <StarIcon
              key={index}
              className="size-4 fill-yellow-500 text-yellow-500"
            />
          ))}
      </div>
      <span className="text-lg font-semibold">{customerName}</span>
      <p className="line-clamp-2 text-gray-500">{commentText}</p>
    </div>
  );
};

export default CommentCard;
