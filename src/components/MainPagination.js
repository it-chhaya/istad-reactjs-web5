import { Pagination } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fetchBooks } from '../services/actions/bookAction'

const MainPagination = ({
	navigatepageNums,
	pageNum,
	isFirstPage,
	isLastPage,
	prePage,
	nextPage,
}) => {
	const dispatch = useDispatch()

	const requestPageHandler = (e) => {
		console.log(e.target.textContent)
		let requestPage = e.target.textContent

		// Dispatch action to actionHandler
		dispatch(fetchBooks(requestPage, 3)).then(() => {
			console.log('Fetch books successfully')
		})
	}

	const requestPrevPageHandler = (e) => {
		// Dispatch action to actionHandler
		dispatch(fetchBooks(prePage, 3)).then(() => {
			console.log('Fetch books successfully')
		})
	}

	const requestNextPageHandler = (e) => {
		// Dispatch action to actionHandler
		dispatch(fetchBooks(nextPage, 3)).then(() => {
			console.log('Fetch books successfully')
		})
	}

	return (
		<Pagination>
			<Pagination.Prev
				onClick={requestPrevPageHandler}
				disabled={isFirstPage}
			/>

			{navigatepageNums &&
				navigatepageNums.map((page) => (
					<Pagination.Item
						onClick={requestPageHandler}
						active={pageNum === page ? true : false}
						key={page}>
						{page}
					</Pagination.Item>
				))}

			<Pagination.Next
				onClick={requestNextPageHandler}
				disabled={isLastPage} />
		</Pagination>
	)
}

export default MainPagination
