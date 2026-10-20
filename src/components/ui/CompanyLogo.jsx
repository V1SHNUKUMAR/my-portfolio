function SupplymintLogo() {
  return (
    <svg width="50" height="50" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Supplymint">
      <rect x="0.929443" y="0.398438" width="32" height="32" rx="5.5" fill="#5D5FEF" />
      <rect x="15.978" y="8.85156" width="1.42857" height="7.61905" fill="white" />
      <rect x="15.9319" y="7.71094" width="1.42857" height="12.6355" transform="rotate(51.8154 15.9319 7.71094)" fill="white" />
      <rect x="16.2244" y="16.7266" width="1.42857" height="10.6152" transform="rotate(33.096 16.2244 16.7266)" fill="white" />
      <rect x="6.27539" y="16.7031" width="1.42857" height="10.6152" transform="rotate(-24.7049 6.27539 16.7031)" fill="white" />
      <rect x="26.3057" y="16.0625" width="1.42857" height="10.0032" transform="rotate(27.4657 26.3057 16.0625)" fill="white" />
      <rect x="5.92798" y="17.3203" width="1.42857" height="18.4822" transform="rotate(-62.2575 5.92798 17.3203)" fill="white" />
      <rect x="27.1648" y="16.4141" width="1.42857" height="18.6323" transform="rotate(62.9104 27.1648 16.4141)" fill="white" />
      <circle cx="16.9306" cy="7.87351" r="1.90476" fill="white" />
      <circle cx="16.9306" cy="16.4594" r="1.90476" fill="white" />
      <circle cx="7.40696" cy="16.4594" r="1.90476" fill="white" />
      <circle cx="11.2168" cy="25.0141" r="1.90476" fill="white" />
      <circle cx="26.4546" cy="16.4594" r="1.90476" fill="white" />
      <circle cx="22.645" cy="25.0141" r="1.90476" fill="white" />
    </svg>
  )
}

/** Logo box for an EXPERIENCE entry; sizing classes come from the caller. */
export default function CompanyLogo({ item, className }) {
  return (
    <div className={className}>
      {item.logo === 'supplymint' ? (
        <SupplymintLogo />
      ) : (
        <img src={item.logo.src} alt={item.logo.alt} className="h-full w-full object-cover object-left" />
      )}
    </div>
  )
}
