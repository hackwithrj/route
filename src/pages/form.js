import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(18)
    const [gender, setGender] = useState('male')
    return (
        <div>
            <h>Add a new feature</h>
                <form>
                    <label>Name</label>
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <label>Age</label>
                    <input
                        type="text"
                        required
                        value={age}
                        onChange={(e)=>setAge(e.target.value)}
                    />
                    <label>Gender</label>
                    <select
                        value={gender}
                        onChange={(e)=>setGender(e.target.value)}
                    />
                    <option value="male">male</option>
                    <option value="female">female</option>
                    <option value="others">others</option>
                </form>
                <p>{name}</p>
                <p>{age}</p>
                <p>{gender}</p>
        </div>
    )
}

export default Form
