import React, { useEffect, useMemo, useRef, useState } from 'react'

type StickyOnTopProps = {
  children: React.ReactNode
  offsetTop?: number
  zIndex?: number
  className?: string
  /** Optional: add a background when fixed */
  fixedStyle?: React.CSSProperties
}

export const StickyOnTop: React.FC<StickyOnTopProps> = ({
  children,
  offsetTop = 0,
  zIndex = 1000,
  className = '',
  fixedStyle,
}) => {
  const sentinelRef = useRef<HTMLDivElement | null>(null)
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const [isFixed, setIsFixed] = useState(false)
  const [lockedWidth, setLockedWidth] = useState<number | undefined>(undefined)
  const [height, setHeight] = useState<number>(0)

  const rootMargin = useMemo(() => `-${offsetTop}px 0px 0px 0px`, [offsetTop])

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

    return () => {
      observer.disconnect()
    }
  }, [rootMargin])

  // Measure height/width to avoid "blink" when switching to fixed
  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return undefined

    const update = () => {
      const rect = el.getBoundingClientRect()
      setHeight(rect.height)

      if (isFixed) {
        setLockedWidth(rect.width)
      }
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
        top: offsetTop,
        zIndex,
        width: lockedWidth,
        ...fixedStyle,
      }
    : {
        position: 'relative',
      }

  return (
    <>
      <div ref={sentinelRef} style={{ height: 1 }} />

      {/* Spacer keeps layout height when header becomes fixed */}
      {isFixed ? <div aria-hidden style={{ height }} /> : null}

      <div ref={wrapperRef} className={className} style={style}>
        {children}
      </div>
    </>
  )
}
