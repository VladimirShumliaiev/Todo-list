import React, {FC} from 'react';

type ItemProps = {
    id: string
    title: string
    completed: boolean
}

const Item: FC<ItemProps> = (props) => {
    const {id, title, completed} = props
    return (
        <div>
            <input type={"checkbox"} checked={completed}/>
            {title}
            <button>x</button>
        </div>
    );
};

export default Item;