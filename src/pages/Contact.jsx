import ContactForm from '../components/sections/ContactForm'

export default function Contact() {
  return (
    <div className="relative flex w-full items-center justify-center px-[1em] py-[2em] before:absolute before:top-0 before:left-[22%] before:-z-2 before:h-[200px] before:max-h-[20vw] before:w-[200px] before:max-w-[20vw] before:animate-bounce-down before:rounded-full before:bg-[rgb(0,183,255)] before:shadow-[0px_0px_10px_100px_rgb(0,183,255)] after:absolute after:right-[20%] after:-bottom-[50px] after:-z-1 after:h-[200px] after:max-h-[20vw] after:w-[200px] after:max-w-[20vw] after:animate-bounce-up after:rounded-full after:bg-tomato after:shadow-[0px_0px_10px_100px_tomato]">
      <ContactForm as="section" />
    </div>
  )
}
