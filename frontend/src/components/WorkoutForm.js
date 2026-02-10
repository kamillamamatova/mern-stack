const WorkoutForm = () => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.prevauntDefault()

        const workout = {title, load, reps}

        const response = await fetch('/api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            console.log(json.error)
        }
        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            console.log('New workout added', json)
        }
    }
    
    return(
        <form className = "create" onSubmit = {handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Exercisize Title:</label>
            <input
                type = "text"
                onChangeCapture={(e) => setTitle(e.target.value)}
                value = {title}
            />

            <label>Load (in lb):</label>
            <input
                type = "number"
                onChangeCapture={(e) => setLoad(e.target.value)}
                value = {load}
            />

            <label>Reps:</label>
            <input
                type = "number"
                onChangeCapture={(e) => setReps(e.target.value)}
                value = {reps}
            />

            <button>Add Workout</button>
        </form>
    )
}