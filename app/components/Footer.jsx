import React from 'react'

export default function Footer() {
  return (
    <footer className="flex justify-center gap-24 h-36 mt-40 bg-slate-50">
      <div>
        <ul>
          <li className="font-semibold">About</li>
          <li>Prices</li>
          <li>Services</li>
          <li>Career</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="font-semibold">Resources</li>
          <li>Terms</li>
          <li>Help</li>
          <li>Privacy</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="font-semibold">Team</li>
          <li>Developer</li>
          <li>Designer</li>
        </ul>
      </div>

      <div>
        <ul>
          <li className="font-semibold">Blog</li>
          <li>CEO</li>
          <li>Lifestyle</li>
          <li>Artice</li>
          <li>Tech</li>
        </ul>
      </div>
      <div>
        <h2 className='font-semibold'>Follow us</h2>
        <div className="flex gap-2 mt-4">
          <figure className=" size-5">
            <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="url(#paint0_linear_213_981)" />
              <path d="M14.125 24V14.6562H11.2188V24H14.125ZM12.6562 13.4062C13.5938 13.4062 14.3438 12.625 14.3438 11.6875C14.3438 10.7812 13.5938 10.0312 12.6562 10.0312C11.75 10.0312 11 10.7812 11 11.6875C11 12.625 11.75 13.4062 12.6562 13.4062ZM24.9688 24H25V18.875C25 16.375 24.4375 14.4375 21.5 14.4375C20.0938 14.4375 19.1562 15.2188 18.75 15.9375H18.7188V14.6562H15.9375V24H18.8438V19.375C18.8438 18.1562 19.0625 17 20.5625 17C22.0625 17 22.0938 18.375 22.0938 19.4688V24H24.9688Z" fill="url(#paint1_linear_213_981)" />
              <defs>
                <linearGradient id="paint0_linear_213_981" x1="0" y1="0" x2="43.4547" y2="18.237" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C381DB" />
                  <stop offset="1" stop-color="#4E92F9" />
                </linearGradient>
                <linearGradient id="paint1_linear_213_981" x1="10" y1="10" x2="29.3132" y2="18.1053" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C381DB" />
                  <stop offset="1" stop-color="#4E92F9" />
                </linearGradient>
              </defs>
            </svg>

          </figure>
          <figure className=" size-5">
            <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="url(#paint0_linear_213_977)" />
              <path d="M21.7188 19L22.1562 16.125H19.375V14.25C19.375 13.4375 19.75 12.6875 21 12.6875H22.2812V10.2188C22.2812 10.2188 21.125 10 20.0312 10C17.75 10 16.25 11.4062 16.25 13.9062V16.125H13.6875V19H16.25V26H19.375V19H21.7188Z" fill="url(#paint1_linear_213_977)" />
              <defs>
                <linearGradient id="paint0_linear_213_977" x1="0" y1="0" x2="43.4547" y2="18.237" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C381DB" />
                  <stop offset="1" stop-color="#4E92F9" />
                </linearGradient>
                <linearGradient id="paint1_linear_213_977" x1="10" y1="10" x2="29.3132" y2="18.1053" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C381DB" />
                  <stop offset="1" stop-color="#4E92F9" />
                </linearGradient>
              </defs>
            </svg>
          </figure>
          <figure className=" size-5">
            <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="url(#paint0_linear_213_979)" />
              <path d="M25.3438 14.75C25.9688 14.2812 26.5312 13.7188 26.9688 13.0625C26.4062 13.3125 25.75 13.5 25.0938 13.5625C25.7812 13.1562 26.2812 12.5312 26.5312 11.75C25.9062 12.125 25.1875 12.4062 24.4688 12.5625C23.8438 11.9062 23 11.5312 22.0625 11.5312C20.25 11.5312 18.7812 13 18.7812 14.8125C18.7812 15.0625 18.8125 15.3125 18.875 15.5625C16.1562 15.4062 13.7188 14.0938 12.0938 12.125C11.8125 12.5938 11.6562 13.1562 11.6562 13.7812C11.6562 14.9062 12.2188 15.9062 13.125 16.5C12.5938 16.4688 12.0625 16.3438 11.625 16.0938V16.125C11.625 17.7188 12.75 19.0312 14.25 19.3438C14 19.4062 13.6875 19.4688 13.4062 19.4688C13.1875 19.4688 13 19.4375 12.7812 19.4062C13.1875 20.7188 14.4062 21.6562 15.8438 21.6875C14.7188 22.5625 13.3125 23.0938 11.7812 23.0938C11.5 23.0938 11.25 23.0625 11 23.0312C12.4375 23.9688 14.1562 24.5 16.0312 24.5C22.0625 24.5 25.3438 19.5312 25.3438 15.1875C25.3438 15.0312 25.3438 14.9062 25.3438 14.75Z" fill="url(#paint1_linear_213_979)" />
              <defs>
                <linearGradient id="paint0_linear_213_979" x1="0" y1="0" x2="43.4547" y2="18.237" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C381DB" />
                  <stop offset="1" stop-color="#4E92F9" />
                </linearGradient>
                <linearGradient id="paint1_linear_213_979" x1="11" y1="10" x2="30.3132" y2="18.1053" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C381DB" />
                  <stop offset="1" stop-color="#4E92F9" />
                </linearGradient>
              </defs>
            </svg>
          </figure>
          <figure className=" size-5">
            <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="url(#paint0_linear_213_983)" />
              <path d="M26.1562 13.9062C25.9688 13.1562 25.375 12.5625 24.6562 12.375C23.3125 12 18 12 18 12C18 12 12.6562 12 11.3125 12.375C10.5938 12.5625 10 13.1562 9.8125 13.9062C9.4375 15.2188 9.4375 18.0312 9.4375 18.0312C9.4375 18.0312 9.4375 20.8125 9.8125 22.1562C10 22.9062 10.5938 23.4688 11.3125 23.6562C12.6562 24 18 24 18 24C18 24 23.3125 24 24.6562 23.6562C25.375 23.4688 25.9688 22.9062 26.1562 22.1562C26.5312 20.8125 26.5312 18.0312 26.5312 18.0312C26.5312 18.0312 26.5312 15.2188 26.1562 13.9062ZM16.25 20.5625V15.5L20.6875 18.0312L16.25 20.5625Z" fill="url(#paint1_linear_213_983)" />
              <defs>
                <linearGradient id="paint0_linear_213_983" x1="0" y1="0" x2="43.4547" y2="18.237" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C381DB" />
                  <stop offset="1" stop-color="#4E92F9" />
                </linearGradient>
                <linearGradient id="paint1_linear_213_983" x1="10" y1="10" x2="29.3132" y2="18.1053" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#C381DB" />
                  <stop offset="1" stop-color="#4E92F9" />
                </linearGradient>
              </defs>
            </svg>

          </figure>
        </div>
        <h2 className='mt-4'>Subscribe to our newsletter</h2>
        <label htmlFor="">
          <input type="text" />
        </label>
      </div>

    </footer>
  )
}
