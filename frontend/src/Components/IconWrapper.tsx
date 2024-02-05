interface IconProp {
  size: number;
}

function Calendar({ size }: IconProp) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 5.83337V7.00004H4.08333V5.83337H5.25ZM7.58333 5.83337V7.00004H6.41667V5.83337H7.58333ZM9.91667 5.83337V7.00004H8.75V5.83337H9.91667ZM11.0833 1.75004C11.3928 1.75004 11.6895 1.87296 11.9083 2.09175C12.1271 2.31054 12.25 2.60729 12.25 2.91671V11.0834C12.25 11.3928 12.1271 11.6895 11.9083 11.9083C11.6895 12.1271 11.3928 12.25 11.0833 12.25H2.91667C2.26917 12.25 1.75 11.725 1.75 11.0834V2.91671C1.75 2.60729 1.87292 2.31054 2.09171 2.09175C2.3105 1.87296 2.60725 1.75004 2.91667 1.75004H3.5V0.583374H4.66667V1.75004H9.33333V0.583374H10.5V1.75004H11.0833ZM11.0833 11.0834V4.66671H2.91667V11.0834H11.0833ZM5.25 8.16671V9.33337H4.08333V8.16671H5.25ZM7.58333 8.16671V9.33337H6.41667V8.16671H7.58333ZM9.91667 8.16671V9.33337H8.75V8.16671H9.91667Z"
        fill="#28AAD7"
      />
    </svg>
  );
}

function Cellphone({ size }: IconProp) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 19H7V5H17M17 1H7C5.89 1 5 1.89 5 3V21C5 21.5304 5.21071 22.0391 5.58579 22.4142C5.96086 22.7893 6.46957 23 7 23H17C17.5304 23 18.0391 22.7893 18.4142 22.4142C18.7893 22.0391 19 21.5304 19 21V3C19 1.89 18.1 1 17 1Z"
        fill="#28AAD7"
      />
    </svg>
  );
}

function ChevronDown({ size }: IconProp) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.94 5.71997L8 8.77997L11.06 5.71997L12 6.66664L8 10.6666L4 6.66664L4.94 5.71997Z"
        fill="#28AAD7"
      />
    </svg>
  );
}

function Close({ size }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
}

function EmailOutline({ size }: IconProp) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7737 6.5332C22.7737 5.4332 21.8737 4.5332 20.7737 4.5332H4.77368C3.67368 4.5332 2.77368 5.4332 2.77368 6.5332V18.5332C2.77368 19.6332 3.67368 20.5332 4.77368 20.5332H20.7737C21.8737 20.5332 22.7737 19.6332 22.7737 18.5332V6.5332ZM20.7737 6.5332L12.7737 11.5332L4.77368 6.5332H20.7737ZM20.7737 18.5332H4.77368V8.5332L12.7737 13.5332L20.7737 8.5332V18.5332Z"
        fill="#28AAD7"
      />
    </svg>
  );
}

function MapMarker({ size }: IconProp) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
        fill="#28AAD7"
      />
    </svg>
  );
}

function ImagePlus({ size }: IconProp) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 38 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5 24.6585V29.4085H23.75V32.5751H28.5V37.3251H31.6667V32.5751H36.4167V29.4085H31.6667V24.6585H28.5ZM21.0583 34.1585H7.91667C6.175 34.1585 4.75 32.7335 4.75 30.9918V8.82514C4.75 7.08348 6.175 5.65848 7.91667 5.65848H30.0833C31.825 5.65848 33.25 7.08348 33.25 8.82514V21.9668C32.3 21.6501 31.1917 21.4918 30.0833 21.4918C28.3417 21.4918 26.6 21.9668 25.175 22.9168L22.9583 19.9085L17.4167 27.0335L13.4583 22.2835L7.91667 29.4085H20.7417C20.5833 29.8835 20.5833 30.5168 20.5833 30.9918C20.5833 32.1001 20.7417 33.2085 21.0583 34.1585Z"
        fill="black"
      />
    </svg>
  );
}

function MenuIcon({ size }: IconProp) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
  );
}

export {
  Calendar,
  Cellphone,
  ChevronDown,
  Close,
  EmailOutline,
  MapMarker,
  ImagePlus,
  MenuIcon,
};