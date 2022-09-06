import React from 'react';

const Page = () => {
  return (
    <section className='p-4 w-full flex flex-wrap'>
      <PageComponent />
      <PageComponent />
      <PageComponent />
      <PageComponent />
    </section>
  );
};

const PageComponent = () => {
  return (
    <div
      className={`border border-blue-300 shadow rounded-md p-4 min-w-96 w-[46%] mx-auto m-4`}
    >
      <div className='animate-pulse flex space-x-4'>
        <div className='flex-1 space-y-6 py-1'>
          <div className='h-6 bg-slate-300 rounded'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-6 bg-slate-300 rounded col-span-2'></div>
              <div className='h-6 bg-slate-300 rounded col-span-1'></div>
            </div>
            <div className='h-6 bg-slate-300 rounded'></div>
            <div className='grid grid-cols-3 gap-4'>
              <div className='h-6 bg-slate-300 rounded col-span-2'></div>
              <div className='h-6 bg-slate-300 rounded col-span-1'></div>
            </div>
            <div className='h-6 bg-slate-300 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
