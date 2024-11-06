import Link from 'next/link';

export default function FloatingBanner() {
  return (
    <>
      <div className='pointer-events-none fixed inset-x-0 bottom-0 z-10 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8'>
        <div className='pointer-events-auto flex items-center justify-center gap-x-6 bg-indigo-600 px-6 py-2.5 sm:justify-between sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5'>
          <p className='text-sm leading-6 text-white'>
            <Link href='https://www.carvuk.com/grabado-de-patente' legacyBehavior>
              <a className='text-center sm:flex sm:items-center'>
                <strong className='text-center font-semibold'>
                  ¡Evita multas! Graba tu patente acorde a la ley
                </strong>
                <svg
                  viewBox='0 0 2 2'
                  className='mx-2 hidden h-0.5 w-0.5 fill-current sm:block sm:inline'
                  aria-hidden='true'
                >
                  <circle
                    cx={1}
                    cy={1}
                    r={1}
                  />
                </svg>
                <span className='block text-center underline'>Agenda aquí&nbsp;</span>
                <span
                  aria-hidden='true'
                  className='hidden sm:block'
                >
                  &rarr;
                </span>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
