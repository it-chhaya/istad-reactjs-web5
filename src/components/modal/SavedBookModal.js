import { useEffect, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks, postBook } from '../../services/actions/bookAction'
import { fetchGenres } from '../../services/actions/genreAction'
import { setSavedBookModalStatus } from '../../services/actions/modalAction'
import { uploadFile } from '../../services/fileService'

const SavedBookModal = () => {
	const [bookRequest, setBookRequest] = useState({})
	const [cover, setCover] = useState({})
	const [genreIds, setGenreIds] = useState([])

	const onValueChanged = (e) => {
		const { name, value } = e.target

		setBookRequest((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	const onCoverChanged = (e) => {
		setCover(e.target.files[0])
	}

	const onGenreChanged = (e) => {
		if (e.target.checked) {
			setGenreIds(prevState => {
				return [
					...prevState,
					e.target.value
				]
			})
		} else {
			let index = genreIds.indexOf(e.target.value)
			genreIds.splice(index, 1)
		}
	}

	const onFormSubmitted = (e) => {
		e.preventDefault()

		bookRequest.genreIds = genreIds

		console.log(bookRequest)

		let formData = new FormData()
		formData.append('file', cover)

		uploadFile(formData).then((json) => {
			console.log(json)
			bookRequest.fileId = json.data.id

			dispatch(postBook(bookRequest)).then(() => {
				console.log('Book is saved')

				// Close modal
				handleClose()

				// Reload book data
				dispatch(fetchBooks(1, 10)).then(() => console.log('Reloaded'))
			})
		})
	}

	const { savedBookModalStatus } = useSelector((state) => state.MODAL_REDUCER)
	const { genres } = useSelector((state) => state.GENRE_REDUCER)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchGenres()).then(() => console.log('Genres has been fetched'))
	}, [])

	const handleClose = () => {
		dispatch(setSavedBookModalStatus(false))
	}

	// const handleShow = () => {
	//     dispatch(setSavedBookModalStatus(true))
	// }

	return (
		<Modal size="lg" show={savedBookModalStatus} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form onSubmit={onFormSubmitted}>
					<Row>
						<Col sm={12} md={8}>
							<Form.Group className="mb-3" controlId="formBasicTitle">
								<Form.Label>Title</Form.Label>
								<Form.Control
									onChange={onValueChanged}
									name="title"
									type="text"
									placeholder="Enter title"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicAuthor">
								<Form.Label>Author</Form.Label>
								<Form.Control
									onChange={onValueChanged}
									name="author"
									type="text"
									placeholder="Enter author"
								/>
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Description</Form.Label>
								<Form.Control
									onChange={onValueChanged}
									name="description"
									as="textarea"
									rows={3}
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPdf">
								<Form.Label>Pdf</Form.Label>
								<Form.Control
									onChange={onValueChanged}
									name="pdf"
									type="text"
									placeholder="Enter pdf link"
								/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPdf">
								<Form.Label>Status</Form.Label>
								<Form.Select onChange={onValueChanged} name="isPublished">
									<option value={true}>True</option>
									<option value={false}>False</option>
								</Form.Select>
							</Form.Group>

							<Form.Group controlId="formFile" className="mb-3">
								<Form.Label>Cover</Form.Label>
								<Form.Control onChange={onCoverChanged} type="file" />
							</Form.Group>

							<Button variant="primary" type="submit">
								Save
							</Button>
						</Col>
						<Col sm={12} md={4}>
							<p>Genres</p>
							{genres &&
								genres.map((genre) => (
									<Form.Check
										onChange={onGenreChanged}
										key={genre.id}
										type="checkbox"
										value={genre.id}
										label={genre.title}
									/>
								))}
						</Col>
					</Row>
				</Form>
			</Modal.Body>
		</Modal>
	)
}

export default SavedBookModal
