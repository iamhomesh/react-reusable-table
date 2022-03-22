import { useNavigate } from "react-router-dom";
import { Table } from "./Table";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TablePage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [cols, setCols] = useState([]);


    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                let resposeData = response.data.data;
                if(resposeData.length > 0) {
                    setCols(Object.keys(resposeData[0]));
                }
                setData(resposeData);
            }).catch(error => {
                setData([])
                setCols([])
            })
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        return navigate('/');
    }

    //For testing pass this data to table
    const cols1 = [
        'id', 'email', 'first_name', 'last_name', 'avatar', 'test'
    ];

    //For testing pass this data to table
    const data1 = [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg",
            "test": "https://reqres.in/img/faces/12-image.jpg",
        }
    ];
    return (
        <>
            <div className='bg-secondary py-1 px-2 text-end'>
                <button className="text-end btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>

            <div>
                <Table data={data} cols={cols} />
            </div>
        </>
    )
}