'use client'
import { useRouter } from "next/navigation"

export default function Page(){
    const router = useRouter()


    return (
        <>
        <div className='flex justify-center mt-5 container mx-auto'>
         <div className='bg-gray-200 shadow-inner w-full rounded-sm'>
           <div className='p-10'>
             <p className='font-semibold text-3xl text-black'>
               Selamat Datang Diwebsite Next-JS Pertama Saya
             </p>
             <p className='font-normal text-sm'>Perkenalkan Nama Saya Muhammad Naafi'ul Razzaq Witjaksono Disini saya belajar membuat navigasi di next js <br />
             Ini adalah halaman Kedua</p>
             
             <button  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-2"
             onClick={() => router.push('/')}>
               Page Sebelumnya</button>
           </div>
         </div>
        </div>
        </>
    )
}