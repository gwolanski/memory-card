import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PhotoCard({ id, description, onClick }) {
    const [photo, setPhoto] = useState(null);

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await axios.get(`https://api.unsplash.com/photos/${id}`, {
                    params: {
                        client_id: 'P3ZmYoVHNqoTjcqcvhvw7R6O0gOYTGFOq6c5yZibV5I'
                    }
                });
                const photoData = response.data;
                setPhoto(photoData);
            } catch (error) {
                console.error('Error fetching photos: ', error);
            }
        };
        fetchPhoto();
    }, [id]);

    return (
        <div className='cardContainer' onClick={() => onClick(description)}>
            {photo && <img key={id} src={photo.urls.small} className='image' />}
            {photo && <div className='imageText'>{description}</div>}
        </div>
    );
}

