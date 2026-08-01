import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase';

 const UseFirestoreCollection = (collectionName) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const coll = collection(db, collectionName);
        Promise.all([
            getDocs(coll), 
            new Promise(resolve=> setTimeout(resolve, 1500))
        ])
            .then(([res]) => {
                const list = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setData(list);
            })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [collectionName]);

    return { data, loading, error };
};
export default UseFirestoreCollection;