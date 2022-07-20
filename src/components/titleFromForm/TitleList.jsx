import './TitleList.css'

function TitleList({ taskList = [] }) {
	return (
		<div className='title-block'>
			{taskList.map(({ task, date }, index) => {
				return (
					<div key={index}>
						<p>{date}</p>
						<p>{task}</p>
					</div>
				)
			})}
		</div>
	)
}
export default TitleList
