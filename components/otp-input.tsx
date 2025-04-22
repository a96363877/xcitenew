"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Input } from "@/components/ui/input"

interface OtpInputProps {
  length: number
  onComplete: (otp: string) => void
}

export default function OtpInput({ length, onComplete }: OtpInputProps) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""))
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [])

  useEffect(() => {
    const otpValue = otp.join("")
    if (otpValue.length === length) {
      onComplete(otpValue)
    }
  }, [otp, length, onComplete])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value

    // Only allow numbers
    if (!/^\d*$/.test(value)) return

    // Take the last character if multiple characters are pasted
    const digit = value.substring(value.length - 1)

    // Update the OTP array
    const newOtp = [...otp]
    newOtp[index] = digit
    setOtp(newOtp)

    // Move to next input if current input is filled
    if (digit && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text/plain").trim()

    // Check if pasted data contains only numbers
    if (!/^\d+$/.test(pastedData)) return

    // Fill the OTP inputs with pasted data
    const digits = pastedData.split("").slice(0, length)
    const newOtp = [...otp]

    digits.forEach((digit, index) => {
      newOtp[index] = digit
    })

    setOtp(newOtp)

    // Focus the next empty input or the last input
    const nextEmptyIndex = digits.length < length ? digits.length : length - 1
    inputRefs.current[nextEmptyIndex]?.focus()
  }

  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length }, (_, index) => (
        <Input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={otp[index]}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className="w-12 h-12 text-center text-xl font-bold"
        />
      ))}
    </div>
  )
}
