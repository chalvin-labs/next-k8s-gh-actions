import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
	const [data, setData] = useState([])

	const fetchData = async () => {
		const { data } = await axios.get('http://20.121.183.142/')
		setData(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div className='flex justify-center'>
			<div className='w-1/2 h-screen flex justify-center items-center'>
				<h1 className='text-4xl font-bold'>
					Hey, my name is {data.name}, I'm {data.age} years old, I live in{' '}
					{data.address}.
				</h1>
			</div>
		</div>
	)
}
