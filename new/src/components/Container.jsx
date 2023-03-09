import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx('px-8', className)} {...props}>
      <div className="mx-auto">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative mx-16', className)}
      {...props}
    >
      <div className="mx-auto">{children}</div>
    </div>
  )
})

export const Container = forwardRef(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
