'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const route = useRouter()

  return (
   <>
   <div className='flex justify-center mt-5 container mx-auto'>
    <div className='bg-gray-200 shadow-inner w-full rounded-sm'>
      <div className='p-10'>
        <p className='font-semibold text-3xl text-black'>
          Selamat Datang Diwebsite Next-JS Pertama Saya
        </p>
        <p className='font-normal text-sm'>Perkenalkan Nama Saya Muhammad Naafi'ul Razzaq Witjaksono Disini saya belajar membuat navigasi di next js <br />
        Ini adalah halaman pertama</p>
        
        <button type="button" class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => route.push('/dashboard')}>
          Page Selanjutnya</button>
      </div>
    </div>
   </div>
   </>
  )
}
