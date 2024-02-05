import { Input as BaseInput, extendVariants } from '@nextui-org/react';

const CustomInput = extendVariants(BaseInput, {
  variants: {
    color: {
      stone: {
        inputWrapper: [
          'bg-zinc-100',
          'border',
          'shadow',
          'transition-colors',
          'focus-within:bg-zinc-100',
          'group-data-[focus=true]:border-blue-500',
          'dark:bg-zinc-900',
          'dark:border-zinc-800',
          'dark:data-[hover=true]:bg-zinc-900',
          'dark:focus-within:bg-zinc-900',
        ],
        input: [
          'text-zinc-800',
          'placeholder:text-zinc-600',
          'dark:text-zinc-400',
          'dark:placeholder:text-zinc-600',
        ],
      },
    },
    size: {
      xs: {
        inputWrapper: 'h-unit-6 min-h-unit-6 px-1',
        input: 'text-tiny',
      },
      md: {
        inputWrapper: 'h-unit-10 min-h-unit-10',
        input: 'text-small',
      },
      xl: {
        inputWrapper: 'h-unit-14 min-h-unit-14',
        input: 'text-medium',
      },
    },
    radius: {
      xs: {
        inputWrapper: 'rounded',
      },
      sm: {
        inputWrapper: 'rounded-[4px]',
      },
    },
    textSize: {
      base: {
        input: 'text-base',
      },
    },
    removeLabel: {
      true: {
        label: 'hidden',
      },
      false: {},
    },
  },
  defaultVariants: {
    color: 'stone',
    textSize: 'base',
    removeLabel: true,
  },
});

export default CustomInput;
