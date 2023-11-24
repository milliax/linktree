import React, { useState, useEffect } from 'react'; // hook
import Button from './component/Button';


const links = [
    {
        url: 'https://www.facebook.com/',
        text: 'Facebook',
        hidden: true,
    }, {
        url: 'https://github.com',
        text: 'Github',
        hidden: false,
    }, {
        url: 'https://instagram.com',
        text: 'Instagram',
        hidden: true,
    }
]

function App() {

    return (
        <div className='bg-gradient-to-tr from-black to-slate-700 w-[100vw] h-[100vh] flex flex-col justify-center items-center'>
            <div className='w-80 bg-neutral-100 rounded-md'>
                <h1 className='text-center my-5'>我的連結樹</h1>

                <div className='flex flex-col'>
                    {/* {links.map((link) => {
                        if(link.hidden) return null;
                        return <Button url={link.url} text={link.text} />
                    })} */}
                    {links.map(link => (
                        <>
                            {link.hidden ||
                                <Button url={link.url} text={link.text} />
                            }
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
