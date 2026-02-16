import React, { useEffect, useMemo, useRef, useState } from 'react'

type StickyOnBottomProps = {
  children: React.ReactNode
  offsetBottom?: number
  zIndex?: number
  className?: string
  fixedStyle?: React.CSSProperties
}

export const StickyOnBottom: React.FC<StickyOnBottomProps> = ({
  children,
  offsetBottom = 0,
  zIndex = 1000,
  className = '',
  fixedStyle,
}) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  const [isFixed, setIsFixed] = useState(false)
  const [lockedWidth, setLockedWidth] = useState<number | undefined>(undefined)
  const [height, setHeight] = useState<number>(0)

  const rootMargin = useMemo(() => `0px 0px -${offsetBottom}px 0px`, [offsetBottom])

  // Observe when it leaves viewport
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return undefined

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0]
        setIsFixed(!entry.isIntersecting)
      },
      { root: null, threshold: 0, rootMargin },
    )

    observer.observe(sentinel)

    return () => observer.disconnect()
  }, [rootMargin])

  // Measure size (height + width) to avoid layout jump
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return undefined

    const update = () => {
      const rect = el.getBoundingClientRect()
      setHeight(rect.height)
      if (isFixed) setLockedWidth(rect.width)
    }

    update()

    const ro = new ResizeObserver(() => update())
    ro.observe(el)

    const onResize = () => update()
    window.addEventListener('resize', onResize)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', onResize)
    }
  }, [isFixed])

  // If we unfix, unlock width
  useEffect(() => {
    if (!isFixed) setLockedWidth(undefined)
  }, [isFixed])

  const style: React.CSSProperties = isFixed
    ? {
        position: 'fixed',
        bottom: offsetBottom,
        zIndex,
        width: lockedWidth,
        ...fixedStyle,
      }
    : {
        position: 'relative',
      }

  return (
    <>
      {/* Spacer keeps layout height when bar becomes fixed */}
      {isFixed ? <div aria-hidden style={{ height }} /> : null}

      <div ref={wrapperRef} className={className} style={style}>
        {children}
      </div>

      {/* Sentinel after the bar */}
      <div ref={sentinelRef} style={{ height: 1 }} />
    </>
  )
}
