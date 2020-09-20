import React, {useState} from 'react';

const useToShow = (param) => {
    const [toShow, setToShow] = useState(param);
    return {toShow, setToShow}
}

export default useToShow;