'use client'

import { Children, cloneElement, ReactElement, useEffect, useRef, useState } from 'react';

type DropdownProps = {
  children: React.ReactNode[];
  align?: 'left' | 'right';
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export const DefaultDropdownMenu= ({children, align = 'left', isOpen: isOpenProp = false, onOpenChange}  : DropdownProps) => {
  const [isOpenInternal, setIsOpenInternal] = useState(isOpenProp);
  const isControlled = onOpenChange !== undefined;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [firstChild, secondChild] = Children.toArray(children);

  useEffect(() => {
    if (!isControlled) return;
    setIsOpenInternal(isOpenProp);
  }, [isOpenProp, isControlled]);

  const setOpenState = (open: boolean) => {
    if (isControlled) {
      onOpenChange?.(open);
    } else {
      setIsOpenInternal(open);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {
        cloneElement(firstChild as ReactElement<{ onClick?: (e: React.MouseEvent) => void }>,
          {
            onClick: (e: React.MouseEvent) => {
              setOpenState(!isOpenInternal);
              e.stopPropagation();
            }
          })
      }
      {isOpenInternal && (
        <>
          <div onClick={() => setOpenState(false)} className={'bg-transparent fixed left-0 top-0 w-full h-full z-40'}></div>
          <div
            className={`absolute mt-2 w-56 rounded-md shadow-lg bg-[var(--color-panel-background)] ring-1 ring-[var(--color-border)] ring-opacity-5 focus:outline-none z-50 ${
              align === 'left' ? 'left-0' : 'right-0'
            }`}
          >
            <div
              className={`absolute -top-2 ${align === 'left' ? 'left-[13px]' : 'right-[13px]'} 
              w-3 h-3 rotate-45 top-[-6px] rounded-[3px] bg-[var(--color-panel-background)] 
              border-t-[1px] border-l-[1px] border-[var(--color-border)]`} />
            <div className="">
              {secondChild}
            </div>
          </div>
        </>

      )}
    </div>
  );
}
