import { useEffect, useState } from "react";
import './Avatar.css'

const Avatar = () => {
    const AvatarList = [
        { id: 1, name: "Saira Hakim", role: "Local shop owner", text: " Sed ut perspiciatis unde omnis iste natus error  natus error sit voluptatem accusantium ", img: "/images/avatar1.png" },

        { id: 2, name: "David Niph", role: "Local shop owner", text: " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi   ", img: "/images/avatar2.png" },

        { id: 3, name: "Jacob Sikim", role: "Local shop owner", text: " Sed ut perspiciatis unde omnis iste natus error veritatis et  quasi architecto beatae  ", img: "/images/avatar3.png" }
    ];
    const [show, setShow] = useState(0);
    const avatarLenght = AvatarList.length;



    useEffect(() => {
        const interval = setInterval(() => {
            setShow(prev => {
                return prev + 1 >= avatarLenght ? 0 : prev + 1;
            })
        }, 7000);
        return (() => clearInterval(interval))
    }, [AvatarList])
    const current = AvatarList[show];


    return (
        <div className="single-testimonial-slider" >
            <div className="client-avater">
                <img src={current.img} alt={current.role} />
            </div>
            <div className="client-meta">
                <h3>{current.name}<br /><span>{current.role}</span></h3>
                <p className="testimonial-body">
                    {current.text}
                </p>
            </div>
        </div>
    );
}

export default Avatar;