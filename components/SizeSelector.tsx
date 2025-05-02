import { ClothingSize } from '@/types';
import { Button } from './ui/button';
import { sizeDisplayNames } from '@/lib/utils';

interface SizeSelectorProps {
  selectedSize: ClothingSize | null;
  onSizeChange: (value: ClothingSize) => void;
  disabled?: boolean;
}

const SizeSelector = ({
  selectedSize,
  onSizeChange,
  disabled,
}: SizeSelectorProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-gray-500">Choose size</span>
      <div className="flex gap-2">
        {Object.entries(sizeDisplayNames).map(([sizeValue, sizeName]) => (
          <Button
            key={sizeValue}
            variant={selectedSize === sizeValue ? 'default' : 'secondary'}
            className="rounded-full"
            onClick={() => onSizeChange(sizeValue as ClothingSize)}
            disabled={disabled}
          >
            {sizeName}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
