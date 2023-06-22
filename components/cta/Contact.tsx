"use client"

import Image from "next/image"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import ToastSucess from "@/components/toasts/ToastSuccess"

type Propstype = {
  toggleModal: () => void
  ready?: string
}

export default function Contact({ toggleModal, ready }: Propstype) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [name, setName] = useState<string>("")
  const [isNameHasError, setIsNameHasError] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [isEmailHasError, setIsEmailHasError] = useState<boolean>(false)
  const [object, setObject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handleObject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObject(e.target.value)
  }
  const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  //handle sending email
  const sendEmail = async () => {
    const isNameValide = isValidName()
    const isEmailValide = isValidEmail()

    if (isNameValide && isEmailValide) {
      let headersList = {
        "Content-Type": "application/json",
      }

      let bodyContent = JSON.stringify({
        name: name,
        email: email,
        object: object,
        message: message,
      })
      // send an email
      let reqOptions = {
        url: `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_KEY}`,
        method: "POST",
        headers: headersList,
        data: bodyContent,
      }

      try {
        setIsLoading(true)
        let data = await axios.request(reqOptions)
        setIsLoading(false)
        clearFieds()
        notifySucess()
      } catch (error) {
        setIsLoading(false)
        notifyError()
      }
    }
  }

  //check if name
  function isValidName() {
    if (name.trim() === "") {
      setIsNameHasError(true)
      return false
    }
    return true
  }

  //check if email is valid
  function isValidEmail() {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValideEmail = re.test(email.trim())

    if (isValideEmail == false || email.trim() === "") {
      setIsEmailHasError(true)
      return false
    }
    return true
  }

  //clear fields
  function clearFieds() {
    setName("")
    setEmail("")
    setObject("")
    setMessage("")
  }

  //notification if sucess
  const notifySucess = () =>
    toast(
      `Thank you, your message has been received, I will get back to you in a short time."`,
      {
        type: `success`,
      }
    )

  //notification if error
  const notifyError = () =>
    toast(
      `Please, you may have a problem with your internet connexion, check an try again.`,
      {
        type: `error`,
      }
    )

  return (
    <>
      <div className="fixed w-screen h-screen z-[100] top-0 left-0 bottom-0 bg-colorWhite/50 dark:bg-colorWhite_DM/50 backdrop-blur flex items-center justify-center overflow-y-auto">
        <div className="relative w-full sm:w-[92%] md:w-[80%] lg:w-[640px] m-auto sm:p-4 md:p-10 bg-colorWhite/80 dark:bg-colorWhite_DM/80 ring-style rounded-3xl animate__animated animate__delay-0.1s animate__bounceInDown">
          <div
            onClick={toggleModal}
            className="icon w-[26px] h-[26px] rounded-full bg-colorWhite/60 dark:bg-colorWhite_DM/60 ring-style flex items-center justify-center absolute right-[-8px] top-[-8px] cursor-pointer"
          >
            <i className="bi bi-x-circle-fill text-md text-gradient flex items-center justify-center"></i>
          </div>

          <div className="w-full flex items-center justify-center mt-8">
            <div className="relative rounded-full w-[44px] h-[44px] flex items-center justify-center bg-gradient-to-r from-colorDanger to-colorPrimary cursor-pointer">
              <Image
                className="rounded-full"
                src="/profiles/avatar.jpg"
                width={40}
                height={40}
                alt="avatar"
                priority
              />

              <span className="absolute bottom-[3px] right-[1px] flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-colorSuccess opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-colorSuccess"></span>
              </span>

              <span className="absolute top-[5px] right-[-20px] flex h-3 w-3">
                <p className="text-color text-sm font-semibold leading-4">
                  {ready}
                </p>
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-8 gap-4">
            <p
              className={`text-colorDanger text-sm self-start ${
                isNameHasError ? "" : "hidden"
              }`}
            >
              Name is required
            </p>
            <input
              className="w-full rounded-full py-4 px-6 bg-colorTransparent border-style text-color outline-none placeholder-colorTextVariant dark:placeholder-white/50"
              placeholder="Name / Enterprise Name*"
              type="text"
              name="name"
              value={name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleName(e)
                setIsNameHasError(false)
              }}
            />
            <p
              className={`text-colorDanger text-sm self-start ${
                isEmailHasError ? "" : "hidden"
              }`}
            >
              Please enter a correct email address
            </p>

            <input
              className="w-full rounded-full py-4 px-6 bg-colorTransparent border-style text-color outline-none placeholder-colorTextVariant dark:placeholder-white/50"
              placeholder="Email*"
              type="text"
              name="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleEmail(e)
                setIsEmailHasError(false)
              }}
            />

            <input
              className="w-full rounded-full py-4 px-6 bg-colorTransparent border-style text-color outline-none placeholder-colorTextVariant dark:placeholder-white/50"
              placeholder="Object"
              type="text"
              name="object"
              value={object}
              onChange={handleObject}
            />

            <textarea
              className="w-full rounded-2xl py-4 px-6 bg-colorTransparent border-style text-color outline-none placeholder-colorTextVariant dark:placeholder-white/50"
              placeholder="Message"
              rows={4}
              name="message"
              value={message}
              onChange={handleMessage}
            />
            <div className="flex z-[2] relative self-start">
              <button
                disabled={isLoading}
                onClick={sendEmail}
                className={`bt h-[46px] wrap-submit100 px-12 text-colorWhite_DM rounded-full ring-style flex items-center justify-center font-bold ${
                  isLoading ? "" : "bg-white"
                }`}
              >
                {isLoading ? (
                  <div className="animate-spin flex items-center justify-center">
                    <Image
                      src="/loading.png"
                      width={20}
                      height={20}
                      alt="loading"
                      priority
                    />
                  </div>
                ) : (
                  "Send"
                )}
              </button>
              <span className={`wrap-submit2`}></span>
            </div>
          </div>
        </div>
      </div>
      <ToastSucess notify={notifySucess} />
    </>
  )
}
