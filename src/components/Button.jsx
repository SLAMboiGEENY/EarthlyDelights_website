import React from 'react'

const Button = () => {
    return (
        <div>
            <button className="bg-indigo-600 text-white font-[curv] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500">
                {props.children}
            </button>
        </div>
    );
}   

export default Button;