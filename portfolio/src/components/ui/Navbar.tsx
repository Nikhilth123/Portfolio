    import React, { useState, type JSX } from 'react'
    import { Button } from '@/components/ui/button';
    import { Menu, X } from "lucide-react";
    function Navbar(): JSX.Element {
        const [open,setopen]=useState(false);
    return (
    <nav className='top-0 z-50  text-foreground sticky flex justify-center'> 
    <div className='md:hidden bg-background w-full flex justify-end items-center'>
        <Button  variant='ghost' size='icon' onClick={()=>setopen(!open)}>{open ? <X /> : <Menu />}</Button>
    </div>   
    {open&&
    <div className='md:hidden  flex flex-col items-center bg-background absolute right-0 top-full w-1/2'>
        <a href="#home" className="text-foreground active:text-indigo-400 transition">Home</a>
        <a href="#projects" className="text-foreground active:text-indigo-400 transition">Projects</a>
        <a href="#skills" className="text-foreground active:text-indigo-400 transition">Skills</a>
        <a href="#contact" className="text-foreground active:text-indigo-400 transition">Contact</a>
    </div>
    }
    <div className='hidden md:flex flex-row items-center justify-center bg-background gap-8  px-8 py-2 max-w-fit rounded-3xl'>
        <a href="#home" className="text-foreground hover:text-indigo-400 transition">Home</a>
        <a href="#projects" className="text-foreground hover:text-indigo-400 transition">Projects</a>
        <a href="#skills" className="text-foreground hover:text-indigo-400 transition">Skills</a>
        <a href="#contact" className="text-foreground hover:text-indigo-400 transition">Contact</a>
    </div>
    </nav>
    )
    }

    export default Navbar;