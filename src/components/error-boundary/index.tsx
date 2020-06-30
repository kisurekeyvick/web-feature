import React, { ErrorInfo } from 'react'

const initialState = {
  hasError: false,
  error: '',
}

type State = Readonly<typeof initialState>

export default class ErrorBoundary extends React.Component<{}, State> {
  readonly state: State = initialState

  static getDerivedStateFromError(error: ErrorInfo) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    const { hasError } = this.state
    if (!hasError) {
      console.error(error, errorInfo)
    }
  }

  render() {
    const { hasError, error } = this.state
    const { children } = this.props
    if (hasError) {
      return <h4>{String(error)}</h4>
    }
    return children
  }
}
