// ui/dialog.tsx
"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
}

export function DialogTrigger({
  children,
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return (
    <DialogPrimitive.Trigger className={className} {...props}>
      {children}
    </DialogPrimitive.Trigger>
  );
}

export function DialogPortal({
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal {...props}>{children}</DialogPrimitive.Portal>;
}

export function DialogClose({
  children,
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return (
    <DialogPrimitive.Close className={className} {...props}>
      {children}
    </DialogPrimitive.Close>
  );
}

export function DialogOverlay({
  className = "",
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  const overlayClasses = `fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 ${className}`;

  return <DialogPrimitive.Overlay className={overlayClasses} {...props} />;
}

export function DialogContent({
  className = "",
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) {
  const contentClasses = `fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-xl border border-gray-800 bg-[#0b0b0d] ${className}`;

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content className={contentClasses} {...props}>
        {children}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

export function DialogHeader({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const headerClasses = `flex flex-col space-y-1.5 text-center sm:text-left ${className}`;

  return (
    <div className={headerClasses} {...props}>
      {children}
    </div>
  );
}

export function DialogFooter({
  className = "",
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const footerClasses = `flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 ${className}`;

  return (
    <div className={footerClasses} {...props}>
      {children}
    </div>
  );
}

export function DialogTitle({
  className = "",
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  const titleClasses = `text-lg font-semibold leading-none tracking-tight text-white ${className}`;

  return (
    <DialogPrimitive.Title className={titleClasses} {...props}>
      {children}
    </DialogPrimitive.Title>
  );
}

export function DialogDescription({
  className = "",
  children,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  const descriptionClasses = `text-sm text-gray-400 ${className}`;

  return (
    <DialogPrimitive.Description className={descriptionClasses} {...props}>
      {children}
    </DialogPrimitive.Description>
  );
}
