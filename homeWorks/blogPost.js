let posts = [{
    id:1,
    title:'History of Ottoman Empire',
    article: 'Fatih Sultan Mehmet',
    category: 'History',
    author: 'İlber Ortaylı'
},
{
    id:2,
    title: 'Kings of the Rock',
    article: 'Led Zeppelin',
    category: 'Music',
    author: 'Robert Plant'
},
{
    id:3,
    title:'Blues effects on psychology',
    article: 'John Lee Hooker',
    category: 'Health',
    author: 'Sigmund Freud'
}
]

let newPost = {
    id: 4,
    title: 'Cure of Cancer',
    article: 'California Medical Hospital',
    category: 'Science',
    author: 'Bill Gates'
}

let wrongNewPost;

const addPost = (newPost) => {
    const promise1 = new Promise((resolve,reject) => {

        console.log('New post is adding...')
        if(newPost){
            posts.push(newPost);
            resolve('New post added successfully!');
        }
        else{
            reject('New post cannot be added!')
        }
    })
    return promise1
}

const showPosts = (posts) => {
    return new Promise((resolve , reject) => {
        console.log('Posts are printing...')
        if(posts){
            posts.map((post) => console.log(post));
            resolve('Posts printed successfully!')
        }
        else{
            reject('Posts cannot be printed!')
        }
    })
}

const listPosts = async () => {
    try 
    {
        // First Print List

        let show_posts1 = await showPosts(posts);
        console.log(show_posts1);

        // Adding new post (FOR ERROR)
        /* let add_post = await addPost(wrongNewPost);
        console.log(add_post); */
       
        // Adding new post

        let add_post = await addPost(newPost);
        console.log(add_post);

        //After Adding Print List
        let show_posts2 = await showPosts(posts);
        console.log(show_posts2);

    } 
    catch (error) 
    {
        console.error(error);
    }
    
};

listPosts();

