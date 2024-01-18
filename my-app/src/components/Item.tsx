import React, {FC} from 'react';

type Todo = {
    id: string
    title: string
    completed: string
}

const Item: FC<Todo> = (title) => {
    return (
        <div>
            {title}
        </div>
    );
};

export default Item;