"use client";
import { useState, useEffect } from "react";

export default function Home() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [product, setProduct] = useState([]);

    fetch("http://localhost:3000/api/test")
        .then((response) => response.json())
        .then((data) => console.log(1, data))
        .catch((error) => console.error(error));

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const submitData = { name, age };

        try {
            const res = await fetch("http://localhost:3000/api/test", {
                method: "POST",
                body: JSON.stringify(submitData),
                headers: {
                    "content-type": "application/json",
                },
            });
            console.log(2, res);
            if (res.ok) {
                console.log("Yeai!");
            } else {
                console.log("Oops! Something is wrong.");
            }
        } catch (error) {
            console.log(error);
        }
        setName("");
        setAge("");
    };

    // fetchAdByIdForUser({ adId })


    useEffect(() => {
      async function fetchData() {
        let data = await fetch("https://davse.ru/api/discounts/fetch-ads-by-id", {
          method: "POST",
          body: JSON.stringify({adId: '65aa49f4a7838738ed83e1de'}),
          headers: {
              "content-type": "application/json",
          },
      });
        data = await data.json();
        // setProduct(data);
        console.log(222, data);
      }
      fetchData();
    }, []);

    return (
        <div className=" flex flex-col justify-center items-center w-full p-8 ">
 
            <form
                onSubmit={handleSubmit}
                className=" flex w-full flex-col justify-center items-center "
            >
                <div className=" flex w-1/2 justify-center items-center gap-4 ">
                    <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Enter the name"
                        onChange={(e) => setName(e.target.value)}
                        className=" border p-2 px-4 rounded outline-none "
                    />
                    <input
                        type="number"
                        name="age"
                        value={age}
                        placeholder="Enter the age"
                        onChange={(e) => setAge(e.target.value)}
                        className=" border p-2 px-4 rounded outline-none "
                    />
                    <button
                        type="submit"
                        className=" border-blue-500 bg-blue-500 text-white p-2 px-4 rounded-md "
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
