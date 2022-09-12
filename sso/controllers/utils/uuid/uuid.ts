import { default as reactUUID } from 'react-uuid';

const uuid = () => {
    return {
        key: reactUUID()
    }
}

export default uuid