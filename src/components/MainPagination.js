import { Pagination } from 'react-bootstrap'

const MainPagination = ({navigatepageNums, pageNum, isFirstPage}) => {
	return (
		<Pagination>
			<Pagination.Prev
				disabled={isFirstPage}/>

			{
				navigatepageNums && navigatepageNums.map(page => (
					<Pagination.Item 
						active={pageNum === page ? true : false}
						key={page}>{page}</Pagination.Item>
				))
			}

			<Pagination.Next />
		</Pagination>
	)
}

export default MainPagination
