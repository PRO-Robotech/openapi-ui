/* eslint-disable no-console */
import React, { FC, useEffect, useState, useRef } from 'react'
import { Result, Spin } from 'antd'
import { Terminal as XTerm } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import '@xterm/xterm/css/xterm.css'
import { useSelector } from 'react-redux'
import type { RootState } from 'store/store'
import { Styled } from './styled'

type TXTerminalProps = {
  endpoint: string
  namespace: string
  podName: string
}

export const XTerminal: FC<TXTerminalProps> = ({ endpoint, namespace, podName }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Event>()
  const [terminal, setTerminal] = useState<XTerm>()
  const terminalRef = useRef<HTMLDivElement>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const fitAddon = new FitAddon()

  // const decoderRef = useRef(new TextDecoder('utf-8'))

  useEffect(() => {
    const terminal = new XTerm({
      cursorBlink: false,
      cursorStyle: 'block',
      fontFamily: 'monospace',
      fontSize: 10,
    })
    terminal.loadAddon(fitAddon)
    // terminal.loadAddon(new WebLinksAddon())
    setTerminal(terminal)
    fitAddon.fit()

    return () => {
      if (terminal) {
        terminal.dispose()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (terminal) {
      if (terminalRef.current) {
        terminal.open(terminalRef.current)
        setTerminal(terminal)
      }
    }

    // Initialize ResizeObserver to handle resizing
    resizeObserverRef.current = new ResizeObserver(() => {
      fitAddon.fit()
    })

    // Observe the terminal container for size changes
    if (terminalRef.current) {
      resizeObserverRef.current.observe(terminalRef.current)
    }

    return () => {
      // Clean up the ResizeObserver
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [terminal])

  useEffect(() => {
    if (!terminal) {
      return
    }

    const socket = new WebSocket(endpoint)

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: 'init',
          payload: { namespace, podName },
        }),
      )
      console.log('WebSocket Client Connected')
      setIsLoading(false)
    }

    socket.onmessage = event => {
      const data = JSON.parse(event.data)
      if (data.type === 'output') {
        if (data.payload.type === 'Buffer' && Array.isArray(data.payload.data)) {
          // Reconstruct bytes and decode to string
          // const bytes = new Uint8Array(data.payload)
          // const text = decoderRef.current.decode(bytes)

          const text = Buffer.from(data.payload.data)
          console.log(text)
          terminal.write(text.toString('utf8'))
        } else {
          terminal.write(String(data.payload))
        }
      }
    }

    socket.onclose = () => {
      console.log('WebSocket Client Closed')
    }

    socket.onerror = error => {
      console.error('WebSocket Error:', error)
      setError(error)
    }

    terminal.onData(data => {
      if (data === '\u001bOP') {
        // const bufferToSend = Buffer.from('\u001b[11~', 'utf8')
        // socket.send(JSON.stringify({ type: 'input', payload: bufferToSend }))
        socket.send(JSON.stringify({ type: 'input', payload: '\u001b[11~' }))
        return
      }
      // const bufferToSend = Buffer.from(data, 'utf8')
      // socket.send(JSON.stringify({ type: 'input', payload: bufferToSend }))
      socket.send(JSON.stringify({ type: 'input', payload: data }))
    })

    // terminal.onResize(size => {
    //   socket.send(JSON.stringify({ type: 'resize', payload: { cols: size.cols, rows: size.rows } }))
    // })

    // eslint-disable-next-line consistent-return
    return () => {
      terminal.dispose()
      if (socket.readyState === WebSocket.OPEN) {
        socket.close()
      }
    }
  }, [terminal, endpoint, namespace, podName])

  return (
    <>
      <Styled.CustomCard $isVisible={!isLoading && !error}>
        <Styled.FullWidthDiv>
          <div ref={terminalRef} />
        </Styled.FullWidthDiv>
      </Styled.CustomCard>
      {isLoading && !error && <Spin />}
      {error && <Result status="error" title="Error" subTitle={JSON.stringify(error)} />}
    </>
  )
}

export const TestWs: FC = () => {
  const cluster = useSelector((state: RootState) => state.cluster.cluster)
  const endpoint = `http://localhost:4002/api/clusters/${cluster}/openapi-bff/terminal/terminalPod/terminalPod`

  return (
    <XTerminal
      endpoint={endpoint}
      namespace="incloud-web"
      podName="incloud-web-web-6cfc645577-thpmc"
      key={`${endpoint}`}
    />
  )
}
