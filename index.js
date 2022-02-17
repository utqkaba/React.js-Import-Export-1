import axios from "axios";

async function getData(number) {
    const {data: users} = await axios("https://jsonplaceholder.typicode.com/users/" + number);
    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + number);
    
    return {user : users, posts : post};
};

export default getData;