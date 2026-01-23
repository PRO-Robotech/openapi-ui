import { useCallback, useLayoutEffect, useState } from 'react'

export const useElementHeight = <T extends HTMLElement>() => {
  const [node, setNode] = useState<T | null>(null)
  const [height, setHeight] = useState(0)

  const ref = useCallback((el: T | null) => {
    setNode(el)
  }, [])

  useLayoutEffect(() => {
    if (!node) return undefined

    const update = () => {
      setHeight(node.getBoundingClientRect().height)
    }

    update() // set initial height immediately

    const observer = new ResizeObserver(() => {
      update()
    })

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [node])

  return { ref, height }
}
