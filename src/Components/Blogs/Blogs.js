import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div>
                <h2>1. What is context API?</h2>
                <p>
                    In react component if we want to pass some data to another component we have to pass it through props. We pass data, keys and many more via props to another component. Basically the other component receives the data via props. But if there is a tree of multiplae components one inside another we had to pass the data one after another...individually. It basically is a lengthy process to pass the data to other child components. It is what called props drilling. To save the time and for convention we can use context api. So what it does is, it creates a context. And a provider, through provider we can send whichever data we want to pass to the childs as values inside of that provider. So that we don't have to receive data individually with props. And in the component where we want to use the data we simply use the context data that has been passed through.
                </p>
            </div>
            <div>
                <h2>2. What is semantic elements?</h2>
                <p>To create more friendly coding experience we use semantic tags. It is more readable than normal HTML tags. It is easy to read. And have more accesibility. For example with semantic tag, in <code>header</code> section we can make it more readable as to create a <code>header</code> and inside of it creating a <code>nav</code>. Even though we can make the header section of a website without <code>header</code> tag. Only with <code>div</code> tag. But it is less readable. And have no semanticity. For a HTML body to give it more accesibility we can create <code>main</code> tag then inside of it <code>section</code>, <code>article</code> etc. Basically semantic tags provides the information to the browser itself and the user both about what the code and the contents about. It provides extra information about the codes. But not just the codes</p>
            </div>
        </div>
    );
};

export default Blogs;