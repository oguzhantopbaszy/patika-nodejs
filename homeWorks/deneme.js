let posts = 
[
    {
        id : 1,
        title : 'History of Music',
        body : 'Lorem',
        category : 'Music',
        author : 'Yusuf Ozkan'
    },
    {
        id : 2,
        title : 'What is WEB3 ?',
        body : 'Lorem',
        category : 'Technology',
        author : 'Elon Musk'
    },
    {
        id : 3,
        title : 'How can we handle with stress in a daily life ?',
        body : 'Lorem',
        category : 'Psychology',
        author : 'Viktor Emil Frankl'
    }
]

let new_post = 
{
    id : posts.length + 1,
    title : 'What is the last situation in Ukraine ?',
    body : 'Lorem',
    category : 'Political',
    author : 'Anderson Cooper'
}

let wrong_new_post; // for get error

const addPost = (newPost) => 
{
    return new Promise((resolve, reject) => 
        {
            console.log('New post has been adding...');
            
            if(newPost)
            {
                posts.push(newPost);
                resolve('New post has been added successfully !');
            }
            else
                reject('New post cannot be added !');
        }) 
}

const showPosts = (posts) =>
{
    return new Promise((resolve , reject) =>
    {
        console.log('Posts has been printing...');

        if(posts)
        {
            posts.map((post) => console.log(post));
            resolve('Posts has been printed successfully !');
        }
        else
            reject('Posts cannot be printed !');
    })
}

const process = async () =>
{
    try 
    {
        // Print List

        let show_posts1 = await showPosts(posts);
        console.log(show_posts1);

        /* // Adding new post
        let add_post = await addPost(wrong_new_post);
        console.log(add_post);
        */

        // Adding new post

        let add_post = await addPost(new_post);
        console.log(add_post);

        // Print List
        let show_posts2 = await showPosts(posts);
        console.log(show_posts2);

    } 
    catch (error) 
    {
        console.error(error);
    }
}

process()