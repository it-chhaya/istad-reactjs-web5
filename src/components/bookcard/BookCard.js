import './BookCard.css'

const BookCard = ({book}) => {
	return (
		<div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
			<div className="col p-4 d-flex flex-column position-static">
				<strong className="d-inline-block mb-2 text-primary">
					{book.author}
				</strong>
				<h3 className="mb-0 ellipsis-text">
					{book.title}
				</h3>
				<div className="mb-1 text-muted">
					{book.datePublished}
				</div>
				<p className="card-text mb-auto ellipsis-text">
					{book.description}
				</p>
				<a href="#" className="stretched-link">
					Continue reading
				</a>
			</div>
			<div className="col-auto d-none d-lg-block">
				<img className="bd-placeholder-img"
					width="200"
					height="250"
					src={book.cover.uri}
					alt={book.title}/>
			</div>
		</div>
	)
}

export default BookCard
