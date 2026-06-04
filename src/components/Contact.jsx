import React from 'react'
import {useState} from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

    const OnSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        // my access key
        formData.append("access_key", "534c5b22-b67a-4cbe-b485-adf8aba215d2");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message Sent Successfully");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            setResult ("An error occurred, Please try again");
        }
    };

  return (
    <div className='min-h-screen flex items-center justify-center pt-20 px-4 relative'>
        <div className='w-full max-w-md bg-black/40 p-8 rounded-2xl border border-white/20 backdrop-blur-md shadow-2xl'>
            <h2 className='text-3xl font-bold text-white mb-6 text-center hover:text-gray-200 transition-colors duration-500 ease-in-out cursor-default'>Get In Touch</h2>

            <form onSubmit={OnSubmit} className='flex flex-col gap-4'>
                <input 
                    type="text"
                    name='name' 
                    required
                    placeholder='Your Name'
                    className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-[#8b6c2e] hover:border-[#4e483c] transition-colors duration-500 ease-in-out '
                    />
                <input 
                    type="email"
                    name='email'
                    required
                    placeholder='Your Email'
                    className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-[#8b6c2e] hover:border-[#4e483c] transition-colors duration-500 ease-in-out '
                    />
                <textarea 
                    name="message" 
                    required
                    rows="5"
                    placeholder='Your Message'
                    className='w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-[#8b6c2e] hover:border-[#4e483c] transition-colors duration-500 ease-in-out resize-none'
                    ></textarea>

                <button
                    type='submit'
                    className='w-full bg-gradient-to-r from-[#8b6c2e] to-[#c79c43] text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity duration-500 ease-in-out mt-2 '
                    >
                    Send Message
                </button>
            </form>

            <span className='block text-center mt-4 text-sm text-gray-300'>{result}</span>
        </div>

        <img className='fixed -z-20 bg-cover min-w-full min-h-screen top-0 left-0' src="./src/assets/background.png" alt='bg-img' />
    </div>

  );
};

export default Contact