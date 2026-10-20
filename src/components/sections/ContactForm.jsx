import { FORMSPREE_ENDPOINT } from '../../data/site'
import Reveal from '../ui/Reveal'
import ShineButton from '../ui/ShineButton'
import SocialLinks from '../ui/SocialLinks'

const fieldClass =
  'my-[0.2em] block w-full rounded-[12px] border border-[rgba(128,128,128,0.479)] px-[0.5em] py-[0.6em] text-[1.6em] dark:bg-white/5 dark:text-inherit dark:placeholder:text-white/40 [transition:.2s_ease-in-out] hover:border-blue-400 outline-transparent focus:outline focus:outline-blue-400'
const labelClass = 'ml-[0.2em] text-[2em]'

/**
 * "Get in touch" card. Submits natively to Formspree (same endpoint, method and
 * field names as before), so Formspree's own redirect/thank-you flow is unchanged.
 */
export default function ContactForm({ as = 'div' }) {
  return (
    <Reveal
      as={as}
      className="flex w-[400px] flex-col items-center justify-center rounded-[12px] border-x border-b border-t-[5px] border-x-white border-b-white border-t-[rgb(0,140,255)] bg-white/20 dark:border-x-white/15 dark:border-b-white/15 dark:bg-white/5 px-[3em] py-[1em] backdrop-blur-[20px]"
    >
      <div>
        <div className="p-[0.3em] text-center text-[3em] font-medium">Get in touch</div>
      </div>
      <form action={FORMSPREE_ENDPOINT} method="POST" className="flex w-full flex-col items-center justify-center">
        <div className="my-[0.5em] w-full">
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            required
            autoComplete="off"
            className={fieldClass}
          />
        </div>
        <div className="my-[0.5em] w-full">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@example.com"
            required
            autoComplete="off"
            className={fieldClass}
          />
        </div>
        <div className="my-[0.5em] w-full">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Write your message here..."
            required
            autoComplete="off"
            minLength={5}
            className={fieldClass}
          />
        </div>
        <div className="w-full">
          <ShineButton type="submit" icon="fa fa-angle-right" iconAfter className="my-[1em] w-full">
            Send
          </ShineButton>
        </div>
        <hr className="mx-auto my-[0.5em] h-px w-full bg-black text-[color:grey] dark:bg-white/30" />
        <p className="m-[0.5em] text-[1.2em]">Connect with me</p>
        <SocialLinks />
      </form>
    </Reveal>
  )
}
