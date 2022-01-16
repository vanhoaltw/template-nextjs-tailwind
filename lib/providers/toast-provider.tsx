import React, { createContext, ReactText, useContext } from 'react'
import {
  BiCheckCircle,
  BiError,
  BiErrorAlt,
  BiErrorCircle,
} from 'react-icons/bi'
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa'
import {
  ToastContainer,
  toast as toastify,
  ToastContent,
  ToastOptions,
  Slide,
} from 'react-toastify'

const ToastContext = createContext<{
  default: (
    content: ToastContent,
    options?: ToastOptions | undefined
  ) => React.ReactText
  info: (
    content: ToastContent,
    options?: ToastOptions | undefined
  ) => React.ReactText
  success: (
    content: ToastContent,
    options?: ToastOptions | undefined
  ) => React.ReactText
  error: (
    content: ToastContent,
    options?: ToastOptions | undefined
  ) => React.ReactText
  warn: (
    content: ToastContent,
    options?: ToastOptions | undefined
  ) => React.ReactText
  dark: (
    content: ToastContent,
    options?: ToastOptions | undefined
  ) => React.ReactText
}>(null)

export function ToastProvider({ children }: any) {
  const defaultOptions: ToastOptions = {
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    pauseOnFocusLoss: true,
    position: toastify.POSITION.TOP_RIGHT,
  }

  const toast = {
    default: (content: string, options?: ToastOptions) =>
      toastify(content, {
        ...defaultOptions,
        ...options,
        icon: () => (
          <i className="text-white text-2xl font-bold">
            <FaCheckCircle />
          </i>
        ),
      }),
    info: (content: string, options?: ToastOptions) =>
      toastify.info(content, {
        ...defaultOptions,
        ...options,
        icon: () => (
          <i className="text-white text-2xl font-bold">
            <BiErrorAlt />
          </i>
        ),
      }),
    success: (content: string, options?: ToastOptions) =>
      toastify.success(content, {
        ...defaultOptions,
        ...options,
        icon: () => (
          <i className="text-white text-2xl font-bold">
            <BiCheckCircle />
          </i>
        ),
      }),
    error: (content: string, options?: ToastOptions) =>
      toastify.error(content, {
        ...defaultOptions,
        ...options,
        icon: () => (
          <i className="text-white text-2xl font-bold">
            <BiErrorCircle />
          </i>
        ),
      }),
    warn: (content: string, options?: ToastOptions) =>
      toastify.warn(content, {
        ...defaultOptions,
        ...options,
        icon: () => (
          <i className="text-white text-2xl font-bold">
            <BiError />
          </i>
        ),
      }),
    dark: (content: string, options?: ToastOptions) =>
      toastify.dark(content, {
        ...defaultOptions,
        ...options,
        icon: () => (
          <i className="text-white text-2xl font-bold">
            <BiCheckCircle />
          </i>
        ),
      }),
  }

  return (
    <ToastContext.Provider value={toast}>
      {children}
      <ToastContainer
        newestOnTop
        containerId="toast-root"
        limit={5}
        transition={Slide}
      />
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
