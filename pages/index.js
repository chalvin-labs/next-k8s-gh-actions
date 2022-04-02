import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
	const [data, setData] = useState([])

	const fetchData = async () => {
		const res = await axios.get('http://localhost')
		setData(res)
	}

	useEffect(() => {
		fetchData()
	}, [])

	console.log(data)

	return (
		<div className='flex justify-center'>
			<div className='w-96 flex justify-center'>
				<h1 className='text-4xl font-bold'>{data.name}</h1>
			</div>
		</div>
	)
}
