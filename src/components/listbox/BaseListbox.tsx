import { Listbox, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import BaseIcon from '../icons/BaseIcon';

export interface IBaseListbox {
  labels: any[];
  placeholder: string;
  value: any;
  setValue: any;
  buttonStyle?: string | null;
  optionStyle?: string | null;
}

const BaseListbox: React.FC<IBaseListbox> = ({
  labels,
  placeholder,
  value,
  setValue,
  buttonStyle,
  optionStyle,
}) => {
  return (
    <Listbox name="category" value={value} onChange={setValue}>
      <div className="relative w-full inline-block text-left">
        <Listbox.Button
          className={`flex ${buttonStyle} px-4 bg-secondary-100 rounded-full items-center justify-center`}
        >
          <span className="ml-1 truncate">{value ? value : placeholder}</span>
          <BaseIcon icon="caretdown" style="ml-2" />
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options
            className={`absolute w-fit left-0 ${optionStyle} px-4 bg-secondary-100 py-0.5 rounded-xl mt-2 origin-center max-h-min items-center justify-center p-1  text-center shadow-md z-20`}
          >
            {labels.map((label, labelIdx) => (
              <Listbox.Option
                key={labelIdx}
                className={({ active }) =>
                  `relative items-center justify-center cursor-default rounded-lg select-none py-0.5 px-2 ${
                    active && 'bg-primary-500'
                  }`
                }
                value={label}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected && ''}`}>
                      {label}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default BaseListbox;
