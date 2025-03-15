import React from 'react';
import { useState, useEffect} from 'react';
import { useParams, useNavigate } from "react-router-dom";

export default function LoginPage(){
    const { hangoutId } = useParams();
    const navigate = useNavigate();
    const [id, setId] = useState("");
    {/*JavaScript Code*/}
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "applications/json",
            },
            body: JSON.stringify({hangoutId: `${hangoutId}` })
        }).then((res)=> {
            return res.json();
        }).then((data) => {
            setUsers(data);
        });
    },[])

    const handleLogin = (e) => {
        e.preventDefault();

        document.cookie = `hangout_${hangoutId}_user=${id}; path=/; max-age=86400`;

        navigate(`/events/${hangoutId}`);
    };

    return (
        <div className="w-screen h-screen flex justify-center items-end sm:items-center bg-[url('/CreationPageBackground.png')] bg-cover">
            <div className="p-15 text-[#1F100A] flex flex-col justify-center w-full m-7 sm:w-[500px] h-3/5 lg:h-3/4 bg-[#FFCF32] rounded-4xl shadow-md font-[Dongle] lg:text-4xl">
                <form onSubmit={handleLogin}>
                    <h1 className="text-white text-center lg:text-5xl font-[Slackey]">PalsPlan</h1>
                    <div className='mt-5 flex flex-col'>
                        <h2 className='font-[Dongle] text-white font-bold'>Login</h2>
                        <select name="name" className='mb-3 bg-white rounded-2xl text-2xl pl-2 text-black'
                        onChange={(e) => setId(e.target.value)}>
                            {users.map(user =>
                                <option value={user.id}>{user.name}</option>
                            )}
                        </select>
                        <button type="submit" className="btn bg-[#5E93E8] border-none text-xl">Select your Name!</button>
                    </div>
                </form>
                
                {/*OR Line*/}
                <hr className='mt-10 mb-10'></hr>
                <div className='flex flex-col'>
                    <h2 className='font-[Dongle] text-white font-bold'>New Pal</h2>
                    <input type="text" placeholder="Enter name here..." className="w-full input mb-3 text-2xl bg-white text-black rounded-2xl" />
                    <button className="btn bg-[#5E93E8] border-none text-xl">Pal Registration</button>
                </div>
            </div>
        </div>
    )
}