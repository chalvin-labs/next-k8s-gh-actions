import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
	const [data, setData] = useState([])

	const fetchData = async () => {
		const { data } = await axios.get(
			'http://pipeline-example-backend-prd.eastus.azurecontainer.io'
		)
		setData(data)
	}

	useEffect(() => {
		fetchData()
	}, [])

	console.log(data)

	return (
		<div className='flex justify-center'>
			<div className='w-1/2 h-screen flex justify-center items-center'>
				<h1 className='text-4xl font-bold'>
					Hey, my name is {data.name}, I'm {data.age} years old, I lived in{' '}
					{data.address} and I'm a {data.role} Engineer.
				</h1>
			</div>
		</div>
	)
}
