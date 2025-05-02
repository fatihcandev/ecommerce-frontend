import { MinusIcon, PlusIcon } from 'lucide-react';
import { Button } from './ui/button';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (value: number) => void;
  disabled?: boolean;
}

const QuantitySelector = ({
  quantity,
  onQuantityChange,
  disabled,
}: QuantitySelectorProps) => {
  return (
    <div className="flex items-center gap-2 self-start rounded-md bg-gray-200">
      <Button
        size="icon"
        variant="ghost"
        onClick={() => onQuantityChange(quantity - 1)}
        disabled={disabled || quantity === 1}
      >
        <MinusIcon className="size-4" />
      </Button>
      {quantity}
      <Button
        size="icon"
        variant="ghost"
        onClick={() => onQuantityChange(quantity + 1)}
        disabled={disabled || quantity === 3}
      >
        <PlusIcon className="size-4" />
      </Button>
    </div>
  );
};

export default QuantitySelector;
