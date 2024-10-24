import axios from 'axios';

const fetch = async(endpoint) => {
    let arr = []
    // endpoint бу нарса по которой будет переходить.
    await axios.get(import.meta.env.VITE_API + endpoint)
    .then(response => {
        // response.data это массив наш который передаем и на пустой массив мы присваевыем его
        arr = response.data
    })
    return arr;
    // return console.log(arr);
    
}
export default fetch;
